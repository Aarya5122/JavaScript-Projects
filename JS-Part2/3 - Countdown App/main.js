let timer

document.getElementById("start").addEventListener("click", ()=>{
    let hour = Number(document.querySelector("#hour").value)
    let minute = Number(document.querySelector("#minute").value)
    let second = Number(document.querySelector("#second").value)
    
    if(minute>59||second>59){
        alert("Minutes should be less than 60, Seconds should be less than 60")
    }

    document.querySelector("#hour").value = (hour<10)?"0"+hour:hour
    document.querySelector("#minute").value = (minute<10)?"0"+minute:minute
    document.querySelector("#second").value = (second<10)?"0"+second:second


    timer = setInterval(() => {
        second-=1;
        if(second<0){
            second = 59
            minute-=1
        }
        if(minute<0){
            minute = 59
            hour-=1
        }
        if(hour<0){
            hour = minute = second = 0
            clearInterval(timer)
        }
        document.querySelector("#hour").value = (hour<10)?"0"+hour:hour
        document.querySelector("#minute").value = (minute<10)?"0"+minute:minute
        document.querySelector("#second").value = (second<10)?"0"+second:second
    }, 1000);
})

document.getElementById("stop").addEventListener("click", ()=>{
    clearInterval(timer)
})

document.getElementById("reset").addEventListener("click", ()=>{
    document.querySelector("#hour").value = "00"
        document.querySelector("#minute").value = "00"
        document.querySelector("#second").value = "00"
        clearInterval(timer)
})