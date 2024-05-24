let funcObj = {
    func_1: () => {
        console.log(`Hello`);
    },
    func_2: (name = `Jesse`) => {
        console.log(`, `, name);
    },
    func_3: `There is something.`
}


funcObj.func_1();
funcObj.func_2(`Tom`);
console.log(funcObj.func_3);
let arr = [
    { name: `jesse`, age: 32 },
    { name: `chloe`, age: 31 }
]

arr.forEach((that) => {
    console.log(`name is `, that.name, ` age is `);
    console.log(that.age)
});

for (let i = 0; i < arr.length; i++) {
    console.log(`name is `, arr[i].name, ` age is `);
    console.log(arr[i].age)
}