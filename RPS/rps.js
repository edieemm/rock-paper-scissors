let userChoice;
let computerChoice;

const getComputerChoice = function() {
  randomNumber = Math.floor(Math.random()*3)
  switch (randomNumber){
    case 0:
      return 'crock';
    case 1:
      return 'cpaper';
    case 2:
      return 'cscissors';
  }
}



function determineWinner(userChoice, computerChoice) {
	if('c'+userChoice === computerChoice){
    return 'tie';
  } else if (userChoice === 'rock'){
    		if (computerChoice === 'cpaper') {
      	return 'lose'
  			} else {
      	return 'win'
    		}
  }else if (userChoice === 'paper'){
    		if (computerChoice === 'cscissors') {
      	return 'lose'
    		} else {
      	return 'win'
    		}
  }else if (userChoice === 'scissors'){
    		if (computerChoice === 'crock') {
      	return 'lose'
    		} else {
      	return 'win'
    		}
  } else  {
  console.log ('select your choice');
  }
};


function playGame(choice) {
    document.getElementById('paper').className ='playerhand';
    document.getElementById('cpaper').className ='comphand';
    document.getElementById('rock').className ='playerhand';
    document.getElementById('crock').className ='comphand';
    document.getElementById('scissors').className ='playerhand';
    document.getElementById('cscissors').className ='comphand';

    document.getElementById('calculating').className ='foot';
    document.getElementById('error').className ='foot';
    document.getElementById('win').className ='win';
    document.getElementById('lose').className ='lose';
    document.getElementById('tie').className ='tie';
    document.getElementById('buttons').className ='buttons';
    document.getElementById('reset').className ='resetbutton';

    userChoice = choice;
    console.log ("player chose "+ userChoice);

    computerChoice = getComputerChoice();
    console.log ('computer chose ' + computerChoice);

    document.getElementById(userChoice).className ='playerhand show';
    document.getElementById(computerChoice).className ='comphand show';

    finalResult = determineWinner(userChoice, computerChoice);
    console.log(finalResult);

    if (finalResult === 'win'){
        document.getElementById('buttons').className ='buttons hide';
        document.getElementById('win').className ='win show';
        document.getElementById('reset').className ='resetbutton show';
    } else if (finalResult === 'lose'){
        document.getElementById('buttons').className ='buttons hide';
        document.getElementById('lose').className ='lose show';
        document.getElementById('reset').className ='resetbutton show';
    }else if (finalResult === 'tie'){
        document.getElementById('buttons').className ='buttons hide';
        document.getElementById('tie').className ='tie show';
        document.getElementById('reset').className ='resetbutton show';
    }else {
        document.getElementById('buttons').className ='buttons hide';
    }

}
