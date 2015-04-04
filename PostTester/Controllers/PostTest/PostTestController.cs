using PostTester.Models.PostTest;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace PostTester.Controllers.PostTest
{
    public class PostTestController : ApiController
    {
       

        // POST api/posttest
        public IHttpActionResult Post(PostTestModel model)
        {
            return (IHttpActionResult)Ok(model.Message);
        }

    }
}
