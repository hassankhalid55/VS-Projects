using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SmartPos.Models
{
    public class Product
    {
        public virtual int Sn { get; set; }
        public virtual int Pid { set; get; }
        public virtual string Description { set; get; }
        public virtual double Price { set; get; }
        public virtual int Qty { get; set; }
    }
}