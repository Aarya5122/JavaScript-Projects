document.querySelector("#convert-btn").addEventListener("click", onSubmit)

function onSubmit(){

    let value = document.querySelector(".naming_conversion input").value
    value = value.toLowerCase()
    let words = value.split(" ")
    console.log(words)

    let camel = document.querySelector("#camel-case")
    camel.textContent = words.reduce((acc, curr, index)=>{
        (index!==0)?curr = curr[0].toUpperCase()+curr.slice(1):""
        return acc+curr
    },"")

    let pascal = document.querySelector("#pascal-case")
    pascal.textContent = words.reduce((acc, curr)=>{
        curr = curr[0].toUpperCase()+curr.slice(1)
        return acc+curr
    },"")

    let snake = document.querySelector("#snake-case")
    snake.textContent = words.reduce((acc, curr)=>{
        return acc+"_"+curr
    },"").substring(1)

    let kebab = document.querySelector("#kebab-case")
    kebab.textContent = words.reduce((acc, curr)=>{
        return acc+"-"+curr
    },"").substring(1)

    let sSnake = document.querySelector("#screaming-snake-case")
    sSnake.textContent = snake.textContent.toUpperCase()

    let sKebab = document.querySelector("#screaming-kebab-case")
    sKebab.textContent = kebab.textContent.toUpperCase()

}