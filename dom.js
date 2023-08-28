// Put the button in the JS file
const buttonElement = document.querySelector('.js-subscribe-button');

if (buttonElement.innerHTML === 'Subscribe') {
    buttonElement.innerHTML = 'Subscribed';
}
else {
    buttonElement.innerHTML = 'Subscribe';
}