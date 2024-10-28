// input
let money =  prompt("Nhap so tien ban muon quy doi: ") * 1;
const exchangeRate = 23500;
//process
money = exchangeRate * money;
let result = "" ; 
result += "<p>So tien quy doi la: " + money +"VNĐ</p>"; 

let pMoney = document.getElementById("money");
pMoney.innerHTML = result;
