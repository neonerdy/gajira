using System;
using System.Collections.Generic;

namespace Gajira.Models
{
    public class Reimbursement
    {
        public Guid ID { get; set; }
        public string ReimbursementName { get; set; }
        public string Limit { get; set; }
        public DateTime EffectiveDate { get; set; }

    }


}