document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const tasksArray = taskText.split(',').map(task => task.trim());
            tasksArray.forEach(taskText => {
                if (taskText !== '') {
                    const taskItem = document.createElement('li');
                    taskItem.textContent = taskText;
                    taskItem.addEventListener('click', function () {
                        taskItem.classList.toggle('completed');
                        if (taskItem.classList.contains('completed')) {
                            taskList.appendChild(taskItem);
                        } else {
                            taskList.insertBefore(taskItem, taskList.firstChild);
                        }
                    });
                    taskList.insertBefore(taskItem, taskList.firstChild);
                }
            });
            taskInput.value = '';
        }
    });

    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTaskButton.click();
        }
    });
});