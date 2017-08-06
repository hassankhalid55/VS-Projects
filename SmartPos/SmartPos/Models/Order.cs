using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SmartPos.Models
{
    public class Order
    {
        public virtual int Sn { get; set; }
        public virtual long Oid { set; get; }
        public virtual DateTime Date { set; get; }
        public virtual long Cid { set; get; }
        public virtual float GrossTotal { set; get; }

    }
}