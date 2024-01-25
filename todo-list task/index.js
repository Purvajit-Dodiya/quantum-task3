document.addEventListener("DOMContentLoaded", function () {
  loadTasksFromLocalStorage();
});

function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("task-list");

  if (taskInput.value.trim() !== "") {
    var taskItem = document.createElement("li");
    taskItem.className = "task";
    taskItem.innerHTML = `
                <span class="tasktext">${
                  taskInput.value.trim().charAt(0).toUpperCase() +
                  taskInput.value.trim().slice(1)
                }</span>
                <select onchange="changeStatus(this)">
                    <option value="todo">To-Do</option>
                    <option value="inProgress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
                <div class="actions">
                <span class="delete-btn" onclick="deleteTask(this)"><i class="fa-solid fa-trash"></i></span>
                <span class="edit-btn" onclick="editTask(this)"><i class="fa-regular fa-pen-to-square"></i></span>
                </div>
            `;

    taskList.appendChild(taskItem);
    changeColor(taskItem.querySelector("select"));
    saveTasksToLocalStorage();
    taskInput.value = "";
  } else {
    alert("Please enter a valid task.");
  }
}

function changeColor(selectElement) {
  var taskItem = selectElement.closest(".task");
  taskItem.setAttribute("status", selectElement.value);
}
function changeStatus(selectElement) {
  changeColor(selectElement);
  saveTasksToLocalStorage();
}
function editTask(editBtn) {
  var taskItem = editBtn.closest(".task");
  var taskspan = taskItem.querySelector(".tasktext");
  var newtask = prompt(`Task: ${taskspan.innerText.trim()} 
Edit task to:`).trim();
  if (newtask != "") {
    taskspan.innerText = newtask.charAt(0).toUpperCase() + newtask.slice(1);
  }
  saveTasksToLocalStorage();
}

function deleteTask(deleteBtn) {
  var taskItem = deleteBtn.closest(".task");
  console.log(taskItem);
  var selectItem = taskItem.querySelector("select");
  if (
    selectItem.value == "completed" ||
    (selectItem.value != "completed" &&
      confirm("Task not completed. Are you sure you want to delete it?") ==
        true)
  ) {
    taskItem.remove();
    saveTasksToLocalStorage();
  }
}

function saveTasksToLocalStorage() {
  var tasks = [];
  var taskElements = document.querySelectorAll(".task");

  taskElements.forEach(function (taskElement) {
    var task = {
      text: taskElement.querySelector("span").innerText,
      status: taskElement.querySelector("select").value,
    };
    tasks.push(task);
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasksFromLocalStorage() {
  var tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach(function (task) {
    var taskList = document.getElementById("task-list");
    var taskItem = document.createElement("li");
    taskItem.className = "task";
    taskItem.innerHTML = `
                <span class="tasktext">${
                  task.text.trim().charAt(0).toUpperCase() +
                  task.text.trim().slice(1)
                }</span>
                <select onchange="changeStatus(this)">
                    <option value="todo" ${
                      task.status === "todo" ? "selected" : ""
                    }>To-Do</option>
                    <option value="inProgress" ${
                      task.status === "inProgress" ? "selected" : ""
                    }>In Progress</option>
                    <option value="completed" ${
                      task.status === "completed" ? "selected" : ""
                    }>Completed</option>
                </select>
                <div class="actions">
                <span class="delete-btn" onclick="deleteTask(this)"><i class="fa-solid fa-trash"></i></span>
                <span class="edit-btn" onclick="editTask(this)"><i class="fa-regular fa-pen-to-square"></i></span>
                </div>

            `;

    taskList.appendChild(taskItem);
    changeColor(taskItem.querySelector("select"));
  });
}
