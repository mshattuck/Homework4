
var tablelogic = 
{
    // method to display the table
    loaddata: function () 
    {
        var datacount = localStorage.length - 1;  
        
        // draws the table of the scores array
        if (datacount > 0)
        {
            var render = "<table border='1'>";
            render += "<tr><th>Initials</th><th>Score</th></tr>";  
            for (i=0; i < datacount; i++)
            {
            var key = localStorage.key(i); // get key
            var score = localStorage.getItem(key); //get data from key
            var data = JSON.parse(score);

            render += "<tr><td>" + data.init + "</td><td>" + data.score + " </td>";
            }
        render+="</table>";
        results.innerHTML = render;
    }
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