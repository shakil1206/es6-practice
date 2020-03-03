const number = [560,450,650,960,100];
const number2 = [600,400,555,652,554];
const allNumber = number.concat(number2);

const allNumber1 = [...number,5,10, ...number2];

const max = Math.max(...allNumber1);
console.log(max);