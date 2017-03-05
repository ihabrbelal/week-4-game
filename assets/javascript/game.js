// alert("test");


// (1) Create variables needed

var computerGuess = 0, // for the number that computer will shoose randomly
    userScore = 0, // for the addup numbers the user will choose
    winCounter = 0, // how many wins
    lossCounter = 0, // how many losses
    red = 0, // the number will be assinged randomly to the crystals
    blue = 0,
    gray = 0,
    green = 0

// controler

// $("#instr").hover(function() {
//         $(this).html($("<span> HOVERING!!!!! </span>"));
//     },
//     function() {
//         $(this).html($(""));
//     });


// (2) every time the page loads, have the computer create a random number and show it in guess span 
// computerGuess = Math.random();
computerGuess = Math.round(Math.random() * 100) + 19;
$("#computerGuess").html(computerGuess);
// console.log(computerGuess);


// (3) also assign a number randomly to each crystal.

// crystalValue = Math.round(4 + Math.random() * 29);

red = Math.round(Math.random() * 19) + 1;
// $("#crystal1").val = crystalOne;
blue = Math.round(Math.random() * 19) + 1;
gray = Math.round(Math.random() * 19) + 1;
green = Math.round(Math.random() * 19) + 1;

// reset function to reset all the game data
function reset() {
    userScore = 0;
    $("#userScore").html(userScore);
    (this).computerGuess = Math.round(Math.random() * 100) + 19;
    $("#computerGuess").html(computerGuess);
    (this).red = Math.round(+Math.random() * 29);
    // $("#crystal1").val = crystalOne;
    (this).blue = Math.round(Math.random() * 19) + 1;
    (this).gray = Math.round(Math.random() * 19) + 1;
    (this).green = Math.round(Math.random() * 19) + 1;


};


// (4)every time the user click on a crystal create add it to the score span
function start() {
    $("#red").on("click", function() {
        userScore = userScore + red;
        $("#userScore").html(userScore);
        compare();

    });
    $("#blue").on("click", function() {
        userScore = userScore + blue;
        $("#userScore").html(userScore);
        compare();

    });
    $("#gray").on("click", function() {
        userScore = userScore + gray;
        $("#userScore").html(userScore);
        compare();

    });
    $("#green").on("click", function() {
        userScore = userScore + green;
        $("#userScore").html(userScore);
        compare();

    });


}
start();

// (5) compare user score and computer guess

function compare() {
    if (userScore === computerGuess) {
        (this).winCounter++;
        alert("You Won");

        $("#winCounter").html((this).winCounter);
        reset();

    } else if (userScore >= computerGuess) {
        (this).lossCounter++;
        alert("You Lose");

        $("#lossCounter").html((this).lossCounter);
        reset();
    }

}
$("#restart").on("click", function() {
    location.reload();
});
$("#instr").hover(function() {
    $(this).css('cursor', 'pointer').attr("title", "The Computer would guess a number and shows in TARGET. Each crystal would be assigned a hidden number randomly, when you click any of the crystals, that numbers would be added up. If your totalequals to the computer guess you win, if more you lose.. good luck");
}, function() {
    $(this).css('cursor', 'auto');
});
