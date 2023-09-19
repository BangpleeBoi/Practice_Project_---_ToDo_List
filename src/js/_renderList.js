import { renderTask } from "./_renderTasks";

export function renderList(data, parentElement, cousinElement, renderFunction) {
  clearList(parentElement);
  data.forEach((element, index) => {
    const list = renderTab(element, index, data, parentElement, cousinElement);
    parentElement.appendChild(list);
  });
  console.log("renderList Argument Check:", cousinElement);
}

//List Tab Rendering & Details
function renderTab(
  element,
  index,
  data,
  parentElement,
  cousinElement,
  renderFunction
) {
  const listBar = document.createElement("div");
  listBar.setAttribute("id", "list-items");
  listBar.setAttribute("class", "list-items");
  listBar.textContent = data[index].title;

  //View Task Button
  listBar.addEventListener("click", () => {
    renderTask(data, element, index, cousinElement, renderTask);
  });

  //Delete List Button
  const deleteButton = document.createElement("button");
  deleteButton.setAttribute("class", "delete-button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", (event) => {
    event.stopPropagation();
    data.splice(index, 1);
    clearList(element);
    renderList(data, parentElement, cousinElement);
  });

  listBar.appendChild(deleteButton);
  return listBar;
}

//Clear List Before New Render
function clearList(targetDiv) {
  while (targetDiv.firstChild) {
    targetDiv.removeChild(targetDiv.firstChild);
  }
  console.log("targetDiv Parameter Check:", targetDiv);
}
