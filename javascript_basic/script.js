let a = 23;
let b = '2';
console.log(a + b);

for (let i = 0; i < 5; i++) {
    console.log(a + b + i);
}



function greet(name) {
    console.log('Hello, ' + name + '!');
}
greet('Alice');

function add(a, b) {
    return a + b;
}

try {
    nonExistentFunction();
} catch (error) {
    console.error('An error occurred:', error.message);
} finally {
    console.log('This always runs, regardless of whether an error occurred or not.');
}

function Person(name) {
    this.name = name;
}
const person1 = new Person('Jane Doe');
console.log(person1.name); // Outputs: Jane Doe

const person = {
    name: 'John',
    greet: function() {
        console.log('Hello, ' + this.name);
    }
};
person.greet(); // Outputs: Hello, John

let bs = undefined;
console.log(typeof function(){});
console.log(typeof Symbol("id")); // "symbol"

let myObj = 
{
    name: "yang",
    age: 23
}

let Num = Number("4545");
console.log(Num + 1);
console.log(String("sdf"));

let myBool = false;
console.log(!myBool);