window.addEventListener('beforeunload', function () {
    // Clear local storage
    localStorage.clear();
});


// ********************* Part 1 ****************************

const number = document.getElementById('number');
const btn = document.getElementById('btn');
const full = document.getElementById('full');
let count = localStorage.getItem('countValue');   // set count to whatever local storage store
number.innerText = count;

btn.addEventListener('click', function () {
    if (count < 10) {
        count++;
        number.innerText = count;
        localStorage.setItem('countValue', count);
    } else {
        count = 30;
        number.innerText = count;
        localStorage.setItem('countValue', count);
        full.innerText = `The Waiting list is full.`;
    }
});

// ********************* Part 2 ****************************

const input1 = document.querySelector('#ipt1');
const input2 = document.querySelector('#ipt2');
const input3 = document.querySelector('#ipt3');
const btn2 = document.getElementById('btn2');
const text = document.getElementById('text');
const subtext = document.getElementById('subtext');

btn2.addEventListener('click', function () {
    let total_info = [];
    let obj = {
        name: input1.value,
        age: input2.value,
        gender: input3.value
    }  // create a obj get info from inputs
    total_info.push(obj);
    let json_string = JSON.stringify(total_info) || [];   // convert obj to a json string.
    localStorage.setItem('info', json_string);  // store that string into local storage.
    text.innerText = obj.name + ` Added.`;    // display
})

const displayBtn = document.querySelector('#btn3');

displayBtn.addEventListener('click', function () {
    let json_string_returned = localStorage.getItem('info');    // get the string from local storage.
    let info_arr = JSON.parse(json_string_returned) || [];    // convert that string back to obj.
    // console.log(info_arr);
    subtext.innerText = ``;
    if (info_arr !== null) {
        for (let i = 0; i < info_arr.length; i++) {
            subtext.innerText += `Group ${i + 1}: \nName: ` + info_arr[i].name + `.\nSize: ` + info_arr[i].age + `.\nPhone Number: ` + info_arr[i].gender + `\n\n`;
            // display those info on the page.
        }
    } else {
        subtext.innerText = `No Waiting List Added`;
    }

})

const setTable = document.querySelector('#setTable');
setTable.addEventListener('click', function () {
    let json_string_returned = localStorage.getItem('info');    // get the string from local storage.
    let info_arr = JSON.parse(json_string_returned) || [];    // convert that string back to obj.
    console.log(info_arr);
    

    if (info_arr !== null) {
        info_arr = info_arr.shift();
    } else {
        subtext.innerText = `No Waiting List Added`;
    }
    console.log(info_arr);
    
    let new_info = JSON.stringify(info_arr);
    localStorage.setItem('info', new_info);  // store that string into local storage.
    text.innerText = ` Deleted`;    // display


})

// FIX this mother fucker shit!!!!!