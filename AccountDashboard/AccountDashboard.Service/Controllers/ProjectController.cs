using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using AccountDashboard.Model;
using AccountDashboard.Data.Repositories;

namespace AccountDashboard.Service.Controllers
{
    public class ProjectController : ApiController
    {
        private ProjectRepositary repo = new ProjectRepositary();

        // GET: api/Project
        public IEnumerable<Project> GetProjects()
        {
            return repo.GetAll();
        }

        // GET: api/Project/5
        [ResponseType(typeof(Project))]
        public IHttpActionResult GetProject(int id)
        {
            Project project = repo.GetById(id);
            if (project == null)
            {
                return NotFound();
            }

            return Ok(project);
        }

    }
}