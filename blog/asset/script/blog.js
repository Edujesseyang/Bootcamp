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
let post_array = JSON.parse(localStorage.getItem("post"));
let main = document.querySelector("#main");
let main_div = document.querySelector("#main_div");
if (post_array != null) {
    for (let i = 0; i < post_array.length; i++) {
        // defined elements
        let new_post = document.createElement("div");
        let new_name = document.createElement("h3");
        let new_title = document.createElement("p");
        let new_content = document.createElement("p");

        // assign value to elements
        if (post_array[i].name == "") {
            post_array[i].name = "Unknown User";
        } else {
            new_name.innerText = post_array[i].name;
        }
        if (post_array[i].title == "") {
            post_array[i].title = "No title";
        } else {
            new_title.innerText = `Topic: ` + post_array[i].title;
        }
        if (post_array[i].text == "") {
            post_array[i].text = "The user did not leave anything.";
        } else {
            new_content.innerText = `Post:\n\n` + post_array[i].text;
        }

        // adding styles:
        new_post.style.height = "auto";
        new_post.style.backgroundImage = "none";   // can be remove for fancy looking
        new_name.style.borderBottom = "1px solid gray";
        new_name.style.textAlign = "left";
        new_title.style.fontWeight = "bolder";
        new_title.style.fontFamily = "none";
        new_title.style.fontSize = "20px";
        new_title.style.textAlign = "left";
        new_title.style.borderBottom = "1px dashed gray";
        new_content.style.fontFamily = "none";
        new_content.style.textAlign = "left";

        // append all elements to the page
        new_post.append(new_name, new_title, new_content);
        if (main_div != null) {
            main_div.append(new_post);
        }
        main.append(main_div);
    }
}
// *****************************************************************

// ************************ go back button ************************
const back_btn = document.querySelector('#back');
back_btn.addEventListener('click', function () {
    window.location.href = "./index.html";
})
// **************************************************


// ************ delete ********************
const delete_btn = document.querySelector("#delete");
delete_btn.addEventListener("click", function () {
    post_array.pop();
    localStorage.setItem("post", JSON.stringify(post_array));
    location.reload();
})
// *****************************************