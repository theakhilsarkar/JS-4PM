/*   <div
          id="task-box"
          class="d-flex w-75 justify-content-between m-3 shadow p-3 rounded"
        >
          <div class="w-50">Lorem ipsum dolor sit amet.</div>
          <div class="w-25 d-flex gap-2">
            <button class="btn btn-warning">Edit</button>
            <button class="btn btn-danger">Delete</button>
            <button class="btn btn-success">Completed</button>
          </div>
        </div>
*/

// local storage
// to set data
// 1. fetch exisiting data
// 2. add new value in fetched data
// 3. again add in local storage

const input_task_text = document.getElementById("input-task-text");
const input_task_priority = document.getElementById("input-task-priority");
const input_add_button = document.getElementById("input-add-button");

const input_filter_text = document.getElementById("input-filter-text");
const input_filter_priority = document.getElementById("input-filter-priority");
const input_filter_status = document.getElementById("input-filter-status");
const input_filter_button = document.getElementById("input-filter-button");

const task_display_box = document.getElementById("task-display-box");
let task_list = [];

const fetchTaskListFromLocalStorage = () => {
  task_list = JSON.parse(localStorage.getItem("task-list")) || [];
};

const updateTaskListInLocalStorage = (task_list) => {
  localStorage.setItem("task-list", JSON.stringify(task_list));
};

const handleAddTask = () => {
  const task = input_task_text.value;
  const priority = input_task_priority.value;
  const status = false;

  const task_list = fetchTaskListFromLocalStorage();
  task_list.push({ task, priority, status });
  updateTaskListInLocalStorage(task_list);
  displayTasks();
};

const handleChangeStatus = (i) => {
  task_list[i].status = !task_list[i].status;
  updateTaskListInLocalStorage(task_list);
  displayTasks();
};

const displayTasks = () => {
  task_display_box.innerHTML = "";
  task_list.map((task, i) => {
    const div = document.createElement("div");
    div.classList = `d-flex w-75 justify-content-between m-3 shadow p-3 rounded border ${task.priority == "high" ? "border-danger" : task.priority == "low" ? "border-success" : "border-warning"}`;
    div.innerHTML = `
          <input ${task.status ? "checked" : ""} type="checkbox" style="height:30px; width:30px" oninput="handleChangeStatus(${i})"/>
          <div class="ms-2 w-50 ${task.status ? "text-decoration-line-through" : ""}">${task.task}</div>
          <div class="w-50 d-flex gap-2 justify-content-end align-content-center">
            <button class="btn btn-warning">Edit</button>
            <button onClick="handleRemoveTask(${i})" class="btn btn-danger">Delete</button>
          </div>
       `;
    task_display_box.appendChild(div);
  });
};

const handleRemoveTask = (i) => {
  task_list.splice(i, 1);
  updateTaskListInLocalStorage(task_list);
  fetchTaskListFromLocalStorage();
  displayTasks();
};

const handlePriorityFilter = () => {
  const priority = input_filter_priority.value;
  fetchTaskListFromLocalStorage();
  if (priority == "all") {
    fetchTaskListFromLocalStorage();
  } else {
    task_list = task_list.filter((task) => task.priority == priority);
  }
  displayTasks();
};

input_add_button.addEventListener("click", handleAddTask);
input_filter_button.addEventListener("click", handlePriorityFilter);
fetchTaskListFromLocalStorage();
displayTasks();
