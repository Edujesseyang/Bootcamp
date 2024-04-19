const number = document.getElementById('number');
const btn = document.getElementById('btn');

let count = localStorage.getItem('countValue');
number.innerText = count;

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
})