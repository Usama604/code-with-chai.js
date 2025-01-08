class  user {
    constructor(username) {
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class teacher extends user {
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }

    addcourse(){
        console.log(`A new course is add by ${this.username}`);
    }
}
const chai = new teacher("teacher", "teacher@gmail.com", "123")
const maslachai = new user ("maslachai")
maslachai.logMe()
chai.addcourse()