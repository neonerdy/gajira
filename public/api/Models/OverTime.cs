using System;

namespace Gajira.Models
{
    public class OverTime
    {
        public Guid ID { get; set; }
        public Guid EmployeeId { get; set; }
        public Employee Employee { get; set; }
        public int Month { get; set; }
        public int Year { get; set; }
        public int DayType { get; set; }
        public DateTime OverTimeDate { get; set; }
        public string StartHour { get; set; }
        public string EndHour { get; set; }
        public int TotalInMinute { get; set; }
        public string TotalInHour { get; set; }
        public decimal Amount { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime ModifiedDate { get; set; }
        

    }


}