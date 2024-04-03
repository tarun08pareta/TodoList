const taskInput = document.getElementById('taskInput');
    const todoList = document.getElementById('todoList');
    const completedTasks = document.getElementById('completedTasks');

    taskInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            const taskText = taskInput.value.trim();
            if (taskText !== '') {
                createTodoItem(taskText);
                taskInput.value = '';
            }
        }
    });

    function createTodoItem(taskText) {
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo-item');

        const toggleButton = document.createElement('input');
        toggleButton.type = 'checkbox';
        toggleButton.addEventListener('change', function () {
            if (toggleButton.checked) {
                moveTaskToCompleted(todoItem);
            } else {
                moveTaskToTodoList(todoItem);
            }
        });

        const taskLabel = document.createElement('label');
        taskLabel.textContent = taskText;

        const priorityToggle = document.createElement('span');
        priorityToggle.classList.add('priority-toggle');
        priorityToggle.innerHTML = '&#9733;';
        priorityToggle.addEventListener('click', function () {
            priorityToggle.classList.toggle('high-priority');
        });

        todoItem.appendChild(toggleButton);
        todoItem.appendChild(taskLabel);
        todoItem.appendChild(priorityToggle);

        todoList.appendChild(todoItem);
    }

    function moveTaskToCompleted(todoItem) {
        completedTasks.appendChild(todoItem);
    }

    function moveTaskToTodoList(todoItem) {
        todoList.appendChild(todoItem);
    }