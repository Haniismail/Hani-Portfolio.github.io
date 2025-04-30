document.addEventListener('DOMContentLoaded', function() {
  // Apply animation classes to elements
  function setupAnimations() {
    // Section headings
    document.querySelectorAll('.title-section').forEach((el, index) => {
      el.classList.add('animate-on-scroll', 'fade-in-up');
    });
    
    // Section descriptions
    document.querySelectorAll('.flat-title p').forEach((el, index) => {
      el.classList.add('animate-on-scroll', 'fade-in-up', `delay-200`);
    });
    
    // Skill cards
    document.querySelectorAll('.expertise-card').forEach((el, index) => {
      el.classList.add('animate-on-scroll', 'fade-in-up', `delay-${(index % 4 + 1) * 100}`);
    });
    
    // Project cards
    document.querySelectorAll('.project-card-3d').forEach((el, index) => {
      el.classList.add('animate-on-scroll', index % 2 === 0 ? 'fade-in-left' : 'fade-in-right', `delay-${(index % 3 + 1) * 100}`);
    });
    
    // Career steps
    document.querySelectorAll('.career-step').forEach((el, index) => {
      el.classList.add('animate-on-scroll', index % 2 === 0 ? 'fade-in-left' : 'fade-in-right', `delay-${(index % 3 + 1) * 100}`);
    });
    
    // Testimonials
    document.querySelectorAll('.testimonial-item').forEach((el) => {
      el.classList.add('animate-on-scroll', 'zoom-in');
    });
    
    // Certificates
    document.querySelectorAll('.certificate-item').forEach((el, index) => {
      el.classList.add('animate-on-scroll', 'rotate-in', `delay-${(index % 3 + 1) * 100}`);
    });
    
    // Contact form
    document.querySelectorAll('.contact-form').forEach((el) => {
      el.classList.add('animate-on-scroll', 'fade-in-up');
    });
    
    // Section transitions
    document.querySelectorAll('section').forEach((el) => {
      el.classList.add('section-transition');
      
      // Wrap content in a container for transition effect
      const content = el.innerHTML;
      el.innerHTML = `<div class="section-transition-content">${content}</div>`;
    });
    
    // Text reveal animations for headings
    document.querySelectorAll('h1, h2.title-section').forEach((el) => {
      const text = el.textContent;
      el.innerHTML = `<span class="text-reveal"><span>${text}</span></span>`;
      el.classList.add('animate-on-scroll');
    });
  }
  
  // Check if element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
      rect.bottom >= 0
    );
  }
  
  // Animate elements when they enter the viewport
  function animateOnScroll() {
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      if (isInViewport(element)) {
        element.classList.add('animated');
      }
    });
  }
  
  // Initialize
  setupAnimations();
  
  // Initial check for elements in viewport
  animateOnScroll();
  
  // Listen for scroll events
  window.addEventListener('scroll', animateOnScroll);
});
