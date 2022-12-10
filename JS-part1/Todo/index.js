const newTodo = document.querySelector(".input")
const addTodo = document.querySelector(".addButton")
const container = document.querySelector(".container")
let target = ""
let id = 0;

addTodo.addEventListener("click", ()=>handleSubmit(target))

function handleSubmit(item){
    if(!item){
        console.log("new")
        const value = newTodo.value
        createItem(value)
        newTodo.value = ""
    } else {

        const buttonContainer = document.createElement("div")
    
        const editButton = document.createElement("button")
        editButton.classList = "editButton"
        editButton.textContent = "EDIT"
    
        editButton.addEventListener("click",(e)=>{
            target = document.getElementById(e.target.parentNode.parentNode.id)
            const value = item.textContent.slice(0,item.textContent.indexOf("EDITDELETE"))
            newTodo.value = value
        })
    
        const deleteButton = document.createElement("button")
        deleteButton.classList = "deleteButton"
        deleteButton.textContent = "DELETE"
    
        deleteButton.addEventListener("click",(e)=>{
            document.getElementById(e.target.parentNode.parentNode.id).remove()
        })

        buttonContainer.append(editButton, deleteButton)

        item.innerHTML = ""

        item.append(`${newTodo.value}`,buttonContainer)

        newTodo.value = ""
        target=""
    }
}


function createItem(value){
    const item = document.createElement("div")
    const buttonContainer = document.createElement("div")

    item.textContent = value
    item.classList = "item_input item"
    item.style.display = "flex"
    item.style.justifyContent = "space-between"
    item.id = id++;

    const editButton = document.createElement("button")
    editButton.classList = "editButton"
    editButton.textContent = "EDIT"

    editButton.addEventListener("click",(e)=>{
        target = document.getElementById(e.target.parentNode.parentNode.id)
        const value = item.textContent.slice(0,item.textContent.indexOf("EDITDELETE"))
        newTodo.value = value
    })

    const deleteButton = document.createElement("button")
    deleteButton.classList = "deleteButton"
    deleteButton.textContent = "DELETE"

    deleteButton.addEventListener("click",(e)=>{
        document.getElementById(e.target.parentNode.parentNode.id).remove()
    })

    buttonContainer.append(editButton, deleteButton)
    item.append(buttonContainer)

    container.appendChild(item)
}