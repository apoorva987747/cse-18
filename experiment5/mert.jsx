let employees = [];

function addEmployee(){

let name = document.getElementById("name").value;
let id = document.getElementById("id").value;
let salary = parseInt(document.getElementById("salary").value);
let dept = document.getElementById("dept").value;

let emp = {name,id,salary,dept};

employees.push(emp);

alert("Employee Added");

}

function displayAll(){

let result = "";

employees.forEach(e=>{
result += `${e.name} | ${e.id} | ${e.salary} | ${e.dept}<br>`;
});

document.getElementById("output").innerHTML = result;

}

function salaryAbove(){

let result = employees
.filter(e=>e.salary>50000)
.map(e=>`${e.name} - ${e.salary}`)
.join("<br>");

document.getElementById("output").innerHTML = result;

}

function totalSalary(){

let total = employees.reduce((sum,e)=>sum+e.salary,0);

document.getElementById("output").innerHTML = 
"Total Salary = " + total;

}

function averageSalary(){

let total = employees.reduce((sum,e)=>sum+e.salary,0);

let avg = total / employees.length;

document.getElementById("output").innerHTML = 
"Average Salary = " + avg;

}

function countDept(){

let count = {};

employees.forEach(e=>{
count[e.dept] = (count[e.dept] || 0) + 1;
});

let result="";

for(let d in count){
result += `${d} : ${count[d]}<br>`;
}

document.getElementById("output").innerHTML = result;

}
