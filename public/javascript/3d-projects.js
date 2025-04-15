document.addEventListener('DOMContentLoaded', function() {
  // Find the projects section
  const projectsSection = document.querySelector('#projects');
  
  if (projectsSection) {
    // Find all project items
    const projectItems = document.querySelectorAll('.project-item');
    
    // Create a new container for 3D cards
    const container = document.createElement('div');
    container.className = 'row project-cards-container';
    
    // Process each project
    projectItems.forEach(item => {
      // Extract project data
      const title = item.querySelector('.project-title')?.textContent || '';
      const date = item.querySelector('.project-date')?.textContent || '';
      const description = item.querySelector('.project-description')?.textContent || '';
      const role = description.split('|')[0]?.trim() || '';
      const actualDescription = description.split('|')[1]?.trim() || description;
      const imageSrc = item.querySelector('img')?.getAttribute('src') || '';
      const link = item.querySelector('a')?.getAttribute('href') || '#';
      
      // Extract technologies
      const techElements = item.querySelectorAll('.tech-tag');
      const technologies = Array.from(techElements).map(el => el.textContent);
      
      // Create 3D card column
      const column = document.createElement('div');
      column.className = 'col-lg-4 col-md-6 mb-4';
      
      // Create 3D card
      column.innerHTML = `
        <div class="project-card-3d">
          <div class="project-card-inner">
            <div class="project-card-front">
              <div class="project-image-wrapper">
                <img src="${imageSrc}" alt="${title}" class="project-image">
              </div>
              <div class="project-content">
                <div>
                  <h3 class="project-title">${title}</h3>
                  <p class="project-date">${date}</p>
                  <p class="project-role">${role}</p>
                </div>
                <div class="project-tech">
                  ${technologies.slice(0, 4).map(tech => `<span class="project-tech-tag">${tech}</span>`).join('')}
                  ${technologies.length > 4 ? `<span class="project-tech-tag">+${technologies.length - 4}</span>` : ''}
                </div>
              </div>
            </div>
            <div class="project-card-back">
              <h3 class="project-title">${title}</h3>
              <p class="project-description">${actualDescription}</p>
              <div class="project-tech">
                ${technologies.map(tech => `<span class="project-tech-tag">${tech}</span>`).join('')}
              </div>
              <a href="${link}" class="project-link" target="_blank">
                <i class="fa fa-external-link"></i> View Project
              </a>
            </div>
          </div>
        </div>
      `;
      
      // Add to container
      container.appendChild(column);
    });
    
    // Replace the original timeline with 3D cards
    const timeline = projectsSection.querySelector('.timeline');
    if (timeline) {
      timeline.parentNode.replaceChild(container, timeline);
    }
    
    // Add 3D effect on mouse move
    const cards = document.querySelectorAll('.project-card-3d');
    
    cards.forEach(card => {
      card.addEventListener('mousemove', function(e) {
        const cardRect = card.getBoundingClientRect();
        const cardCenterX = cardRect.left + cardRect.width / 2;
        const cardCenterY = cardRect.top + cardRect.height / 2;
        
        // Calculate mouse position relative to card center
        const mouseX = e.clientX - cardCenterX;
        const mouseY = e.clientY - cardCenterY;
        
        // Calculate rotation (max 10 degrees)
        const rotateY = (mouseX / (cardRect.width / 2)) * 5;
        const rotateX = -(mouseY / (cardRect.height / 2)) * 5;
        
        // Apply rotation and add some depth
        const cardInner = card.querySelector('.project-card-inner');
        if (!cardInner.style.transform.includes('rotateY(180deg)')) {
          cardInner.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        }
      });
      
      card.addEventListener('mouseleave', function() {
        const cardInner = card.querySelector('.project-card-inner');
        if (!cardInner.style.transform.includes('rotateY(180deg)')) {
          cardInner.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        }
      });
    });
  }
});
