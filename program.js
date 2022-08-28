let showMsg;

const randomMsgDisplay = document.getElementById('genRandomMsg');
const randomImgDisplay = document.getElementById('genRandomImg');
const goodImgDisplay = document.getElementById('goodImg');
const badImgDisplay = document.getElementById('badImg');
const pressButton = document.getElementById('button');

pressButton.addEventListener('click', () => {
    //Display the random message
    //randomMsgDisplay.innerText = msgGenerator.randomMsg();

    //Display the random image
    if((msgGenerator.randomMsg()).includes('amazing') || (msgGenerator.randomMsg()).includes('miraculous') || (msgGenerator.randomMsg()).includes('charming') || (msgGenerator.randomMsg()).includes('breath-taking')) {
        randomMsgDisplay.innerText = msgGenerator.randomMsg();
        randomImgDisplay.innerText = goodImgDisplay;
    }
    else {
        randomMsgDisplay.innerText = msgGenerator.randomMsg();
        randomImgDisplay.innerText = badImgDisplay;
    }; 

    //Set the correct disabled state for the button
    pressButton.removeAttribute('disabled');
});