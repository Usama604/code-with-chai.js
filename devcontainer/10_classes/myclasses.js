// class user {
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encriptpassword(){
//         return `${this.password}abc`
//     }
//     changeusername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new user("malik", "hey@gmail.com", "123")
// console.log(chai.encriptpassword());
// console.log(chai.changeusername());

// Behind the scene 

function user(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

user.prototype.encriptpassword = function(){
     return `${this.password}123`
}
user.prototype.changeusername = function(){
    return `${this.username.toUpperCase()}`
}
const tea = new user("malik", "tea@gmail.com", "abc")
console.log(tea.encriptpassword());
console.log(tea.changeusername());