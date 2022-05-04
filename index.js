var timerEl = document.getElementById('countdown');
var startBtn = document.getElementById('btn-start');
var startScreen = document.getElementById('startingContainer');
var questionContainer = document.getElementById('questionContainer')
var answerBtn = document.getElementsByClassName('answers')
var timeLeft = 60;
var quizQuestions = [
    {
        question: "What is your fav car ?", 
        choices: ["A", "B","C","D"], 
        answer : "C"
    },
    {
        question: "What is your second car ?", 
        choices: ["A", "B","C","D"], 
        answer : "A"
    },
    {
        question: "What is your third car ?", 
        choices: ["A", "B","C","D"], 
        answer : "B"
    }
]
var currentQuestionIndex = 0
// Timer that counts down from 5
function countdown() {

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + ' seconds remaining';
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
        //end quiz 
    }
  }, 1000); //milliseconds
}; 

function showQandChoices(){
    console.log(quizQuestions[currentQuestionIndex])
    console.log(quizQuestions[currentQuestionIndex].question)
    //display the question on html page 
    document.getElementById('qText').textContent = quizQuestions[currentQuestionIndex].question; 
    //show text for the buttons 
    // document.getElementById('choice1').textContent = quizQuestions[currentQuestionIndex].choices;
    for (var i = 0; i < answerBtn.length; i++) {
  
    }
}

function startQuiz(){
    alert("Time begins"); 
    startScreen.setAttribute("class", "hide")
    questionContainer.setAttribute("class", "")
    countdown(); //start the clock 
    //show the question and choices 
    showQandChoices();
}
//Event Listener 
startBtn.addEventListener('click', startQuiz); 
for (var i = 0; i < answerBtn.length; i++) {
  answerBtn[i].addEventListener('click', checkAnswer); 
}
function checkAnswer(event){
console.log(event.target)
}