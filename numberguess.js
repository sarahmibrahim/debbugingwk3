let compnum = Math.floor(Math.random() * 101);     // returns a random integer from 0 to 100

while (playagain) {
    let usernum = prompt("guess a number");
    guesses = 1;
    if (usernum == comnum) {
        alert("Correct, you win!");
        playagain = false;
    } else if (usernum > compnum) {
        alert("too high");
    } else{
        alert("too low");
    }
}

msg = "You took " + guesses " turns to get it right";
alert (msg);
