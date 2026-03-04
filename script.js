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