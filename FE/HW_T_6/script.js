// Напишите функцию getTodos(username), которая в качестве аргумента принимает никнейм пользователя (api /users) и выводит список его задач (api /todos).
// В качестве ответа в консоль выведите массив с задачами указанного пользователя

// async function getTodos(name) {
//   try {
//     let url = 'https://jsonplaceholder.typicode.com/users';
//     let res = await fetch(url);
//     let data = await res.json();
//     let user = data.filter(elem => elem.name === name);
//     let userId = user[0].id;
//     getTasks(userId);
//   }
//   catch {
//     console.log("сетеовой запрос выполнился неуспешно");
//   }
// }

// getTodos('Leanne Graham')

// async function getTasks(id) {
//   arrayTasks = [];
//   let urlToDo = 'https://jsonplaceholder.typicode.com/todos';
//   let resToDo = await fetch(urlToDo);
//   let dataToDO = await resToDo.json();
//   dataToDO.forEach(elem => {
//     if (elem.userId === 1) {
//       arrayTasks.push(elem.title)
//     }
//   });
//   console.log(arrayTasks.length);
// }


async function getСomments(title) {
    try {
        let url = `https://jsonplaceholder.typicode.com/posts?title=${title}`;
        let response = await fetch(url);
        if(response.ok) {
            let data = await response.json()
            if(data.length > 0){
               let postId = data[0].id
               let commentsUrl = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
               let commentsResponse = await fetch(commentsUrl)
               if(commentsResponse.ok) {
                let commentsData = await commentsResponse.json()
                console.log(`Комментарии на пост с id '${postId}':`, commentsData);
               }else {
                throw new Error(`Ошибка HTTP при получении задач: ${commentsResponse.status}`);
               }
            }
        }else {
            throw new Error(`Ошибка HTTP:${response.status}`)
        }
    }catch(err){
        console.error('Произошла ошибка:', err);
    }
}

getСomments("qui est esse")