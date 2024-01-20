let userscore=0;
        let compscore=0;
        const choice =document.querySelectorAll(".icons");
        const msg= document.querySelector("#msg");
        const userscorepara=document.querySelector("#userscore");
        const compscorepara=document.querySelector("#compscore");
        
        
        choice.forEach((icons) => {
            icons.addEventListener("click",() =>{
                const userchoice= icons.getAttribute("id");
                playgame(userchoice);
            });
        });
        
        const playgame=(userchoice)=>{
            console.log("User Choice =",userchoice);
            const compchoice= gencompchoice();
            console.log("Computer Choice =",compchoice);

            if(userchoice == compchoice){
            drawgame();
        }
        else{
            let userwin = true;
            if (userchoice==="Rock"){
                userwin =compchoice === 'Paper'?false:true;
            }
            else if (userchoice==="Paper"){
                userwin =compchoice === 'Scissor'?false:true;
            }
            else if (userchoice==="Scissor"){
                userwin =compchoice === 'Rock'?false:true;
            }
            showWinner(userwin,userchoice,compchoice);
        }

        }

            const gencompchoice =()=>{
                choices=['Rock','Paper','Scissor'];
            const random = Math.floor(Math.random()*3);
            return choices[random];
            }

        const drawgame=()=>{
            console.log("game was draw");
            msg.innerText="Game was Draw";
            msg.style.backgroundColor="black";
        }
        const showWinner=(userwin,userchoice,compchoice)=>{
            if(userwin){
                userscore++;
                userscorepara.innerText=userscore;
                console.log("You Win");
                msg.innerText=`You Win! your ${userchoice} beats computer ${compchoice}`;
                msg.style.backgroundColor="green";
            }
            else{
                compscore++;
                compscorepara.innerText=compscore;

                console.log("You lose");
                msg.innerText=`You lose! computer ${compchoice} beats your ${userchoice}` ;
                msg.style.backgroundColor="red";

            }
        }
        