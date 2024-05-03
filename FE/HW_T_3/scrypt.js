// 1. Задан массив elems, передающий элемент HTML разметки. 
// Реализуйте очистку данных по примеру ниже:

// result = [];
// function clearData(array){
// 	for (let i = 0; i < array.length; i++) {
// 	let find = array[i].indexOf('">');
// 	let cut = array[i].slice(find + 2);
// 	arr3 = cut.split('</');
// 	result.push(arr3[0]);
// }
// console.log(result);
// }

// let elems = [
//   '<div><p class="text">Home</p></div>', 
//   '<div><p class="text">About</p></div>', 
//   '<div><p class="text">FAQ</p></div>', 
//   '<div><p class="text">Contacts</p></div>' 
//   ] 
//   clearData(elems)
// // Результат: ['Home','About','FAQ','Contacts']


// 2.Напишите функцию initCap(array), которая получает массив с элементами строкового значения и возвращает элементы с заглавной первой буквой по примеру: 

// function initCap(words) {
// upWords = [];
//   for (let elem of words){
//     result = elem.charAt(0).toUpperCase() + elem.slice(1);
//     upWords.push(result)
//   }
//   console.log(upWords);
// } 
// initCap(['стакан','молоко','табуретка','вода']);
// Результат: ['Cтакан','Молоко','Табуретка','Вода']

// 3. Задан массив names. 
// Сформируйте новый массив full_names, элементы которого будут содежрать вложенный массив с именем и фамилией. Если фамилии не окажется - второй элемент должен хранить undefined 
// full_names = [];
// let names = [ 
// 'Steven King', 
// 'Jonh Snow', 
// 'Oliver', 
// 'Neena Stich',
//  'Grant Laster', 
// 'Persius Master', 
// 'Lest' 
// ] 

// for (let i = 0; i < names.length; i++) {
//   let part = names[i].split(' ');
//   console.log(part);
//   if (part.length === 1) {
//     part.push(undefined);
//   }
//   full_names.push(part);
// }

// console.log(full_names);
// Результат: [ 
// ['Steven','King'], 
// ['Jonh','Snow'], 
// ['Oliver', undefined], 
// ['Neena','Stich'], 
// ['Grant','Laster'], 
// ['Persius','Master'],
// ['Lest', undefined] ]




