let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
const userScoreParav = document.querySelector('#user-score');
const compScoreParav = document.querySelector('#comp-score');

const genComputerChoice = () =>{
    const choices = ['rock','paper','scissors'];
    const randNum = Math.floor(Math.random()*3);
    return choices[randNum];

};

const drawGame = ()=>{
    msg.innerText = "Game was Draw.Play Again!"
    msg.style.backgroundColor = "darkgreen";
}

const showWinner = (userWin,compChoice,userChoice) => {
    if(userWin){
        userScore++;
        msg.innerText = `You Win computer choose: ${compChoice} user choose: ${userChoice}`;
        msg.style.backgroundColor = "green";
        userScoreParav.innerText = userScore;
    }else{
        compScore++;
         msg.innerText = `You Lose computer choose: ${compChoice} user choose: ${userChoice}`;
         compScoreParav.innerText = compScore;
         msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    
    const compChoice = genComputerChoice();

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === 'rock'){
            userWin = compChoice === "scissors" ? true :false;
        }else if(userChoice === "paper") {
            userWin = compChoice === "rock"?true:false;
        }else{
            userWin = compChoice === "paper"?true:false;
        }
        showWinner(userWin,compChoice,userChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    })
})