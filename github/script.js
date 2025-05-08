let taskList = JSON.parse(localStorage.getItem("tasks")) || [];

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText !== "") {
    taskList.push({ text: taskText, completed: false });
    input.value = "";
    saveAndRender();
  }
}

function toggleTask(index) {
  taskList[index].completed = !taskList[index].completed;
  saveAndRender();
}

function deleteTask(index) {
  taskList.splice(index, 1);
  saveAndRender();
}

function saveAndRender() {
  localStorage.setItem("tasks", JSON.stringify(taskList));
  renderTasks();
}

function renderTasks() {
  const ul = document.getElementById("taskList");
  ul.innerHTML = "";
  taskList.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = task.completed ? "completed" : "";
    li.innerHTML = `
      <span onclick="toggleTask(${index})">${task.text}</span>
      <button onclick="deleteTask(${index})">X</button>
    `;
    ul.appendChild(li);
  });
}

renderTasks();
