const burger = document.querySelector('nav svg');

const body = document.querySelector('body');


const menu =document.getElementById('menu');



document.onclick=function(clickevent){
    if(clickevent.target.id !=='menu' && $(window).width() < 870 ) {
        gsap.to(".links",{x:"100%"});
        gsap.to('.line',{stroke:'white'});
        gsap.set('body',{overflow:'auto'});
        gsap.set('body',{overflowX:'hidden'});
        gsap.set('svg',{pointerEvents:'auto'} );
        burger.classList.add('active');
       
    }

    else if(($(window).width() < 870)){
        gsap.to('.links',{x:'0%'});
        gsap.to('.line',{stroke:'black'});
        
        gsap.fromTo('.links button',{opacity:0,y:-20},{opacity:1,y:0,delay:0.25,stagger:0.25});
        gsap.set("body",{overflow:"hidden"});
        gsap.set('svg',{pointerEvents:'none'} );
        burger.classList.toggle('active');
        
        
        

    }
    
}


window.addEventListener('load',() =>{
    let preload = document.querySelector('.loader-wrapper');
    preload.classList.add('load-wrapper-finish');
});

gsap.registerPlugin(ScrollToPlugin);

document.querySelectorAll("nav button").forEach((btn, index) => {
    btn.addEventListener("click", () => {
      gsap.to(document.body, {duration: 1, scrollTo:{y:"#section" + (index + 1)}});
    });
  });
  