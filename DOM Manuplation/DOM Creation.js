// let parentDiv = document.createElement("p");
// let heading = document.createTextNode("Login Page");
// parentDiv.appendChild(heading);

// document.body.appendChild(parentDiv);

// let ipt=document.createElement("input");
// let but=document.createElement("button");
// let butname=document.createTextNode("Click");
// but.appendChild(butname);
// document.body.appendChild(ipt);
// document.body.appendChild(but);




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
    emptystring+="<tr><td>"+note+"</td><td>"+value+"</td><td><button type='button' onclick='removeItem("+index+")'>Remove</button></td></tr>";
  })
  document.getElementById("tbodyid").innerHTML=emptystring
}


// function removeitem(id)
// {
//   stockText.splice(1,id);
//   getItem()
// }

//  function Dell()
//  {
//     var dnot=document.getElementById(addItem);
//     let dnot1=dnot.splice();
//     document.getElementById(dont);
//     document.getElementById(dnot1);

//  }
//  Dell()





//  window.onclick=function(event)
//  {
//      if (event.target == dnot){
//          dnot.style.display = "none";
//      }
//  }
