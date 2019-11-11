using System;

namespace Gajira.Models
{
    public class PayrollSalary
    {
        public Guid ID { get; set; }
        public Guid PayrollId { get; set; }
        public Guid SalaryComponentId { get; set; }
        public decimal Amount { get; set; }        
    }



}
