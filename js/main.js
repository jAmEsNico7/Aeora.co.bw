const header = document.querySelector("header");
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');


menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}
ScrollReveal({ reset: true,
   distance:'60px',
   duration: 2500 ,
   delay: 400
});
 document.addEventListener("click", e => {
  const isdropdownbutton =e.target.matches("[data-dropdown-button]")
  if (!isdropdownbutton && e.target.closest('[data-dropdown]')!=null ) return

 let currentDropdown
 if(isdropdownbutton){
    currentDropdown= e.target.closest('[data-dropdown]')
    currentDropdown.classList.toggle('active')

document.querySelectorAll("[data-dropdown].active").forEach(dropdown=>{
    if(dropdown === currentDropdown) return
    dropdown.classList.remove('active')


})

}

})

function changeImage(x,image)
{
    if(
     x==1
    ){
        image.src="C:/AEORA/images/Fingers.jpg";
    }
    if(x== 2){
        image.src="C:/AEORA/images/Eye.jpg";
    }
}

ScrollReveal().reveal('.main-title, .section-title, .welcome , .service,', { delay: 500, origin:'left' });
ScrollReveal().reveal('.sec-01 .image ,.info, .slogan,.image-resize3', { delay: 600, origin:'bottom' });
ScrollReveal().reveal(' .sec-02 .image , .row', { delay: 600, origin:'top' , interval: 200});
ScrollReveal().reveal('.text-box , .info-title ,.dodo', { delay: 700, origin:'right' , interval:200 });