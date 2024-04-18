const sb = document.getElementById("sb");
let input = document.getElementById("input");
let info = document.getElementById("info");

sb.addEventListener("click", function (event) {
    event.preventDefault();
    let str = input.value;
    console.log(str);
    let arr = str.split('');
    console.log(arr);
    let len = arr.length;
    let upper = false;
    let lower = false;
    let num = false;
    for (let i = 0; i < len; i++) {
        if (arr[i].isUpperCase() == true) {
            upper = true;
        }
        if (arr[i].isLowerCase() == true) {
            lower = true;
        }
        if (arr[i].isNumber() == true) {
            num = true;
        }
    };

    if (upper == true && lower == true && num == true) {
        info.innerText = "This is vail password.";
    } else {
        info.innerText = "This is in vail password.";
    }
});