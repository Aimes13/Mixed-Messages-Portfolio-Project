const randomMsgDisplay = document.getElementById('genRandomMsg');
const alertDisplay = document.getElementById('alertMsg');
const randomImgDisplay = document.getElementById('genRandomImg');
let goodImgDisplay = document.getElementById('goodImg');
let badImgDisplay = document.getElementById('badImg');
const pressButton = document.getElementById('button');

pressButton.addEventListener('click', () => {
    //Display the random message
    const reveal = msgGenerator.randomMsg();

    //To check for positive/negative messages and load positive/negative image
    if(reveal.includes('amazing') || reveal.includes('charming') || reveal.includes('miraculous') || reveal.includes('breath-taking')) {
        randomMsgDisplay.innerText = reveal;
        alertDisplay.innerText = 'Click the pink button again for a new message!';
        randomImgDisplay.innerText = 'good';
        
        if (randomImgDisplay.innerText = 'good') {
            randomImgDisplay.innerText = (goodImgDisplay.style.display ='block');
            badImgDisplay.style.display ='none';
        }
    }

    else {
        randomMsgDisplay.innerText = reveal;
        alertDisplay.innerText = 'Click the pink button again for a new message!';
        randomImgDisplay.innerText = 'bad';

        if (randomImgDisplay.innerText = 'bad') {
            randomImgDisplay.innerText = (badImgDisplay.style.display ='block');
            goodImgDisplay.style.display ='none';    
        }
    };

    return randomImgDisplay.innerText;
    
    //Set the correct disabled state for the button
    pressButton.removeAttribute('disabled');
});