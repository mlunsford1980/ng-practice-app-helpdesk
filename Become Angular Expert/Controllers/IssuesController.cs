using System;
using System.Linq;
using Become_Angular_Expert.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Become_Angular_Expert.Controllers
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

        [HttpGet("{id:int}")]
        public IActionResult Get(int id)
        {
            var rng = new Random();
            var projectId = 1;
            var projects = FakeDataHelper.ProjectNames.Select(p => new Project { Id = projectId++, Name = p });
            var issue = new Issue
            {
                Id = id,
                Project = projects.First(),
                Reviewer = FakeDataHelper.GetRandomName(id),
                Assignee = FakeDataHelper.GetRandomName(id),
                DueDate = id % 3 == 0 ? (DateTime?)DateTime.Now.AddDays(rng.Next(30)) : null,
                Description = $"{FakeDataHelper.DummyDescription.Substring(0, rng.Next(40, 80))}...",
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