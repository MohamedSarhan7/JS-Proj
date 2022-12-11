
var up = document.getElementById("top");
up.addEventListener("click", function (e) {

    window.scrollTo({ top: 0, behavior: 'smooth' });

});
function getCardCount() {

    return JSON.parse(localStorage.getItem("cardcount") || "");
}

function saveCardCount(num) {
    localStorage.setItem("cardcount", JSON.stringify(num));

}