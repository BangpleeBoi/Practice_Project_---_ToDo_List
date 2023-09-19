import { renderList } from "./_renderList";
import { newListButton } from "./_newListCard";

function clearList(targetDiv) {
    while (targetDiv.firstChild) {
        targetDiv.removeChild(targetDiv.firstChild);
    }
}

// function logoRender(targetDiv) {
//     const logo = document.createElement('img')
    
// }

export function renderMain(data, parentDiv, renderFunction) {
    clearList(parentDiv);
    logoRender()
    data.forEach((element, index) => {
        const List = renderList(element, index, data)
        parentDiv.appendChild(List);
    });
    newListButton(data, parentDiv, renderFunction)
    console.log(data)
}


