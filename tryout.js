let pet = {
    type: `dog`,
    name: `Mia`,
    age: 3,
    color: `gray`
}

console.log(pet);

const cat = new Object();
cat.name = `Lucky`;
cat.age = 3;
cat.color = `white`;

console.log(cat);

function Person(name, age, race) {
    this.name = name;
    this.age = age;
    this.race = race;
}
const person1 = new Person(`jesse`, 35, `asian`);
console.log(person1, `: name = `, person1.name, ` age = `, person1.age, ` race = `, person1.race);

class Pet {
    constructor(type, name, age, color) {        
        this.type = type[0].toUpperCase() + type.slice(1);
        this.name = name.toUpperCase();
        this.age = age + 1;
        this.color = color;
    }
}

const myPet = new Pet(`cat`, `sushi`, 4, `red`);
console.log(myPet, ` is a `,myPet.color, ` `, myPet.type, `, it's name is `, myPet.name, `. It is `, myPet.age, ` years old.`);

let str = `This is text`;
str.shift();
console.log(str);