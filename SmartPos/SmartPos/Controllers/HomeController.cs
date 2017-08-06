using Infragistics.Web.Mvc;
using NHibernate.Linq;
using NHibernate.Transform;
using SmartPos.Models;
using SmartPos.NHibernate;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SmartPos.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        // GET: Home/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        [HttpPost]
        // GET: Home/Create
        public ActionResult Create(Product product)
        {
            using (var session = NHibernateSessionHelper.OpenSession())
            {
                using (var transaction = session.BeginTransaction())
                {
                    var prod = session.Query<Product>().FirstOrDefault(x => x.Pid == product.Pid);
                    if (prod != null)
                    {
                        prod.Description = product.Description;
                        prod.Price = product.Price;
                        prod.Qty += product.Qty;
                        session.SaveOrUpdate(prod);
                    }
                    else
                        session.Save(product);
                    transaction.Commit();
                }
                session.Close();
            }
            return RedirectToAction("DisplayProducts");
            
        }

        [GridDataSourceAction]
        public ActionResult DisplayProducts()
        {
            using(var session = NHibernateSessionHelper.OpenSession())
            {
                var query = (from x in session.Query<Product>()
                             select x);

                //var query1 = from product in session.Query<Product>()
                //             join stockin in session.Query<StockIn>()
                //             on product.Pid equals stockin.Pid
                //             group

                string sqlQuery = "select p.Sn as Sn, p.Pid as Pid, p.[Description] as Description, p.Price as Price , sum(s.StockedIn) as Qty from POS_db.dbo.Product " +
                                  "p join POS_db.dbo.StockIn s on p.Pid = s.Pid group by p.Pid, p.[Description], p.Sn, p.Price";
                var query1 = (session.CreateSQLQuery(sqlQuery).SetResultTransformer(Transformers.AliasToBean<Product>()));

                List<Product> p = new List<Product>(query1.List<Product>());

                //List < Product > products = query.ToList<Product>();
                //return View(products.AsQueryable<Product>());

                return View(p.AsQueryable<Product>());
            }
        }

        public class ExtendedProduct
        {

        }


        [GridDataSourceAction]
        public ActionResult GenerateOrder()
        {
            List<ExtendedSalesItem> eSaleItems = new List<ExtendedSalesItem>();
            return View(eSaleItems.AsQueryable<ExtendedSalesItem>());
        }

        public void SaveOrder()
        {
            string customerName = Session["customerName"].ToString();
            DateTime orderDate = DateTime.Parse(Session["orderDate"].ToString());
            //Session["customerName"] = null;
            //Session["orderDate"] = null;
            string orderId = orderDate.ToString("yyMMddHHmmss");

            //create customer
            Customer customer = new Customer();
            customer.Cid = long.Parse(orderId);
            customer.Name = customerName;

            //Create Order
            Order order = new Order();
            order.Oid = long.Parse(orderId);
            order.Date = DateTime.Parse(orderDate.ToString("yyyy-MM-dd HH:mm:ss.fff"));
            order.Cid = customer.Cid;
            order.GrossTotal = 120;

            //create salesItem
            SalesItem sItem = new SalesItem();
            //Session.Clear();
            using (var session = NHibernateSessionHelper.OpenSession())
            {
                using (var transaction = session.BeginTransaction())
                {
                    session.Save(customer);
                    transaction.Commit();
                    session.Close();

                }
            }

            using (var session = NHibernateSessionHelper.OpenSession())
            {
                using (var transaction = session.BeginTransaction())
                {
                    session.Save(order);
                    transaction.Commit();
                    session.Close();
                }
            }

            //Save data from Order grid into sales item table
            ViewData["GenerateCompactJSONResponse"] = false;
            GridModel m = new GridModel();
            List<Transaction<ExtendedSalesItem>> salesItemTransaction = m.LoadTransactions<ExtendedSalesItem>(HttpContext.Request.Form["ig_transactions"]);
            foreach (Transaction<ExtendedSalesItem> t in salesItemTransaction)
            {
                var row = t.row;
                ExtendedSalesItem p = new ExtendedSalesItem();
                if (t.type == "row") //update record
                {
                    int id = int.Parse(t.rowId);
                    {
                        using (var session = NHibernateSessionHelper.OpenSession())
                        {
                            using (var transaction = session.BeginTransaction())
                            {
                                //ExtendedSalesItem esi = session.Get<ExtendedSalesItem>(id);
                                //SalesItem si = new SalesItem();
                                //si.Pid = esi.


                                ////session


                                //session.Update(p);
                                //transaction.Commit();
                                //session.Close();
                            }
                        }
                    }
                }
                else if (t.type == "newrow") //new row added
                {
                    if (row != null)
                    {
                        SalesItem si = new SalesItem();
                        si.Sid = row.Sn;
                        si.Pid = row.Pid;
                        si.Qty = row.Qty;
                        si.Oid = order.Oid;
                        si.Total = row.Total;
                   
                        using (var session = NHibernateSessionHelper.OpenSession())
                        {
                            using (var transaction = session.BeginTransaction())
                            {
                                session.Save(si);
                                transaction.Commit();
                                session.Close();
                            }
                        }
                    }
                }
                else if (t.type == "deleterow")
                {

                    //var id = t.rowId;
                    //{
                    //    using (var session = NHibernateSessionHelper.OpenSession())
                    //    using (var transaction = session.BeginTransaction())
                    //    {
                    //        p = session.Get<Product>(int.Parse(id));
                    //        session.Delete(p);
                    //        transaction.Commit();
                    //        session.Close();
                    //    }
                    //}
                }
            }

        }

        
        public JsonResult getDnC(string customerName)
        {
            if (customerName != null)
            {
                Session.Clear();
                Session["customerName"] = customerName;
                Session["orderDate"] = DateTime.UtcNow;
                return Json(new { status = "true" }, JsonRequestBehavior.AllowGet);
            }
            else
                return Json(new { status = "false" }, JsonRequestBehavior.AllowGet);
        }

        public void UpdateProductsWhenOrderSaved()
        {
            ViewData["GenerateCompactJSONResponse"] = false;
            GridModel m = new GridModel();
            List<Transaction<Product>> productTransactions = m.LoadTransactions<Product>(HttpContext.Request.Form["ig_transactions"]);
            foreach (Transaction<Product> t in productTransactions)
            {
                var row = t.row;
                Product p = new Product();
                if (t.type == "row") //update record
                {
                    int id = int.Parse(t.rowId);
                    {
                        using (var session = NHibernateSessionHelper.OpenSession())
                        {
                            using (var transaction = session.BeginTransaction())
                            {
                                p = session.Get<Product>(id);
                                p.Pid = row.Pid;
                                p.Price = row.Price;
                                p.Qty = row.Qty;
                                p.Description = row.Description;

                                //add new stock in entry
                                StockOut stockOut = new StockOut();
                                stockOut.Date = DateTime.UtcNow;
                                stockOut.Pid = row.Pid;
                                stockOut.StockedOut = row.Qty;

                                session.Save(stockOut);

                                session.Update(p);
                                transaction.Commit();
                                session.Close();
                            }
                        }
                    }
                }
                else if (t.type == "newrow") //new row added
                {
                    if (row != null)
                    {
                        p.Pid = row.Pid;
                        p.Price = row.Price;
                        p.Qty = row.Qty;
                        p.Description = row.Description;
                        using (var session = NHibernateSessionHelper.OpenSession())
                        {
                            using (var transaction = session.BeginTransaction())
                            {
                                session.Save(p);
                                transaction.Commit();
                                session.Close();
                            }
                        }
                    }
                }
                else if (t.type == "deleterow")
                {

                    var id = t.rowId;
                    {
                        using (var session = NHibernateSessionHelper.OpenSession())
                        using (var transaction = session.BeginTransaction())
                        {
                            p = session.Get<Product>(int.Parse(id));
                            session.Delete(p);
                            transaction.Commit();
                            session.Close();
                        }
                    }
                }
            }
        }

        public ActionResult UpdateProducts()
        {

            ViewData["GenerateCompactJSONResponse"] = false;
            GridModel m = new GridModel();
            List<Transaction<Product>> productTransactions = m.LoadTransactions<Product>(HttpContext.Request.Form["ig_transactions"]);
            //foreach (Transaction<Product> t in productTransactions)
            if (productTransactions.Count == 0)
            {
                return View();
            }
            Transaction<Product> t = productTransactions.Last();
            {
                var row = t.row;
                Product p = new Product();
                if (t.type == "row") //update record
                {
                    int id = int.Parse(t.rowId);
                    {
                        using (var session = NHibernateSessionHelper.OpenSession())
                        {
                            using (var transaction = session.BeginTransaction())
                            {
                                p = session.Get<Product>(id);
                                p.Pid = row.Pid;
                                p.Price = row.Price;
                                p.Qty = row.Qty;
                                p.Description = row.Description;

                                session.Update(p);

                                //add new stock in entry
                                StockIn stockIn = new StockIn();
                                stockIn.Date = DateTime.UtcNow;
                                stockIn.Pid = row.Pid;
                                stockIn.StockedIn = row.Qty;

                                session.Save(stockIn);

                                transaction.Commit();
                                session.Close();
                            }
                        }
                    }
                }
                else if (t.type == "newrow") //new row added
                {
                    if (row != null)
                    {
                        p.Pid = row.Pid;
                        p.Price = row.Price;
                        p.Qty = row.Qty;
                        p.Description = row.Description;
                        using (var session = NHibernateSessionHelper.OpenSession())
                        {
                            using (var transaction = session.BeginTransaction())
                            {
                                session.Save(p);

                                //add new stock in entry
                                StockIn stockIn = new StockIn();
                                stockIn.Date = DateTime.UtcNow;
                                stockIn.Pid = row.Pid;
                                stockIn.StockedIn = row.Qty;

                                session.Save(stockIn);

                                transaction.Commit();
                                session.Close();
                            }
                        }
                    }
                }
                else if (t.type == "deleterow")
                {

                    var id = t.rowId;
                    {
                        using (var session = NHibernateSessionHelper.OpenSession())
                        using (var transaction = session.BeginTransaction())
                        {
                            p = session.Get<Product>(int.Parse(id));
                            session.Delete(p);
                            transaction.Commit();
                            session.Close();
                        }
                    }
                }
                
            }
            return View();
        }

        public ActionResult CreateOrder()
        {
            return View();
        }

        public ActionResult Temp()
        {
            return View();
        }

        //// POST: Home/Create
        //[HttpPost]
        //public ActionResult Create(FormCollection collection)
        //{
        //    try
        //    {
        //        // TODO: Add insert logic here

        //        return RedirectToAction("Index");
        //    }
        //    catch
        //    {
        //        return View();
        //    }
        //}

        // GET: Home/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: Home/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Home/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Home/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}
