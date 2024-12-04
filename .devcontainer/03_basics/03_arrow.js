// This topic 

const one = {
    username: "malik",
    price: 999,

    welcomemessage: function () {
        console.log(`${this.username}, well come `);
        console.log(this);
        
    }
}
one.welcomemessage()
one.username = "ali"
one.welcomemessage()


function chai() {
    let user = "malik"
    console.log(this.user);
}
chai()


const one = function(){
    let user = "malik"
    console.log(this.user);
}
one()

// Arrow

const one = (num1, num2) => {
    return num1 + num2
}
console.log(one(1,3));
        // or

const two = (num1, num2) =>  num1 + num2

console.log(two(1,3));

const three = (num1, num2) =>  ({username: "malik"})

console.log(three);


