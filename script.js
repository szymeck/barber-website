const burger = document.querySelector('nav svg');
const body = document.querySelector('body');
const menu =document.getElementById('menu');



// burger menu
document.onclick=function(clickevent){
    if(clickevent.target.id !=='menu' && $(window).width() < 768 ) {
        gsap.to(".links",{x:"100%"});
        gsap.to('.line',{stroke:'white'});
        gsap.set('body',{overflow:'auto'});
        gsap.set('body',{overflowX:'hidden'});
        gsap.set('svg',{pointerEvents:'auto'} );
        burger.classList.add('active');
       
    }

    else if(($(window).width() < 768)){
        gsap.to('.links',{x:'0%'});
        gsap.to('.line',{stroke:'black'});
        gsap.fromTo('.links button',{opacity:0,y:-20},{opacity:1,y:0,delay:0.2,stagger:0.15});
        gsap.set("body",{overflow:"hidden"});
        gsap.set('svg',{pointerEvents:'none'} );
        burger.classList.toggle('active');
    }
}

// sticky nav desktop view
const nav = document.querySelector('nav');
window.addEventListener("scroll", ()=> {
    nav.classList.toggle('scrolled',window.scrollY>150);
});

// sticky nav mobile view
const onScroll = () => {
    const scroll = document.body.scrollTop;
  
    if (scroll > 150) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled")
    }
  }
  document.body.addEventListener('scroll', onScroll);

// startup loader   
window.addEventListener('load',() =>{
    let preload = document.querySelector('.loader-wrapper');
    preload.classList.add('load-wrapper-finish');
});



gsap.registerPlugin(ScrollToPlugin);

// scroll after click link
document.querySelectorAll("nav .links button").forEach((btn, index) => {
    btn.addEventListener("click", () => {
        gsap.to(window, {duration: 1, scrollTo:{y:"#section" + (index + 1),offsetY:60}});
        gsap.to(document.body, {duration: 1, scrollTo:{y:"#section" + (index + 1),offsetY:65}});
    });
  });


// main buttons click
const mainButton = document.querySelector('.btn-sec');

mainButton.addEventListener('click',()=>{
  // desktop view
    gsap.to(window, {duration: 0.8, scrollTo:{y:"#section2",offsetY:50}});
// mobile view
    gsap.to(document.body, {duration: 0.8, scrollTo:{y:"#section2",offsetY:65}});

})


// scroll top after click logo desktop view
const logo=document.querySelector('nav .logo button');
logo.addEventListener('click',()=>{
  if(window.scrollY>0)
    gsap.to(window,{duration: 1, scrollTo:{y:'#section1'}})
});
// scroll top after click logo mobile view
logo.addEventListener('click',()=>{
  if(document.body.scrollTop>0)
    gsap.to(document.body,{duration: 1, scrollTo:{y:'#section1'}})
});


// gallery popup
const pop = document.querySelector('.popup-image');

document.querySelectorAll('.gallery-images img').forEach(image =>{
  image.onclick=()=>{
    pop.style.display='block';
    body.style.overflow='hidden';
    document.querySelector('.popup-image img').src = image.getAttribute('src');
  }
});

pop.onclick=() =>{
  pop.style.display='none'
  body.style.overflow='auto';
}



        

  



