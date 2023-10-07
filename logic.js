// variables to keep track of quiz state
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

// variables to reference DOM elements

function startQuiz() {
  // hide start screen

  // un-hide questions section

  // start timer

  // show starting time

  getQuestion();
}

function getQuestion() {
  // get current question object from array
  // update title with current question
  // clear out any old question choices
  // loop over choices
  // create new button for each choice
  // display on the page
}

function questionClick(event) {
  // if the clicked element is not a choice button, do nothing.
  // check if user guessed wrong
  // penalize time
  // display new time on page
  // play "wrong" sound effect
  //else
  // play "right" sound effect
  // flash right/wrong feedback on page for half a second
  // move to next question
  // check if we've run out of questions
}

function quizEnd() {
  // stop timer
  // show end screen
  // show final score
  // hide questions section
}

function clockTick() {
  // update time
  // check if user ran out of time
}

function saveHighscore() {
  // get value of input box
  // make sure value wasn't empty
  // get saved scores from localstorage, or if not any, set to empty array
  // format new score object for current user
  // save to localstorage
  // redirect to next page
}

function checkForEnter(event) {
  // "13" represents the enter key
}

// user clicks button to submit initials

// user clicks button to start quiz

// user clicks on element containing choices
