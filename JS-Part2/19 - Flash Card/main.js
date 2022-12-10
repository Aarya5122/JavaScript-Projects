document.querySelector("#input").addEventListener("input", (e)=>{
    if(e.target.value===""){
        document.querySelector(".card").textContent = "Card Content"
    } else {
    document.querySelector(".card").textContent = e.target.value
    }
})