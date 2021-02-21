# _Pig Dice_

#### _Players take turns to roll a single die as many times as they wish, adding all roll results to a running total, but losing their gained score for the turn if they roll a 1._

#### By _Parker Benoit and Carlos Urquiza_

## Technologies Used 

* _HTML_
* _CSS_
* _JavaScript_
* _JQuery_
* _Bootstrap_
* _Git_
* _GitHub_
___
# Description 

### What will happen when a user clicks "Roll Dice"?
```
Generate a random number.
if random number === or > 2 then addScore to currentPlayer else currentPlayer score = 0 AND passDice.
let runningScore = Keeps track of current user score, if 1 is rolled subtract current total from current user score.
if currentPlayer score is === or > 100, return message "You have won!". 
```
### What objects will you need?

```
How are you deciding to organize this information? (use object rather than array because we want key value system)
Placeholders (key value = player1 score)
What information do we need from each player. 
If number is 1 go back to 0, if number reaches 100 user wins. 
```

### What key-value pairs will each object need to contain in order for the game to work?
```
object: player1
key-value: player1 score
object: player2
key-value: player2 score
```

### What functions?
```
randomNumber();
rollDice();
passDice();
```
### How will these be triggered throughout the gameplay?
```
randomNumber() is triggered when user clicks Roll Dice and the jQuery event is trigerred which creates a random number.
rollDice() is connected to a button.
passDice() is connected to a button / can be triggered when a 1 is rolled. 
```
### How will information be collected from the user? How will it be displayed?
```
Via RollDice button
```

## Setup/Installation Requirements

* _Clone this repository._
* _Navigate to the top level of the directory._
* _Open the index.html file in order to view in your browser. Alternatively, you can view the project via this [GitHub Page]()_

## Specifications

**Describe: rollDice();**

```
Test: ""
Expect
```
```
Test: ""
Expect
```
```
Test: ""
Expect
```

## Known Bugs

* _No known bugs._

## License

_MIT_

## Contact Information

_Please contact parker.benoit44@gmail.com or webquiza@gmail.com if you run into any issues viewing this project after following the Setup/Installation Requirements._
