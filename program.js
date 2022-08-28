let showMsg;

const randomMsgDisplay = document.getElementById('genRandomMsg');
const randomImgDisplay = document.getElementById('genRandomImg');
const pressButton = document.getElementById('button');

pressButton.addEventListener('click', () => {
    //Display the random message
    randomMsgDisplay.innerText = msgGenerator.randomMsg();

    //Set the correct disabled state for the buttons
    pressButton.removeAttribute('disabled');
});