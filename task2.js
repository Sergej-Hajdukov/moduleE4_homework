const someVegetables = {
    potatoes: 'brown',
    carrots: 'orange',
    peppers: 'yellow',
};
console.log(someVegetables);

function hasItProp(someStr, someObj) {
    return someObj.hasOwnProperty(someStr);
}

const result = hasItProp('carrots', someVegetables);
console.log(result);
