export class newTaskComponent {
    constructor(inputID, classname, handlesubmit) {
      this.element = document.createElement("form");
      if (inputID) {
        this.element.setAttribute("id", inputID);
      }
      if (classname) {
        this.element.setAttribute("class", classname);
      }
  
      const taskLabel = document.createElement("label");
      taskLabel.textContent = "New Task";
      taskLabel.setAttribute("for", "taskname");
      this.element.appendChild(taskLabel);
  
      const taskInput = document.createElement("input");
      taskInput.setAttribute("id", "taskname");
      taskInput.setAttribute("name", "taskname");
      this.element.appendChild(taskInput);
  
      const descriptionInputLabel = document.createElement("label");
      descriptionInputLabel.textContent = "Description";
      descriptionInputLabel.setAttribute("for", "description");
      this.element.appendChild(descriptionInputLabel);
  
      const descriptionInputBar = document.createElement("input");
      descriptionInputBar.setAttribute("placeholder", "Enter your username");
      descriptionInputBar.setAttribute("id", "description");
      descriptionInputBar.setAttribute("name", "description");
      this.element.appendChild(descriptionInputBar);
  
      const dueDateLabel = document.createElement("label");
      dueDateLabel.textContent = "Due Date";
      dueDateLabel.setAttribute("for", "duedate");
      this.element.appendChild(dueDateLabel);
  
      const dueDateInput = document.createElement("input");
      dueDateInput.setAttribute("id", "duedate");
      dueDateInput.setAttribute("name", "duedate");
      dueDateInput.setAttribute("type", "date");
      this.element.appendChild(dueDateInput);
  
      const tagLabel = document.createElement("label");
      tagLabel.textContent = "Tag";
      tagLabel.setAttribute("for", "tag");
      this.element.appendChild(tagLabel);
  
      const tagInput = document.createElement("input");
      tagInput.setAttribute("id", "tag");
      tagInput.setAttribute("name", "tag");
      this.element.appendChild(tagInput);
  
      const button = document.createElement("button");
      button.setAttribute("type", "submit");
      button.textContent = "Save";
      button.addEventListener("click", (event) => {
        event.preventDefault();
  
        const taskname = this.element.querySelector("#taskname").value;
        const description = this.element.querySelector("#description").value;
        const duedate = this.element.querySelector("#duedate").value;
        const tag = this.element.querySelector("#tag").value;
  
        const myTask = {
          taskname: taskname,
          description: description,
          duedate: duedate,
          tag: tag,
        };
  
        handlesubmit(myTask);
      });
      this.element.appendChild(button);
    }
  
    appendChild(parent) {
      parent.appendChild(this.element);
    }
  }
  