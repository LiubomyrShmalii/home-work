-- 1. Вывести данные о товарах (проекция: название, цена со скидкой 0.5процента) по убыванию цены.
-- SELECT
-- ProductName,
-- Price * .995
-- FROM Products
-- ORDER BY Price DESC

-- 2. Вывести товары в диапазоне цены от 50 до 200 EUR (проекция: название, цена с наценкой 30 процентов) по возрастанию цены.
-- SELECT 
-- ProductName,
-- Price * 1.3
-- FROM Products
-- WHERE
-- Price BETWEEN 50 AND 200
-- ORDER BY Price ASC

-- 3. Вывести всех клиентов, кроме тех, что из USA и UK.
-- SELECT * 
-- FROM Customers
-- WHERE
-- NOT Country IN ('USA', 'UK')

-- 4. Вывести товары из категорий 2 и 5 (проекция: все имеющиеся поля, цена в долларах)
-- SELECT
-- *,
-- Price * 1.07 AS USD
-- FROM Products
-- WHERE
-- CategoryID IN (2, 5)