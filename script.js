 // Base Function: Adds a task to the list
function addTask() {
    const input = document.getElementById('taskInput');
    const priorityInput = document.getElementById('priorityInput'); // Grab the dropdown
    const list = document.getElementById('taskList');
    const taskValue = input.value.trim();
    const priorityValue = priorityInput.value; 
    
    if (taskValue !== "") {
        const li = document.createElement('li');
        
        // Determine which color class to use based on the selection
        let badgeClass = '';
        if (priorityValue === 'high') badgeClass = 'priority-high';
        else if (priorityValue === 'medium') badgeClass = 'priority-medium';
        else badgeClass = 'priority-low';
        
        // Add both the task text and the priority badge to the list item
        li.innerHTML = `
            <span>${taskValue}</span> 
            <span class="priority-badge ${badgeClass}">${priorityValue.charAt(0).toUpperCase() + priorityValue.slice(1)}</span>
        `;
        
        list.appendChild(li);
        
        // Reset the inputs after adding
        input.value = ""; 
        priorityInput.value = "medium"; 
    } else {
        alert("Please enter a task!");
    }
}

// Your Personal Feature: Filters tasks as you type
function searchTasks() {
    let filter = document.getElementById('searchInput').value.toLowerCase();
    let li = document.getElementsByTagName('li');

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
    
    // Grab the sorting direction chosen by the user
    const sortOrder = document.getElementById('sortOrder').value;

    tasks.sort((a, b) => {
        const priorityA = a.querySelector('.priority-badge').innerText.toLowerCase();
        const priorityB = b.querySelector('.priority-badge').innerText.toLowerCase();

        const weights = {
            'high': 3,
            'medium': 2,
            'low': 1
        };

        // If 'desc' (Highest First), subtract A from B
        if (sortOrder === 'desc') {
            return weights[priorityB] - weights[priorityA];
        } 
        // If 'asc' (Lowest First), subtract B from A
        else {
            return weights[priorityA] - weights[priorityB];
        }
    });

    // Re-append the sorted tasks back to the list
    tasks.forEach(task => list.appendChild(task));
}