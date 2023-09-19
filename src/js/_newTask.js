export function newTask(array, task, index, taskContainer, renderFunction) {

    //Form Element
    const formContainer = document.createElement("div");
    formContainer.setAttribute('class', 'form-container')

    const taskLabel = document.createElement("label");
    taskLabel.textContent = "New Task";
    taskLabel.setAttribute("for", "taskname");
    formContainer.appendChild(taskLabel);

    const taskInput = document.createElement("input");
    taskInput.setAttribute("id", "taskname");
    taskInput.setAttribute("name", "taskname");
    formContainer.appendChild(taskInput);

    const descriptionInputLabel = document.createElement("label");
    descriptionInputLabel.textContent = "Description";
    descriptionInputLabel.setAttribute("for", "description");
    formContainer.appendChild(descriptionInputLabel);

    const descriptionInputBar = document.createElement("input");
    descriptionInputBar.setAttribute("placeholder", "Enter your username");
    descriptionInputBar.setAttribute("id", "description");
    descriptionInputBar.setAttribute("name", "description");
    formContainer.appendChild(descriptionInputBar);

    const dueDateLabel = document.createElement("label");
    dueDateLabel.textContent = "Due Date";
    dueDateLabel.setAttribute("for", "duedate");
    formContainer.appendChild(dueDateLabel);

    const dueDateInput = document.createElement("input");
    dueDateInput.setAttribute("id", "duedate");
    dueDateInput.setAttribute("name", "duedate");
    dueDateInput.setAttribute("type", "date");
    formContainer.appendChild(dueDateInput);

    const tagLabel = document.createElement("label");
    tagLabel.textContent = "Tag";
    tagLabel.setAttribute("for", "tag");
    formContainer.appendChild(tagLabel);

    const tagInput = document.createElement("input");
    tagInput.setAttribute("id", "tag");
    tagInput.setAttribute("name", "tag");
    formContainer.appendChild(tagInput);


    //Save Button
    const button = document.createElement("button");
    button.setAttribute("type", "submit");
    button.textContent = "Save";
    button.addEventListener("click", (event) => {
      event.preventDefault();

      const taskname = formContainer.querySelector("#taskname").value;
      const description = formContainer.querySelector("#description").value;
      const duedate = formContainer.querySelector("#duedate").value;
      const tag = formContainer.querySelector("#tag").value;

      const newTask = {
        taskname: taskname,
        description: description,
        duedate: duedate,
        tag: tag
      }
      
      task.tasks.push(newTask);
      
      renderFunction(array, task, index, taskContainer, renderFunction)
      }
    );
    formContainer.appendChild(button);
    taskContainer.appendChild(formContainer)
    console.log(task)
    console.log(task.tasks)
}
