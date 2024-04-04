let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");

const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice = () =>{
    //rock, paper,sissor
    const options=["rock","paper","sissor"];
    const randIdx=Math.floor(Math.random()*3);
return options[randIdx];
};
const drawGame = () =>{
    console.log("game was draw.");
    msg.innerText="Game was draw.Play Again.";
    msg.style.backgroundColor="blue";
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
               // console.log("you lose");
        userScore++;
        userScorePara.innerText=userScore;

        msg.innerText= `You win!  Your  ${userChoice}  beats  ${compChoice}`;
      msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;

       // console.log("you lose");
        msg.innerText=`You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
// console.log("user choice=",userChoice);

//Generate computer choice-->modular way of programming
const compChoice=genCompChoice();
//console.log("comp choice=",compChoice);
if(userChoice===compChoice)
{
    //draw
drawGame();
}
else{
    let userWin=true;
    if(userChoice==="rock")
    {
        //scissor ,paper
        userWin=compChoice==="paper"?false:true;
    }
    else if(userChoice==="paper")
    {
        //rock,scissor
        userWin=compChoice==="sissor"?false:true;
    }
    else 
    {
        //rock ,paper
        userWin=compChoice==="rock"?false:true;
    }
    showWinner(userWin,userChoice,compChoice);
}

};




choices.forEach((choice)=>{
    // console.log(choice);
choice.addEventListener("click",()=>{
    //console.log("choice was clicked");
    const userChoice=choice.getAttribute("id")
   // console.log("choice was clicked",userChoice);
    playGame(userChoice);
});
});