//EX-3
// function add(){
//     let name = document.getElementById("textd").value;
//     let pass = document.getElementById("passid").value;
     
//     if (name==pass)
//     {
//         alert ("Data are Equal")
//     }
//     else{
//         alert("Date are Not equal")
//     }
// }


//Ex-4 form valudation
// function val(){
//     let text = document.getElementById("tex").value;
//     let pass = document.getElementById("pas").value;

//     if (text==""){

//     alert("One of your date is empty,Kindly fill it and try again:)")
//     }
//     else if(pass==""){

//         alert("One of your date is empty,Kindly fill it and try again:)")
//         }
//         else{
//             alert("null")
//         }
    
// }

//Ex-5 Arithamathic Operators
// function add()
// {
//     let a=parseInt(document.getElementById("num").value);
//     let b=parseInt(document.getElementById("num1").value);
//     document.getElementById("sn").innerHTML="Addition:"+(a+b);
// }
// function sub()
// {
//     let a=parseInt(document.getElementById("num").value);
//     let b=parseInt(document.getElementById("num1").value);
//     document.getElementById("sn").innerHTML="Subration:"+(a-b);
// }
// function mul()
// {
//     let a=parseInt(document.getElementById("num").value);
//     let b=parseInt(document.getElementById("num1").value);
//     document.getElementById("sn").innerHTML="Multiply:"+(a*b);
// }
// function div()
// {
//     let a=parseInt(document.getElementById("num").value);
//     let b=parseInt(document.getElementById("num1").value);
//     document.getElementById("sn").innerHTML="Division:"+(a/b);
// }
// function mod()
// {
//     let a=parseInt(document.getElementById("num").value);
//     let b=parseInt(document.getElementById("num1").value);
//     document.getElementById("sn").innerHTML="Modules:"+(a%b);
// } 

//EX -6
// function check(){
//     let num=parseInt(document.getElementById("iput").value);
//     var option="<option>Select</option>";
//     for (let i=0; i<num;i++)
//     {
//         option+= "<option>"+i+"</option>";
//     }
//     document.getElementById("sel").innerHTML=option;
// }

// //Ex - 7
// function check(){
//     let num=parseInt(document.getElementById("iput").value);
//     var option="<option>Select</option>";
//     for (let i=0; i<num;i++)
//     {
//         option+= "<option>"+i+"</option>";
//     }
//     document.getElementById("sel").innerHTML=option;
// }

// //EX-8
// function add(){
// var a = document.getElementById("txt").value;
// var b = '<option>select</option>';
// for(var i = 0; i <= a; i++){
//     b += '<option value = "'+i+'">'+i+'</option>';
// }
// document.getElementById("opt").innerHTML = b;
// }
// function select(){
// var x = document.getElementById("opt").value;
// var c = '<option>select</option>';
// for(var j = 0; j <= x; j++){
//     c += '<option>'+j+'</option>';
// }
// document.getElementById("opt1").innerHTML = c;
// } 

//EX -9
// function add()
// {
//     let num=parseInt(document.getElementById("txt").value);
//     let opt='<option value="">select</option>';
//     for(let i=0; i<=num; i++){
//         opt+= '<option value="'+i+'">'+i+'</option>';
//     }

//     document.getElementById("opa").innerHTML=opt;
// }

// function dataIncert()
// {
//     let emptyStr="";
//     let slt=document.getElementById("opa").value;

//     for(let j=0; j<=parseInt(slt); j++)
//     {
//        emptyStr+="<tr><td>"+j+"</td><td><input type='text'></td><td><input type='text'/></td></tr>";
//         console.log(j);
//     }

//     document.getElementById("tbodyId").innerHTML=emptyStr;

// }


//EX-10
function gen(){
    var n = document.getElementById("name").value;
    var date = document.getElementById("dob").value;
    var first = n.slice(0,4);
    var d = new Date(date);
    var last = d.getDate();
    var comb = first + last;
    document.getElementById("pass").value = comb;
}

//EX-11
function check(){
    var date = document.getElementById("date").value;
    var d = new Date(date);
    d.setDate(d.getDate()+5);
    var year  = d.getFullYear().toString();
    var month  = (d.getMonth()+1).toString();
    var dat  = d.getDate().toString();
    var aft = dat + "-" + month + "-" + year;
    document.getElementById("after").value = aft;
    var d1 = new Date(date)
    d1.setDate(d1.getDate()-5);
    var dat1 = d1.getDate().toString();
    var bef = dat1 + "-" + month + "-" + year;
    document.getElementById("before").value = bef;
}