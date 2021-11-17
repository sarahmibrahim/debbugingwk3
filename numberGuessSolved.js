let compnum = Math.floor(Math.random() * 101);     // returns a random integer from 0 to 100
let guesses = 0 //set initial value to 0
let playagain = true // sets play again as a variable with value tru to allow loop to run

while (playagain) {
    let usernum = prompt("guess a number");
    guesses ++; // keep runing score by adding 1 each time
    if (usernum == compnum) { // changed to correct variable name compnum from comnum
        alert("Correct, you win!");
        playagain = false;
    } else if (usernum > compnum) { // comparison set with correct operator > rather than <
        alert("too high");
    } else{
        alert("too low");
    }
}

msg = "You took " + guesses + " turns to get it right"; //missing + addded
alert (msg);
