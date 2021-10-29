function sumFibs (num) {
    let arrey = [1, 1];
    let number;
    let result = 0;
  
    for (let i = 1; i <= num; i++) {
      let previousNum = arrey.length - 2;
      let lastNum = arrey.length - 1;
      number = arrey[previousNum] + arrey[lastNum];
      arrey.push(number);
    }
    for (let i = 0; i < arrey.length; i++) {
      if (arrey[i] <= num) {
        if (arrey[i] % 2 != 0) {
          result += arrey[i];
        }
      }
    }
    return result; 
};

console.log(sumFibs(10));