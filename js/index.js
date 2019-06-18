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

const headerDrag = document.querySelectorAll('h4');

headerDrag.forEach( (item) => {
    item.addEventListener("dragstart", event => {
        event.target.style.border = "1px solid red";
    });

    item.addEventListener("drag", event => {
        event.target.style.border = "1px dotted black";
    });

    item.addEventListener("dragend", event => {
        event.target.style.border = "1px dashed purple";
    });
});

