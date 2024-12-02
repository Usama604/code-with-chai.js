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