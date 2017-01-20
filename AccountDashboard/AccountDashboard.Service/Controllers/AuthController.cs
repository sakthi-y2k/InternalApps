using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Hosting;
using System.DirectoryServices;
using System.DirectoryServices.AccountManagement;
using AccountDashboard.Model;

namespace AccountDashboard.Service.Controllers
{
    public class AuthController : ApiController
    {
        public IHttpActionResult GetUser()
        {
            User user = new User();
            string domainUser = System.Security.Principal.WindowsIdentity.GetCurrent().Name;
            string[] paramsLogin = domainUser.Split('\\');

            using (HostingEnvironment.Impersonate())
            {
                using (DirectorySearcher dsSearch = new DirectorySearcher("LDAP://10.251.96.69/CN=USERS,DC=cts,DC=com"))
                {
                    dsSearch.Filter = "(sAMAccountName=" + paramsLogin[1] + ")";
                    SearchResult sResult = dsSearch.FindOne();
                    using (DirectoryEntry dsResult = sResult.GetDirectoryEntry())
                    {
                        if (dsResult != null)
                        {
                            user.AssociateId = paramsLogin[1];
                            user.FullName = dsResult.Properties["cn"][0].ToString();
                            user.Email = dsResult.Properties["mail"][0].ToString();
                        }
                    }
                }

            }

            return Ok(user);

        }
    }
}
