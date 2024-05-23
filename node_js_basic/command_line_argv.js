function print(string) {
    console.log(`Your string is ${string}.`);
}

let length = process.argv.length;
for(let i = 2; i < length; i++) {
    console.log(process.argv[i]);
}

