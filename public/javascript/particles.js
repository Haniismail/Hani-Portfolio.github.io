document.addEventListener('DOMContentLoaded', function() {
  // Create canvas element
  const canvas = document.createElement('canvas');
  canvas.id = 'particles-canvas';
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '-1';
  document.body.prepend(canvas);
  
  // Initialize particles
  const ctx = canvas.getContext('2d');
  let particles = [];
  let mousePosition = { x: null, y: null };
  
  // Resize canvas to match window size
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  
  // Create particles
  function createParticles() {
    const particleCount = Math.floor(window.innerWidth / 20); // Responsive particle count
    particles = [];
    
    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 5 + 1;
      const x = Math.random() * (canvas.width - size * 2);
      const y = Math.random() * (canvas.height - size * 2);
      const directionX = (Math.random() * 0.4) - 0.2;
      const directionY = (Math.random() * 0.4) - 0.2;
      const color = getRandomColor(0.5);
      
      particles.push({
        x,
        y,
        size,
        directionX,
        directionY,
        color
      });
    }
  }
  
  // Get random color with transparency
  function getRandomColor(alpha) {
    const colors = [
      `rgba(98, 127, 255, ${alpha})`,  // Primary blue
      `rgba(140, 158, 255, ${alpha})`, // Light blue
      `rgba(162, 69, 251, ${alpha})`,  // Purple
      `rgba(251, 189, 65, ${alpha})`,  // Yellow accent
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }
  
  // Draw particles
  function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
      
      // Update position
      p.x += p.directionX;
      p.y += p.directionY;
      
      // Boundary check
      if (p.x < 0 || p.x > canvas.width) p.directionX *= -1;
      if (p.y < 0 || p.y > canvas.height) p.directionY *= -1;
      
      // Connect particles
      connectParticles(p, i);
    }
  }
  
  // Connect nearby particles with lines
  function connectParticles(particle, index) {
    const maxDistance = 150;
    
    for (let j = index + 1; j < particles.length; j++) {
      const p2 = particles[j];
      const dx = particle.x - p2.x;
      const dy = particle.y - p2.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < maxDistance) {
        // Calculate opacity based on distance
        const opacity = 1 - (distance / maxDistance);
        ctx.beginPath();
        ctx.strokeStyle = `rgba(98, 127, 255, ${opacity * 0.2})`;
        ctx.lineWidth = 1;
        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }
    }
    
    // Connect to mouse position
    if (mousePosition.x && mousePosition.y) {
      const dx = particle.x - mousePosition.x;
      const dy = particle.y - mousePosition.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < maxDistance * 1.5) {
        const opacity = 1 - (distance / (maxDistance * 1.5));
        ctx.beginPath();
        ctx.strokeStyle = `rgba(162, 69, 251, ${opacity * 0.3})`;
        ctx.lineWidth = 1;
        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(mousePosition.x, mousePosition.y);
        ctx.stroke();
        
        // Add slight attraction to mouse
        particle.x += (mousePosition.x > particle.x) ? 0.2 : -0.2;
        particle.y += (mousePosition.y > particle.y) ? 0.2 : -0.2;
      }
    }
  }
  
  // Animation loop
  function animate() {
    drawParticles();
    requestAnimationFrame(animate);
  }
  
  // Track mouse position
  document.addEventListener('mousemove', function(e) {
    mousePosition.x = e.clientX;
    mousePosition.y = e.clientY;
  });
  
  // Handle window resize
  window.addEventListener('resize', function() {
    resizeCanvas();
    createParticles();
  });
  
  // Initialize
  resizeCanvas();
  createParticles();
  animate();
});
