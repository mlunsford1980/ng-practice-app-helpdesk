using System;
using System.Linq;
using AngularPracticeApp.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AngularPracticeApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IssuesController : ControllerBase
    {
        private readonly IHttpContextAccessor contextAccessor;

        public IssuesController(IHttpContextAccessor contextAccessor)
        {
            this.contextAccessor = contextAccessor;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var rng = new Random();
            var projects = FakeDataHelper.GetProjects();
            var issues = Enumerable.Range(0, 20).Select(index => new Issue
            {
                Id = index,
                Project = projects[rng.Next(0, projects.Length - 1)],
                Reviewer = FakeDataHelper.GetRandomName(index),
                Assignee = FakeDataHelper.GetRandomName(index),
                DueDate = index % 3 == 0 ? (DateTime?)DateTime.Now.AddDays(rng.Next(30)) : null,
                Description = $"{FakeDataHelper.DummyDescription.Substring(0, rng.Next(40, 80))}...",
                Comments = FakeDataHelper.GetComments(rng.Next(0, 8)),
            });

            Request.HttpContext.Response.Headers.Add("x-total-pages", "5");

            return Ok(issues);
        }

        [HttpGet("{id:int}")]
        public IActionResult Get(int id)
        {
            var rng = new Random();
            var projects = FakeDataHelper.GetProjects();
            var issue = new Issue
            {
                Id = id,
                Project = projects[rng.Next(0, projects.Length - 1)],
                Reviewer = FakeDataHelper.GetRandomName(id),
                Assignee = FakeDataHelper.GetRandomName(id),
                DueDate = id % 3 == 0 ? (DateTime?)DateTime.Now.AddDays(rng.Next(30)) : null,
                Description = $"{FakeDataHelper.DummyDescription.Substring(0, rng.Next(40, 80))}...",
                Comments = FakeDataHelper.GetComments(rng.Next(0, 8)),
            };

            return Ok(issue);
        }

        [HttpPost]
        public IActionResult Post(Issue issue)
        {
            var fakeCreatedIssueId = 3;
            contextAccessor.HttpContext.Response.Headers.Add("x-created-issue-id", fakeCreatedIssueId.ToString());

            return CreatedAtAction(nameof(Get), new { Id = fakeCreatedIssueId }, issue);
        }
    }
}