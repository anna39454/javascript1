function printNumbers(from, to) {
    let current = from;
  
    let timerId = setInterval(function() {
      console.log(current);
      if (current == to) {
        clearInterval(timerId);
      }
      current++;
    }, 1000);
  }
  
num1 =  Number(prompt("первое число", ''));
num2 =  Number(prompt("второе число", ''));

  printNumbers(num1, num2);