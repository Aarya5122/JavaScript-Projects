function randompickerbtn() {
  const values = "0123456789ABCDEF"
  let hexValue = "#"
  for(let i=0; i<6; i++){
    hexValue+=`${values[Math.floor(Math.random()*16)]}`
  }
  document.getElementById("randomPicker").style.background = hexValue
  document.getElementById("randomValuePara").textContent = hexValue
}

function hexFindbtn() {
    document.getElementById("color-box").style.background = document.getElementById("hexInput").value
}

function RGBFindbtn() {
    document.getElementById("rgb-color-box").style.background = `rgb(${document.getElementById("RInput").value}, ${document.getElementById("GInput").value}, ${document.getElementById("BInput").value})`
}

function RangeSelector() {
  let red = document.getElementById("RrInput").value
  let green = document.getElementById("GrInput").value
  let blue = document.getElementById("BrInput").value
  document.getElementById("range-color-box").textContent = `rgb(${red}, ${green}, ${blue})`
}

// hex to rgb converter
String.prototype.convertToRGB = function () {
    let rgbArr = this.match(/.{1,2}/g)
    rgbArr.forEach((color, index) => {
        rgbArr[index] = String(parseInt(color,16))
    });
    let rgbValue = rgbArr.reduce((acc, curr, index)=>{
                                if(index==2)
                                    return acc+curr
                                return acc+curr+', '
                            }, "")
    return `rgb(${rgbValue})`
};

function hexConvbtn() {
    document.getElementById("hexCOut").textContent = document.getElementById("hexCInp").value.convertToRGB()
}

function rgbConvbtn() {
    let redValue = document.getElementById("RCInput").value
    let greenValue = document.getElementById("GCInput").value
    let blueValue = document.getElementById("BCInput").value
    let hexValue = `#${Number(redValue).toString(16)}${Number(greenValue).toString(16)}${Number(blueValue).toString(16)}`
   document.getElementById("rgbCOut").textContent = hexValue
}
