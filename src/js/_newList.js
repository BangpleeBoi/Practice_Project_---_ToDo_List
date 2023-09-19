export function newList(data, parentDiv, cousinElement, renderFunction) {
  const createList = document.createElement("div");
  createList.setAttribute("id", "new-list");
  createList.setAttribute("class", "new-list");

  //Input Field
  const listNameInput = document.createElement("input");
  listNameInput.placeholder = "Enter Name";
  listNameInput.setAttribute("class", "list-name-input");
  listNameInput.setAttribute("id", "list-name-input");
  createList.appendChild(listNameInput);

  //Add Button
  const addButton = document.createElement("button");
  addButton.textContent = "Add";
  addButton.addEventListener("click", () => {
    const listName = listNameInput.value.trim();

    //Add Data to Main Array
    if (listName) {
      const brandNewList = {
        title: listName,
        tasks: [],
      };
      data.push(brandNewList);
      console.log("Data Updated", data);
      console.log(`New Data Title : ${data[0].title}`);
      renderFunction(data, parentDiv, cousinElement, renderFunction);
    } else {
      alert("Please enter a name for the new list.");
    }
  });
  createList.appendChild(addButton);

  //Cancel Button
  const cancelButton = document.createElement("button");
  cancelButton.textContent = "Cancel";
  cancelButton.addEventListener("click", () => {
    //Remove Element Function
    createList.remove();
  });
  createList.appendChild(cancelButton);

  parentDiv.appendChild(createList);
}
