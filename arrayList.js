var arrayStr;
var listLength;
function myFunctiononload()
{
    var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       arrayStr=JSON.parse(xhttp.responseText);

    var addList = "";
    listLength = arrayStr.length;
   for( var i=0; i<listLength; i++)
    {
addList += "<li>" + arrayStr[i].name +"</li>";
    }
    document.getElementById("showList").innerHTML = addList;
}
};
xhttp.open("GET", "arraListJson.json", true);
xhttp.send();    
}

function myFunction()
{
    var addList = "";
    var newList = document.getElementById("textBox").value;
        if (newList.length > 0)
        {
            arrayStr.push({"name":newList,"code":arrayStr.length+1});
        }
        listLength = arrayStr.length;    
   for( var i=0; i<listLength; i++)
    {
addList += "<li>" + arrayStr[i].name +"</li>";
    }
    document.getElementById("showList").innerHTML = addList;
    
}

function delFunction()
{
        var delList = document.getElementById("textBox").value;
    var addList = "";
    listLength = arrayStr.length;
    //  var delVal = arrayStr.indexOf(arrayStr.delList,1);
     if(delList!=null)
     {
        for( var i=0; i<listLength; i++)
        {
            if(arrayStr[i].name===delList)
            {
                arrayStr.splice(i,1);
                break;
            }
        }
        // arrayStr=JSON.parse(arrayStr);
        listLength = arrayStr.length;
    }
   for( var i=0; i<listLength; i++)
    {

addList += "<li>" + arrayStr[i].name +"</li>";
  }
    document.getElementById("showList").innerHTML = addList; 
    
   
}

