using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SmartPos.Models
{
    public class StockIn
    {
        public virtual int Sn { set; get; }
        public virtual int Pid { set; get; }
        public virtual int StockedIn { set; get; }
        public virtual DateTime Date { set; get; }
    }
}