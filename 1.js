function funcName() { 

    let arr = [5, 7, 8, 5, 1, 0, 0, 0, 8];
    let even = 0;
    let odd = 0;
    let zero = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 0) {
                zero ++
            } else if (arr[i]%2 == 0) {
                even ++
            } else {
                odd ++
            }
        }
    
    console.log('колличество нолей в массиве          ' + zero);
    console.log('колличество четных чисел в массиве   ' + even);
    console.log('колличество нечетных чисел в массиве ' + odd);
    }
    
    funcName();