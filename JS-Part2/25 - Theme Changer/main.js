document.getElementById("theme").addEventListener("click", (e)=>{
    if(e.target.textContent === "DARK"){
        document.body.style.color = "#efefef"
        document.body.style.background = "#0f0f0f"
        e.target.style.background  = "transparent"
        e.target.textContent = "LIGHT"
    } else {
        document.body.style.color = "#0f0f0f"
        document.body.style.background = "#efefef"
        e.target.style.background  = "#3f1baa"
        e.target.textContent = "DARK"
    }
})