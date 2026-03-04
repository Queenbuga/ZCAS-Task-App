 // Base Function: Adds a task to the list
function addTask() {
    const input = document.getElementById('taskInput');
    const list = document.getElementById('taskList');
    const taskValue = input.value.trim();
    
    if (taskValue !== "") {
        const li = document.createElement('li');
        li.innerHTML = `<span>${taskValue}</span>`;
        list.appendChild(li);
        input.value = ""; 
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