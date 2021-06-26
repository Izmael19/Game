const button = document.getElementById('enterButton');


button.onclick = function() {
let name = document.getElementById('name').value;
localStorage.setItem("name", name);
let  age = document.getElementById('age').value;
localStorage.setItem("age", age);
 };