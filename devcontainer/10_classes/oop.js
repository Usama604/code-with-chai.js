const user = {
    username: "malik",
    loginCount : 8,
    signedIn : true,

    getuserDetalis: function(){
        //console.log("user details from database");
        //console.log(`username : ${this.username}`);
        //console.log(this);
    }
}
// console.log(user.username);
// console.log(user.getuserDetalis());

function User(username, loginCount, isLoggedIN){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIN = isLoggedIN

     this.greeting = function (){
        console.log(`welcome ${this.username}`);
     }
    return this
}

const userone = new User ("malik", 12, true)
const usertwo = new User ("usama", 11, false)

console.log(userone);
console.log(usertwo);