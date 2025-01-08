function setusername(username){
    // complex DB calls 
    this.username = username
}


function creatuser(username, email, password){
    setusername.call(this , username)
    this.email = email,
    this.password = password
}

const one = new creatuser ("malik", "m12@gmail.com", "123")
console.log(one);