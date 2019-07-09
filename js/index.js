// Your code goes here

const headerColor = document.querySelectorAll('h2');

headerColor.forEach((item) => {
    item.addEventListener("mouseover", event => {
        event.target.style.color = "#17A2B8";
    });

    item.addEventListener("mouseout", event => {
        event.target.style.color = "black";
    });
});

const highlight = document.querySelector('.text-content');

highlight.addEventListener("dblclick", event => {
    event.target.style.backgroundColor = "yellow"
    });

const buttonClick = document.querySelectorAll('.btn');

buttonClick.forEach( (item) => {
    item.addEventListener("click", event => {
        event.target.style.backgroundColor = "pink";
    });
});

const headerDrag = document.querySelector('h1');
// console.log(headerDrag)

    headerDrag.addEventListener("dragstart", () => {
        headerDrag.style.color = "red";
        // console.log(event.target.value);
    });

    headerDrag.addEventListener("drag", event => {
        event.target.style.backgroundColor = "black";
        console.dir(event.target);
    });

    headerDrag.addEventListener("dragend", event => {
        event.target.style.backgroundColor = "purple";
    });

// on load


// on scroll

// nested event



// preventDefault

const navDisable = document.querySelectorAll('nav a');

navDisable.forEach((item) => {

    item.addEventListener("click", event => {
        event.preventDefault();
    });

});


TweenMax.to("img", 2, {x:0, z:1, rotation:360});