console.log("javascript loaded");
console.log("json local storage allscore: " + localStorage.getItem("allscores"))

var tablelogic = 
{
    // method to display the table
    loaddata: function () 
    {
       
            var render = "<table border='1'>";
            render += "<tr><th>Initials</th><th>Score</th></tr>";  
           
            var score = localStorage.getItem("allscores"); 
            
            var data = JSON.parse(score);
            for(x=0; x < data.length; x++)
             {
              render += "<tr><td>" + data[x].init + "</td><td>" + data[x].score + " </td>";

             }   
                                      console.log("data: "+data);
                                                                                      
          
           
        render+="</table>";
        results.innerHTML = render;
    },


//method to clear storage
clearstorage: function () 
{
  var storagecount = localStorage.length;
  if (storagecount > 0)
  {
    for (i = 0; i < storagecount; i++){
      localStorage.clear();
    }
  }
  window.location.reload();
}
};

// logic to clear the local storage, scores table
var clearStoragebtn = document.getElementById('clearStoragebtn');
clearStoragebtn.addEventListener('click', tablelogic.clearstorage, false);

// load the scores table when page is loaded
window.onload = function () 
{
    tablelogic.loaddata();
};