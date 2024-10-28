// input
let length =  prompt("Enter value of length(m): ") * 1;
let width =  prompt("Enter value of width(m): ") * 1;
//process
let area = length * width;
let perimeter = (length + width) * 2;
let result = "" ; 
result += "<p>Chu vi la: " + perimeter +"m</p><br>"; 
result += "<p>Dien tich la: " + area +"m2</p><br>"; 

let pResult = document.getElementById("pResult");
pResult.innerHTML = result;
