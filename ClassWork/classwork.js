// function classWork()
// {
//     let classWk=document.querySelector('but')//.Value;
//     let classNum=document.querySelector('num')//.Value;
//     let classBut=document.querySelector('but1')//.Value;
//     let reSet=document.getElementById('reset')
//     if ((classWk==0)&&(classNum||0)&&(classBut==-1))
//     {
//         document.getElementById()
//     }
// }
// let i=0
// classBut.addEventListener("click", ()=>{
//     i++;
//     classNum.innerHTML= i;
//     console.log(i);
//   });

// classWk.addEventListener("click",() => {
//     if(i>0){
//       i--;
//       classNum.innerHTML=i;
      
//     }
//   });
//   reSet.addEventListener("click",()=>
//   {
//     if(i>=0){
//     i=0;
//     num.innerHTML=i;
//     }
//   })

var counter=document.getElementById("spn");
function increment()
{
    let pv=counter.textContent;
    let uv=parseInt(pv)+1;
    if (uv>0){
        counter.style.color="green";
    }
    else if(uv<0)
    {
        counter.style.color="red";
    }
    else
    {
        counter.style.color="black";
    }
    counter.textContent=uv;
}
function decrement()
{
    let pv=counter.textContent;
    let uv=parseInt(pv)-1;
    if (uv<0){
        counter.style.color="green";
    }
    else if(uv>0)
    {
        counter.style.color="red";
    }
    else
    {
        counter.style.color="black";
    }
    counter.textContent=uv;
}
function reset()
{
    let countervalue=0
    document.getElementById("span").textContent=countervalue
}