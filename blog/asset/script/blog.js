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

// ********************* get post ***********************************
let post_array = [];
let post_json = localStorage.getItem("post");
let post_obj = JSON.parse(post_json);
post_array.push(post_obj);

let main = document.querySelector("#main");
let main_div = document.querySelector("#main_div");
if (post_array != null) {
    for (let i = 0; i < post_array.length; i++) {
        let new_post = document.createElement("div");
        let new_name = document.createElement("h3");
        new_name.innerText = post_array[i].name;
        new_name.style.textAlign = "left";
        if (localStorage.getItem("theme") == "light") {
            new_name.style.borderBottom = "1px solid black";
        } else {
            new_name.style.borderBottom = "1px solid white";
        }

        let new_title = document.createElement("p");
        new_title.innerText = post_array[i].title;
        new_title.style.textAlign = "left";
        let new_content = document.createElement("p");
        new_content.innerText = post_array[i].text;
        new_content.style.textAlign = "left";
        new_post.append(new_name, new_title, new_content);
        if (main_div != null) {
            main_div.append(new_post);
        }
        main.append(main_div);

    }

}


// ************* go back button *********************
const back_btn = document.querySelector('#back');

back_btn.addEventListener('click', function () {
    window.location.href = "./index.html";


})
// **************************************************