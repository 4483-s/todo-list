const taskName = document.querySelector("input");
const button = document.querySelector("button");
const container = document.querySelector(".container");
button.addEventListener("click", () => {
  addTask(taskName.value);
});
function addTask(value) {
  const taskDiv = document.createElement("div");
  const task = document.createElement("p");
  const removeTaskBtn = document.createElement("button");
  const upBtn = document.createElement("button");
  const downBtn = document.createElement("button");
  task.style.display = "inline";
  task.textContent = value;
  removeTaskBtn.textContent = "Delete Task";
  removeTaskBtn.addEventListener("click", () => {
    taskDiv.remove();
  });
  upBtn.addEventListener("click", () => {
    if (taskDiv.previousElementSibling) {
      container.insertBefore(taskDiv, taskDiv.previousElementSibling);
    }
  });
  downBtn.addEventListener("click", () => {
    if (taskDiv.nextElementSibling) {
      container.insertBefore(taskDiv.nextElementSibling, taskDiv);
    }
  });
  upBtn.textContent = "up";
  downBtn.textContent = "down";

  taskDiv.append(task, removeTaskBtn, upBtn, downBtn);
  container.append(taskDiv);
  taskName.value = "";
}
