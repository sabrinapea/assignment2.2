/* esline-env browser */


let randomNum = Math.round(Math.random());
let coinFlip = randomNum;
let choice = prompt('Select \'Heads\' or \'Tails\'');
if (coinFlip < 1) { //  it will be heads
  if (choice.toUpperCase() === 'HEADS') {
    alert('The flip was heads and you chose heads...you win!');
  } else {
      alert('The flip was heads but you chose tails...you lose!');
  }
} else { // it will be tails
    if (choice.toUpperCase() === 'TAILS') {
      alert('The flip was tails and you chose tails...you win!');
    } else {
        alert('The flip was tails but you chose heads...you lose!');
    }
}