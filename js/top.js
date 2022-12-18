var up = document.getElementById("top");
up.addEventListener("click", function (e) {

    window.scrollTo({ top: 0, behavior: 'smooth' });

});

let logo = document.querySelector("#logo");
logo.addEventListener("click", () => {
    open("../index.html","_self");
});