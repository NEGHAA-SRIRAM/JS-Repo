var productName=[];
function addItem()
{
  var stockText=document.getElementById("exampleFormControlTextarea1").value;
  document.getElementById("exampleFormControlTextarea1").value="";
  productName.push(stockText);
  getItem()
}

function getItem()
{
  var note=0;
  var emptystring="";
 
  productName.forEach(function(value,index)
  {
    note+=1; 
    emptystring+="<tr><td>"+note+"</td><td>"+value+"</td></tr>"
  })
  document.getElementById("tbodyid").innerHTML=emptystring
}