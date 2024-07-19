let menuButton=document.getElementById("menuButton");
let menu=document.getElementById("menu");
let header=document.getElementById("header");
let section=document.querySelector("section");
let infoDiv=document.getElementById("info");
let moon=document.getElementById("moon");
let sectionDivs=document.querySelectorAll("#firstDiv,#thirdDiv,#fifthDiv");
let paragraphs=document.querySelectorAll("#firstDiv p,#thirdDiv p,#fifthDiv p");
let info=document.getElementById("info");
let images=document.querySelectorAll(".buttons, .vonal")
let divovi=document.querySelectorAll("#secondDiv p,#fourthDiv p, .h2");
AOS.init();

menuButton.addEventListener('click',()=>{
    menu.classList.toggle("hamburgerMenu-cards");
    header.classList.toggle("hamburgerMenu-header");
    section.classList.toggle("hamburgerMenu-section");
    infoDiv.classList.toggle("hamburgerMenu-infoDiv");
})

moon.addEventListener('click',()=>{
section.classList.toggle("lightModeSection");
for(let d of sectionDivs){
    d.classList.toggle("lightModeDivs");
}
for(let p of paragraphs){
    p.classList.toggle("whiteLetters");
}
info.classList.toggle("whiteBackground");
for(let i of images){
    i.classList.toggle("lightModeImages");
}
for(let dd of divovi){
    dd.classList.toggle("blackLetters")
}
})


jQuery(document).ready(function ($) {
    $('#checkbox').change(function(){
      setInterval(function () {
          moveRight();
      }, 3000);
    });

    var slideCount = $('#slider ul li').length;
    var slideWidth = $('#slider ul li').width();
    var slideHeight = $('#slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;

    $('#slider').css({ width: slideWidth, height: slideHeight });

    $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function (event) {
        event.preventDefault();
        moveLeft();
    });

    $('a.control_next').click(function (event) {
        event.preventDefault();
        moveRight();
    });

});

const popupOverlay = document.querySelector(".popup-overlay");
const popupContainer = document.querySelector(".popup-container");
const closePopupButton = document.getElementById("close-popup");
 
function openPopup() {
  popupOverlay.style.display = "flex";
  setTimeout(() => {
    popupContainer.style.opacity = "1";
    popupContainer.style.transform = "scale(1)";
  }, 100);
  document.body.classList.add("scroll-lock");
} //JS
 
function closePopup() {
  popupContainer.style.opacity = "0";
  popupContainer.style.transform = "scale(0.8)";
  setTimeout(() => {
    popupOverlay.style.display = "none";
  }, 300);
  document.body.classList.remove("scroll-lock");
}
 
window.addEventListener("load", () => {
    setTimeout(openPopup, 8000); // 8 sekundi
});
 
closePopupButton.addEventListener("click", closePopup);
