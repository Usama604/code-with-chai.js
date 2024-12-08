// for in loop

const myobject = {
    js: "javascript",
    cpp: "c++",
    rb : "Ruby",
    swift: "swift for apple"
}

for (const key in myobject) {
    console.log(`${key} shorcut ${myobject[key]}`);
}

// array in for in loops

const programming = ['js', 'rb', 'cpp', 'swift']

for (const key in programming) {
   console.log(programming[key]);
   
}

