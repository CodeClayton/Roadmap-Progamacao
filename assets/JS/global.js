const hamburgMenu = document.querySelector('.hamburguerMenu');
const mobileMenu = document.querySelector('.menu-mobile');
const navItem = document.querySelectorAll('.nav-item');

hamburgMenu.addEventListener('click',()=>{
    hamburgMenu.classList.toggle('mobile-active');
    mobileMenu.classList.toggle('active');
    
});

if(document.body.clientWidth > 785){
    mobileMenu.classList.remove('active');
    hamburgMenu.classList.remove('mobile-active');
};

navItem.forEach((item) => {
    item.addEventListener('click',() => {
        console.log('teste')
        hamburgMenu.classList.toggle('mobile-active');
        mobileMenu.classList.toggle('active');
    });
})