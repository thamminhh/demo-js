// input
const salaryPerDay = 100000;
let day = prompt("Enter number of work days: ");
// process
let salary = day * salaryPerDay;
// output
console.log(salary);

let result = "" ; 
result += "<p>Your salary: " + salary +"VNĐ</p>"; 

let pSalary = document.getElementById("salary");
pSalary.innerHTML = result;

