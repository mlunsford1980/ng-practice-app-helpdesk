using Become_Angular_Expert.Models;
using System;
using System.Linq;

namespace Become_Angular_Expert
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
    }
}
