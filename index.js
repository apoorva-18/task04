document.getElementById("addTaskBtn").addEventListener("click", addTask);

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  // Toggle completion
  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  // Remove button
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "X";
  removeBtn.classList.add("remove-btn");
  removeBtn.addEventListener("click", function (e) {
    e.stopPropagation(); // Prevent triggering complete toggle
    li.remove();
  });

  li.appendChild(removeBtn);
  document.getElementById("taskList").appendChild(li);

  taskInput.value = "";
}
