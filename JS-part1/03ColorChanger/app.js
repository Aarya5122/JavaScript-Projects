const hexValues = "0123456789ABCDEF"

function changeBackground(){
    let bgColor = "#"
    for(let i=0; i<6; i++){
        bgColor+=hexValues[Math.floor(Math.random()*16)]
    }
    document.querySelector("#canvas").style.background = bgColor
}

document.querySelector("#button").addEventListener("click", changeBackground)