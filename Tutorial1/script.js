alert("Hello World!");

console.log("Code is running!");
console.log("Code is also running!");
console.log("Code is looking like a wow!");

var a = prompt("Enter your name");
var isTrue = confirm("Are you sure?, U want to leave your name as " + a + " ?");

if (isTrue) {
    console.log("Yes you're are sure!");
    
}
else{
    console.log("No, You're not sure!");
}
console.log("Your name is " + a);

document.title = "Hello " + a + "!";
document.body.style.backgroundColor = "lightblue";