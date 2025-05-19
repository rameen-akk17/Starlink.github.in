// register the scrolltrigger plugin
gsap.registerPlugin(ScrollTrigger);

gsap.to(".box", {
  scrollTrigger: {
    trigger: ".box",            // element that triggers the animation
    toggleActions: "restart"    // restart animation every time it enters view
  },
  y: 0,                         // moves element back to original y position
  opacity: 1,                   // fades in the element
  duration: 1,                  
  ease: "power4.out"            
});

// animate .suit-link when .suit-sec scrolls into view
gsap.from(".suit-link", {
  scrollTrigger: {
    trigger: ".suit-sec",      
    start: "top center",        // start when top of .suit-sec hits center of viewport
    end: "top 100px",          
    scrub: true,                // ties animation progress to scroll position
    toggleActions: "restart"    // restart animation on every re entry
  },
  y: 50,                        
  opacity: 0,                   
  duration: 10,                 
  ease: "power3.inOut"          
});

// animate .mission-link when .mission scrolls into view
gsap.from(".mission-link", {
  scrollTrigger: {
    trigger: ".mission",        // triggers when .mission enters view
    start: "top center",        
    end: "top 100px",           
    scrub: true,                
    toggleActions: "restart"    
  },
  y: 50,                        
  opacity: 0,                   
  duration: 4,                  // shorter duration than .suit-link
  ease: "power3.inOut"          
});

gsap.to(".moto", {
  y: 50,
  opacity: 10,
  duration: 1.5,
  ease: "power3.out"
});


gsap.from(".moto", {
  scrollTrigger: {
    trigger: ".moto",
    start: "top center",  // start when top of .moto enters the center of viewport
    end: "top 100px",           // end scroll effect at 100px from top
    end: "bottom top",
    scrub: true
  },
  opacity: 10,
  y: -50,
  ease: "power3.out"
});
