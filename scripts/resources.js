document.addEventListener("DOMContentLoaded", () => {


/*========================================================

MOBILE MENU

========================================================*/


const menuButton =
document.querySelector(".menu-toggle");


const navLinks =
document.querySelector(".nav-links");



if(menuButton && navLinks){


    menuButton.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });



    document
    .querySelectorAll(".nav-links a")
    .forEach(link => {


        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

        });


    });


}






/*========================================================

RESOURCE CARD ANIMATION

========================================================*/


const cards =
document.querySelectorAll(".resource-card");



const observer =
new IntersectionObserver(
(entries) => {


entries.forEach(entry => {


    if(entry.isIntersecting){

        entry.target.classList.add("visible");

    }


});


},
{
    threshold:.15
}

);



cards.forEach(card => {

    card.classList.add("hidden");

    observer.observe(card);

});






/*========================================================

SMOOTH SCROLL

========================================================*/


document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {


anchor.addEventListener("click", function(e){


const target =
document.querySelector(
this.getAttribute("href")
);



if(target){

    e.preventDefault();

    target.scrollIntoView({

        behavior:"smooth"

    });

}


});


});






/*========================================================

ACTIVE NAVIGATION

========================================================*/


const sections =
document.querySelectorAll(
".resource-category"
);



const links =
document.querySelectorAll(
".nav-links a"
);



window.addEventListener("scroll", () => {


let current = "";



sections.forEach(section => {


const sectionTop =
section.offsetTop - 150;



if(window.scrollY >= sectionTop){

    current =
    section.getAttribute("id");

}


});



links.forEach(link => {


link.classList.remove("active");



if(
link.getAttribute("href") === "#" + current
){

    link.classList.add("active");

}


});


});







/*========================================================

UPDATE COPYRIGHT YEAR

========================================================*/


const year =
document.querySelector(".footer-year");



if(year){

year.textContent =
new Date().getFullYear();

}



});
