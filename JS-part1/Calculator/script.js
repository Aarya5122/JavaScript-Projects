let equation = ""

function insert(num){
  equation = String(equation)+String(num)
  document.getElementsByName("textview")[0].value = equation
}
  
  function equals(){
    equation = String(eval(document.getElementsByName("textview")[0].value))  
    document.getElementsByName("textview")[0].value = equation
  }
  
  function clean(){
    equation = ""
    document.getElementsByName("textview")[0].value = equation
  }
  
  function back(){
    equation = document.getElementsByName("textview")[0].value.slice(0, document.getElementsByName("textview")[0].value.length-1)
    document.getElementsByName("textview")[0].value = equation
  }