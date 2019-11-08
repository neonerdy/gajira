using System;

namespace Gajira.Models
{
    public class Attendance
    {
        public Guid ID { get; set; }
        public Guid EmployeeId { get; set; }
        public Employee Employee { get; set; }
        public int Month { get; set; }
        public int Year { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public int WorkDay { get; set; }
        public int LeaveDay { get; set; }
        public int OffDay { get; set; }
        public int Total { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime ModifiedDate { get; set; }
    }


}