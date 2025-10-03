//The Array List for my images choices.
const choices = ['rock', 'paper', 'scissors'];

//the way for javascript to grab my images.
const files = {
  rock: 'images/Rock.jpeg',
  paper: 'images/Paper.jpeg',
  scissors: 'images/Scissors.jpeg'
};

//the constants for each class/id
const playerImages = document.querySelectorAll('#player-throw img');
const computerSection = document.querySelector('.Computer-throw');
const outcomeSection = document.querySelector('.Outcome');


playerImages.forEach((img, index) => {
  img.addEventListener('click', () => {

    img.style.outline = '5px solid #2b7';

    const playerChoice = choices[index];

    let i = 0;
    const cycle = setInterval(() => {
      showComputer(choices[i % 3]);
      i++;
    }, 175);

    setTimeout(() => {
      clearInterval(cycle);
      const computeRandomChoice = choices[Math.floor(Math.random() * choices.length)];
      showComputer(computeRandomChoice);
      resultElement.textContent = decide(playerChoice, computeRandomChoice);
    }, 3000);//The computer thinks for 3 seconds here.
  });
});


function showComputer(choice) {
    while (computerSection.firstChild) {
        computerSection.removeChild(computerSection.firstChild);
    }
    const img = document.createElement('img');
    img.src = files[choice];
    img.alt = choice;
    img.className = 'image';
    computerSection.appendChild(img);
}

let resultElement = document.getElementById('game-result');
if (!resultElement) {
  resultElement = document.createElement('p');
  resultElement.id = 'game-result';
  outcomeSection.appendChild(resultElement);
}

function decide(player, computer) {
  if (player === computer) return 'Tie! To Play again, choose your hand again.';
  if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) return 'You win! To Play again, choose your hand again.';
  return 'You lose. To Play again, choose your hand again.';
}