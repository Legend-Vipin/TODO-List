let todos = [];

function addTodo() {
    const todoInput = document.getElementById("todoInput");
    const todoText = todoInput.value;

    if (todoText) {
        todos.push(todoText);
        todoInput.value = "";
        renderTodos();
    }
}

function renderTodos() {
    const todosList = document.getElementById("todos");
    todosList.innerHTML = "";

    todos.forEach((todo, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = todo;

        const completeButton = document.createElement("button");
        completeButton.textContent = "Complete";
        completeButton.onclick = () => completeTodo(index);

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.onclick = () => removeTodo(index);

        listItem.appendChild(completeButton);
        listItem.appendChild(removeButton);
        todosList.appendChild(listItem);
    });
}

function completeTodo(index) {
    const timestamp = new Date().toLocaleString();
    todos[index] = `${todos[index]} (Completed on ${timestamp})`;

    renderTodos();
}

function removeTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}
