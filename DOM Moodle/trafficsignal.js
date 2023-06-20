var btn1=document.getElementById("button1");
var btn2=document.getElementById("button2");
var btn3=document.getElementById("button3");
var btn4=document.getElementById("button4");
var btn5=document.getElementById("button5");
var btn6=document.getElementById("button6");
function redColor()
{
    btn1.style.backgroundColor="red";
    btn4.style.backgroundColor="red";
    btn2.style.backgroundColor="black";
    btn3.style.backgroundColor="black";
    btn5.style.backgroundColor="black";
    btn6.style.backgroundColor="black";

}
function yellowColor()
{
    btn2.style.backgroundColor="yellow";
    btn5.style.backgroundColor="yellow";
    btn1.style.backgroundColor="black";
    btn3.style.backgroundColor="black";
    btn4.style.backgroundColor="black";
    btn6.style.backgroundColor="black";
}
function greenColor()
{
    btn3.style.backgroundColor="green";
    btn6.style.backgroundColor="green";
    btn1.style.backgroundColor="black";
    btn2.style.backgroundColor="black";
    btn4.style.backgroundColor="black";
    btn5.style.backgroundColor="black";

}