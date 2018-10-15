
// The player will be shown a random number at the start of the game.

$(document).ready(function(){

var randomNum = Math.floor(Math.random() * 101) + 19;

$("#number").text(randomNum);
console.log(randomNum);


var userScore = 0;
var wins = 0;
var losses = 0;
var crystalValues = [10, 5, 7, 3];

$("#score").text(userScore);
$("#wins").text("Wins:" + " " + wins);
$("#losses").text("Losses:" + " " + losses);

function getCrystalHandler() {
    return function() {
     userScore = userScore + crystalValues[0];
     console.log("New userScore " + userScore);
     $("#score").text(userScore);
 
//      if (userScore === randomNum) {
//         stop; 
//         wins++;
//      }
 
//      else if (userScore > randomNum) {
//         stop;
//         losses++;
//      } 
 }
 }

//  function getCrystalHandlerBlue() {
//     return function() {
//      userScore = userScore + crystalValues[1];
//      console.log("New userScore " + userScore);
//      $("#score").text(userScore);
//     }}
 
//     //  if (userScore === randomNum) {
//     //      winner()
//     //  }
 
//     //  else if (userScore > randomNum) {
//     //      loser()
//     //  } 
//  }
//  }

//  function getCrystalHandler() {
//     return function() {
//      userScore = userScore + crystalValues[2];
//      console.log("New userScore " + userScore);
//      $("#score").text(userScore);
 
// //      if (userScore === randomNum) {
// //          winner()
// //      }
 
// //      else if (userScore > randomNum) {
// //          loser()
// //      } 
//  }
//  }

//  function getCrystalHandler() {
//     return function() {
//      userScore = userScore + crystalValues[3];
//      console.log("New userScore " + userScore);
//      $("#score").text(userScore);
 
//     //  if (userScore === randomNum) {
//     //      winner()
//     //  }
 
//     //  else if (userScore > randomNum) {
//     //      loser()
//     //  } 
//  }
//  }


$("#red").on("click", getCrystalHandler());
// $("#blue").on("click", getCrystalHandlerBlue());
// $("#green").on("click", getCrystalHandler(green));
// $("#clear").on("click", getCrystalHandler(clear));







//   Your game will hide this amount until the player clicks a crystal.
//   When they do click one, update the player's score counter.

// The player wins if their total score matches the random number from the beginning of the game.

// The player loses if their score goes above the random number.

// The game restarts whenever the player wins or loses.

//   When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

    // The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.
})