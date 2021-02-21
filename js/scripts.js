// Business logic 

//Score.prototype.scoreAdd = function (currentPlayer, newScore, scoreTotal) {
  //if currentPlayer 
//}
  
//}

function randomNumber () {
  return Math.floor(Math.random() * 6) + 1;
}

[currentPlayer , standbyPlayer] = ["player1", "player2"];
// User Interface Logic 

$(document).ready(function() {
  $("form#rollDice").submit(function(event) {
    event.preventDefault();
    let randomNumber1 = randomNumber();
    $(".newScore").html(randomNumber1);
    
  })
})