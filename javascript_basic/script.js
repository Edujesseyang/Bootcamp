let name = 'Alice'; let age = 23;
let greeting = `Hello, ${name}!`; // "Hello, Alice!"

let multiLineString = `This is a string
that spans multiple
lines without needing special characters.`;

function tag(strings, value) {
  return `Tagged: ${strings[0]}${value.toUpperCase()}`;
}
let taggedString = tag`Hello, ${name}`; // "Tagged: Hello, ALICE"
console.log(taggedString);

function myFunc(a, b) 
{
    return `a : ${a} b : ${b}`;
}
let w = `24`;
let info = myFunc`banana${w}`;
console.log(info);

let str = "Hello, world!"; 
console.log(str.charAt(1)); // "e"
console.log(str.concat(" How are you?")); // "Hello, world! How are you?"
console.log(str.includes("world")); // true
console.log(str.indexOf("o")); // 4
console.log(str.slice(7, 12)); // "world"
console.log(str.split(", ")); // ["Hello", "world!"]
console.log(str.substring(7, 12)); // "world"
console.log(str.toLowerCase()); // "hello, world!"
console.log(str.toUpperCase()); // "HELLO, WORLD!"
console.log(" Hello, world! ".trim()); // "Hello, world!"
console.log(str.replace("world", "everyone")); // "Hello, everyone!"
console.log(str.length);