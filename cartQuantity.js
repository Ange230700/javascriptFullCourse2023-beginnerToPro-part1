let cartQuantity = 0;

function displayMessage() {
    console.log(`Cart quantity: ${cartQuantity}`);
}

function addToCart() {
    cartQuantity++;
    displayMessage();
}

function plusTwo() {
    cartQuantity += 2;
    displayMessage();
}

function plusThree() {
    cartQuantity += 3;
    displayMessage();
}

function reset(){
    cartQuantity = 0;
    displayMessage();
}