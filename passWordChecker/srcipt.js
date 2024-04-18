const sb = document.getElementById("sb");
let input = document.getElementById("input");
let info = document.getElementById("info");
const congrats = document.getElementById("congrats");
const l1 = document.getElementById("l1");
const l2 = document.getElementById("l2");
const l3 = document.getElementById("l3");
const l4 = document.getElementById("l4");
const l5 = document.getElementById("l5");

function checkPassWord(str, result_output1, result_output2, result_output3, result_output4, result_output5, result) {
    let arr = str.split('');
    console.log(arr);
    let len = arr.length;
    if (len >= 8) { result_output5.style.color = "green"; }
    let upper = false;
    let firstUpper = false;
    let lower = false;
    let number = 0;
    let symbol = false;
    if (arr[0].toUpperCase() == arr[0] && isNaN(str[0])) {
        firstUpper = true;
        result_output1.style.color = "green";
    }
    for (let i = 0; i < len; i++) {
        if (!isNaN(arr[i]) == true) {
            number++;
        }
        if (arr[i].toUpperCase() == arr[i] && isNaN(str[i])) {
            upper = true;
        }
        if (arr[i].toLowerCase() == arr[i] && isNaN(str[i])) {
            lower = true;
        }
        if (arr[i] == '_' || arr[i] == '$' || arr[i] == '@' || arr[i] == '!' || arr[i] == '%' || arr[i] == '&' || arr[i] == '#') {
            symbol = true;
            result_output4.style.color = "green";
        }
    }
    if (number >= 2) { result_output3.style.color = "green"; }
    if (upper == true && lower == true) { result_output2.style.color = "green"; }
    if (upper == true && lower == true && number >= 2 && symbol == true && firstUpper == true && len >= 8) {
        result.innerText = "vaild password.";
        result.style.color = "green";
        return true;
    } else {
        result.innerText = "Invaild password.";
        result.style.color = "red";
        return false;
    }
}

sb.addEventListener("click", function (event) {
    event.preventDefault();
    let input_str = input.value;
    if (checkPassWord(input_str, l1, l2, l3, l4, l5, info)) {
        congrats.innerText = `Congrats! Good job!`;

    };
});