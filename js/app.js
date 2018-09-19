// Get user input - choose a number
//check the box isnt already full
//Identify the input per box - is it green or red?
//if all correct - print back a message
$(document).ready(function(){


  //take the id of infobutton and when clicked run the information function
  $("#infoButton").click(Information);
  $("#submit").click(checkUserInput);

  // Information();
  // checkInput();

  //Inform the user of the rules
  function Information() {
    alert("Rules of Sudoku... In order for you to win this game you must fill in all of the blank squares. The purpose of this game is to fill each box with numbers between 1-9. HOWEVER, they must not repeat within the box, the same row or column...");
    alert("This means that each box and corresponding row & column must also have the numbers 1-9 without being repeated. It works out that when each box is complete, each line also fills the pattern.");
    alert("You must NOT repeat numbers");
    alert("Ready to start?");

  }

  var solution = [1,3,2,9,8,7,3,4,5,1,4,1,8,7,5,7,3,4,9,2,8,9,1,7,4,2,6,3,7,9,1,5,6,8,9,4,5,3,7,8,1,6,9,3,5,8];

  checkUserInput();

  function checkUserInput(){
    $(".submit").click(function(event){
      var userinput = [];
      var correctanswers = 0;

      $("input").each(function(){
        userinput.push($(this).val());
      });

      for (var i = 0; i < solution.length; i++) {
        if (solution[i] == userinput[i]) {
          // console.log(i + " value is correct");
          correctanswers++;
        } else {
          // console.log(i + " value is incorrect");
        }
      }

      if (correctanswers == (solution.length)) {
        console.log("well done!!! you win");
      } else {
        console.log("OOOPS!! Somethings wrong");
      }
    });
  }
});


//OTHER TYPE OF CHECK??
//   function checkInput(){
  //   $("submit").click(function(){
  //     if (solution[0][0] == 1){
  //       $(this).style.color = "green";
  //     }
  //     else {
  //       $(this).style.color = "red";
  //     }
  //   })
  // }


//CHANGE COLOR TESTS
// $("InnerBox").style.color = "green";
// OR
// $(this).addClass("correct");
