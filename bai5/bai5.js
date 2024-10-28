// input
let number = prompt("Enter 2 digit number: ") * 1;
// process
let so_hang_chuc = Math.floor(number/10);
let so_hang_dv = number%10;
// output
let sum = so_hang_chuc + so_hang_dv;

let result = "" ; 
result += "<p>Sum 2 text number: " + sum +"</p>"; 

let pSum = document.getElementById("pSum");
pSum.innerHTML = result;
