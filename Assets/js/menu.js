const menu = document.querySelector('.btn-menu-mobile')
const line1 = document.querySelector('.line1')
const line2 = document.querySelector('.line2')
const line3 = document.querySelector('.line3')
const heade =document.querySelector('.header');
const mobile = document.querySelector('.menu-mobile');
const a1 = document.querySelector('.a1');
const a2 = document.querySelector('.a2');
const a3 = document.querySelector('.a3');
const logo = document.querySelector('#logo');
const btnLeft = document.querySelector('#esq');
const btnRight = document.querySelector('#dir');
const gallery = document.querySelector('.gallery');



menu.addEventListener("click", (e)=>{
    openBtn();
})

function openBtn(){
    menu.classList.toggle('closed');
    line1.classList.toggle('close1');
    line2.classList.toggle('close2');
    line3.classList.toggle('close3');
    mobile.classList.toggle('open');
    
}

setInterval(() => {
    let y = window.scrollY
    if (y > 0){
        logo.classList.remove('invert')
        menu.classList.remove('invert')
        heade.classList.add('outh');
        a1.classList.add('out')
        a2.classList.add('out');
        a3.classList.add('out');
        
    }
    else{
        logo.classList.add('invert')
        heade.classList.remove('outh');
        a1.classList.remove('out');
        a2.classList.remove('out');
        a3.classList.remove('out');
        menu.classList.add('invert')
    }
}, 400);


function carrouselR(){
    if (gallery.style.marginLeft == '-100%'){
        gallery.style.marginLeft = '-200%'
        
    }
    else if (gallery.style.marginLeft == '-200%'){
        gallery.style.marginLeft = '0'
       
    }
    else{
        gallery.style.marginLeft = '-100%'
       

    }
    
    
}
function carrouselL(){
    if (gallery.style.marginLeft == '-100%'){
        gallery.style.marginLeft = '0'
       
    }
    else if (gallery.style.marginLeft == '-200%'){
        gallery.style.marginLeft = '-100%'
       
    }
    else{
        gallery.style.marginLeft = '-200%'
  
    }
}