
export function getCardCount() {

    return JSON.parse(localStorage.getItem("cardcount") || "");
}

export function saveCardCount(num) {
    localStorage.setItem("cardcount", JSON.stringify(num));

}

