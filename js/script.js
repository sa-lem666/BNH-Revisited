const gameResults = document.getElementById('results');
      let choices = [];
      let playAgainButton = document.getElementById('playAgain');

      let options = ["BEAR","NINJA","HUNTER"];
      let playerScore = 0;
      let compScore = 0;

      function showResults(){
        gameResults.style.display = 'block';
      }

      function hideResults(){
        gameResults.style.display = 'none';
      }

      function playGame(choice){
        //Computer picks choice
        let compChoice = options[Math.floor(Math.random() * options.length)];
        let outcome;

        choices.push(choice);

        //Figures out the outcome based on input
        switch(choice.toUpperCase()){
          case "BEAR":
              if(compChoice === "BEAR"){
                  outcome = "You tied!";
              } 
              else if(compChoice === 'NINJA'){
                  outcome = "You win!";
                  playerScore++;
              } 
              else {
                  outcome = "The computer wins!";
                  compScore++;
              }
              break;

          case 'NINJA':
              if(compChoice === 'BEAR'){
                  outcome = "The computer wins!";
                  compScore++;
              }
              else if(compChoice === 'NINJA'){
                  outcome = "You tied!";
              }
              else{
                  outcome = "You win!";
                  playerScore++;
              }
              break;

          case 'HUNTER':
              if(compChoice === 'BEAR'){
                  outcome = "You win!";
                  playerScore++;
              }
              else if(compChoice === 'NINJA'){
                  outcome = "The computer wins!!!";
                  compScore++;
              }
              else{
                  outcome = "You tied!";
              }
              break;
        }

        document.getElementById('outcome').innerHTML = "You chose " + choice + ".<br>The computer chose "+ compChoice + ".<br>"+ outcome;

        document.getElementById('playerWin').innerHTML = "Your Wins: " + playerScore;
        document.getElementById('compWin').innerHTML = "Computer Wins: " + compScore;

        showResults();
      }