/*---------------- toggle icon navbar --------------------*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*----------------Scroll  sections active links --------------------*/

let sections = document.querySelectorAll('sections');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = secoffsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            });
        };
    });
    /* -------------------sticky navbar-----------------*/

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

};

/*-------------- for options of resume--------------------*/
function MyFunc(){
    document.getElementById("resume").innerHTML = <img src="My Resume.cv.png" onclick= "window.open('My Resume.cv.png')" alt="click"></img>;
};

MyFunc();