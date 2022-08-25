// Function to greet the user
const userName = (name) => {
    switch(name) {
      case undefined : 
        console.log('Hello Stranger, here are some words of inspiration for you:'); 
      break;
      default : 
        console.log(`Hello ${name}, here are some words of inspiration for you:`);
    } 
  };

//Array storing mixed inspirational messages
const msg = ['You can totally do this.','No pressure, no diamonds. - Thomas Carlyle','Stay foolish to stay sane. -Maxime Lagace',
'When nothing goes right, go left.','Try again. Fail Again. Fail Better. -Samuel Beckett','Impossible is for the unwilling. -John Keats',
'I can and I will.','Take the risk or lose the chance.','Good things happen to those who hustle. -Anais Nin','Prove them wrong.',
'No guts, no story. - Chris Brady','Boldness be my friend. - William Shakespeare','Dream big. Pray bigger.','Leave no stone unturned. -Euripides',
'Stay hungry. Stay foolish. - Steve Jobs','If you want it, work for it.','You can if you think you can. -George Reeves',
'Broken crayons still colour.','Grow through what you go through.','Do it with passion or not at all.','She believed she could, so she did.',
'Success is the child of audacity. -Benjamin Disraeli','If you are going through hell, keep going. -Winston Churchill','You matter.',
'Let him that would move the world first move himself. -Socrates','Fall seven times, stand up eight. - Japanese Proverb','Let go.',
'Slow down.','Let it be.','Go for it.','Choose joy. Choose happiness.','Be in the now.','Live in the moment.','Keep your chin up.',
'Pain is inevitable, suffering is optional.','You have to be odd to be number one. - Dr Seuss','A smooth sea never made a skillful sailor.',
'Hearts are wild creatures, that is why our ribs are cages.','Every wall is a door. -Ralph Waldo Emerson','Feel the fear and do it anyway.'];

//To generate random inspirational message
const msgs = msg[Math.floor(Math.random() * msg.length)];

//Function to ouptut mixed message to user
const msgGenerator = () => {
    console.log(msgs);
};

window.alert('There is something to ponder. Have a great day!');