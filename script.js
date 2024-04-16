let menuIcon = document.querySelector('#menu');
let navbar = document.querySelector('navbar');
let section = document.querySelector('section');
let navlinks = document.querySelector('header nav a');

window.onscroll = () => {
   sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offset - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute;

    if(top >= offset && top < offset + height){
        navlinks.forEach(links => {
            links.classList.remove('active')
            document.querySelector('header nav a [href*=' + id + ']').classList.add('active')
        })
    }
   })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}