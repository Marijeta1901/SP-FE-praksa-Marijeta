let menuButton=document.getElementById("menuButton");
let menu=document.getElementById("menu");
let header=document.getElementById("header");
let section=document.querySelector("section");
let infoDiv=document.getElementById("info");
let moon=document.getElementById("moon");
let sectionDivs=document.querySelectorAll("#firstDiv,#secondDiv,#thirdDiv,#foruthDiv,#fifthDiv");


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
})