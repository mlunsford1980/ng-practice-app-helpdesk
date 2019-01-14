using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Become_Angular_Expert.Models;
using AngularPracticeApp;

namespace Become_Angular_Expert.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectsController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            var id = 1;
            var projects = FakeDataHelper.ProjectNames.Select(p => new Project { Id = id++, Name = p });

            return Ok(projects);
        }

        [HttpGet("{id:int}/reviewers")]
        public IActionResult GetReviewers(int id)
        {
            var reviewers = Enumerable.Range(0, 15).Select(index => FakeDataHelper.GetRandomName(index));

            return Ok(reviewers);
        }

        [HttpGet("{id:int}/assignees")]
        public IActionResult GetAssignees(int id)
        {
            var reviewers = Enumerable.Range(0, 15).Select(index => FakeDataHelper.GetRandomName(index));

            return Ok(reviewers);
        }
    }
}