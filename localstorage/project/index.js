    const input = document.getElementById("todoInput");
    const button = document.getElementById("addBtn");
    const todoList = document.querySelector(".todo-list");

    // load todos from localStorage
    let todos = JSON.parse(localStorage.getItem("todos")) || [];

    // render function
    function renderTodos() {
        todoList.innerHTML = "";

        todos.forEach((todo, index) => {
            const li = document.createElement("li");

            const span = document.createElement("span");
            span.textContent = todo;

            const delBtn = document.createElement("button");
            delBtn.textContent = "Delete";

            delBtn.addEventListener("click", function () {
                todos.splice(index, 1);
                localStorage.setItem("todos", JSON.stringify(todos));
                renderTodos();
            });

            li.appendChild(span);
            li.appendChild(delBtn);
            todoList.appendChild(li);
        });
    }

    // initial load
    renderTodos();

    button.addEventListener("click", function (e) {
        e.preventDefault();

        const value = input.value.trim();
        if (value === "") return;

        todos.push(value);
        localStorage.setItem("todos", JSON.stringify(todos));

        renderTodos();
        input.value = "";
    });
