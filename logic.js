console.log("javascript loaded");

// variables for conducting the quiz
var answerKey = ["c", "a", "d",  "c", "d"];   // answer key to check against user answer
var userChoice = [];
var counting = 0;
var timeleft = 75;
var timescore = "";
var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["parentheses", "curly brackets", "quotes", "square brackets"],
    answer: "parentheses"
  },
  {
    title: "Arrays in JavaScript can be used to store ____.",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above"
    ],
    answer: "all of the above"
  },
  {
    title:
      "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes"
  },
  {
    title:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
    answer: "console.log"
  }
];



// countdown timer, removes 15 seconds for every wrong answer
function Timer()
{
  var downloadTimer = setInterval(function()
    {
      timeleft--;
      document.getElementById("countdowntimer").textContent = timeleft;
      if(timeleft <= 0)
          clearInterval(downloadTimer);
      if (timeleft < 1) 
          alert("Out of time. GAME OVER."),
          window.open("index.html", "_self");
    },1000);
}

// logic to loop through the question variables
function getQuestion()
{
    document.getElementById("question").textConent=questions[counting].title;
       
    for (i=0; i < questions[counting].choices.length; i++)
    { 
        document.getElementById("questionTitle").innerHTML=questions[counting].title;
        document.getElementById(`Qu${i}`).innerHTML= "  " + questions[counting].choices[i];
    }
  }

// Start Quiz button, removes and displays page elements, starts timer, calls question function
document.getElementById("startButton").addEventListener("click", function(event)
      {
        event.preventDefault();

        document.getElementById("startTitle").classList.add("hidden");
        document.getElementById("startButton").classList.add("hidden");
        document.getElementById("questionArea").classList.remove("hidden")
        Timer();
        getQuestion();
});

// button for listening to the answer that the player submits for the question
document.getElementById("submitButton").addEventListener("click", function(event)
    {
      var ele = document.getElementsByName('one'); 

      var corAns = answerKey[counting];
      
      for(i = 0; i < ele.length; i++)
         { 
          if(ele[i].checked) 
           {
            var Uanswer = ele[i].value;  
            }
          else null;  
          }
                  
        if (Uanswer === corAns) alert("Correct!");            // checks users answer against answer key 
              
        else alert("NOT correct!"), timeleft = timeleft-15;        
          
          
      ele = "";
      counting+=1;
          
          // end of quiz logic, sets the score to local storage

          if (counting < 5) getQuestion();
          else
          {
            localStorage.setItem('timescore', timeleft);
            updateScores();
          }
    });

    // after quiz is finished moves player to initial entry page
function updateScores()
{
  window.open("enter.html", "_self");
 
}
