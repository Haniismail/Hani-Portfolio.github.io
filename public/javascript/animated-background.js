document.addEventListener('DOMContentLoaded', function() {
  // Create animated background
  const background = document.createElement('div');
  background.className = 'animated-background';
  
  // Add blobs
  for (let i = 0; i < 5; i++) {
    const blob = document.createElement('div');
    blob.className = 'blob';
    background.appendChild(blob);
  }
  
  // Add stars
  const stars = document.createElement('div');
  stars.className = 'stars';
  
  // Create random stars
  for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 5}s`;
    stars.appendChild(star);
  }
  
  background.appendChild(stars);
  
  // Add to body
  document.body.prepend(background);
  
  // Add mouse parallax effect
  document.addEventListener('mousemove', function(e) {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    const blobs = document.querySelectorAll('.blob');
    
    blobs.forEach((blob, index) => {
      const speed = (index + 1) * 0.03;
      const x = (0.5 - mouseX) * speed * 100;
      const y = (0.5 - mouseY) * speed * 100;
      
      blob.style.transform = `translate(${x}px, ${y}px) scale(${1 + (index % 2) * 0.05})`;
    });
  });
});
