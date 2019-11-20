const game = () => {
    let pScore = 0;
    let cScore = 0;

    // Start game
    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn")
        });
    };

    //Play Match
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll('.hands img');

        

        hands.forEach(hand => {
            hand.addEventListener('animationend', function(){
                this.style.animation = '';
            });
        });
        // Computer Options 
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(options=>{
            options.addEventListener('click', function() {
                // Computer Choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                
                playerHand.src = "./assets/rock.png";
                computerHand.src = "./assets/rock.png";

                setTimeout(() => {
                    // Here we compare hands
                    compareHands(this.textContent, computerChoice)
                    //Update Images
                    playerHand.src = `./assets/${this.textContent}.png`;
                    computerHand.src = `./assets/${computerChoice}.png`;
                    }, 900)

                // Animation
                playerHand.style.animation = "shakePlayer 1.2s ease";
                computerHand.style.animation = "shakeComputer 1.2s ease";
            });
        });
    };

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
        
    };

    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector('.winner');
        if(playerChoice === computerChoice) {
            winner.textContent = "It is a tie";
            return;
        }
        if(playerChoice === 'rock') {
            if(computerChoice === 'scissors') {
                winner.textContent = 'Player wins'
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }
        }

        if(playerChoice === 'paper') {
            if(computerChoice === 'scissors') {
                winner.textContent = 'Computer wins'
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }
        }

        if(playerChoice === 'scissors') {
            if(computerChoice === 'rock') {
                winner.textContent = 'Computer wins'
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }
        }

    }; 

    // call all inner function 
    startGame();
    playMatch();
};

// start the game function 
game();