let burger = document.querySelector('nav svg');

burger.addEventListener('click', ()=>{
    
    if(burger.classList.contains('active')){
        gsap.to(".links",{x:"100%"});
        gsap.to('.line',{stroke:'white'});
        gsap.set('body',{overflow:'auto'});
        gsap.set('body',{overflowX:'hidden'});
       
    }

    else{
        gsap.to('.links',{x:'0%'});
        gsap.to('.line',{stroke:'black'});
        gsap.fromTo('.links a',{opacity:0,y:-20},{opacity:1,y:0,delay:0.25,stagger:0.25});
        gsap.set("body",{overflow:"hidden"});
        
        
        

    }
    burger.classList.toggle('active');
});




window.addEventListener('load',() =>{
    let preload = document.querySelector('.loader-wrapper');
    preload.classList.add('load-wrapper-finish');
});