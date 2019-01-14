using AngularPracticeApp.Models;
using Become_Angular_Expert.Models;
using System;
using System.Linq;

namespace AngularPracticeApp
{
    public static class FakeDataHelper
    {
        private static string[] GivenNames = new[] {
            "Bob", "Suzie", "Carol", "Ted", "Randy", "Alice",
        };
        private static string[] Surnames = new[]
        {
            "Smith", "Jones", "Walker", "Parker", "Williams",
        };
        public static string[] ProjectNames = new[]
        {
            "Wayne Tech 9000", "Stark Enterprises Thanos Killer", "Star Labs Freeze Gun", "Flux Capacitor"
        };
        public static string[] Comments = new[]
        {
            "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc erat sapien, aliquet non scelerisque et.",
            "Cras at nibh nulla. Phasellus nec rhoncus orci. Nulla quis enim sit amet sem feugiat interdum id a leo. In.",
            "Duis eget magna metus. Nunc pulvinar mauris eget facilisis accumsan. Pellentesque maximus nibh eget placerat consectetur. Donec non scelerisque mauris.",
            "Nam lobortis vulputate elit in ornare. Praesent aliquam elit tellus, et viverra nibh egestas vel. Vestibulum venenatis purus in turpis.",
            "Nullam eleifend lorem quis odio laoreet, nec faucibus dui tempus. Quisque id velit viverra, congue arcu vitae, ultrices odio. Aenean.",
            "Maecenas sodales tristique semper. Praesent eget vestibulum nisl. Pellentesque vestibulum est sed faucibus tristique. Nunc in sapien malesuada, venenatis justo.",
            "Proin gravida lacus ut ipsum consectetur tempus ut a justo. Duis semper dui ut est pellentesque, ac posuere odio dignissim.",
            "Phasellus blandit risus augue, a placerat tellus iaculis rhoncus. Integer non nulla lectus. Sed vitae bibendum est, congue egestas risus.",
            "Quisque sagittis leo purus, quis bibendum libero malesuada vitae. Pellentesque sodales, mauris ut elementum condimentum, dui lorem varius sem, ut.",
            "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In interdum cursus ligula in aliquet. Nulla.",
        };

        public static string DummyDescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

        public static Name GetRandomName(int id = 0)
        {
            var rng = new Random();

            return new Name(Surnames[rng.Next(Surnames.Length)], GivenNames[rng.Next(GivenNames.Length)], id);
        }

        public static Project[] GetProjects()
        {
            var projectId = 1;
            var projects = ProjectNames.Select(p => new Project { Id = projectId++, Name = p });

            return projects.ToArray();
        }

        public static Comment[] GetComments(int numComments)
        {
            var rng = new Random();
            var commentId = 1;
            var now = DateTime.Now;
            var comments = ProjectNames.Select(p => new Comment
            {
                Id = commentId++,
                Content = Comments[rng.Next(0, Comments.Length - 1)],
                WrittenBy = GetRandomName(),
                WrittenDate = now.AddDays(-rng.Next(0, 30)),
            });

            return comments.Take(numComments).ToArray();
        }
    }
}
