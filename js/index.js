// Your code goes here

const headerColor = document.querySelectorAll('h2');

headerColor.addEventListener("click", function (title) {
    title.target.style.color = "blue";
});

// console.log(headerColor)