let curday = new Date();
let date =curday.getDate();
let month = curday.getMonth()+1;
let year = curday.getFullYear();
console.log(date+"-"+month+"-"+year);
console.log(date+"*"+month+"*"+year);

fetch('https://example.com/api/data')
  .then(response => console.log("Success"));
