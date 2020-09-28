using System;

namespace Gajira.Models
{
    public class WorkSchedule
    {
        public Guid ID { get; set; }
        public string ScheduleName { get; set; }
        public string ScheduleIn { get; set; }
        public string ScheduleOut { get; set; }
        public string Note { get; set; }

     }


}