const arr = [
    "../assets/slider-imgs/1.jpg",
    "../assets/slider-imgs/2.jpg",
    "../assets/slider-imgs/3.jpg",
    "../assets/slider-imgs/4.jpg"]

const img = document.getElementById("slider-img");
const slideLeftBtn = document.getElementById("left-btn");
const slideRightBtn = document.getElementById("right-btn");
slideLeftBtn.addEventListener("click",back);
slideRightBtn.addEventListener("click",forward);

var i = 0;
img.setAttribute("src", arr[i]);

function forward() {
    i++;
    if (i >= arr.length) {
        i = 0;
    }
    img.setAttribute("src", arr[i]);
}

function back() {
    i--;
    if (i < 0) {
        i = (arr.length - 1);
    }
    img.setAttribute("src", arr[i]);
}

let myInterval;

var play = function () {
    myInterval = setInterval(forward, 3500);
}

play();