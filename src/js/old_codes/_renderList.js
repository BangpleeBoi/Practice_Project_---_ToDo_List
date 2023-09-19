export function renderList(task, index, data) {
    const listBar = document.createElement("div");
    listBar.setAttribute("id", "list-items");
    listBar.setAttribute("class", "list-items");
    listBar.textContent = task.title
    listBar.addEventListener('click', () => {
        renderTask(task, index)
    })

    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "delete-button");
    deleteButton.textContent = 'Delete'
    deleteButton.addEventListener("click", () => {
        data.splice(index, 1);
        renderTabs(data);
    });
    listBar.appendChild(deleteButton);;
    return listBar;
}