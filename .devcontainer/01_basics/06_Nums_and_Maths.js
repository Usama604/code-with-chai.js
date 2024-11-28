const score = 400;
console.log(score);

const balance = new Number(100); 
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(3));

const otherNumber = 23.9080;
console.log(otherNumber.toPrecision(3));

const malik = 100000;
console.log(malik.toLocaleString());

// +++++++++++++++++++ Maths ++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.4));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.0));
console.log(Math.min(4, 5, 8));
console.log(Math.max(3, 2, 1));

console.log(Math.random());

console.log(Math.random()*10 +1);


const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) )
