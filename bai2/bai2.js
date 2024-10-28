// input
// nhap 5 so
let number_1 =  prompt("Enter value of number 1: ") * 1;
let number_2 =  prompt("Enter value of number 2: ") * 1;
let number_3 =  prompt("Enter value of number 3: ") * 1;
let number_4 =  prompt("Enter value of number 4: ") * 1;
let number_5 =  prompt("Enter value of number 5: ") * 1;
//process
// tinh trung binh 5 so 
let avarage =  0;
avarage =  (number_1 + number_2 + number_3 + number_4 + number_5)/5;

let result = "" ; 
result += "<p>Trung binh 5 so la: " + avarage +"</p>"; 

let pAvarage = document.getElementById("avarage");
pAvarage.innerHTML = result;
