let calculator = document.querySelector(".calculator-input");
let operator = document.querySelectorAll(".operator");
let btnNumber = document.querySelectorAll(".btnNumber");
let clear = document.querySelector(".clear");
let equalSign = document.querySelector(".equalSign");

clear.onclick =  function(element){
    calculator.value = "0";
}


btnNumber.forEach(function (element)  {
   element.onclick = function(e){
    if (calculator.value == "0"){
        calculator.value = "";
    }
       calculator.value += this.textContent;
   };

});
operator.forEach(function(element){
     element.onclick = function(e){
         calculator.value += this.textContent;
     }

});
equalSign.onclick = function(element){
     calculator.value = eval(calculator.value)
}