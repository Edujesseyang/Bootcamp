const sb = document.getElementById("sb"); // submit button
const cb = document.getElementById("cb");
const input = document.getElementById("input");  // input box
const input2 = document.getElementById("input2");  // input box

let info = document.getElementById("info");

function add(x, y) {
    return x + y;
}


sb.addEventListener("click", function (event) {
    event.preventDefault();
    let xNum = input.value;
    let yNum = input2.value;
    let total = Number(xNum) + Number(yNum);
    console.log(xNum, yNum, total);
    info.innerText = `${xNum} + ${yNum} = ${total}`;
});





cb.addEventListener("click", function () {

    alert("You can NOT cancel!");
});


