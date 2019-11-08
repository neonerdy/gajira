using System;

namespace Gajira.Models
{
    public class Deduction
    {
        public Guid ID { get; set; }
        public string DeductionName { get; set; }
        public decimal PercentageByCompany { get; set; }
        public decimal PercentageByEmployee { get; set; }

    }


}