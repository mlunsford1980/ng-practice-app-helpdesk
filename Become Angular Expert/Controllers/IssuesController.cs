using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Become_Angular_Expert.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IssuesController : ControllerBase
    {
        private static string DummyDescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
        private static string[] GivenNames = new[] {
            "Bob", "Suzie", "Carol", "Ted", "Randy", "Alice",
        };

        private static string[] Surnames = new[]
        {
            "Smith", "Jones", "Parham", "Lunsford", "Martin",
        };

        [HttpGet]
        public IActionResult Get()
        {
            var rng = new Random();
            var issues = Enumerable.Range(0, 20).Select(index => new Issue
            {
                Reviewer = new Name(Surnames[rng.Next(Surnames.Length)], GivenNames[rng.Next(GivenNames.Length)]),
                Assignee = new Name(Surnames[rng.Next(Surnames.Length)], GivenNames[rng.Next(GivenNames.Length)]),
                DueDate = index % 3 == 0 ? (DateTime?)DateTime.Now.AddDays(rng.Next(30)) : null,
                Description = $"{DummyDescription.Substring(0, rng.Next(40, 80))}...",
            });

            Request.HttpContext.Response.Headers.Add("x-total-pages", "5");

            return Ok(issues);
        }
    }

    public class Issue
    {
        public Name Reviewer { get; set; }
        public Name Assignee { get; set; }
        public string Description { get; set; }
        public DateTime? DueDate { get; set; }
    }

    public class Name
    {
        public Name() {}
        public Name(string surname, string givenName)
        {
            GivenName = givenName;
            Surname = surname;
        }

        public string GivenName { get; set; }
        public string Surname { get; set; }

        public string Fullname => $"{Surname}, {GivenName}";
    }
}