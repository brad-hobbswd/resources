/*========================================================

RESOURCE LIBRARY JAVASCRIPT

Author: Bradley Hobbs

========================================================*/


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
SMOOTH SCROLLING
========================================================*/


document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {


anchor.addEventListener("click", function(event){


const target =
document.querySelector(
this.getAttribute("href")
);



if(target){


event.preventDefault();



target.scrollIntoView({

    behavior:"smooth",

    block:"start"

});


}



});


});









/*========================================================
RESOURCE CARD ANIMATION
========================================================*/


const cards =
document.querySelectorAll(
".resource-card"
);



if(cards.length){



const observer =
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("visible");


observer.unobserve(entry.target);


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


}









/*========================================================
ACTIVE NAVIGATION
========================================================*/


const sections =
document.querySelectorAll(
".resource-category"
);



const navigationLinks =
document.querySelectorAll(
".nav-links a"
);



if(sections.length){



window.addEventListener("scroll", () => {



let current = "";



sections.forEach(section => {



const sectionTop =
section.offsetTop - 150;



if(
window.scrollY >= sectionTop
){


current =
section.getAttribute("id");


}



});





navigationLinks.forEach(link=>{


link.classList.remove("active");



if(
link.getAttribute("href")
=== "#" + current
){


link.classList.add("active");


}



});



});



}









/*========================================================
FOOTER YEAR
========================================================*/


const year =
document.querySelector(".footer-year");



if(year){


year.textContent =
new Date().getFullYear();


}






/*========================================================
EXTERNAL LINKS
========================================================*/


document
.querySelectorAll(
'.resource-card a[target="_blank"]'
)
.forEach(link=>{


link.setAttribute(
"rel",
"noopener noreferrer"
);


});






});
