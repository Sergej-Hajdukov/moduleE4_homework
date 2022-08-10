const vegetables = {
    tomatoes: 'red',
    cucumbers: 'green'
}
const moreVegetables = Object.create(vegetables);
moreVegetables.potatoes = 'brown';
moreVegetables.carrots = 'orange';
moreVegetables.peppers = 'yellow';

function getAllProp(obj) {
    console.log(`Все свойства объекта:`)
    for (let key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }
}

function getOwnProp(obj) {
    console.log(`Собственные свойства объекта:`)
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key}: ${obj[key]}`);
        }
    }
}

getOwnProp(moreVegetables);
getAllProp(moreVegetables);
