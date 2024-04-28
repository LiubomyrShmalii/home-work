// 1 .Напишите функцию checkEmail(string), которая в качестве аргумента будет получать строковый тип. Функция должна проверить, есть ли в строке символ “@” и “.” Если оба символа будут находиться в строке - функция должна вернуть true, в противном случае false

// function checkEmail(string) {
//   if (string.includes('@') && string.includes('.')) {
//     console.log(true);
//   } else {
//     console.log(false)
//   }
// }
// checkEmail('some@email.com')
// checkEmail('some@emailcom')

// 	Пример:
// 	console.log(result1)
// console.log(result2)

// 	Результат: 
// 	true
// 	false


// 2. Напишите функцию initCap(string), которая получает строковое значение и возвращает эту же строку с заглавной первой буквой по примеру: 

// function initCap(string) {
// let first = string.slice(0, 1).toUpperCase();
// let second = string.slice(1);
// console.log(first + second);
// } 
// initCap('sam')
// initCap('steven')

// Пример:
// 	let result1 = initCap(“sam”)
// 	let result1 = initCap(“steven”)
// 	console.log(result1)
// console.log(result2)

// 	Результат: 
// 	Sam
// 	Steven



// 3. Задан массив phones, передающий элемент HTML разметки. 
// Создайте функцию clearDataCards(array), которая будет получать в качестве аргумента массив и реализует очистку данных. Каждый номер карты нужно переопределить, заменив первые и последние 4 цифры на звездочки
// по примеру ниже (должна вывести в консоль МАССИВ, а не элементы массива):

// function clearDataCards(str) {
	// let result = [];
	// for (let i = 0; i < str.length; i++) {
	// let del = str[i].split(' ');
	// del.pop();
	// del.shift();
	// del.unshift('**** ');
	// del.push(' ****');
	// let join = del.join(' ');
	// join = join.replaceAll('  ', '');
	// result.push(join);
	// } 
	// console.log(result);
// }
// clearDataCards(['4000 0012 0056 9499', '4000 0013 5456 7379', '4000 0014 1456 9869', '4000 0015 3466 7859', '4000 0016 3556 6899', '4000 0017 4456 4699']);
// clearDataCards(['4000 0012 0056 9499', '4000 0013 5456 7379', '4000 0014 1456 9869', '4000 0015 3466 7859']);
// clearDataCards(cards)

// Результат
//  [ 
// '****0012 0056****, 
// '****0013 5456****', 
// '****0014 1455****, 
// '****0015 3466****,
// '****0016 3556****, 
// '****0017 4456****’
// ]


// 4. Задан массив elems, передающий элемент HTML разметки. 
// Создайте функцию clearData(array), которая будет получать в качестве аргумента массив и реализует очистку данных по примеру ниже (должна вывести в консоль МАССИВ, а не элементы массива):

// result = [];
// function clearData(array){
	// for (let i = 0; i < array.length; i++) {
	// let find = array[i].indexOf('">');
	// let cut = array[i].slice(find + 2);
	// arr3 = cut.split('</');
	// result.push(arr3[0]);
// }
// console.log(result);
// } 
  
// clearData([
//   '<div><p class="text">Home</p></div>', 
//   '<div><p class="text">About</p></div>', 
//   '<div><p class="text">FAQ</p></div>', 
//   '<div><p class="text">Contacts</p></div>' 
//   ])

	// Результат: ['Home','About','FAQ','Contacts']

