import * as cardLib from "./card.js";
const cardSpan = document.getElementById("cardspan");
cardSpan.innerText = `${cardLib.getCardCount()}`;

const form = document.querySelector("#form");
let userName = form.name;
let email = form.email;
let textArea = form.textarea;
// console.log(textArea);
let emailRegex = /^[a-zA-z]{3}@123.[a-z]{2,3}/;

const nameErr = document.querySelector(".name-err");
const emailErr = document.querySelector(".email-err");
const textAreaErr = document.querySelector(".msg-err");
userName.addEventListener("change", () => {
    checkUserName();
})

email.addEventListener("change", () => {
    checkEmail();
})

textArea.addEventListener("change", () => {
    checkTextArea();
})
function checkUserName() {
    if (userName.value.length <= 6 || userName.value.length >= 20) {
        nameErr.style.display = "block";
        return true;
    } else {
        nameErr.style.display = "none";

        return false;
    }
}

function checkEmail() {

    if (emailRegex.test(email.value) != true) {
        emailErr.style.display = "block";
        return true;
    } else {
        emailErr.style.display = "none";
        return false;
    }
}
function checkTextArea() {
    if (textArea.value.length < 10 || textArea.value.length > 200) {
        textAreaErr.style.display = "block";
        return true;
    } else {
        textAreaErr.style.display = "none";
        return false;
    }
}
// pattern = "^[a-zA-z]{3}@123.[a-z]{2,3}"

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(checkEmail()&&checkUserName()&&checkTextArea()){
        console.log("True");
    }else{
     location.reload();
    }

})