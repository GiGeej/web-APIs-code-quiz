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

//END SCREEN
var endScreen = document.getElementById("end-screen");
var finScore = document.getElementById("final-score");

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
      clearInterval(timerId);
      quizEnd();
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
    time -= 25;
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
  clearInterval(timerId);
  // hide questions section
  questScreen.setAttribute("class", "hide");
  // show end screen
  endScreen.setAttribute("class", "start");
  // show final score
  finScore.textContent = time;
}

//not sure what this is for??
function clockTick() {
  // update time
  //time--;
  document.getElementById("time").textContent = time;
  // check if user ran out of time
  if (time <= 0) {
    quizEnd();
  }
}

// Ensure that the <ol> element with id "highscores" exists in your HTML
const highscoresList = document.getElementById("highscores");

function saveHighscore() {
  // Get the value of the initials input field
  const initialsInput = document.getElementById("initials").value.trim();

  // Check if the input is not empty
  if (!initialsInput) {
    alert("Please enter your initials to save your high score.");
    return;
  }

  // Retrieve existing high scores from local storage (if any)
  let highscores = JSON.parse(localStorage.getItem("highscores")) || [];

  // Format the new score object for the current user
  const newScore = {
    initials: initialsInput,
    score: time, // Assuming "time" is the score you want to save
  };

  // Add the new score object to the array of high scores
  highscores.push(newScore);

  // Save the updated high scores back to local storage as a JSON string
  localStorage.setItem("highscores", JSON.stringify(highscores));

  // Redirect to the "highscores.html" page
  window.location.href = "highscores.html";
}

// User clicks button to submit initials
let sbmtBtn = document.getElementById("submit");
sbmtBtn.addEventListener("click", function () {
  console.log("Button clicked"); // Add this line
  saveHighscore();
});

function checkForEnter(event) {
  // "13" represents the Enter key
  if (event.keyCode === 13) {
    // Trigger the saveHighscore function when Enter is pressed
    saveHighscore();
  }
}
