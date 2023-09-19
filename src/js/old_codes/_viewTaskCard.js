export function createTaskCard(task, index) {
  const card = document.createElement("div");
  card.setAttribute("id", "taskViewer");
  card.setAttribute("class", "taskViewer");

  const taskName = document.createElement("div");
  taskName.setAttribute("class", "task-name");
  taskName.textContent = task.taskname;
  card.appendChild(taskName);

  const taskDescription = document.createElement("div");
  taskDescription.setAttribute("class", "task-description");
  taskDescription.textContent = task.description;
  card.appendChild(taskDescription);

  const taskDueDate = document.createElement("div");
  taskDueDate.setAttribute("class", "task-due-date");
  taskDueDate.textContent = task.duedate;
  card.appendChild(taskDueDate);

  const taskTag = document.createElement("div");
  taskTag.setAttribute("class", "task-tag");
  taskTag.textContent = task.tag;
  card.appendChild(taskTag);

  const editButton = document.createElement("button");
  editButton.setAttribute("class", "edit-button");
  editButton.addEventListener("click", () => {
    enableEdit(task, card, index);
  });
  card.appendChild(editButton);

  return card;
}

export const enableEdit = () => {
  const descriptionInput = document.createElement("input");
  descriptionInput.type = "text";
  descriptionInput.value = task.description;
  card.querySelector(".task-description").replaceWith(descriptionInput);

  const dueDateInput = document.createElement("input");
  dueDateInput.type = "date";
  dueDateInput.value = task.dueDate;
  card.querySelector(".task-due-date").replaceWith(dueDateInput);

  const tagsInput = document.createElement("input");
  tagsInput.type = "text";
  tagsInput.value = task.tags.join(", ");
  card.querySelector(".task-tags").replaceWith(tagsInput);

  const editBtn = card.querySelector(".edit-button");
  editBtn.textContent = "Save";
  editBtn.removeEventListener("click", editBtn.click);
  editBtn.addEventListener("click", () => {
    saveTask(task, card, index, descriptionInput, dueDateInput, tagsInput);
  });
};

export const saveTask = (
  task,
  card,
  index,
  descriptionInput,
  dueDateInput,
  tagsInput
) => {
  task.description = descriptionInput.value;
  task.dueDate = dueDateInput.value;
  task.tags = tagsInput.value.split(",").map((tag) => tag.trim());

  viewTask();
};
