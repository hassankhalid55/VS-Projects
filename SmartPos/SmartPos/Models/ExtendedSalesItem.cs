namespace SmartPos.Models
{
    public class ExtendedSalesItem
    {
        //public SalesItem SItem { set; get; }
        public float Price { set; get; }
        public string Description { set; get; }
        public int Sn { set; get; } //this will be sid in salesitem table
        public int Pid { set; get; }
        public int Qty { set; get; }
        public float Total { set; get; }

    }
}