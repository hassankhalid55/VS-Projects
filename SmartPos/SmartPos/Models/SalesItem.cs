using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SmartPos.Models
{
    public class SalesItem
    {
        public virtual int Sn { get; set; }
        public virtual int Sid { set; get; }
        public virtual int Pid { set; get; }
        public virtual int Qty { set; get; }
        public virtual long Oid { set; get; }
        public virtual float Total { set; get; }
    }
}