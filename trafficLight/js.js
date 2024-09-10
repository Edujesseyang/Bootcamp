const red = document.getElementById("red");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");

document.addEventListener("click", (event) => {
    // Check if the clicked element is red, yellow, or green
    if (event.target === red) {
        console.log("Red was clicked!");
        red.style.backgroundColor = "red";
        yellow.style.backgroundColor = "rgb(114, 55, 0)";
        green.style.backgroundColor = "rgb(0, 63, 0)";
        // Add any action for red
    } else if (event.target === yellow) {
        console.log("Yellow was clicked!");
        yellow.style.backgroundColor = "yellow";
        red.style.backgroundColor = "rgb(78, 0, 0)";
        green.style.backgroundColor = "rgb(0, 63, 0)";
        // Add any action for yellow
    } else if (event.target === green) {
        console.log("Green was clicked!");
        green.style.backgroundColor = "rgb(11,211,0)";
        red.style.backgroundColor = "rgb(78, 0, 0)";
        yellow.style.backgroundColor = "rgb(114, 55, 0)";
        // Add any action for green
    }
});

