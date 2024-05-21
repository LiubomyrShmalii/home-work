-- 1. Вывести заказы со стоимостью от 5000 и более EUR (проекция: номер_заказа, стоимость_заказа).
-- SELECT Orders.OrderID, 
-- SUM(Products.Price * OrderDetails.Quantity) AS 'total_price_order'
-- FROM Orders
-- JOIN OrderDetails ON OrderDetails.OrderID = Orders.OrderID
-- JOIN Products ON Products.ProductID = OrderDetails.ProductID
-- GROUP BY Orders.OrderID
-- HAVING total_price_order >= 5000;


-- 2. Вывести страны, в которые было отправлено 3 и более заказов.
-- SELECT
-- Customers.Country,
-- COUNT(Orders.OrderID) AS 'countries'
-- FROM Orders
-- JOIN Customers ON Customers.CustomerID = Orders.CustomerID
-- GROUP BY Customers.Country
-- HAVING countries >= 3;


-- 3. Вывести ТОП-10 самых продаваемых товаров (проекция: название_товара, ко_во_проданных_единиц).
-- SELECT
-- Products.ProductName,
-- SUM(OrderDetails.Quantity) AS 'top_10_products'
-- FROM OrderDetails
-- JOIN Products ON Products.ProductID = OrderDetails.ProductID
-- GROUP BY Products.ProductName
-- ORDER BY top_10_products DESC
-- LIMIT 10;


-- 4. Расчитать З/П менеджеров (ставка - 5% от суммы проданных заказов).
-- SELECT
-- Employees.EmployeeID,
-- SUM(OrderDetails.Quantity * Products.Price) * .05 AS 'bonus'
-- FROM Orders
-- JOIN Employees ON Employees.EmployeeID = Orders.EmployeeID
-- JOIN OrderDetails ON OrderDetails.OrderID = Orders.OrderID
-- JOIN Products ON Products.ProductID = OrderDetails.ProductID
-- GROUP BY Employees.EmployeeID
-- ORDER BY bonus DESC

