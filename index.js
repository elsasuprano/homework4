var timerEl = document.getElementById('countdown');
var timeLeft = 60;
var startBtn = document.getElementById('btn-start');
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
    console.log(quizQuestions[0])
    console.log(quizQuestions[0].question)
    //display the question on html page 
    document.getElementById('qText').textContent = quizQuestions[0].question; 
    //show text for the buttons 
    document.getElementById('choice1').textContent = quizQuestions[0].choices;
}

function startQuiz(){
    alert("Time begins"); 
    countdown(); //start the clock 
    //show the question and choices 
    showQandChoices();
}
//Event Listener 
startBtn.addEventListener('click', startQuiz); 