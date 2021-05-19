// // const setEditModal = (todoId) => {
// //     const xhttp = new XMLHttpRequest();

// //     xhttp.open("GET", "http://localhost:3000/todo/${todoId}", false);
// //     xhttp.send();

// //     const task = JSON.parse(xhttp.responseText);

// //     const {
// //         task,
// //         todoId
// //     } = task;

// //     document.getElementById('id').value = todoId;
// //     document.getElementById('task').value = task;

// //     // setting up the action url for the task
// //     document.getElementById('editForm').action = "http://localhost:3000/todo/${todoId}";
// // }

// // const deleteBook = (todoId) => {
// //     const xhttp = new XMLHttpRequest();

// //     xhttp.open("DELETE", "http://localhost:3000/api/todo/${todoId}", false);
// //     xhttp.send();

// //     location.reload();
// // }

// const loadTodo = () => {
//     const xhttp = new XMLHttpRequest();

//     xhttp.open("GET", "http://localhost:3000/api/todos", false);
//     xhttp.send();

//     const todos = JSON.parse(xhttp.responseText);

//     for (let todo of todos) {
//         const x = `
//             <div class="col-4">
//                 <div class="card">
//                     <div class="card-body">
//                         <h5 class="card-title">${todo.task}</h5>
//                         <h6 class="card-subtitle mb-2 text-muted">${todo.id}</h6>
//                         <hr>
//                         <button type="button" class="btn btn-danger">Delete</button>
//                         <button types="button" class="btn btn-primary" data-toggle="modal" 
//                             data-target="#editTasks" onClick="setEditModal(${todo.id})">
//                             Edit
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         `

//         document.getElementById('todos').innerHTML = document.getElementById('todos').innerHTML + x;
//     }
// }

// loadTodo();