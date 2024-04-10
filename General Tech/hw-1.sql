Задача 1. Приведите десять типовых бизнес-процессов для предметной области ВИДЕО-ХОСТИНГ (Youtube), а также их соответствие по CRUD.
1. Поиск видео - Read
2. Лайк видео - Update
3. Подписка на канал - Update
4. Коментарий к видео - Update
5. Создать канал - Create
6. Залить видео на канал - Create
7. Регистрация - Create
8. Посмотреть аналитику канала - Aggregation
9. Сохранить видео (посмотреть позже) - Update
10. Удалить канал - Delete


Задача 2. Вывести название и стоимость товаров от 20 до 150 EUR.
SELECT
ProductName,
Price
FROM Products
WHERE 
	Price >= 20
    AND
    Price <= 150


Задача 3. Вывести телефоны поставщиков из Japan и Spain.
SELECT
Phone
FROM Suppliers
WHERE
Country = 'Spain'
OR
Country = 'Japan'


Задача 4. Вывести название и стоимость товаров от всех поставщиков, кроме поставщика 1.
SELECT
ProductName,
Price
FROM Products
WHERE
NOT SupplierID = '1'


Задача 5. Вывести контактные имена клиентов, кроме тех, что из Germany и Brazil.
SELECT 
ContactName
FROM Customers
WHERE
NOT Country = 'Germany'
AND
NOT Country = 'Brazil'

Задача 6. Вывести товары с ценой от 50 до 100 EUR (вкл.)
SELECT *
FROM Products
WHERE
Price >= 20
AND
Price <= 100

Задача 7. Вывести название и стоимость товаров из категорий 1 и 3 со стоимостью до 50 EUR (вкл.)
SELECT
ProductName,
Price
FROM Products
WHERE
Price <= 50
AND 
CategoryID = '1' 
OR
CategoryID = '3'

-- НЕ МОЕ РЕШЕНИЕ!!!! Прошу прокоментировать, без скобок выводит 1 товар с ценой 81.00 ПОЧЕМУ? Я ж указал цена меньшеРавно 50
SELECT
ProductName,
Price
FROM Products
WHERE
Price <= 50
AND (CategoryID = '1' OR CategoryID = '3')