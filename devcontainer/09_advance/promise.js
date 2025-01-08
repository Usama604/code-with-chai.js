const promiseone = new Promise(function(resolve , reject){
    // Do an async task 
    // DB calls , cryptography, network
    setTimeout(function(){
     console.log("Async task is completed");
     resolve();
    }, 1000)
})

promiseone.then(function(){
    console.log("promise consumed");
})

     // promise two
new Promise(function(resolve, reject){
    setTimeout(function(){
     console.log("Async task 2");
     resolve();
    }, 1000)
}).then(function(){
    console.log("task 2 is resolved");
})

     // promise three
const promisethree = new Promise(function(resolve, reject){
    setTimeout(function(){
    resolve({username: "malik", email: "026@example.com"})
    }, 1000)
})

promisethree.then(function(user){
    console.log(user);
})

// prpmise four 

const promiseFour = new Promise(function (resolve, reject){
    let error = false
    if (!error) {
        resolve({username : "malik", password: "123"})
    } else{
        reject('Error : something went wrong')
    }
})

promiseFour.then((user)=>{
   console.log(user);
   return user.username
}).then((username)=>{
   console.log(username);
}).catch((error)=>{
   console.log(error);
}).finally(()=> console.log("The promise is resolve and reject"))

// promise Five 

const promiseFive = new Promise((resolve, reject) => {
    let error = true
    if (!error) {
        resolve({username : "js", password: "123"})
    } else{
        reject('Error : javascript went wrong')
    }
})

async function consumepromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
       console.log(error);
    }
}
consumepromiseFive()


async function getalluser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
getalluser()


fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) =>{
    response.json()
  })
  .then((json) => {
    console.log(json)
  })
  .catch((error) => console.log(error))