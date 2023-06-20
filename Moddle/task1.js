// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>task1</title>
// </head>
// <body>
//     <div id="calculateAge">

//     </div>
//     <script src="./task1.js"></script>
// </body>
// </html>


// var currentAge="20";
// var maximumAge="70";
// var estAmount="300"
// var crtAmount=(estAmount*365)*(maximumAge-currentAge);
// var ages=maximumAge-currentAge;
// document.getElementById("foodCalculation").innerHTML= "You will need "+ crtAmount +" to last you until the ripe old age of "+ maximumAge;
// console.log("You will need "+crtAmount+" to last you until the ripe old age of  " +maximumAge);
// var a=10;
// var b=20;
// console.log(a<b?"true":"false")


// operaters task-2
// var anchoviesPizzaScore = 0;
// var  pepperoniPizzaScore = 4;
// var  hawaiianPizzaScore = 4;
// var  chickenBaconRanchPizzaScore = 6;
// console.log (anchoviesPizzaScore < pepperoniPizzaScore);
// console.log (chickenBaconRanchPizzaScore > hawaiianPizzaScore);
// console.log (hawaiianPizzaScore > pepperoniPizzaScore);
// console.log (pepperoniPizzaScore <= chickenBaconRanchPizzaScore);
// console.log (hawaiianPizzaScore >= pepperoniPizzaScore);

// var birthYear="2002";
// var futureAge="2023";
// var ages=futureAge-birthYear;
// document.getElementById("calculateAge").innerHTML=" I will be either " +ages+" or "+ (ages-1) +" in "+futureAge;
// console.log("I will be either "+ages+" or "+(ages-1)+" in " +futureAge);



// var firstName="Ram", lastName="Kumar", age="30.";
// document.getElementById("stuDetail").innerHTML=firstName+lastName + age;
// console.log(firstName,lastName,age);



// var geoLocation="Bangalore.";
// var jobTitle="Web Developer";
// document.getElementById("sentance").innerHTML="<p> You will be a " + jobTitle + " in " + geoLocation +"</p>"; 
// console.log("You will be a "+ jobTitle+ " in "+ geoLocation);


// var a=100;
// var b=200;
// var c=300;
// if ((a>b)&&(a>c))
// {
//     console.log('a is greater')
// }
// else if((b>a)&&(b>c))
// {
//     console.log('b is greater')
// }
// else if ((c>a)&&(c>b))
// {
//     console.log('c is greater')
// }
// else
// {
//     console.log('all are equal value')
// }

// if else if example
// var a=prompt("abc")
// var b=prompt("def")
// var c=prompt("ghi")
// if ((a>b)&&(a>c))
// {
//     alert('a is greater')
// }
// else if((b>a)&&(b>c))
// {
//     alert('b is greater')
// }
// else if((b>a)&&(b>c))
// {
//     alert('c is greater')
// }
// else
// {
//     alert('all are equal value')
// }

//switch output
// var input1=parseInt(prompt('enter a value'));
// var input2=parseInt(prompt('enter a value'));
// var choice=parseInt(prompt('enter a choice'));
// switch(choice)
// {
//     case 1:
//     var total=input1+input2;
//     alert ('addition:'+total);
//     break;
//     case 2:
//     var total=input1-input2;
//     alert ('subraction:'+total);
//     break;
//     case 3:
//     var total=input1*input2;
//     alert ('multiplication:'+total);
//     break;
//     default:
//         alert('invalud choice');
//         break;
// }

// for and let loop condiction
// for (let i=10;i<=0;i--)
// {
//     document.write(i);
// }
// let end=10;//assending order
// for(let st=1;st<=end;st++)
// {
//     if(st%2==0)
//     {
//         document.write(st);
//     }
// }
// for(let st=1;st<=end;st++)
// {
//     if(st%2!=0)
//     {
//         document.write(st);
//     }
// }
// for(let st=1;end>=st;end--)
// {
//     if(end%2!=0)
//     {
//         document.write(end);
//     }
// }
// for(let st=1;end>=st;end--)
// {
//     if(end%2==0)
//     {
//         document.write(end);
//     }
// }
//some of series
// let n=7;s=0;
// for(let i=1;i<=n;i++)
// {
//     s+=i;
//     // document.write(s);
// }
// document.write(s);

// let n=5;s=1;
// for(let i=1;i<=n;i++)
// {
//     s*=i;
// }
// document.write(s);

// while
// let n=10
// let i=1;
// while(i<=n)
// {
//     document.write(i);
//     i++;
// }

// do while eg
// let i=0;
// let n=10;
// do
// {
//     document.write(i);
//     i++;
// }while(i<=n);

// Fibinozi
// let x=-1;
// let y=1;
// let z;
// let n=10;
// for(let i=1;i<=n;)
// {
//     z=x+y;
//     x=y;
//     y=z;
//     document.write(z);
// }

// let endingyear=2020;
// for(let startingyear=2000;startingyear<=endingyear;startingyear++)
// {
//     if(startingyear%4==0)
//     {
//         document.write('leapyear'+startingyear);
//     }
//     else
//     {
//         document.write('not a leapyear'+startingyear);
//     }
// }

// nested for
// let n=2;
// for(let i=0;i<=n;i++)
// {
//     for(let j=0;j<=n;j++)
//     {
//         console.log(i+''+j);
//     }
// }

// let n=10;
// for(let i=0;i<=n;i++)
// {
//     if(i==5)
//     {
//         continue;
//     }
//     console.log(i)
// }

// no argument no return
// function printdata()
// {
//     console.log('hai');
// }
// printdata();

// with argument no returnd 
// function printdata(studentname,age)
// {
//     console.log("hi my name is:" + studentname + " age is: " + age)
// }
// printdata("ram",20);

// with argument with function
// function printdata(studentname)
// {
//     return" Hi welcome " + studentname; 
// }
// console.log(printdata('neghaa'))


// Task-1 call a function
// function greet(){
// return"Hello! Have a nice day";
// }
// document.write(greet());


// Task-2
// let a=10
// let b=200 
// function add(){
//      return(a+b)                                 
// }
// document.write(add())


// Task-3
// function nationalAnimal(bird)
// {
//     return"The national bird of India is the " + bird; 
// }
// document.write(nationalAnimal('peacock'))

// Task-4
// function greetWithName(personName)
// {
//     return" Hi " + personName; 
// }
// document.write(greetWithName('Aravindh Kumar'))


// Task-5
// let a=4
// let b=2
// let c=a+b
// function average()
// {
//     document.write(c/2);
// }
// average()


// Task-6
// let a=5
// let b=60
// function minutes()
// {
//     document.write(a*b);
// }
// minutes()


// Task-7
// let num1=100;
// let num2=200;
// let num3=300;
// if (num1>num2 && num1>num3)
// {
//     document.write('A is greater');
// }
// else if((num2>num1)&&(num2>num3))
// {
//     document.write('B is greater');
// }
// else if((num3>num1)&&(num3>num2))
// {
//     document.write('C is greater');
// }
// else
// {
//     document.write('All are Equal Value');
// }


// Task-8
// let side1=parseInt(prompt());
// let side2=parseInt(prompt());
// let side3=parseInt(prompt());
// if (side1==side2 && side1==side3 && side2==side3)
// {
//     alert('Equilateral');
// }
// else if((side1==side2)||(side2==side3)||(side1==side3))
// {
//     alert('Isosceles');
// }
// else//((side1!=side2)&&(side2!=side3)&&(side1!=side3))
// {
//     alert('Scalene');
// }


// Task-9
// let a=parseInt(prompt(20));
// let b=parseInt(prompt(60));
// let num=parseInt(prompt(45));
// if (a<=num && b>=num){
//     alert('Between the range');
// }
// else
// {
//     alert('Outside the range')
// }


// Task-10
// let num1=parseInt(prompt()); 
// let num2=parseInt(prompt());
// let choice=parseInt(prompt("Enter a choice"));
// let total
// function evalNumber()
// {
// switch(choice)
// {
//     case 1:
//         total=num1+num2;
//     alert("Addition"+total);
//     break;
//     case 2:   
//     total=num1-num2;
//     alert("Subraction"+total);
//     break;
//     case 3:
//         total=num1*num2;
//     alert("Multiply"+total);
//     break;
//     case 4:
//         total=num1/num2;
//     alert("Divide"+total);
//     break;
//     case 5:
//         total=num1%num2;
//     alert("Modulus"+total);
//     break;
// }
// }
// evalNumber()


// Task-11
// function checkLeapYear(year)
// {
//     if((year%4 == 0)&&(year%100 !=0)||(year%400 == 0)){
//         document.write("Year "+year+" is a leap year");
//     }
//     else{
//         doucument.write("Year "+year+"is not a leap year");
//     }
// }
// checkLeapYear(1999)
// checkLeapYear(2003)
// checkLeapYear(2013)


// task-8

//  function Triangle(x,y,z)
//  {
//     if((x==y)&&(x==z))
//     {
//         console.log("this is equilateral triangle");
//     }
//     else if((x==y)||(y==z)||(x==z))
//     {
//         console.log("this is isosceles triangle");
//     }
//     else{
//         console.log("this scalene triangle");
//     }
//  }
//  let x=prompt("enter the value");
//  let y=prompt("enter the value");
//  let z=prompt("enter the value");
//  Triangle(x,y,z);

// task-9
//  function checkInrange(num, start, end)
//  {
//     if(num >= start && num <= end){
//         console.log(num+" is between the range "+start+" and "+end);
//     }
//     else{
//         console.log(num+" is outside the range "+start+" and "+end);
//     }
// }
//     checkInrange(15,11,30)
//     checkInrange(20,30,51)


// task-10
// function evalNumber(num1, num2, op)
// {
//     if (op == "add") {
//         console.log("Sum of " + num1 + " and " + num2 + " is " + (num1 + num2))
//     }
//     else if (op == "subtract") {
//         console.log("Difference of " + num1 + " and " + num2 + " is " + (num1 - num2))
//     }
//     else if (op == "multiply") {
//         console.log("Product of " + num1 + " and " + num2 + " is " + num1 * num2)
//     }
//     else if (op == "divide") {
//         console.log("Divison of " + num1 + " and " + num2 + " is " + num1 / num2)
//     }
//     else if (op == "modules") {
//         console.log("Modules of " + num1 + " and " + num2 + " is " + num1 % num2)
//     }
//     else {
//         console.log(op == "is an invalid operation")
//     }
// }
// evalNumber(15,10, "add")
// evalNumber(25,18,"subtract")
// evalNumber(14,3 ,"multiply")
// evalNumber(78,2 ,"divide")
// evalNumber(15,5 ,"modules")
// evalNumber(4,6,"angle")


// task-11
// function checkLeapYear(year){
//     if((year%4 == 0)&&(year%100 != 0)||(year%400 == 0)){
//         console.log("Year "+year+" is a leap year");
//     }
//     else{
//         console.log("Year "+year+" is not a leap year");
//     }
// }
// checkLeapYear(2000)
// checkLeapYear(2015)
// checkLeapYear(2023)


// task-12
// function findGrade(name, marks){
//     if(marks >= 90 && marks <= 100){
//         console.log(name+"you have recevied S grade")
//     }
//     else if(marks >= 80 && marks <= 90){
//         console.log(name+"you have recevied A grade")
//     }
//     else if(marks >= 70 && marks <= 80){
//         console.log(name+"you have recevied B grade")
//     }
//     else if(marks >= 60 && marks <= 70){
//         console.log(name+"you have recevied C grade")
//     }
//     else if(marks >= 50 && marks <= 60){
//         console.log(name+"you have recevied D grade")
//     }
//     else if(marks >= 40 && marks <= 50){
//         console.log(name+"you have recevied E grade")
//     }
//     else if(marks >= 0 && marks <= 40){
//         console.log(name+"you have recevied a grade failed")
//     }
//     else{
//         console.log("Invalid marks "+marks)
//     }
// }
// findGrade("Ram ",91)
// findGrade("Ram ",85)
// findGrade("Ram ",72)
// findGrade("Ram ",63)
// findGrade("Ram ",59)
// findGrade("Ram ",43)
// findGrade("Ram ",25)
// findGrade("Ram ",103)


// control statement Task-1
// var a=3 
// var b=-7
// var c=2
// var d=a*b*c
// if (d<0)
// alert("The sign is-")
// else {
//   alert("The sign is +")
// }


// Tsk-2
// for(let i=0;i<=15;i++)
// {
//     if(i%2==0)
//     document.write( i +" is even <br>");
//     else{
//     document.write( i +" is odd <br>");
//     }
// }


// Task-3
// let a = parseInt(prompt("Enter value of A: "));
// let b = parseInt(prompt("Enter value of b: "));
// if((a>b)){
//     document.write("A is greater");
// }
// else if((a==b)){
//     document.write("All are equal");
// }
// else
// {
//     document.write("B is greater");
// }


// Task-4
// var sum = 0;
// for (var x = 0; x <= 10; x++)
// {
//     if (x % 3 === 0 || x % 5 === 0)
//     {
//        sum += x;
//     }
// }
// document.write(sum);


// Task-5
// for (var x = 1; x <= 100; x++)
// {
//     if((x%3==0)&&(x%5==0))
//     {
//         document.write(x+"FizzBuzz<br>");
//     }
//     else if(x % 3 === 0)
//     {
        
//         document.write(x+" Fizz<br>");
//      }
//     else if (x % 5 === 0)
//     {
        
//         document.write(x+" Buzz<br>");
//     }
//     else{
//         document.write(x+"<br>");
//     }
// }





















// Project Code
// function collectProduct()
// {
//     let stProduct=document.getElementById('product').value;
//     let sProduct=document.getElementById('sp1');
//     let storeIteam;

//     if(stProduct.length>5)
//     {
//         storeIteam="product selected";
//     }
//     else
//     {
//         storeIteam="product not selected";      
//     }
//     sProduct.innerHTML=storeIteam;
// }
// function yourItm()
// {
//     let yiteam=document.getElementById('iteam').value;
//     let iteam1=document.getElementById('sp2');
//     let yourIteam;

//     if(yiteam.length<1)
//     {
//         yourIteam="not valued";
//     }
//     else
//     {
//         yourIteam="valued"
//     }
//     iteam1.innerHTML=yourIteam; 
// }
// function marketPrice()
// {
//     let mamount=document.getElementById('mrp').value;


//     let gamount=document.getElementById('gst').value=mamount*(5/100);
//     let gamount1=parseInt(gamount);
//     let aDiscount=document.getElementById('dis').value=gamount*(3/100);
//     let ttamount=document.getElementById('tamount').value=mamount-aDiscount;
//     let ttamount1=parseInt(ttamount);
// }
// function clickPrint()
// {
//     let print=document.getElementById('sp3');
// }






// Project-2
// var productName=[];
// function addItem()
// {
//   var stockItem=document.getElementById("iteam").value;
//   document.getElementById("item").value="";
//   productName.push(stockItem);
//   getItem();
// }

// function getItem()
// {
//   var sno=0;
//   var emptystring="";
 
//   productName.forEach(function(value,index)
//   {
//     sno+=1; 
//     emptystring+="<tr><td>"+sno+"</td><td>"+value+"</td></tr>"
//   })
//   document.getElementById("tbodyid").innerHTML=emptystring;
// }










