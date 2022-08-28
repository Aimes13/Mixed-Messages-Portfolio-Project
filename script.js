// To define object
const msgGenerator = {
  starter: ['You are ','Time is ','Life is ','Love is ', 'Humanity is ','Animals are ','To be alive is ','Nature is '],
  adjective: ['a most amazing ','such a miraculous ','a most tragic ','such a demented ','quite the charming ','quite the mind-boggling ','an absolutely revolting ','an absolutely breath-taking '],
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
    return `"${this.randStarter()}${this.randAdjective()}${this.randNoun()}"`;
  }
};

//To generate random quirky message
msgGenerator.randomMsg();

const displayGenerator = () => {
  console.log(msgGenerator.randomMsg());
};

/* window.alert('Now there is something for you to ponder. Have a great day!'); */