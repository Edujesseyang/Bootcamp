let my_arr = [];
for(let i = 2; i < process.argv.length; i++){
    my_arr.push(process.argv[i]);
}

let my_str = my_arr.join(' ');
console.log(my_str);

const fs = require('fs');
fs.writeFile(`fileName.txt`, my_str, `utf-8`, (err) => {
    err ? console.log(err) : console.log(`Success`);
})