// singleton 
// object.creat

// object  literals

const mysmy = Symbol("key1")

const jsuser = {
    name: "malik",
    age: 18,
    [mysmy]: "key1",
    email: "7871580mlk@gmail.com",
    location: "Haripur",
    Days: ["monday", "Friday"]
}

//console.log(jsuser.name);
//console.log(jsuser["name"]);
//console.log(jsuser[mysmy]);

jsuser.email = "malik@gmail.com";
//Object.freeze(jsuser);
jsuser.email = "malik7871@gmail.com";
//console.log(jsuser);

jsuser.greeting = function(){
    console.log("Hello world")
}

jsuser.greetingtwo = function(){
    console.log(`Hello world, ${this.name}`)
}

console.log(jsuser.greeting())
console.log(jsuser.greetingtwo())

