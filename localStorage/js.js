const number = document.getElementById('number');
const btn = document.getElementById('btn');
const text = document.getElementById('text');
const subtext = document.getElementById('subtext');

let count = localStorage.getItem('countValue');   // set count to whatever local storage store
number.innerText = count;  

const input1 = document.querySelector('#ipt1');
const input2 = document.querySelector('#ipt2');
const input3 = document.querySelector('#ipt3');


btn.addEventListener('click', function () {
    if (count < 10) {
        count++;
        number.innerText = count;
        localStorage.setItem('countValue', count);
    } else {
        count = 0;
        number.innerText = count;
        localStorage.setItem('countValue', count);
    }

    let obj = {
        name: input1.value,
        age: input2.value,
        gender : input3.value
    }  // create a obj get info from inputs

    let json_string = JSON.stringify(obj);   // convert obj to a json string.
    localStorage.setItem('info', json_string);  // store that string into local storage.
    text.innerText = json_string;    // display

});

let json_string_returned = localStorage.getItem('info');    // get the string from local storage.
let info_obj = JSON.parse(json_string_returned);    // convert that string back to obj.
subtext.innerText = `Name: ` + info_obj.name + `. Age: ` + info_obj.age + ` Gender: ` + info_obj.gender;    // display those info on the page.
