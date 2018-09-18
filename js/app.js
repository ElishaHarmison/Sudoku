// Get user input - choose a number
//check the box isnt already full
//Identify the input per box - is it green or red?
//if all correct - print back a message
$(document).ready(function(){

//take the id of infobutton and when clicked run the information function
  $("#infoButton").click(Information);
  $("#submit").click(Input);

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

//run through each box, the correct answer is checked
  var solution = [[1,3,5,8,2,7,6,9,4],
                  [8,6,7,3,4,9,5,1,2],
                  [2,4,9,5,6,1,8,7,3],
                  [5,7,3,4,1,9,2,8,6],
                  [9,8,1,6,2,5,7,3,4],
                  [4,2,6,3,8,7,9,1,5],
                  [7,6,8,9,5,1,3,4,2],
                  [2,5,3,4,7,8,1,9,6],
                  [1,9,4,6,3,2,7,5,8]]


// checkInput();
//create the variable value
//take the user input and implement them into the array to check if the order is correct
var value = [];
function Input(){


  value.push(document.getElementsByClassName(".UI1"));
  value.push(document.getElementsByClassName(".UI2"));
  value = [ , ,5,8];
  value.push(document.getElementsByClassName(".UI3"));
  value = [ , ,5,8, ,7,6];
  value.push(document.getElementsByClassName(".UI4"));
  value = [ , ,5,8, ,7,6, ,4];

}
console.log(value);

// value = [ , ,5,8, ,7,6, ,4];
// value.splice(0, 1, ".UserInput")
//
// function valueFunc(){
//   value.push("");
//   $(this).getElementsByClassName(".UserInput").innerHTML = value;
// }




    // function checkInput(){
    //   //checking Box1
    //   if (solution[0][0] == 1) {
    //     $(this).addClass("correct");
    //   }
    //   else {
    //     $(this).addClass("wrong");
    //   }
    //
    //   if (solution[0][1] == 3){
    //     $(this).addClass("correct");
    //   }
    //   else {
    //     $(this).addClass("wrong");
    //   }
    //
    //   if (solution[0][2] == 5){
    //     $(this).addClass("correct");
    //   }
    //   else {
    //     $(this).addClass("wrong");
    //   }
    //
    //   if (solution[0][3] == 8){
    //     $(this).addClass("correct");
    //   }
    //   else {
    //     $(this).addClass("wrong");
    //   }
    //
    //   if (solution[0][4] == 2){
    //     $(this).addClass("correct");
    //   }
    //   else {
    //     $(this).addClass("wrong");
    //   }
    //
    //   if (solution[0][5] == 7){
    //     $(this).addClass("correct");
    //   }
    //   else {
    //     $(this).addClass("wrong");
    //   }
    //
    //   if (solution[0][6] == 6){
    //     $(this).addClass("correct");
    //   }
    //   else {
    //     $(this).addClass("wrong");
    //   }
    //
    //   if (solution[0][7] == 9){
    //     $(this).addClass("correct");
    //   }
    //   else {
    //     $(this).addClass("wrong");
    //   }
    //
    //   if (solution[0][8] == 4){
    //     $(this).addClass("correct");
    //   }
    //   else {
    //     $(this).addClass("wrong");
    //   }
    //
    //   //Checking Box2
    //   if (solution[1][0] == 8){
    //     $(this).addClass("correct");
    //   }
    //   else {
    //     $(this).addClass("wrong");
    //   }
    //
    //   if (solution[1][1] == 6){
    //     $(this).addClass("correct");
    //   }
    //   else {
    //     $(this).addClass("wrong");
    //   }
    //
    //   if (solution[1][2] == 7){
    //     $(this).addClass("correct");
    //   }
    //   else {
    //     $(this).addClass("wrong");
    //   }
    //
    //   if (solution[1][3] == 3){
    //     $(this).addClass("correct");
    //   }
    //   else {
    //     $(this).addClass("wrong");
    //   }
    //
    //   if (solution[1][4] == 4){
    //     $(this).addClass("correct");
    //   }
    //   else {
    //     $(this).addClass("wrong");
    //   }
    //
    //   if (solution[1][5] == 9){
    //     $(this).addClass("correct");
    //   }
    //   else {
    //     $(this).addClass("wrong");
    //   }
    //
    //   if (solution[1][6] == 5){
    //     $(this).addClass("correct");
    //   }
    //   else {
    //     $(this).addClass("wrong");
    //   }
    //
    //   if (solution[1][7] == 1){
    //     $(this).addClass("correct");
    //   }
    //   else {
    //     $(this).addClass("wrong");
    //   }
    //
    //   if (solution[1][8] == 2){
    //     $(this).addClass("correct");
    //   }
    //   else {
    //     $(this).addClass("wrong");
    //   }




});


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


// });
// User_guess = getElementsByClassName("UserInput");
// row1 = getElementsByClassName("row1[];");
// console.log("row1");
// function userinput(){
//
// }
