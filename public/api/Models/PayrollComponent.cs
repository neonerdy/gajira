using System;
using System.Collections.Generic;

namespace Gajira.Models
{
    public class PayrollComponent
    {
        public Guid ID { get; set; }
        public Guid PayrollId { get; set; }
        public Guid SalaryComponentId { get; set; }
        public decimal Amount { get; set; }

    }



}