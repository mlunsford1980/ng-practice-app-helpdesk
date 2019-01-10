using System;
using System.Linq;
using Become_Angular_Expert.Models;
using Microsoft.AspNetCore.Mvc;

namespace Become_Angular_Expert.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IssuesController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            var rng = new Random();
            var issues = Enumerable.Range(0, 20).Select(index => new Issue
            {
                Reviewer = FakeDataHelper.GetRandomName(index),
                Assignee = FakeDataHelper.GetRandomName(index),
                DueDate = index % 3 == 0 ? (DateTime?)DateTime.Now.AddDays(rng.Next(30)) : null,
                Description = $"{FakeDataHelper.DummyDescription.Substring(0, rng.Next(40, 80))}...",
            });

            Request.HttpContext.Response.Headers.Add("x-total-pages", "5");

            return Ok(issues);
        }

        [HttpPost]
        public IActionResult Post(Issue issue)
        {
            return CreatedAtAction(nameof(Get), new { Id = 3 }, issue);
        }
    }
}