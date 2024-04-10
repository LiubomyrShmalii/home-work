// Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них.

// function numbersCheck(num1, num2) {
//       if(num1 > num2) {
//           return num2
//       }
//       else {
//         return num1
//     }  
//   } console.log(numbersCheck(7, 16));





// Напишите функцию, которая принимает два числовых аргумента, выводит в консоль все четные числа разници между ними, от большего к меньшему.

// function findNum(num1, num2) {
//   let arr = []

//   if (num1 > num2) {
//     for(let i = num1; i > num2; i--) {
//       if (i % 2 === 0)
//       arr.push(i)
//     }
//   } else {
//       for(let i = num2; i > num1; i--){
//         if (i % 2 === 0)
//         arr.push(i)
//       }
//     } console.log(arr)
//   } 
//  findNum(15, 2);






  // Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.

  // function power(num, num2) {
  //   const step = num ** num2
  //   console.log(step);
  // }
  // power(10, 2)





  // Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.

  // function sum(n) {
  // let sum = 0;
  //   for(i = 0; i <= n; i++) {
  //     sum += i;
  //   } console.log(sum);
  //   } 

  // sum(15)






  // Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).

// function number(n, m) {
//   let sum = 0;
//   let sum2 = 0;
  
//   for (let i = n; i <= m; i++) {
//     if (i % 2 === 0) {
//       sum = sum + i;
//     } else {
//       sum2 = sum2 + i;
//     }
//   }
//   console.log(sum)
//   console.log(sum2)
// }  


// number(10, 7)





// Напишите функцию, которая принимает в качестве аргументов
// массив строк, а возвращает первый самый длинный элемент
// массива. Если входной массив пуст, функция возвращает null.
// Если есть несколько одинаковых по длине элементов -
// функция возвращает первый из этих элементов.

// const city = ["Berlin", "Bonn", "Bremen", "Borgfield", "Bochum"];
// const longWord = findWord(city);

// function findWord(city) {
//   if(city.length === 0) {
//       return null;
//   }

//   let max_length = 0;
//   let longWord = 0;

//   for(let i = 0; i < city.length; i++) {
//       if(max_length < city[i].length) {
//         max_length = city[i].length;
//           longWord = city[i];
//       } 
//   }
//   return longWord;
// }

// console.log(longWord)
