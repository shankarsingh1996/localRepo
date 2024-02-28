class Person {
    constructor(name){
            this.name=name;
        this.hoies="homosepians";
    }
    eat(){
        console.log("He is a eating:")
    }

}

class Engineer extends Person{
  constructor(name){
    super(name);
  }
    work(){
        console.log("He is Working:")
    }

}

let object=new Engineer("shankar");