document.getElementsByClassName("btn")[0].addEventListener("click", (e)=>{
    e.preventDefault()
    let binaryValue = document.getElementById("binary").value
    document.getElementsByClassName("result")[0].textContent = `Decimal Number: ${parseInt(binaryValue,2)}`
    document.getElementById("binary").value = ""
})