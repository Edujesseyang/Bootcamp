
// ****************** Theme change behave ************************
const theme_btn = document.querySelector('#theme_btn');
const style_link = document.querySelector('#style_link');

let current_theme = 'light';

theme_btn.addEventListener('click', function () {
    if (current_theme == 'light') {
        current_theme = 'Dark';
        style_link.setAttribute('href', './asset/style/dark.css');
        theme_btn.textContent = "Dark Theme";
    }
    else {
        current_theme = 'light';
        style_link.setAttribute('href', './asset/style/light.css');
        theme_btn.textContent = "Light Theme";
    }
})
// ********************************************************theme_btn