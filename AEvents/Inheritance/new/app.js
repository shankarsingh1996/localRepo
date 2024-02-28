class ToyotaCar{
    start(){
        console.log("start the method");
    }
    stop(){
        console.log("Stop the mehtod");
    }

    setBrand(brand){
        this.brandName=brand;
    }
}

let fortuner=new ToyotaCar();
fortuner.setBrand("Fortuner");
let audi=new ToyotaCar();
audi.setBrand("Audi");
