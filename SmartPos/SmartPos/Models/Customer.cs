using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SmartPos.Models
{
    public class Customer
    {
        public virtual int Sn { get; set; }
        public virtual long Cid { get; set; }
        public virtual string Name { get; set; }
    }
}