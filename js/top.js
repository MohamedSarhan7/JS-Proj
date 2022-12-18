var up = document.getElementById("top");
up.addEventListener("click", function (e) {

    window.scrollTo({ top: 0, behavior: 'smooth' });

});

// let logo = document.querySelector("#logo");
function logoClick(){
    open("../index.html","_self");
}