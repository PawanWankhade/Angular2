using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EMSWebAPI.Controllers
{
    public class EmployeeController : ApiController
    {
        // GET: api/Employee
        public IEnumerable<tblEmployee> Get()
        {
            //return new string[] { "value1", "value2" };
            return new EMSEntities1().tblEmployees.ToList();
        }

        // GET: api/Employee/5
        public tblEmployee Get(int id)
        {
            return new EMSEntities1().tblEmployees.FirstOrDefault(e => e.id == id);
        }

        // POST: api/Employee
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Employee/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Employee/5
        public void Delete(int id)
        {
        }
    }
}
