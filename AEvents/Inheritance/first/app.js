class Parent{

    religion(){
        this.species="homo sepian";
        console.log("he is a sanatni boy:")
    }

    cultural(){
        console.log("He is very cultural boy:");
    }
}

class Child extends Parent{
    respect(){
        console.log("HE is following a parents Steps")
    }
    cultural(){  // if we have same method in  parent or child class that time Child class will be invoked
        console.log("He is very cultural boy:");
    }
}

let shankarObj=new Child();