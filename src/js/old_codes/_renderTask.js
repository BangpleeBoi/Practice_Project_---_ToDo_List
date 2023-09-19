export function renderTask(task, index, array, renderTask) {
    const taskBar = document.createElement("div");
    taskBar.setAttribute("id", "task-items");
    taskBar.setAttribute("class", "task-items");

    const taskName = document.createElement("div");
    taskName.setAttribute("id", "task-name");
    taskName.setAttribute("class", "task-name");
    taskName.textContent = task.taskname
    taskBar.appendChild(taskName)

    const taskDueDate = document.createElement("div");
    taskDueDate.setAttribute("id", "due-date");
    taskDueDate.setAttribute("class", "due-date");
    taskDueDate.textContent = task.duedate
    taskBar.appendChild(taskDueDate)

    const doneButton = document.createElement("button");
    doneButton.setAttribute("class", "done-button");
    doneButton.addEventListener("click", () => {
        array.splice(index, 1);
        renderTask(array);
    });
    taskBar.appendChild(doneButton);
    return taskBar;
}