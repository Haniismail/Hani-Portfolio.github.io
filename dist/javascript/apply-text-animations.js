document.addEventListener('DOMContentLoaded', function() {
  // Apply gradient text to titles
  document.querySelectorAll('.title-section').forEach(title => {
    title.classList.add('gradient-text');
  });
  
  // Apply text glow to important elements
  document.querySelectorAll('.cd-words-wrapper b, .project-title, .career-role').forEach(element => {
    element.classList.add('text-glow');
  });
  
  // Apply typing animation to banner subtitle
  const bannerSubtitle = document.querySelector('.banner-section p.lt-sp02');
  if (bannerSubtitle) {
    bannerSubtitle.classList.add('typing-animation');
  }
});
