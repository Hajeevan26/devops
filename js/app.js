let button = document.getElementsByTagName('button')[0];
let content = document.getElementById('content');
button.addEventListener("click", function () {
    content.innerHTML = "<p> double click</p>";
});
console.log(button);
