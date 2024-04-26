
// ****************** Theme change behave (theme_btn) ************************
const theme_btn = document.querySelector('#theme_btn');
const style_link = document.querySelector('#style_link');

let current_theme = localStorage.getItem("theme");
if (current_theme == 'dark') {
    style_link.setAttribute('href', './asset/style/dark.css');
} else {
    style_link.setAttribute('href', './asset/style/light.css');
}

theme_btn.addEventListener('click', function () {
    current_theme = localStorage.getItem("theme");
    if (current_theme == 'light') {
        style_link.setAttribute('href', './asset/style/dark.css');
        theme_btn.textContent = "Dark Theme";
        localStorage.setItem('theme', "dark");
    }
    else {
        style_link.setAttribute('href', './asset/style/light.css');
        theme_btn.textContent = "Light Theme";
        localStorage.setItem('theme', "light");
    }
});
// ****************************************************************************

// ******************* Page switch behave (submit_btn) ************************
const submit_btn = document.querySelector('#submit_btn');
const input_1 = document.querySelector('#ip1');
const input_2 = document.querySelector('#ip2');
const input_3 = document.querySelector('#ip3');

if (localStorage.getItem("post") == null) {
    post_array = [];
}
else {
    post_array = JSON.parse(localStorage.getItem("post"));
}
console.log(post_array);

submit_btn.addEventListener("click", function () {

    window.location.href = "./blog.html";
    let post_obj = {
        name: input_1.value,
        title: input_2.value,
        text: input_3.value
    }
    post_array.push(post_obj);
    localStorage.setItem("post", JSON.stringify(post_array));
});
// *****************************************************************************

