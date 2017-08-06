using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SmartPos.Models
{
    public class StockOut
    {
        public virtual int Sn { set; get; }
        public virtual int Pid { set; get; }
        public virtual int StockedOut { set; get; }
        public virtual DateTime Date { set; get; }
    }
}