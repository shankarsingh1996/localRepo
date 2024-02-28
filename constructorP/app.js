let Data="Seceret information";
class User{
    constructor(name, email){
      this.name=name;
      this.email=email;
    }

    viewDAta(){
        console.log("data :",Data);
    }
}

class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        Data ="This new Secret Information";
    }
}

let student1=new User("shankar", "shanku@gmail");
let student2=new User("Bhole","bholalen#gmail");

let teacher=new User("RAdhe", "Goddess@gmail.com");

let admin1=new Admin("adminBor", "admin@gmail.com");