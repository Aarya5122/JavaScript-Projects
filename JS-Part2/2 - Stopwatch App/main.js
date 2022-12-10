let hour = 0;
let minute = 0;
let second = 0;
let milli = 0;

const run = () => {
    document.querySelector("#hour").textContent = `${(hour<10)? "0"+hour : hour}`
    document.querySelector("#minute").textContent = `${(minute<10)? "0"+minute : minute}`
    document.querySelector("#second").textContent = `${(second<10)? "0"+second : second}`
    document.querySelector("#milli").textContent = `${(milli<10)? "0"+milli : milli}`
    milli+=1
    if(milli==100){
        milli=0
        second+=1
    }
    if(second==60){
        second=0
        minute+=1
    }
    if(minute==60){
       minute=0
       hour+=1 
    }if(hour==24){
        hour=0
     }
}

let timer;

document.querySelector("#stop").addEventListener("click",()=>{
    clearInterval(timer)
    console.log("first")
})

document.querySelector("#start").addEventListener("click", ()=>{
    timer = setInterval(run, 10)
})

document.querySelector("#reset").addEventListener("click", ()=>{
    hour = second = minute = milli = 0
    document.querySelector("#hour").textContent = `00`
    document.querySelector("#minute").textContent = `00`
    document.querySelector("#second").textContent = `00`
    document.querySelector("#milli").textContent = `00`
})

