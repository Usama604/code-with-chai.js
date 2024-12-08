// for of loops

// ["", "", ]
// [{}, {}, {}]

const myarr = [1,2, 3, 4, 5];

for (const num of myarr) {
    //console.log(num);
}

const greetings = "Hello world" 

for (const greet of greetings) {
    //console.log(`value : ${greet}`);
    
}

// Maps

const map = new Map()
map.set(`pak`, `pakistan`)
map.set(`in`, `indian`)
map.set(`fr`, `franc`)

console.log(map);

for (const [key, val] of map) {
    console.log(key, val);
    
}

// object not use in (for of loop)
const myobj = {
    'pak': 'pakistan',
    'in': 'indian'
}
console.log(myobj);

for (const key of myobj) {
    console.log(key);
    
}

