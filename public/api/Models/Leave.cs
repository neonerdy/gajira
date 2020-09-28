using System;

namespace Gajira.Models
{
    public class Leave
    {
        public Guid ID { get; set; }
        public Guid EmployeeId { get; set; }
        public Guid LeaveTypeId { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string Note { get; set; }
        public string Status { get; set; }
        public DateTime CreatedDate { get; set; }
        public bool IsTaken { get; set; }

    }


}