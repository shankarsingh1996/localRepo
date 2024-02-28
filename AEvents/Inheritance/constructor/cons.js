class CarTample{
    constructor(brand, milage){
        console.log("First call the constructor: ");
        this.brand=brand;
        this.milage=milage;

    }
    start(){
        console.log("This is start mehtod");
    }

    stop(){
        console.log("this is a stop Method:");
    }
}

let fortuner=new CarTample("Fortuner Brand",29); // consturctor
console.log(fortuner);

let auddi=new CarTample("Auddi Brand",39);  // consturctor
console.log(auddi);

let bmw=new CarTample("BMW Brand",49);
console.log(bmw);