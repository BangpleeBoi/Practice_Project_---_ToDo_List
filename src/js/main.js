import "../style/main.scss";
import { listArray } from "./_dataStore";
import { newList } from "./_newList";
import { renderList } from "./_renderList";

//Whole Container Setup
const Container = document.createElement("div");
Container.setAttribute("class", "container");
document.body.appendChild(Container);



//Left Container Setup
const leftContainer = document.createElement("div");
leftContainer.setAttribute("class", "left-container");
Container.appendChild(leftContainer);

//Logo Container
const logoContainer = document.createElement("img");
logoContainer.setAttribute("class", "logo-container");
leftContainer.appendChild(logoContainer);

//List Container (will dynamically change)
const listContainer = document.createElement("div");
listContainer.setAttribute("class", "list-container");
leftContainer.appendChild(listContainer);

//New List Button
const newListButton = document.createElement("Button");
newListButton.textContent = "New List";
leftContainer.appendChild(newListButton);
newListButton.addEventListener("click", () => {
  newList(listArray, listContainer, rightContainer, renderList);
});



//Right Containter Setup
const rightContainer = document.createElement("div");
rightContainer.setAttribute("class", "right-container");
Container.appendChild(rightContainer);

//Tasks Placeholder
const initialPlacholder = document.createElement("div");
initialPlacholder.textContent = "Add New Project";
rightContainer.appendChild(initialPlacholder);

//Tasks List Container
const taskListContainer = document.createElement("div");
taskListContainer.setAttribute("class", "task-list-container");
rightContainer.appendChild(taskListContainer);



//Initial Render
document.addEventListener("DOMContentLoaded", (event) => {
  renderList(allList, listContainer, rightContainer, renderList);
});

console.log("Initilization Argument Check: Argument:", taskListContainer);
