document.addEventListener('DOMContentLoaded', function() {
  // Elements to animate on scroll
  const animatedElements = [
    { selector: '.flat-title', animation: 'fadeInUp', delay: 0 },
    { selector: '.expertise-card', animation: 'fadeInUp', delay: 0.1, stagger: true },
    { selector: '.project-item', animation: 'fadeInUp', delay: 0.1, stagger: true },
    { selector: '.career-step', animation: 'fadeInUp', delay: 0.1, stagger: true },
    { selector: '.testimonial-item', animation: 'fadeInUp', delay: 0.1 },
    { selector: '.certificate-item', animation: 'fadeInUp', delay: 0.1, stagger: true },
    { selector: '.contact-form', animation: 'fadeInUp', delay: 0.1 },
    { selector: '.featured-post', animation: 'fadeInUp', delay: 0.2 },
    { selector: '.about-content-wrap', animation: 'fadeInUp', delay: 0.2 }
  ];
  
  // Add animation classes to elements
  animatedElements.forEach(item => {
    const elements = document.querySelectorAll(item.selector);
    
    elements.forEach((el, index) => {
      // Add base animation class
      el.classList.add('wow', item.animation);
      
      // Add delay (staggered if specified)
      if (item.stagger) {
        el.setAttribute('data-wow-delay', `${item.delay + (index * 0.1)}s`);
      } else {
        el.setAttribute('data-wow-delay', `${item.delay}s`);
      }
      
      // Add duration
      el.setAttribute('data-wow-duration', '0.8s');
    });
  });
  
  // Initialize WOW.js
  new WOW().init();
  
  // Add scroll progress indicator
  const progressIndicator = document.createElement('div');
  progressIndicator.className = 'scroll-progress';
  document.body.appendChild(progressIndicator);
  
  // Update progress on scroll
  window.addEventListener('scroll', function() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollProgress = (scrollTop / scrollHeight) * 100;
    
    progressIndicator.style.width = `${scrollProgress}%`;
  });
  
  // Add smooth scrolling to all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    });
  });
});
