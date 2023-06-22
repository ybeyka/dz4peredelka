"use strict";
let result;

    let a = prompt("Введіть перше число:");
    let b = prompt("Введіть друге число:");
    
    
    while (isNaN(a) || isNaN(b)) {
      alert("Введено некоректне число. Спробуйте ще раз.");
      a = prompt("Введіть перше число:");
      b = prompt("Введіть друге число:");
    }
  
    let op = prompt("Введіть математичну операцію (+, -, *, /):");
    function calc(num1,num2,operac) {
    
    switch (operac) {
      case "+":
        result = parseFloat(num1) + parseFloat(num2);
        break;
      case "-":
        result = parseFloat(num1) - parseFloat(num2);
        break;
      case "*":
        result = parseFloat(num1) * parseFloat(num2);
        break;
      case "/":
        result = parseFloat(num1) / parseFloat(num2);
        break;
      default:
        alert("Введено некоректну операцію.");
        return;
    }
  
    return result
  }
  
  
  calc(a,b,op);
  console.log("Результат: " + result);
