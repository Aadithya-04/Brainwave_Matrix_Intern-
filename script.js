document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.querySelector('.todo-input');
    const todoButton = document.querySelector('.todo-button');
    const todoList = document.querySelector('.todo-list');
    const filterOption = document.querySelector('.filter-todo');
    const todoNotes = document.querySelector('.todo-notes');
    const progressContainer = document.querySelector('.progress-container');
    let taskChart;

    todoButton.addEventListener('click', addTodo);
    todoList.addEventListener('click', handleTodoClick);
    filterOption.addEventListener('change', filterTodo);

    function addTodo(event) {
        event.preventDefault();

        const todoText = todoInput.value;
        const notesText = todoNotes.value;

        if (todoText.trim() === '') {
            showAlert('Task cannot be empty!');
            return;
        }

        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo', 'new-task');
        
        const todoContent = document.createElement('div');
        todoContent.classList.add('todo-content');
        
        const newTodo = document.createElement('li');
        newTodo.innerText = todoText;
        newTodo.classList.add('todo-item');
        todoContent.appendChild(newTodo);

        if (notesText.trim() !== '') {
            const todoNote = document.createElement('p');
            todoNote.innerText = notesText;
            todoNote.classList.add('todo-notes');
            todoContent.appendChild(todoNote);
        }

        todoDiv.appendChild(todoContent);

        const completeButton = document.createElement('button');
        completeButton.innerHTML = '<i class="fas fa-check"></i>';
        completeButton.classList.add('complete-btn');
        todoDiv.appendChild(completeButton);

        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add('trash-btn');
        todoDiv.appendChild(trashButton);

        todoList.appendChild(todoDiv);

        todoInput.value = '';
        todoNotes.value = '';

        progressContainer.classList.remove('hidden');
        updateTaskGraph();
    }

    function handleTodoClick(event) {
        const item = event.target;

        if (item.classList.contains('trash-btn') || item.parentElement.classList.contains('trash-btn')) {
            const todo = item.closest('.todo');
            todo.classList.add('fall');
            todo.addEventListener('transitionend', () => {
                todo.remove();
                updateTaskGraph();
            });
        }

        if (item.classList.contains('complete-btn') || item.parentElement.classList.contains('complete-btn')) {
            const todo = item.closest('.todo');
            todo.classList.toggle('completed');
            moveCompletedToEnd();
            updateTaskGraph();
        }
    }

    function filterTodo() {
        const todos = todoList.childNodes;
        todos.forEach(function(todo) {
            switch (filterOption.value) {
                case "all":
                    todo.style.display = "flex";
                    break;
                case "completed":
                    if (todo.classList.contains("completed")) {
                        todo.style.display = "flex";
                    } else {
                        todo.style.display = "none";
                    }
                    break;
                case "incomplete":
                    if (!todo.classList.contains("completed")) {
                        todo.style.display = "flex";
                    } else {
                        todo.style.display = "none";
                    }
                    break;
            }
        });
    }

    function moveCompletedToEnd() {
        const completedTasks = [];
        const incompleteTasks = [];

        todoList.childNodes.forEach(todo => {
            if (todo.classList.contains('completed')) {
                completedTasks.push(todo);
            } else {
                incompleteTasks.push(todo);
            }
        });

        todoList.innerHTML = '';
        incompleteTasks.forEach(task => todoList.appendChild(task));
        completedTasks.forEach(task => todoList.appendChild(task));
    }

    function updateTaskGraph() {
        const totalTasks = todoList.childNodes.length;
        const completedTasks = todoList.querySelectorAll('.completed').length;
        const percentageCompleted = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

        const chartData = {
            labels: ['Completed', 'Incomplete'],
            datasets: [{
                label: 'Tasks',
                data: [completedTasks, totalTasks - completedTasks],
                backgroundColor: ['#28a745', '#dc3545']
            }]
        };

        if (taskChart) {
            taskChart.data = chartData;
            taskChart.update();
        } else {
            const ctx = document.getElementById('taskGraph').getContext('2d');
            taskChart = new Chart(ctx, {
                type: 'doughnut',
                data: chartData,
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                }
            });
        }

        document.getElementById('motivation-message').innerText = completedTasks ? 'Keep it up!' : '';
        document.getElementById('pending-tasks-message').innerText = totalTasks - completedTasks ? 'You have pending tasks!' : '';
        document.getElementById('celebration-message').innerText = completedTasks === totalTasks && totalTasks !== 0 ? 'All tasks completed! Great job!' : '';
        document.getElementById('percentage-completed').innerText = `Completed: ${percentageCompleted}%`;
    }

    function showAlert(message) {
        const alertContainer = document.getElementById('alert-container');
        const alertMessage = document.createElement('div');
        alertMessage.classList.add('alert-message');
        alertMessage.innerText = message;
        alertContainer.appendChild(alertMessage);
        setTimeout(() => {
            alertMessage.remove();
        }, 3000);
    }
});
