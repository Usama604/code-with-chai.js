const useremail = []

if (useremail) {
    console.log("my email");
} else{
    console.log("mari email nhi hai");
}

// falsy value 
// 0, -0, Bigint 0n, "", null, unidefined, NaN

// truthy value
// "0", 'false', " ", [], {}, function(){}

// check array empty

if (useremail.length===0) {
    console.log("Array is empty");
}

const emptyobj = {}

if (Object.keys(emptyobj).length===0) {
    console.log("oblect is empty");
}

// Nullish Coalescing Operator (??): null , unidefined

let val1;
// val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15
//val1 = null ?? 20 ?? 25

console.log(val1);

// Terniary Operator

// condition ? true: false

const myage = 19
myage <= 18 ? console.log("no"): console.log("yes");


