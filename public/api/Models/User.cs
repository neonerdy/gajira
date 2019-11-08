using System;

namespace Gajira.Models
{
    public class User
    {
        public Guid ID { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string FullName { get; set; }
        public DateTime LastLogin { get; set; }
        public bool IsAdministrator { get; set; }
  
    }


}