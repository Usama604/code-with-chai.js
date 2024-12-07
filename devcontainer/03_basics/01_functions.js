function myname() {
    console.log("k");
    console.log("f");
    console.log("g");
    console.log("h");
    console.log("l");
}
myname()

// function myname(num1, num2) {
//     console.log(num1+num2);
// }
 
// myname(3, 2)

function myname(num1, num2) {
    //let reslut =num1+num2;
    //return reslut
    return num1 + num2
}
const reslut =  myname(3,4);
//console.log("Result:", reslut);

function myname(username) {
    if (!username) {
      console.log("enter the  name please")
      return
}
      return `${username} just logged in`
}

console.log(myname("malik"))

function calculatecartprice(val1, val2, ...num1){
    return num1
}
console.log(calculatecartprice(200, 400, 500, 600, 800));

// objects convert into functions

const user = {
    user: "malik",
    age: 17

}

function handleobject(anyobject){
    console.log(`user ${anyobject.user} and age ${anyobject.age}`);
}
handleobject(user)


// Arrays convert into functions

const array = [100, 200, 300, 400]

function newarray(getarray){
    return getarray[2]
}
console.log(newarray(array));