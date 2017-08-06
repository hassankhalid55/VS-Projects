select * from StockIn order by StockIn.Pid

select s.Pid as 'ProductId', sum(s.StockedIn) as 'StockedIn' from StockIn s group by
s.Pid

select o.Pid as 'ProductId', sum(o.StockedOut) as 'StockedOut' 
from StockOut o group by
o.Pid

select s.Pid as 'ProductId', sum(s.StockedIn) as 'StockedIn',
sum(o.StockedOut) as 'StockedOut' from StockIn s join StockOut o
on s.Pid = o.Pid group by s.Pid

select s.Pid as 'ProductId', s.StockedIn as 'StockedIn',
o.StockedOut as 'StockedOut' from StockIn s join StockOut o
on s.Pid = o.Pid

select stocks.ProductId, sum(StockedIn), sum(StockedOut)
from (select s.Pid as 'ProductId', s.StockedIn as 'StockedIn',
o.StockedOut as 'StockedOut' from StockIn s join StockOut o
on s.Pid = o.Pid) stocks group by stocks.ProductId

-- CORRECT QUERY TO GET SUM OF Stockedin and StockedOut
-- QUANTITY OF A PRODUCT
select stockins.ProductId, stockins.Stockedin, stockouts.StockedOut
from
(select s.Pid as 'ProductId', sum(s.StockedIn) as 'StockedIn' from StockIn s group by
s.Pid) stockins join
(select o.Pid as 'ProductId', sum(o.StockedOut) as 'StockedOut' 
from StockOut o group by
o.Pid) stockouts on stockins.ProductId = stockouts.ProductId



-- CORRECT QUERY TO GET SUM OF Stockedin and StockedOut
-- QUANTITY OF A PRODUCT ALONGWITH PRODUCT'S PROPERTIES
select product.Pid, Product.Description, Product.Price
, stocks.StockedIn-stocks.StockedOut as 'Available Quantity' from product join
(select stockins.ProductId, stockins.Stockedin, stockouts.StockedOut
from
(select s.Pid as 'ProductId', sum(s.StockedIn) as 'StockedIn' from StockIn s group by
s.Pid) stockins join
(select o.Pid as 'ProductId', sum(o.StockedOut) as 'StockedOut' 
from StockOut o group by
o.Pid) stockouts on stockins.ProductId = stockouts.ProductId) stocks on 
product.Pid = stocks.ProductId