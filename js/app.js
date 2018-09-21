// JQuery version of DOM
$(document).ready(function(){


  //Take the id of infobutton and when clicked run the information function
  //run submit on click
  $("#infoButton").click(Information);
  $("#submit").click(checkUserInput);

  //Inform the user of the rules
  //this runs when infobutton is clicked
  function Information() {
    alert("Rules of Sudoku... In order for you to win this game you must fill in all of the blank squares. The purpose of this game is to fill each box with numbers between 1-9. HOWEVER, they must not repeat within the box, the same row or column...");
    alert("This means that each box and corresponding row & column must also have the numbers 1-9 without being repeated.");
    alert("Complete the sudoku and press submit to try your luck!");
  }

  //set variables for the sounds later in the code
  var WinSound;
  var FailSound;

  //the array of all the correct answers per empty box
  var solution = [1,3,2,9,8,7,3,4,5,1,4,1,8,7,5,7,3,4,9,2,8,9,1,7,4,2,6,3,7,9,1,5,6,8,9,4,5,3,7,8,1,6,9,3,5,8];

  //calls the function
  checkUserInput();

  //When submit is clicked it runs the function event
  //It then resets userinput and correctanswers to 0 each time
  function checkUserInput(){
    $(".submit").click(function(event){
      var userinput = [];
      var correctanswers = 0;

      //From the input it takes each box and runs the function
      //Then pushes it into userinput
      $("input").each(function(){
        userinput.push($(this).val());
      });

      //It is checked that if the user input is correct with the solution(&length) to add onto correct answers
      for (var i = 0; i < solution.length; i++) {
        if (solution[i] == userinput[i]) {
          //takes the input and changes the background if it is correct/incorrect.
          $("input").eq(i).css( "background-color", "#91FF99" );
          correctanswers++;
        } else {
          $("input").eq(i).css( "background-color", "#FF6250" );
        }
      }


      //function to play sound
      //creates the audio element so it plays the sound
      //appends the sound to the child the code is found in - if correct
      //sets play to a function and runs it on play
    function sound(src) {
      this.sound = document.createElement("audio");
      this.sound.src = src;
      document.body.appendChild(this.sound);
      this.play = function(){
      this.sound.play();
    }
}
      //if the users input is correct it prints a well done alert as well as plays the audio
      //if they are incorrect it alerts that its wrong, along with a different audio playing.
      if (correctanswers == (solution.length)) {
        WinSound = new sound("sound/win.mp3");
        WinSound.play();
        alert("Well done! You've won!")
      } else {
        FailSound = new sound("sound/fail.mp3");
        FailSound.play();
        alert("Mmmm.. something's not right")
      }
    });
  }
});
