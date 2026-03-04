function addTask() {
    const input = document.getElementById('taskInput');
    const taskValue = input.value.trim();
    
    if (taskValue !== "") {
        const list = document.getElementById('taskList');
        const li = document.createElement('li');
        li.innerHTML = `<span>${taskValue}</span>`;
        list.appendChild(li);
        input.value = ""; // Clears the input box
    } else {
        alert("Please enter a task!");
    }
}