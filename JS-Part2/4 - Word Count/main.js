const input = document.querySelector("#input")
const output = document.querySelector("#output")
input.addEventListener("input", (e)=>{
    console.log("running")
    if(e.target.value.includes(" ")){
        output.textContent = output.textContent + e.target.value
        if(e.target.value.length !== 1){
            document.querySelector("#wordcount").textContent = Number(document.querySelector("#wordcount").textContent)+1
        }
        e.target.value = ""
    }
})