function submit(){
    let value = document.querySelector("#input").value
    value = value.toLowerCase().trim()
    const length = Math.floor(value.length/2)
    let result = true;
    for(let index=0; index<length; index++){
        if(value[index] !== value[value.length-1-index]){
            result = false;
            break;
        }
    }
    if(result){
        document.querySelector("#output").textContent = `${document.querySelector("#input").value} is palindrome`
        document.querySelector("#output").style.color = "#32fc39";
    } else {
        document.querySelector("#output").textContent = `${document.querySelector("#input").value} is not palindrome`
        document.querySelector("#output").style.color = "#f84141";
    }
}

document.querySelector("#check").addEventListener("click", (e)=>{
    e.preventDefault()
    submit()
    document.querySelector("#input").value = ""
})