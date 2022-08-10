class ElectricalDevs {
    constructor(device) {
        this.device = device;
        this.isTurnOn = false;
    }
    turnOn() {
        if (this.isTurnOn === false){
            console.log(`${this.device} is on`);
            return this.isTurnOn = true;
        }
    }
    turnOff () {
        if (this.isTurnOn === true) {
            console.log(`${this.device} is off`);
            return this.isTurnOn = false;
        }
    }
    getWattage(amperage){
        console.log(`${this.device} wattage is ${amperage * 220} Watt`)
    }
}

class Televisions extends ElectricalDevs {
    constructor(brand, screenSize, device, isTurnOn) {
        super(device, isTurnOn);
        this.brand = brand;
        this.screenSize = screenSize;
    }
    changeChannels() {
        console.log(`${this.brand} TV channel switched`);
    }
}

class Notebooks extends ElectricalDevs {
    constructor(brand, screenSize, device, isTurnOn) {
        super(device, isTurnOn);
        this.brand = brand;
        this.screenSize = screenSize;
        this.isLidOn = false;
    }
    lidOn() {
        if (this.isLidOn === false){
            console.log(`${this.brand} lid is on`);
            return this.isLidOn = true;
        }
    }
    lidOff() {
        if (this.isLidOn === true) {
            console.log(`${this.brand} lid is off`);
            return this.isLidOn = false;
        }
    }
}

const samsungTV = new Televisions('Samsung', 42, 'Television');
const asusNB = new Notebooks('ASUS', 15, 'Notebook');

samsungTV.turnOn();
samsungTV.getWattage(0.6);
samsungTV.changeChannels();

asusNB.lidOn();

console.log(samsungTV);
console.log(`Is notebook ${asusNB.brand} on: ${asusNB.isTurnOn}, ${asusNB.brand} is ${asusNB.device}`);
