const obj = {
    a: 1,
    b: 2,
    c: [3, 4, 5]
}

const { a: my_a, b: my_b, c: my_c } = obj;

console.log(my_a);
console.log(my_b);
console.log(my_c);