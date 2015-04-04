using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PostTester.Models.PostTest
{
    public class PostTestModel
    {
        [JsonProperty(PropertyName = "message")]
        public string Message { get; set; }
    }
}