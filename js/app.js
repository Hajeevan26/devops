let button = document.getElementsByTagName('button')[0];
let content = document.getElementById('content');
button.addEventListener("click", function () {
    content.innerHTML = "<p> devops lisbro</p>";
});
console.log(button);