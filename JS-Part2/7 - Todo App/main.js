document.querySelector(".add-todo").addEventListener("click", ()=>{

    const input = document.querySelector(".todo-input")

    if(!input.value){
        alert("Empty todo")
        return;
    }

    const container = document.querySelector(".todo-container")
    console.log(container)

    const todo = document.createElement("div")
    todo.classList.add("todo")

    const content = document.createElement("input")
    content.classList.add("todo-content")
    content.setAttribute("readonly", "readonly")
    content.value = input.value

    const actions = document.createElement("div")
    actions.classList.add("actions")

    const editButton = document.createElement("button")
    editButton.classList.add("edit")
    editButton.textContent = "EDIT"

    const deleteButton = document.createElement("button")
    deleteButton.classList.add("delete")
    deleteButton.textContent = "DELETE"

    editButton.addEventListener("click", (e)=>{
        if(e.target.textContent === "EDIT"){
            content.removeAttribute("readonly")
            e.target.textContent = "SAVE"
            content.focus()
        } else {
            content.setAttribute("readonly", "readonly")
            e.target.textContent = "EDIT"
        }
    })

    deleteButton.addEventListener("click", ()=>{
        todo.remove()
    })

    actions.append(editButton, deleteButton)

    todo.append(content, actions)

    container.appendChild(todo)

    input.value = ""
})