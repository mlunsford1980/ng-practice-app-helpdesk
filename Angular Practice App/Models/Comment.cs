using System;

namespace AngularPracticeApp.Models
{
    public class Comment
    {
        public int Id { get; set; }
        public string Content { get; set; }
        public Name WrittenBy { get; set; }
        public DateTimeOffset WrittenDate { get; set; }
    }
}
