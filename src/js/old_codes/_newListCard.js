export function newListButton(data, parentDiv, renderFunction) {
    const Button = document.createElement("button");
    Button.setAttribute("class", "new-list-button");
    Button.textContent = 'New List'
    Button.addEventListener("click", () => {
      newList(data, parentDiv, renderFunction);
    });
    parentDiv.appendChild(Button);
  }
  
function newList(data, parentDiv, renderFunction) {
    const createList = document.createElement("div");
    createList.setAttribute("id", "new-list");
    createList.setAttribute("class", "new-list");
  
    const listNameInput = document.createElement("input");
    listNameInput.placeholder = "Enter Name";
    listNameInput.setAttribute("class", "list-name-input");
    listNameInput.setAttribute("id", "list-name-input");
    createList.appendChild(listNameInput)
  
    const listNameInputButton = document.createElement("button");
    listNameInputButton.textContent = 'Add'
    listNameInputButton.addEventListener("click", () => {
      const listName = listNameInput.value.trim();
  
      if (listName) {
        // check if the input isn't empty
        const brandNewList = {
          title: listName,
          tasks: [],
        };
        data.push(brandNewList);
        renderFunction(data, parentDiv, renderFunction); 
      } else {
        alert("Please enter a name for the new list.");
      }
    });
    createList.appendChild(listNameInputButton)
  
    parentDiv.appendChild(createList);
  }
  