var button = document.getElementById("hi");
var body = document.body; 

button.addEventListener("click", function(){
console.log("click");
body.setAttribute("style", "background-color: white; color: pink;");

})