function ElectricalDevs(device){
    this.device = device;
    this.isTurnOn = false;
    this.turnOn = function (){
        if (this.isTurnOn === false){
            console.log(`${device} is on`);
            return this.isTurnOn = true;
        }
    }
    this.turnOff = function () {
        if (this.isTurnOn === true) {
            console.log(`${device} is off`);
            return this.isTurnOn = false;
        }
    }
}

ElectricalDevs.prototype.getWattage = function(amperage){
    console.log(`Wattage is ${amperage * 220} Watt`)
}

function Televisions(brand, screenSize){
    this.brand = brand;
    this.screenSize = screenSize;
    this.changeChannels = function (){
        console.log(`${brand} TV channel switched`);
    }
}

function Notebooks(brand, screenSize) {
    this.brand = brand;
    this.screenSize = screenSize;
    this.isLidOn = false;
    this.lidOn = function (){
        if (this.isLidOn === false){
            console.log(`${brand} lid is on`);
            return this.isLidOn = true;
        }
    }
    this.lidOff = function () {
        if (this.isLidOn === true) {
            console.log(`${brand} lid is off`);
            return this.isLidOn = false;
        }
    }
}

Televisions.prototype = new ElectricalDevs('Television');
Notebooks.prototype = new ElectricalDevs('Notebook');

const samsungTV = new Televisions('Samsung', 42);
const asusNB = new Notebooks('ASUS', 15);

samsungTV.turnOn();
samsungTV.getWattage(0.6);
samsungTV.changeChannels();

asusNB.lidOn();

console.log(samsungTV);
console.log(`Is notebook ${asusNB.brand} on: ${asusNB.isTurnOn}, ${asusNB.brand} is ${asusNB.device}`);
