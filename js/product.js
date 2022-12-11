class Product {
    constructor(title, img, price, category) {
        this.title = title;
        this.img = img;
        this.price = price;
        this.category = category;

    }
}

var products = new Array();
let k;
for (k = 1; k <= 9; k++) {
    products.push(new Product(`table ${k}`, `./assets/tables/${k}.jpg`, '$10.00', "table"));

}


for (k = 1; k <= 7; k++) {
    products.push(new Product(` pen ${k} `, `./assets/pens/${k}.jpg`, '$5.60', "pen"));

}


for (k = 1; k <= 5; k++) {
    products.push(new Product(` headphone ${k}`, `./assets/headphones/${k}.jpg`, '$5.60', "headphones"));

}


// console.log(products);
const content = document.querySelector(".content");
const cardSpan=document.getElementById("cardspan");
cardSpan.innerText = `(${getCardCount()})`;


function createItems(products){
    for(var x=0;x<products.length;x++){
        const myCard = createCard(products[x]);
        const myTitle= createTitle(products[x].title);
        const myPrice=createPrice(products[x].price);
        const myImg=createImg(products[x].img);
        const myBtn=createButton();
        myBtn.addEventListener("click", function(){
            let count = Number(getCardCount());
            count++;
            saveCardCount(count);
            cardSpan.innerText = `(${count})`;
        })
        myCard.appendChild(myTitle);
        myCard.appendChild(myImg);
        myCard.appendChild(myPrice);
        myCard.appendChild(myBtn);
        content.appendChild(myCard);
    }
}

function createCard(obj) {
    const card = document.createElement("div");
    card.classList.add("card");
    return card;

}

function createTitle(title) {
    const p = document.createElement("p");

    p.classList.add("title");
    p.innerText = title;
    return p;
}

function createPrice(price) {
    const p = document.createElement("p");

    p.classList.add("price");
    p.innerText = price;
    return p;
}

function createImg(productImg) {
    const img = document.createElement("img");
    img.setAttribute("src", productImg);
    return img;
}
function createButton() {
    const addBtn = document.createElement("button");
    addBtn.classList.add("add-btn");
    addBtn.innerText = "add";
    return addBtn;
}


function getCardCount() {

    return JSON.parse(localStorage.getItem("cardcount") || "");
}

function saveCardCount(num) {
    localStorage.setItem("cardcount", JSON.stringify(num));

}

createItems(products);