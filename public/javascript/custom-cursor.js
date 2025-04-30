// Custom Cursor
document.addEventListener('DOMContentLoaded', function() {
  // Create cursor elements
  const cursorDot = document.createElement('div');
  const cursorDotOutline = document.createElement('div');
  
  cursorDot.classList.add('cursor-dot');
  cursorDotOutline.classList.add('cursor-dot-outline');
  
  document.body.appendChild(cursorDot);
  document.body.appendChild(cursorDotOutline);
  
  // Variables
  let mouseX = 0;
  let mouseY = 0;
  let dotX = 0;
  let dotY = 0;
  let outlineX = 0;
  let outlineY = 0;
  
  // Speed and delay
  const delay = 8;
  const cursorSpeed = 0.2;
  const cursorOutlineSpeed = 0.15;
  
  // Animation loop
  function animate() {
    // Calculate smooth movement
    dotX += (mouseX - dotX) * cursorSpeed;
    dotY += (mouseY - dotY) * cursorSpeed;
    
    outlineX += (mouseX - outlineX) * cursorOutlineSpeed;
    outlineY += (mouseY - outlineY) * cursorOutlineSpeed;
    
    // Apply positions
    cursorDot.style.transform = `translate(${dotX}px, ${dotY}px)`;
    cursorDotOutline.style.transform = `translate(${outlineX}px, ${outlineY}px)`;
    
    // Continue animation
    requestAnimationFrame(animate);
  }
  
  // Start animation
  animate();
  
  // Show cursor when mouse moves
  document.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    if (cursorDot.style.opacity === '0') {
      cursorDot.style.opacity = '1';
      cursorDotOutline.style.opacity = '1';
    }
  });
  
  // Hide cursor when mouse leaves window
  document.addEventListener('mouseout', function() {
    cursorDot.style.opacity = '0';
    cursorDotOutline.style.opacity = '0';
  });
  
  // Custom cursor behavior for links and buttons
  const linkElements = document.querySelectorAll('a, button, .btn, .tech-tag, .social-icon, .menu-link');
  
  linkElements.forEach(link => {
    link.addEventListener('mouseover', function() {
      cursorDot.classList.add('cursor-hover');
      cursorDotOutline.classList.add('cursor-hover');
    });
    
    link.addEventListener('mouseout', function() {
      cursorDot.classList.remove('cursor-hover');
      cursorDotOutline.classList.remove('cursor-hover');
    });
  });
  
  // Special cursor for project items
  const projectItems = document.querySelectorAll('.project-item, .expertise-card');
  
  projectItems.forEach(item => {
    item.addEventListener('mouseover', function() {
      cursorDotOutline.classList.add('cursor-project');
    });
    
    item.addEventListener('mouseout', function() {
      cursorDotOutline.classList.remove('cursor-project');
    });
  });
});
