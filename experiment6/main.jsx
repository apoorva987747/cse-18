let heading = document.getElementById("mainHeading");
let paragraph = document.getElementById("para");
let box = document.querySelector(".box");
let input = document.getElementById("inputText");
let display = document.getElementById("displayText");

let fontSize = 16;
let visible = true;

document.getElementById("heading").onclick = function(){
heading.innerText = "Heading Changed Successfully!";
}

document.getElementById("background").onclick = function(){
box.style.backgroundColor = ["lightyellow","lightblue","lightgreen","lightpink","lavender","peachpuff","lightcoral","khaki","plum"][Math.floor(Math.random()*9)];

}

document.getElementById("font").onclick = function(){
fontSize += 2;
paragraph.style.fontSize = fontSize + "px";
}

document.getElementById("paragraph").onclick = function(){
if(visible){
paragraph.style.display = "none";
visible = false;
}
else{
paragraph.style.display = "block";
visible = true;
}
}

input.addEventListener("keyup", function(){
display.innerText = input.value;
});

document.getElementById("reset").onclick = function(){
heading.innerText = "Welcome to JavaScript Lab";
box.style.backgroundColor = "white";
paragraph.style.display = "block";
paragraph.style.fontSize = "16px";
display.innerText = "";
input.value = "";
}

