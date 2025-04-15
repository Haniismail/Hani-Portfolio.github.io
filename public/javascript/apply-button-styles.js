document.addEventListener('DOMContentLoaded', function() {
  // Apply gradient button styles to various buttons
  
  // Resume download buttons
  document.querySelectorAll('.btn-inner, .btn-about, .footer-cta-btn').forEach(button => {
    button.classList.add('btn-gradient');
  });
  
  // Project links
  document.querySelectorAll('.project-link').forEach(button => {
    button.classList.add('btn-gradient', 'btn-sm');
  });
  
  // Call to action buttons
  document.querySelectorAll('.btn-contact').forEach(button => {
    button.classList.add('btn-gradient', 'btn-lg', 'btn-pulse');
  });
  
  // Add floating animation to main CTA
  const mainCTA = document.querySelector('.banner-section .btn-inner');
  if (mainCTA) {
    mainCTA.classList.add('btn-float');
  }
});
