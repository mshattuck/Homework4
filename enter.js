console.log("localstorage allscores: "+JSON.stringify(localStorage.getItem("allscores")));


// sets local variable from local storage score
var roundScore = localStorage.getItem('timescore');
document.getElementById("yourScore").innerHTML = roundScore;

var scoreEntry = { init:"",score: ""};



    //methods for LocalStorage MGMT
var applogic = {
    
      saveitem: function()
      {
      
        var allscores = [];
        allscores = JSON.parse(localStorage.getItem("allscores")) || [];
        //Read initials and score
        var inputs = document.getElementsByClassName("a1");

          scoreEntry.init = inputs[0].value;  
          scoreEntry.score = roundScore;
          
          allscores.push(scoreEntry);

                      console.log(allscores);
    
            //Convert the object into JSON and store it in Local Storage
        localStorage.setItem("allscores", JSON.stringify(allscores));

      updateTable();

      }
     }

    
//Save object into the localstorage
var btnsave = document.getElementById('btnsave');
btnsave.addEventListener('click', applogic.saveitem, false);


function updateTable()
{
  window.open("table.html", "_self");
}