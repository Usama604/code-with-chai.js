// let myname = "malik    "
// let mychannel = "chai    "

// console.log(mychannel.truelength);


const myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",


    getspiderpower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}
Object.prototype.malik = function(){
    console.log(`malik is present is always object`);
}

Array.prototype.heymalik = function(){
    console.log(`Hey says malik`);
}

// heroPower.malik()
myHeros.malik()
myHeros.heymalik()
// heroPower.heymalik()


// inheritance 

const user = {
    username : "malik",
    email : "hey@gmail.com"
}

const Teacher = {
    makevideo : true
}

const TeachingSuppoert = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : "js assignment",
    fulltime : true,
    __proto__ : TeachingSuppoert
}

Teacher.__proto__ = user 
Object.setPrototypeOf(TeachingSuppoert, Teacher)


let anotherusername = "malikusama     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`true length is : ${this.trim().length}`);
}

anotherusername.trueLength()
"malik".trueLength()