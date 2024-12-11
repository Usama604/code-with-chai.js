// reduce 

const numbers = [1, 2, 3]

// const newnums = numbers.reduce ( function (acc, currval) {
//     console.log(`acc : ${acc}, curr : ${currval}`);
//       return acc + currval
// }, 0)

const newnums = numbers.reduce( (acc, currval) => acc + currval , 0)

console.log(newnums);


// example 

const shopingcart = [
    {
        itemname : "js course",
        price : 2999
    },
    {
        itemname : "py course",
        price : 999
    },
    {
        itemname : "mobile dev course",
        price : 5999
    },
    {
        itemname : "data science course",
        price : 12999
    }
]

const totalprice = shopingcart.reduce( function (acc, item) {
    console.log(`acc : ${acc}, item : ${item}`);
    
    return  acc + item.price 
}, 0)
 

console.log(totalprice);
