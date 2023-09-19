//Change Parameter to Match the Newly Defined

export function viewTask(
  array,
  task,
  index,
  taskContainer,
  renderFunction,
  taskObject,
  taskIndex
) {
  const card = document.createElement("div");
  card.setAttribute("id", "taskViewer");
  card.setAttribute("class", "taskViewer");

  const taskName = document.createElement("div");
  taskName.setAttribute("class", "task-name");
  taskName.textContent = taskObject.taskname;
  card.appendChild(taskName);

  const taskDescription = document.createElement("div");
  taskDescription.setAttribute("class", "task-description");
  taskDescription.textContent = taskObject.description;
  card.appendChild(taskDescription);

  const taskDueDate = document.createElement("div");
  taskDueDate.setAttribute("class", "task-due-date");
  taskDueDate.textContent = taskObject.duedate;
  card.appendChild(taskDueDate);

  const taskTag = document.createElement("div");
  taskTag.setAttribute("class", "task-tag");
  taskTag.textContent = taskObject.tag;
  card.appendChild(taskTag);

  const editButton = document.createElement("button");
  editButton.setAttribute("class", "edit-button");
  editButton.textContent = "Enable Edit";
  function handleEditClick(event) {
    event.stopPropagation();
    enableEdit(
      array,
      task,
      index,
      taskContainer,
      renderFunction,
      taskObject,
      taskIndex,
      card,
      handleEditClick
    );
  }
  editButton.addEventListener("click", handleEditClick);
  card.appendChild(editButton);

  taskContainer.appendChild(card);
  console.log("viewTask check:", card.querySelector(".task-description"));
}

export const enableEdit = (
  array,
  task,
  index,
  taskContainer,
  renderFunction,
  taskObject,
  taskIndex,
  card,
  handleEditClick
) => {
  console.log('enableEdit check:', card.querySelector(".task-description"))

  const descriptionInput = document.createElement("input");
  descriptionInput.type = "text";
  descriptionInput.value = taskObject.description;
  console.log('Before replaceWith check:', card.querySelector(".task-description"))
  card.querySelector(".task-description").replaceWith(descriptionInput);

  const dueDateInput = document.createElement("input");
  dueDateInput.type = "date";
  dueDateInput.value = taskObject.duedate;
  card.querySelector(".task-due-date").replaceWith(dueDateInput);

  const tagsInput = document.createElement("input");
  tagsInput.type = "text";
  tagsInput.value = taskObject.tag
  card.querySelector(".task-tag").replaceWith(tagsInput);

  const saveBtn = card.querySelector(".edit-button");
  saveBtn.textContent = "Save";
  saveBtn.removeEventListener("click", handleEditClick);
  saveBtn.addEventListener("click", (event) => {
    event.stopPropagation()
    const descriptionInputValue = descriptionInput.value;
    const dueDateInputValue = dueDateInput.value;
    const tagsInputValue = tagsInput.value;

    saveTask(
      array,
      task,
      index,
      taskContainer,
      renderFunction,
      taskObject,
      taskIndex,
      descriptionInputValue,
      dueDateInputValue,
      tagsInputValue
    )
  })
  card.appendChild(saveBtn)
};

export const saveTask = (
  array,
  task,
  index,
  taskContainer,
  renderFunction,
  taskObject,
  taskIndex,
  descriptionInputValue,
  dueDateInputValue,
  tagsInputValue
) => {
  taskObject.description = descriptionInputValue;
  taskObject.duedate = dueDateInputValue;
  taskObject.tag = tagsInputValue;

  console.log(taskObject)

  viewTask(
    array,
    task,
    index,
    taskContainer,
    renderFunction,
    taskObject,
    taskIndex
  );
};