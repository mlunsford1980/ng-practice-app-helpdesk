namespace Become_Angular_Expert.Models
{
    public class Name
    {
        public int Id { get; set; }
        public Name() { }
        public Name(string surname, string givenName, int id = 0)
        {
            Id = id;
            GivenName = givenName;
            Surname = surname;
        }

        public string GivenName { get; set; }
        public string Surname { get; set; }

        public string Fullname => $"{Surname}, {GivenName}";
    }


}
