/* selecting elements to be used */

const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todolist = document.getElementById('todo-list');

/* handling form submission */

todoForm.addEventListener('submit', (a) =>{
    a.preventDefault();
    addTask(todoInput.value);
    todoInput.value = '';
});

/* this a function that creates a task */

function addTask(task) {
    const li = document.createElement('li');
    li.textContent = task;
    todolist.appendChild(li);
    addDeleteBtn(li);
}

/* now create a button to delete  task */

function addDeleteBtn(li) {
    const deleteBtn = document.createElement('button');
    deleteBtn.classList = 'deleteBtn'
    deleteBtn.textContent= 'delete';
    deleteBtn.style.margin = "0 20px";
    

    deleteBtn.addEventListener('click', () =>{
        li.remove()
    })
    li.appendChild(deleteBtn);

}