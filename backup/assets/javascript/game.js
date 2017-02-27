// alert("test");


// (1) Create variables needed

var computerGuess = 0, // for the number that computer will shoose randomly
    result = 0, // for the addup numbers the user will choose
    winCounter = 0, // how many wins
    lossCounter = 0, // how many losses
    crystalOne = 0, // the number will be assinged randomly to the crystals
    crystalTwo = 0,
    crystalThree = 0,
    crystalFour = 0,
    crystalValue = 0;

// (2) every time the page loads, have the computer create a random number and show it in guess span 
// computerGuess = Math.random();
computerGuess = Math.round(Math.random() * 101) + 19;
$("#computerGuess").html(computerGuess);
// console.log(computerGuess);


// (3) also assign a number randomly to each crystal.

// crystalValue = Math.round(4 + Math.random() * 40);

crystalOne = Math.round(4 + Math.random() * 40);
// $("#crystal1").val = crystalOne;
crystalTwo = Math.round(4 + Math.random() * 40);
crystalThree = Math.round(4 + Math.random() * 40);
crystalFour = Math.round(4 + Math.random() * 40);

$(".crystal").val(crystalValue);
// console.log(crystalValue);



// (4)every time the user click on a crystal create add it to the score span
$(".crystal").on("click", function() {
    $("#winCounter").html(crystalOne);
    // result += $(".crystal").crystalValue
    // $("#userScore").html(result);
});
// (5) if the guess == score, add the win counter by 1
// (6) if the guess != scrore add he loss counter by 1
