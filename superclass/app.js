class Parent{
  constructor(){
    console.log("parent constructor;"); // second output sequence
    this.species="homo sepian";
  }
    religion(){
        this.species="homo sepian";
        console.log("he is a sanatni boy:")
    }

    cultural(){
        console.log("He is very cultural boy:");
    }
}

class Child extends Parent{

    constructor(karam) {
        console.log("child constructor");   // first output secquence
        super(); // to invoke parent class Constructor
        this.karam=karam;
        console.log("EXit the child constructor") // third output will show
    }

    respect(){
        console.log("HE is following a parents Steps")
    }
    cultural(){  // if we have same method in  parent or child class that time Child class will be invoked
        console.log("He is very cultural boy:");
    }
}

let shankarObj=new Child("sanatn Dharm");