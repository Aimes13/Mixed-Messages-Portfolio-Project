// To define object
const msgGenerator = {
  greeting (name) {
    switch(name) {
      case undefined : 
        console.log('Hello Stranger, here are some words of inspiration for you:'); 
      break;
      default : 
        console.log(`Hello ${name}, here are some words of inspiration for you:`);
    } 
  },
  starter: ['You are a ','Time is a ','Life is a ','Love is a ', 'Humanity is a ','Animals are a ','To be alive is a ','Nature is a '],
  adjective: ['most amazing ','most miraculous ','most tragic ','most demented ','most charming ','most mind-boggling ','most revolting ','most breath-taking '],
  noun: ['creation!','phenomenon!','enigma!','catastrophe!','concept!','conundrum!','fabrication!','spectacle!'],
  randStarter () {
    return this.starter[Math.floor(Math.random() * this.starter.length)];
  },
  randAdjective () {
    return this.adjective[Math.floor(Math.random() * this.adjective.length)];
  },
  randNoun () {
    return this.noun[Math.floor(Math.random() * this.noun.length)];
  },
  randomMsg () {
    return `${this.randStarter()}${this.randAdjective()}${this.randNoun()}`;
  }
};


//To generate random quirky message
msgGenerator.greeting();
msgGenerator.randomMsg();

const displayGenerator = () => {
  console.log(msgGenerator.randomMsg());
};

const randomMsgDisplay = document.getElementById('genRandomMsg');
const randomImgDisplay = document.getElementById('genRandomImg');
const pressButton = document.getElementById('button');

pressButton.addEventListener('click', () => {
  //Generate a random message
  showMsg = displayGenerator();
  // Display the new round number
  randomMsgDisplay.innerText = showMsg;
});

/* window.alert('Now there is something for you to ponder. Have a great day!'); */