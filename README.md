# {Pig Dice Game}
#### {A dice roll game where two players go up against each other trying to get to one hundred first}, {28/09/2018}
#### By **{Jeremy Kimotho}**
## Description
{The game is intended for two players to use together and is a race to one hundred. The game has six possible digits which is 1-6 and the numbers all add to your round total with the exception of 1 which clears your round total. The players after every roll have the option to hold which adds to their global score and this global score is what matters in the race to one hundred. }
## BDD
* The app first needed to be able to roll a dice, and I did this by putting this info in an array.
* Counting the sequences of dice rolls was the next function that needed to be added.
* Being able to distinguish between the active score and global score meant having to use separate arrays for the two.
* The global score needed to only be added to when a player chose to click hold so that was the next thing to be added.
* The player not active or who's turn it isn't, should  not be able to roll or hold and therefore the buttons deactivate when it isn't their turn.
* Finally, the game should not contiune after one players global is equal to or greater than 100 and so if that happens the game informs you of the winner and restarts the game.
## Known Bugs
{The program has no known bugs.}
## Technologies Used
{The app is built with HTML, CSS, and JavaScript. It also uses the bootstrap library for styling and the jQuery library for interactivity.}
## Contact details
{You may contact me at jeremykimotho@yahoo.com}
### Live Link
https://jeremykimotho.github.io/pig-dice/
### License
MIT License

Copyright (c) 2018 JeremyKimotho

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
