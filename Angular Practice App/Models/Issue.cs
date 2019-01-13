using System;

namespace Become_Angular_Expert.Models
{
    public class Issue
    {
        public int Id { get; set; }
        public int ProjectId { get; set; }
        public Project Project { get; set; }
        public int ReviewerId { get; set; }
        public Name Reviewer { get; set; }
        public int AssigneeId { get; set; }
        public Name Assignee { get; set; }
        public string Description { get; set; }
        public DateTime? DueDate { get; set; }
    }
}
