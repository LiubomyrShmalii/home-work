-- 1. Вывести данные о товарах (проекция: название товара, цена, название категории, название компании поставщика)
-- SELECT
-- Products.ProductName,
-- Products.Price,
-- Categories.CategoryName,
-- Suppliers.SupplierName

-- FROM Products
-- JOIN Categories ON Categories.CategoryID = Products.CategoryID
-- JOIN Suppliers ON Suppliers.SupplierID = Products.SupplierID


-- 2. Вывести список стран, которые поставляют морепродукты.
-- SELECT DISTINCT
-- Suppliers.Country
-- FROM Suppliers
-- JOIN Products ON Suppliers.SupplierID = Products.SupplierID
-- WHERE
-- Products.CategoryID=8

3. Вывести два самых дорогих товара из категории Beverages из USA.
-- SELECT
-- *
-- FROM Products
-- JOIN Categories ON Products.CategoryID = Categories.CategoryID
-- JOIN Suppliers ON Products.SupplierID = Suppliers.SupplierID

-- WHERE
-- CategoryName = 'Beverages' AND Country = 'USA'
-- ORDER BY Price ASC
-- LIMIT 2

-- 4. Вывести название и стоимость в USD одного самого дорогого проданного товара.
-- SELECT 
-- Products.ProductName,
-- Products.Price * 1.07 AS Price_USD
-- FROM Products
-- JOIN OrderDetails ON Products.ProductID = OrderDetails.	ProductID
-- ORDER BY Price DESC
-- LIMIT 1

-- 5. Дайте короткий ответ на вопрос: в чем отличие БД от СУБД
-- БД - База данных, место хранения информации, управляй командами (нет графического интерфейса)
-- СУБД - Программа для работы с БД, управляй красивыми кнопками (есть графический интерфейс)
