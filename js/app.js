// Get user input - choose a number
//check the box isnt already full
//Identify the input per box - is it green or red?
//if all correct - print back a message
$(document).ready(function(){

  $("#infoButton").click(Information);

  // Information();
  // checkInput();

  //Inform the user of the rules
  function Information() {
    // event.preventDefault();
    alert("Rules of Sudoku.. In order for you to win this game you must fill in all the squares. The purpose of this game is to fill each box with the numbers 1-9. HOWEVER, they must not repeat within the box, nor the same row or column....");
    alert("This means that each row and column must also have the numbers 1-9 without being repeated. It works out that when each box is complete, each line also fills the pattern.");
    alert("You must NOT repeat numbers");
    alert("Ready to start?");

  }
  //Check the input of the userinput









  
    //
    // $("#submit").click(function(){
    //   checkInput();
    // });
    //
    // function checkInput(){
    //   if ($(this) == 1) {
    //     $(this).addClass("correct");
    //   } else {
    //     $(this).addClass("wrong");
    //   }
    // }


});
// User_guess = getElementsByClassName("UserInput");
// row1 = getElementsByClassName("row1[];");
// console.log("row1");
// function userinput(){
//
// }
