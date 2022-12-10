document.getElementById("color").addEventListener("input", (e)=>{
    document.getElementById("output").textContent = `Hexcode is: ${e.target.value}`
})