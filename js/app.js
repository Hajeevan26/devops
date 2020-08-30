let button = document.getElementsByTagName('button')[0];
let content = document.getElementById('content');
button.addEventListener("click", function () {
    content.innerHTML = "hello";
});
console.log(button);