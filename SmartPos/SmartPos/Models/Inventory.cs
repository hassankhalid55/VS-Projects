using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SmartPos.Models
{
    public class Inventory
    {
        public virtual int Sn { get; set; }
        public virtual int Pid { get; set; }
        public virtual int QtyInStock { get; set; }
    }
}