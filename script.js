let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gemcompchoice = () => {
    //stone, paper, scissors
    const options = ["stone", "paper","scissor"];
    const randidx = Math.floor(Math.random() *3);
    return options[randidx];
};

const drawgame = () => {
    msg.innerText = " game was draw. play again!";
    msg.style.backgroundColor = "#081b31";
};

const showwinner = (userwin, userchoice, compchoice) => {
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `you win! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compscorescore++;
        compscorepara.innerText = compscore;
        msg.innerText = `you lose! ${compchoice} beats  your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playgame = (userchoice) => {
    //generate computer choice -> modular
    const compchoice = gemcompchoice();

    if(userchoice === compchoice){
        // draw game
        drawgame();
    }
    else {
      let userwin = true;  
      if(userchoice === "stone") {
          // scissor, paper
          userwin = compchoice === "paper" ? false : true;
        }
        else if(userchoice === "paper") {
            // stone, scissor
            userwin = compchoice === "scissor" ? false : true;
        }
        else{
            // paper, stone
            userwin = compchoice === "stone" ? false : true;
        }
        showwinner(userwin, userchoice, compchoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});