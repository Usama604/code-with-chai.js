// map 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const mynums = numbers.map( (num) => num + 10)

console.log(mynums);

// ak sath two or three maps aur filter laga saktha hnn 

const  game = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newgmae = game
             .map( (num) => num * 10)
             .map( (num) => num + 1)
             .filter( (num) => num >=41)
console.log(newgmae);


