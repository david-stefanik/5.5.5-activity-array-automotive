//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class car extends VehicleModule{
    constructor (make, model, year, color, mileage){
        super(make, model, year, color, mileage)
        this.maxpassengers=5
        this.passengers=0
        this.numberofwheels=4
        this.maxspeed=120
        this.fule=50
        this.sceduleservice=false
        this.mileage=0
        }
    checkservice(this.mileage>30000) {
        this.checkservice=true
        return this.checkservice
    }   
}
Start(){
    if (this.fule>0){
        console.log (`engine has started`)
        
    }
    else {
        console.log (`no fule`) 
    }
}
passengers(){
    if (passengers >5){
    console.log(`hey get your elbow out of me `)
}
else {console.log (`i have room`)}
}

