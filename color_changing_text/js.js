const text = document.getElementById("c1");
text.style.color = "blue";
let color = "red"
setInterval(() => {
    text.style.color = color;
    if (color == "red") {
        color = "blue";
    } else {
        color = "red";
    }
}, 1000);

const t1 = document.getElementById("t1");
const t2 = document.getElementById("t2");
const t3 = document.getElementById("t3");
const t4 = document.getElementById("t4");
const t5 = document.getElementById("t5");
const t6 = document.getElementById("t6");
const t7 = document.getElementById("t7");

let color_arr = ["red", "orange", "yellow", "green", "aqua", "blue", "purple"];
let size_arr = ["10px", "15px", "20px", "25px", "30px", "35px", "40px"];

setInterval(() => {
    t1.style.color = color_arr[0];
    t1.style.fontSize = size_arr[0];

    t2.style.color = color_arr[1];
    t2.style.fontSize = size_arr[1];

    t3.style.color = color_arr[2];
    t3.style.fontSize = size_arr[2];

    t4.style.color = color_arr[3];
    t4.style.fontSize = size_arr[3];

    t5.style.color = color_arr[4];
    t5.style.fontSize = size_arr[4];

    t6.style.color = color_arr[5];
    t6.style.fontSize = size_arr[5];

    t7.style.color = color_arr[6];
    t7.style.fontSize = size_arr[6];
    if (color_arr[0] == "red") {
        color_arr = ["purple", "blue", "aqua", "green", "yellow", "orange", "red"];
        size_arr = ["10px", "15px", "20px", "25px", "30px", "35px", "40px"];
    } else {
        color_arr = ["red", "orange", "yellow", "green", "aqua", "blue", "purple"]
        size_arr = ["40px", "35px", "30px", "25px", "20px", "15px", "10px"];
    }
}, 500);
