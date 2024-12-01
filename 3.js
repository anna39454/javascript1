num1 =  Number(prompt("первое число", ''));
num2 =  Number(prompt("второе число", ''));

function funcSum(num1) { 
 
    return function funcSum2(num2) {
      return console.log(num1+num2);
    }
  }
  
  
  funcSum(num1)(num2);
