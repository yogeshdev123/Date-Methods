console.log("Current Date and Time are")
var da=new Date();
console.log(da);

console.log("Add Days to Date")
var da=new Date( "2024-10-7");
console.log(da);
console.log(" Format Date as MM/DD/YYYY")
var da=new Date("03/25/2015");
console.log(da);
console.log("Days Difference btw two dates")
var d2=new Date();
console.log(d2);
var d1=new Date("2024-10-17");
console.log(d1);
console.log(Math.abs(d1.getDay()-d2.getDay()));