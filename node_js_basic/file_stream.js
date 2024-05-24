// part 1 : get command line argument in to a string.
let my_arr = [];
for (let i = 2; i < process.argv.length; i++) {
    my_arr.push(process.argv[i]);
}
let my_str = my_arr.join(' ');
console.log(my_str);



// part 2 : append the string into the target file.
const fs = require('fs');
const fileAppend = (content) => {
    fs.appendFile(`fileName.txt`, content + ` \n`, `utf-8`, (err) => {
        err ? console.log(err) : console.log(`Success`);
    })
}

fileAppend(my_str);


// writeFile can replace the appendFile if need to replace the data every time calling the prog
// const fs = require('fs');
// fs.writeFile(`fileName.txt`, my_str, `utf-8`, (err) => {
//     err ? console.log(err) : console.log(`Success`);
// })
