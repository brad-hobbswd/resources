/*========================================================

RESOURCE LIBRARY JAVASCRIPT

Author: Bradley Hobbs

========================================================*/


document.addEventListener("DOMContentLoaded", () => {



/*========================================================
MOBILE MENU
========================================================*/


const menuButton = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");



if(menuButton && navLinks){


    menuButton.addEventListener("click", () => {


        navLinks.classList.toggle("active");


    });



    document.querySelectorAll(".nav-links a")
    .forEach(link => {


        link.addEventListener("click", () => {


            navLinks.classList.remove("active");


        });


    });


}







/*========================================================
SCROLL REVEAL ANIMATION
========================================================*/


const cards = document.querySelectorAll(
".collection-card, .featured-box"
);



const observer = new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


    entry.target.classList.add("show");


}


});


},
{
    threshold:.15
}



);



cards.forEach(card=>{


    card.classList.add("hidden");

    observer.observe(card);


});








/*========================================================
ACTIVE NAVIGATION HIGHLIGHT
========================================================*/


const sections = document.querySelectorAll(
"section[id]"
);


const navigationLinks =
document.querySelectorAll(
".nav-links a"
);



window.addEventListener("scroll",()=>{


let current = "";



sections.forEach(section=>{


const sectionTop =
section.offsetTop - 120;



if(
window.scrollY >= sectionTop
){

current = section.getAttribute("id");

}


});



navigationLinks.forEach(link=>{


link.classList.remove("active");


if(
link.getAttribute("href") === "#" + current
){

link.classList.add("active");

}


});


});








/*========================================================
YEAR UPDATE
========================================================*/


const year =
document.querySelector(".footer-year");


if(year){

year.textContent =
new Date().getFullYear();

}



});
