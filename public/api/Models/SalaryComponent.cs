using System;

namespace Gajira.Models
{
    public class SalaryComponent
    {
        public Guid ID { get; set; }
        public string ComponentName { get; set; }
        public string Occurance { get; set; }
        public decimal DefaultValue { get; set; }
    }


}