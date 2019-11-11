using System;

namespace Gajira.Models
{
    public class PayrollDeduction
    {
        public Guid ID { get; set; }
        public Guid PayrollId { get; set; }
        public Guid DeductionId { get; set; }
        public decimal Amount { get; set; }        
    }

}
