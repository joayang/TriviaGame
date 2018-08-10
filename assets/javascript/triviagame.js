document.addEventListener('DOMContentLoaded', function(){
// Global variable
var questionNum = 1;
var correctGuess = 0;
var incorrectGuess = 0;
var questions = [
  {},     // creat empty array since the first question is [1]
  {
    question: 'Why did the Simpsons go to New York CIty?',
    answers: ['Find their cat', 'Retrieve a lost car', 'Visit Statue of Liberty'],
    correctAnswer: 'Retrieve a lost car'
  },
  {
    question: 'What part of the body is affected by tinnitus?',
    answers: ['Ear', 'Jaw', 'Brain'],
    correctAnswer: 'Ear'
  },
  {
    question: 'Who was America\'s first billionaire?',
    answers: ['George Washington', 'John D. Rockefeller', 'Bill Gates'],
    correctAnswer: 'John D. Rockefeller'
  },
  {
    question: 'The Edgar Award is an award given in what field?',
    answers: ['Non-Fiction', 'Fantasy', 'Mystery'],
    correctAnswer: 'Mystery'
  },
  {
    question: 'Where were the 1960 Winter Olympics held?',
    answers: ['Squaw Valley, California', 'Salt Lake City, Utah', 'Sochi, Russia'],
    correctAnswer: 'Squaw Valley, California'
  },

]
var correctAnswer;
var wrongAnswer;
var intervalId;
// functions
function startGame() {
  loadQuestions();
  run();
}
function gamePlay() {
  // start game when user click the startBnt
}
$(".startBtn").on("click", function () {
  // use jQuery selector to remove button with the class startbnt
  $(".startBtn").remove();
  // timeCount();
  // quest1();
  startGame();
});
function run() {
  time = 10;
  intervalId = setInterval(decrement, 1000);
}

function decrement() {
  var timerDiv = $('#show-number');
  timerDiv.html("<h2>" + time + "</h2>");
  time--;

  if (time === -1) {
    incorrectGuess++;
    questionNum++;
    stop();
    alert("Time's up, game over!");
    $(".correct").html("Correct guesses: " + correctGuess);

  }
}
function stop() {

  clearInterval(intervalId);
}

// function questions

function loadQuestions() {
  // create new div and place it inside of btnContainer

  $(".correct").html("Correct guesses: " + correctGuess);
  $(".incorrect").html("Incorrect guesses: " + incorrectGuess);
  var newDiv = $('<div class="quest q1">');
  newDiv.html(questions[questionNum].question);
  var newButton = $('<button class="answerButton">');
  newButton.html(questions[questionNum].answers[0]);
  var newButton2 = $('<button class="answerButton">');
  newButton2.html(questions[questionNum].answers[1]);
  var newButton3 = $('<button class="answerButton">');
  newButton3.html(questions[questionNum].answers[2]);
  $(".btncontainer").append(newDiv);
  $(".btncontainer").append(newButton);
  $(".btncontainer").append(newButton2);
  $(".btncontainer").append(newButton3);
  var correctDiv = $('<div class="correct">');
  var incorrectDiv = $('<div class="incorrect">');
  // intervalId = setInterval(timeCount, 1000);
}
$(document).on("click", ".answerButton", function () {
  // use jQuery selector to remove button with the class startbnt
  if ($(this).text() === questions[questionNum].correctAnswer) {

    correctGuess++;
    questionNum++;
    $(".correct").html("Correct guesses: " + correctGuess);
    $(".btncontainer").empty();
    loadQuestions();
  } else {

    incorrectGuess++;
    questionNum++;
    $(".incorrect").html("Incorrect guesses: " + incorrectGuess);
    $(".btncontainer").empty();
    loadQuestions();

  }
});
gamePlay();
},false);