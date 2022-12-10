let setup = document.getElementById("setup")
let delivery = document.getElementById("delivery")

document.getElementById("jokeBtn").addEventListener("click", ()=>{
    fetch("https://v2.jokeapi.dev/joke/Any")
    .then(res=>res.json())
    .then(data=>{
        setup.textContent = `Setup: ${data.setup}`
        delivery.textContent = `Delivery: ${data.delivery}`
        console.log(data)
    })
})