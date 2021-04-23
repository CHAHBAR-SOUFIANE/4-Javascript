class user {
    constructor(na,em){
         this.name = na;
         this.email = em;
    }
    sayHello(){
        console.log(this.name);
        alert(this.name);
        return 'Hello '+this.name;
    }
}

class admin extends user {
    constructor(na,em){
        super(na,em);
    }
}
//create object from class user
let user1 = new user("Ahmad", "Ahmad@gmail.com");

//create object from class user
let admin1 = new admin("Jawad","Jawad-admin@hotmail.com");

console.log(user1);

console.log(admin1);
