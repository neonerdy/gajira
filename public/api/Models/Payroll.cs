using System;

namespace Gajira.Models
{
    public class Payroll
    {
        public Guid ID { get; set; }
        public Guid EmployeeID { get; set; }
        public int Month { get; set; }
        public int Year { get; set; }
        public DateTime ReportingDate { get; set; }
        public decimal SalaryAmount { get; set; }
        public decimal OverTimeInHour { get; set; }
        public decimal OverTimeAmount { get; set; }
        public decimal DeductionAmount { get; set; }
        public decimal TakeHomePayAmount { get; set; }

    }


}