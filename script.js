// Base Function: Adds a task to the list
function addTask() {
    const input = document.getElementById('taskInput');
    const priorityInput = document.getElementById('priorityInput');
    const dueDateInput = document.getElementById('dueDateInput');
    const list = document.getElementById('taskList');

    const taskValue = input.value.trim();
    const priorityValue = priorityInput.value;
    const dueDateValue = dueDateInput.value;

    if (taskValue !== "") {
        const li = document.createElement('li');

        let badgeClass = '';
        if (priorityValue === 'high') badgeClass = 'priority-high';
        else if (priorityValue === 'medium') badgeClass = 'priority-medium';
        else badgeClass = 'priority-low';

        li.innerHTML = `
            <span class="task-text">${taskValue}</span>
            <span class="priority-badge ${badgeClass}">
                ${priorityValue.charAt(0).toUpperCase() + priorityValue.slice(1)}
            </span>
            <span class="due-date">
                ${dueDateValue ? 'Due: ' + dueDateValue : ''}
            </span>
        `;

        list.appendChild(li);

        checkDueDates();

        input.value = "";
        priorityInput.value = "medium";
        dueDateInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}

// Filters tasks as you type
function searchTasks() {
    let filter = document.getElementById('searchInput').value.toLowerCase();
    let li = document.querySelectorAll('#taskList li');

    for (let i = 0; i < li.length; i++) {
        let text = li[i].innerText.toLowerCase();
        if (text.includes(filter)) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function sortTasks() {
    const list = document.getElementById('taskList');
    const tasks = Array.from(list.getElementsByTagName('li'));
    const sortOrder = document.getElementById('sortOrder').value;

    tasks.sort((a, b) => {
        const priorityA = a.querySelector('.priority-badge').innerText.toLowerCase();
        const priorityB = b.querySelector('.priority-badge').innerText.toLowerCase();

        const weights = {
            high: 3,
            medium: 2,
            low: 1
        };

        if (sortOrder === 'desc') {
            return weights[priorityB] - weights[priorityA];
        } else {
            return weights[priorityA] - weights[priorityB];
        }
    });

    tasks.forEach(task => list.appendChild(task));
}

function checkDueDates() {
    const today = new Date().toISOString().split('T')[0];
    const tasks = document.querySelectorAll('#taskList li');

    tasks.forEach(task => {
        const dueDateElement = task.querySelector('.due-date');

        if (dueDateElement && dueDateElement.innerText.includes('Due:')) {
            const dueDate = dueDateElement.innerText.replace('Due: ', '').trim();

            if (dueDate < today) {
                task.style.backgroundColor = '#ffcccc';
            } else if (dueDate === today) {
                task.style.backgroundColor = '#fff3cd';
            } else {
                task.style.backgroundColor = '#f8f9fa';
            }
        }
    });
}

setInterval(checkDueDates, 60000);