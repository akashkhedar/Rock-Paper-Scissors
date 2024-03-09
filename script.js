let userScore=0;
let compScore=0;

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const showUserChoice = document.querySelector("#user-choice");
const showCompChoice = document.querySelector("#comp-choice");

//accessing choices
const choices = document.querySelectorAll(".choice");

//accessing result container
const msg=document.querySelector(".result");

//generating random choice for computer
const randomChoice = () => {
    let options = ["Rock" , "Paper", "Scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};

//result function
const showWinner = (userWin) => {
    if(userWin){
        msg.innerText = "YOU WIN!"
        msg.style.border = "5px solid green";
        msg.style.color = "green";
        userScore++;
        userScorePara.innerText = userScore;
    }
    else{
        msg.innerText = "YOU LOSE!"
        msg.style.border = "5px solid red";
        msg.style.color = "red";
        compScore++;
        compScorePara.innerText = compScore;
    }
};

//showing the choices made
const showChoice = (userChoice, compChoice) => {
    showUserChoice.innerText = userChoice;
    showCompChoice.innerText = compChoice;
}

//main function for game
const playGame = (userChoice) => {
    const compChoice = randomChoice();
    showUserChoice.innerText = userChoice;
    showCompChoice.innerText = compChoice;
    
    //for draw condition
    if(userChoice === compChoice){
        msg.innerText= "It's a DRAW"
        msg.style.border = "5px solid grey";
        msg.style.color = "grey";
    }
    else{
        let userWin = true;
        if(userChoice === "Rock"){
            userWin = compChoice === "Paper" ? false : true;
        }
        else if(userChoice === "Paper"){
            userWin = compChoice === "Scissors" ? false : true;
        }
        else{
            userWin = compChoice === "Rock" ? false : true;
        }
        showWinner(userWin);
    }
};

//accessing ID by choice funtion
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});