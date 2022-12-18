import * as productLib from "./product.js";
import * as cardLib from "./card.js";
class Product {
    constructor(title, img, price, category) {
        this.title = title;
        this.img = img;
        this.price = price;
        this.category = category;

    }
}

function setLocal(){
console.log("sadfafdaf");
    let flag = localStorage.getItem("cardcountflag") || "";
    if(flag===""){
        localStorage.setItem("cardcountflag", "true");
        localStorage.setItem("cardcount", 0);
        console.log("object");
    }
    
}
setLocal();
const content = document.querySelector(".content");
const cardSpan = document.getElementById("cardspan");
cardSpan.innerText = `${cardLib.getCardCount()}`;

var products = [];
let k;
for (k = 1; k <= 9; k++) {
    products.push(new Product(`table ${k}`, `./assets/tables/${k}.jpg`, '$10.00', "tables"));
    products.push(new Product(` pen ${k} `, `./assets/pens/${k}.jpg`, '$5.60', "pens"));
}


for (k = 1; k <= 5; k++) {
    products.push(new Product(` headphone ${k}`, `./assets/headphones/${k}.jpg`, '$5.60', "headphones"));

}





const filterBtn = document.querySelectorAll(".cat-btn button");

filterBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        let filteredProducts = products.filter(product => {

            return product.category === btn.innerHTML.toLowerCase().trim();
        });

        content.textContent = "";

        if (btn.innerHTML.toLowerCase().trim() != "all") {

            productLib.createItems(filteredProducts);

        } else {

            productLib.createItems(products);
        }

    });
})

productLib.createItems(products);

$(".card img").on({

    mousemove(e) {
        // console.log($(this).find("p:first").text());
        $("#flay-card p:first").text($(this).parent().find("p:first").text());
        $("#flay-card p:last").text("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi eligendi molestias voluptatibus");
        // $("#flay-card img").attr("src", $(this).find("img").attr("src"));
        $("#flay-card img").attr("src", $(this).attr("src"));
        $('#flay-card').css({
            display: "block",
            left: e.pageX + 20,
            top: e.pageY + 20,

        })
    },
    mouseleave() {
        $('#flay-card').css({

            display: "none",
        })
    }
});

