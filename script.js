/* Declare variables below to save the different sections (divs) of your story*/
let maildbutton = document.querySelector(".option-one");
let maildscreen = document.querySelector(".option-one-screen");
let openscreen = document.querySelector(".story-opening");

let  crownbutton = document.querySelector(".option-two");
let crownscreen = document.querySelector(".option-two-screen");

crownbutton.onclick = function() {
    crownscreen.style.display = "block";
    crownscreen.scrollIntoView();
    openscreen.style.display = "none";
};
maildbutton.onclick = function() {
    maildscreen.style.display = "block";
    maildscreen.scrollIntoView();
    openscreen.style.display = "none";
};
/*

INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/