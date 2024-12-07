// Array 
const Arr = [0,1, 2, 3, 4, 5]


const Arr2 = ["malik", "ali"]

const Arr3= new Array( 1, 2, 3, 4);

//console.log(Arr[2])

// Arrays method 

Arr3.push(6) // add number in end 
Arr3.pop(6)  // remove number in end 

Arr3.unshift // add number in first 
Arr3.shift   // remove number in first 

// console.log(Arr3.includes(9))
// console.log(Arr3.indexOf(3))

const newArr = Arr3.join()
//console.log(Arr3)
//console.log(newArr)

// slice , splice

console.log("A ", Arr)


const myn1 = Arr.slice(1,3)
console.log(myn1)
console.log("B", Arr)

const myn2 = Arr.splice(1,3);
console.log(myn2);
console.log("c", Arr)
