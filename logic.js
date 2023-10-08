// variables to keep track of quiz state
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

// variables to reference DOM elements

//START BUTTON
var startBtn = document.getElementById("start");
startBtn.addEventListener("click", startQuiz);

//STRAT SCREEN
var startScreen = document.getElementById("start-screen");

//QUESTIONS SCREEN
var questScreen = document.getElementById("questions");
var questTitle = document.getElementById("question-title");
var questChoices = document.getElementById("choices");
//buttons
var choiceButtons = document.querySelectorAll(".choices");
choiceButtons.forEach(function (choiceBtn) {
  choiceBtn.addEventListener("click", questionClick);
});

function startQuiz() {
  //test
  console.log("this seems to be working.. so far");
  // hide start screen
  startScreen.setAttribute("class", "hide");
  // un-hide questions section
  questScreen.setAttribute("class", "start"); // **** DBLCHECK THE ABOVE l8r
  // start timer
  startTimer();

  // show starting time???

  getQuestion();
}

function startTimer() {
  // Set an interval to update the timer every second (1000 milliseconds)
  timerId = setInterval(function () {
    // Display the remaining time in the "time" span
    document.getElementById("time").textContent = time;

    // Decrease the time by 1 second
    time--;

    // Check if time is up
    if (time <= 0) {
      clearInterval(timerId); // Stop the timer when time is up
      //  add code here to handle what happens when the time is up, such as ending the quiz?? = quizEnd()
    }
  }, 1000); // 1000 milliseconds = 1 second
}

function getQuestion() {
  // get current question object from array
  var currentQuest = questions[currentQuestionIndex];
  //console.log(currentQuest);
  // update title with current question
  questTitle.textContent = currentQuest.title;
  // clear out any old question choices
  questChoices.innerHTML = "";
  // loop over choices
  var currentChoices = questions[currentQuestionIndex].choices;
  //console.log(currentChoices);
  for (
    let i = 0;
    i < currentQuest.choices.length;
    i++ // create new button for each choice
  ) {
    // set the txt of the btn to choice
    var choiceBtn = document.createElement("button");
    choiceBtn.textContent = currentQuest.choices[i];
    // display on the page
    questChoices.appendChild(choiceBtn);
  }
}

function questionClick(event) {
  event.stopPropagation();
  var clickedChoice = event.target;
  console.log(clickedChoice);
  //test

  // if the clicked element is not a choice button, do nothing.
  if (clickedChoice.tagName !== "BUTTON") {
    return;
  }

  // Get the current question object based on the currentQuestionIndex
  var currentQuestion = questions[currentQuestionIndex];

  // Get the user's choice from the clicked button's text content
  var userChoice = clickedChoice.textContent;

  // Check if the user's choice is correct
  if (userChoice === currentQuestion.answer) {
    //move to teh next question
    currentQuestionIndex++;
    //getQuestion();
    //if incorrect penalize
  } else {
    currentQuestionIndex++;
    time -= 10;
  }
  // display new time on page
  document.getElementById("time").textContent = time;
  // play "wrong" sound effect
  //else
  // play "right" sound effect
  // flash right/wrong feedback on page for half a second
  // move to next question
  // check if we've run out of questions
  if (currentQuestionIndex >= questions.length) {
    quizEnd();
  } else {
    getQuestion();
  }
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
