//randomized computer play returning a string
function computerPlay() {
    computerNum = Math.floor(Math.random() * 3);
    let computerSelection = ''
    if (computerNum == 0){
        computerSelection = 'paper';
        
    }
    else if (computerNum == 1){
        computerSelection = 'rock';       
    }
    else if (computerNum == 2){   
        computerSelection = 'scissors'; 
        }    
    return computerSelection    
} 

let playerScore = 0;
let computerScore = 0;
let roundResult = '';

///Prompt returning player selection (one round) returns string
function playerPrompt(){
    let playerSelection = window.prompt('choose your weapon');
   //playerSelection = playerSelection.toLowerCase();
   // validateWeapon(playerSelection); 
    return playerSelection;
}

//attempt at data validation
//function validateWeapon(weapon){
    //playerSelection = weapon;
   //if (weapon != 'rock'  || 'paper' || 'scissors'){
       //console.log('invalid Entry')
       //playerPrompt();
   /////}

//}

function game() { 
    
    for (i = 0; i < 5; i++)
    playRound();  
    }
     
    ///Play a round 
function playRound(playerSelection, computerSelection)
{       playerSelection = playerPrompt();
        computerSelection = computerPlay();    
    
        
        console.log ('you chose '+ (playerSelection));
        console.log ('The evil computer chose '+ (computerSelection));


        if (playerSelection == computerSelection )
        {
            roundResult = 'it\'s a tie';          
        }
        else if (playerSelection == 'rock' && computerSelection == 'paper')
        {        
           roundResult = 'CPU is a winner, paper covers rock';
           computerScore++;
         }
        else if (playerSelection == 'rock' && computerSelection == 'scissors')
        {
            roundResult = 'You took this round, rock smashes scissors';
            playerScore++;
        }
        else if (playerSelection == 'scissors' && computerSelection == 'rock')
        {
            roundResult = 'you lose, they chose rock';
            computerScore++;
       }
        else if (playerSelection == 'scissors' && computerSelection == 'paper')
        {
            roundResult = 'you took that round by slicing through their papel';
            playerScore++;
        }
        else if (playerSelection == 'paper' && computerSelection == 'scissors')
        {
            roundResult = 'You got sliced Bro';
            computerScore++;
        }
        console.log(roundResult);
        console.log('player score is ' + playerScore);
        console.log('computer score is ' + computerScore);
        return roundResult;
    }   

 function gameWinner()  {
    if (playerScore > computerScore){
         console.log('You won after 5 rounds')
     }
    else if(playerScore < computerScore){
        console.log('You lost after 5 rounds')
    }
    else if (playerScore = computerScore){
        console.log('It\'s tied after 5 rounds')
    }
 }  
  
game();
gameWinner();

///Why do we need to return the computer score and player score?

////Is it possible that, instead, we can just update an existing variable?

///Not all functions need to return values

//Functions can be solely responsible for updating global values