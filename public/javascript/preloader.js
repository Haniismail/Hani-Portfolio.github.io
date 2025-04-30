document.addEventListener('DOMContentLoaded', function() {
  // Create preloader element
  const preloader = document.createElement('div');
  preloader.className = 'preloader';
  
  // Create preloader content
  preloader.innerHTML = `
    <div class="preloader-content">
      <div class="preloader-logo">
        Hani<span class="highlight">.</span>
      </div>
      <div class="preloader-spinner"></div>
      <div class="preloader-progress">
        <div class="preloader-progress-bar"></div>
      </div>
      <div class="preloader-text">Loading amazing experience...</div>
    </div>
  `;
  
  // Add preloader to body
  document.body.appendChild(preloader);
  
  // Simulate loading progress
  const progressBar = document.querySelector('.preloader-progress-bar');
  let progress = 0;
  
  const progressInterval = setInterval(() => {
    progress += Math.random() * 10;
    
    if (progress >= 100) {
      progress = 100;
      clearInterval(progressInterval);
      
      // Hide preloader after a short delay
      setTimeout(() => {
        preloader.classList.add('loaded');
        
        // Enable scrolling on body
        document.body.style.overflow = 'auto';
        
        // Remove preloader from DOM after transition
        setTimeout(() => {
          preloader.remove();
        }, 500);
      }, 500);
    }
    
    progressBar.style.width = `${progress}%`;
  }, 200);
  
  // Disable scrolling on body while preloader is active
  document.body.style.overflow = 'hidden';
});
