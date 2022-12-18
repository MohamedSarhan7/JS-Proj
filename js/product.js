import * as cardLib from "./card.js";

const content = document.querySelector(".content");
const cardSpan = document.getElementById("cardspan");

export function createItems(products) {
    for (var x = 0; x < products.length; x++) {
        const myCard = createCard(products[x]);
        const myTitle = createTitle(products[x].title);
        const myPrice = createPrice(products[x].price);
        const myImg = createImg(products[x].img);
        const myBtn = createButton();
        myBtn.addEventListener("click", function () {
            let count = Number(cardLib.getCardCount());
            count++;
            cardLib.saveCardCount(count);
            cardSpan.innerText = `${count}`;
        })
        myCard.appendChild(myTitle);
        myCard.appendChild(myImg);
        myCard.appendChild(myPrice);
        myCard.appendChild(myBtn);
        content.appendChild(myCard);
    }
}

export function createCard(obj) {
    const card = document.createElement("div");
    card.classList.add("card");
    return card;

}

export function createTitle(title) {
    const p = document.createElement("p");

    p.classList.add("title");
    p.innerText = title;
    return p;
}

export function createPrice(price) {
    const p = document.createElement("p");

    p.classList.add("price");
    p.innerText = price;
    return p;
}

export function createImg(productImg) {
    const img = document.createElement("img");
    img.setAttribute("src", productImg);
    return img;
}
export function createButton() {
    const addBtn = document.createElement("button");
    addBtn.classList.add("add-btn");
    addBtn.innerText = "add";
    return addBtn;
}
