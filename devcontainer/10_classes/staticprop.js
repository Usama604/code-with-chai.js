class user {
    constructor(username) {
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }

    static creatId(){
        return `123`
    }
}

const malik = new user ("malikUsama")
// console.log(malik.creatId());


class teacher extends user {
    constructor(username, email, ) {
        super(username)
        this.email = email
    }
}

const iphone = new teacher ("iphone", "i@Phone.com")
console.log(iphone.creatId());