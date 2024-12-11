// const coding = ["js" , "python", "java", "cpp"]

// const values =coding.forEach( (item) => {
//     console.log(item);
//     return item
// })
// console.log(values);

// filter 

const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newnums = mynums.filter( (num) =>  {
        return num > 4
})
console.log(newnums);

const mynums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

mynums1.forEach( (num) => {
    if (num > 4) {
        mynums1.push(num)
    }
})

console.log(mynums1);

  
