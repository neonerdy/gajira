using System;

namespace Gajira.Models
{
    public class WorkCalendar
    {
        public Guid ID { get; set; }
        public int Month { get; set; }
        public int Year { get; set; }
        public int WorkDay { get; set; }
        public int OffDay { get; set; }
    }


}