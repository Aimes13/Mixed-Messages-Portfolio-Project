let showMsg;

const randomMsgDisplay = document.getElementById('genRandomMsg');
const randomImgDisplay = document.getElementById('genRandomImg');
const pressButton = document.getElementById('button');

pressButton.addEventListener('click', () => {
    //Generate a random message
    showMsg = displayGenerator();

    //Display the new round number
    randomMsgDisplay.innerText = showMsg;

    //Set the correct disabled state for the buttons
    pressButton.setAttribute('disabled', true);
});