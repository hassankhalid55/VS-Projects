using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SmartPos.Models
{
    public class OrderProductSalesitem_Model
    {
        public Models.Order order { set; get; }
        public Models.Product product { set; get; }
        public Models.SalesItem salesItem { set; get; }
        public Models.ExtendedSalesItem eSaleItem { set; get; }

    }
}