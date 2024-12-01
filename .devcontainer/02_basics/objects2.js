// singleton objects

const tinderuser = new Object();
const tinderuser1 = {};

tinderuser.emmail = "amlik@gmailm.com";
tinderuser.id = "123abc";
tinderuser.location = "multan"

//console.log(tinderuser.id);

const newuser = {
    emmail: "malik@gmail.com",
    fullname: {
        userfullname:{
        firstname: "malik",
        lastname: "usama"
        }
    }
}

//console.log(newuser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}

const obj2 = {3: "c", 4: "e"}

const obj3 = Object.assign(obj1,obj2);

//console.log(obj3);

const obj4 = {...obj1, ...obj2}

//console.log(obj4)

const user = [
    {
        id: "123",
        emmail: "m@gmail.com"
    },
    {
        fullname: "mu",
        location: "mulyan"
    },
    {
        fullname: "mu",
        location: "multan"
    }
] 
//console.log(user[2].location)

console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('location'));

