import { newTask } from "./_newTask";
import { viewTask } from "./_viewTask";

export function renderTask(array, task, index, taskContainer, renderFunction) {
  clearList(taskContainer);

  if (array.length === 0) {
    placeholder(taskContainer);
    newTaskButton(array, task, index, taskContainer, renderFunction);
  } else {
    task.tasks.forEach((taskObject, taskIndex) => {
      renderTaskInit(
        array,
        task,
        index,
        taskContainer,
        renderFunction,
        taskObject,
        taskIndex
      );
    });
    newTaskButton(array, task, index, taskContainer, renderFunction);
  }
}

//Render Task Bar
function renderTaskInit(
  array,
  task,
  index,
  taskContainer,
  renderFunction,
  taskObject,
  taskIndex
) {
  const taskBar = document.createElement("div");
  taskBar.setAttribute("id", "task-items");
  taskBar.setAttribute("class", "task-items");

  const taskName = document.createElement("div");
  taskName.setAttribute("id", "task-name");
  taskName.setAttribute("class", "task-name");
  taskName.textContent = taskObject.taskname;
  taskBar.appendChild(taskName);

  const taskDueDate = document.createElement("div");
  taskDueDate.setAttribute("id", "due-date");
  taskDueDate.setAttribute("class", "due-date");
  taskDueDate.textContent = taskObject.duedate;
  taskBar.appendChild(taskDueDate);

  const editButton = document.createElement("button");
  editButton.setAttribute("class", "edit-button");
  editButton.textContent = "Edit";
  editButton.addEventListener("click", (event) => {
    event.stopPropagation()
    console.log(viewTask)
    viewTask(
      array,
      task,
      index,
      taskContainer,
      renderFunction,
      taskObject,
      taskIndex
    );
  });
  taskBar.appendChild(editButton);

  const doneButton = document.createElement("button");
  doneButton.setAttribute("class", "done-button");
  doneButton.textContent = "Done";
  doneButton.addEventListener("click", (event) => {
    event.stopPropagation()
    array.splice(index, 1);
    renderTask(array, task, index, taskContainer, renderFunction);
  });
  taskBar.appendChild(doneButton);
  taskContainer.appendChild(taskBar);
}

//New Task Button
function newTaskButton(array, task, index, taskContainer, renderFunction) {
  const addTaskButton = document.createElement("Button");
  addTaskButton.textContent = "Add Task";
  taskContainer.appendChild(addTaskButton);
  addTaskButton.addEventListener("click", () => {
    newTask(array, task, index, taskContainer, renderFunction);
  });
  taskContainer.appendChild(addTaskButton);
}

//Clear Task Before New Render
function clearList(targetDiv) {
  while (targetDiv.firstChild) {
    targetDiv.removeChild(targetDiv.firstChild);
  }
  console.log("targetDiv Parameter Check:", targetDiv);
}

//Tasks Placehodler
function placeholder(taskContainer) {
  const placeholder = document.createElement("div");
  placeholder.setAttribute("class", "task-placeholder");
  placeholder.textContent = "ADD NEW TASK";
  taskContainer.appendChild(placeholder);
}
