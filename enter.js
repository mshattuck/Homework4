// sets local variable from local storage score
var roundScore = localStorage.getItem('timescore');
document.getElementById("yourScore").innerHTML = roundScore;

var scoreEntry = { init:"",score:""};

    //methods for LocalStorage MGMT
var applogic = {
    
      saveitem: function()
      {
        //get lenght of local storage
        var lscount = localStorage.length; 
                     
           
        //Read initials and score
        var inputs = document.getElementsByClassName("a1");
          scoreEntry.init = inputs[0].value;  
          scoreEntry.score = roundScore;
    
        //Convert the object into JSON and store it in LocalSto
        localStorage.setItem("Score_" + lscount, JSON.stringify(scoreEntry));

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