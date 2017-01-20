using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AccountDashboard.Model
{
    public class User
    {
        public string Username { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string FullName { get; set; }

        public string EmpNumber { get; set; }

        public string Email { get; set; }

        public string Department { get; set; }

        public string Phone { get; set; }

        public int RoleID { get; set; }

        public string AssociateId { get; set; }

        public string RoleName { get; set; }

        public string CostCenter { get; set; }

        public string BusinessUnit { get; set; }

        public string JobCode { get; set; }

        public string JobTitle { get; set; }

        public int UserBUId { get; set; }
    }
}
