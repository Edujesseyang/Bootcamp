


const myArray = [`a`, `b`, `c`, `d`, `e`];

const upperCase = (array) => {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].toUpperCase();
    }
}

const lowerCase = (array) => {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].toLowerCase();
    }
}
let myObj = {
    name : `Yang`,
    age: 12,
    address : `here there here.`
}

console.log(`The original array:`);
console.log(myArray);

upperCase(myArray);
console.log(`All upper case:`);
console.log(myArray);

lowerCase(myArray);
console.log(`All lower case:`);
console.log(myArray);

myArray.pop();
console.log(myArray);


let bool = false;
let a = (bool = true) ? `This is true` : `This is false`; 
console.log(a);

console.log(myObj.address);