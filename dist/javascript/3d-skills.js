document.addEventListener('DOMContentLoaded', function() {
  // Skills data with categories
  const skills = [
    // Frontend
    { name: 'React', category: 'frontend' },
    { name: 'Next.js', category: 'frontend' },
    { name: 'JavaScript', category: 'frontend' },
    { name: 'TypeScript', category: 'frontend' },
    { name: 'HTML5/CSS3', category: 'frontend' },
    { name: 'Bootstrap', category: 'frontend' },
    { name: 'Tailwind CSS', category: 'frontend' },
    
    // Backend
    { name: 'Node.js', category: 'backend' },
    { name: 'Express', category: 'backend' },
    { name: 'NestJS', category: 'backend' },
    { name: 'RESTful APIs', category: 'backend' },
    { name: 'GraphQL', category: 'backend' },
    { name: 'Socket.IO', category: 'backend' },
    
    // Database
    { name: 'MongoDB', category: 'database' },
    { name: 'MySQL', category: 'database' },
    { name: 'MariaDB', category: 'database' },
    { name: 'Sequelize', category: 'database' },
    { name: 'Mongoose', category: 'database' },
    { name: 'Redis', category: 'database' },
    
    // DevOps & Cloud
    { name: 'AWS', category: 'devops' },
    { name: 'CI/CD', category: 'devops' },
    { name: 'Docker', category: 'devops' },
    { name: 'Kubernetes', category: 'devops' },
    { name: 'Git', category: 'devops' },
    { name: 'GitHub Actions', category: 'devops' },
    
    // AI & ML
    { name: 'AI Prompt Engineering', category: 'ai' },
    { name: 'LLM Integration', category: 'ai' },
    { name: 'ChatGPT API', category: 'ai' },
    { name: 'NLP', category: 'ai' }
  ];
  
  // Find the skills section
  const skillsSection = document.querySelector('#skills');
  
  if (skillsSection) {
    // Create container for 3D visualization
    const container = document.createElement('div');
    container.className = 'skills-3d-container';
    
    // Create sphere element
    const sphere = document.createElement('div');
    sphere.className = 'skills-sphere';
    
    // Add skill tags to the sphere
    skills.forEach((skill, index) => {
      const tag = document.createElement('div');
      tag.className = `skill-tag-3d ${skill.category}`;
      tag.textContent = skill.name;
      
      // Calculate position on sphere
      const phi = Math.acos(-1 + (2 * index) / skills.length);
      const theta = Math.sqrt(skills.length * Math.PI) * phi;
      
      // Convert to Cartesian coordinates
      const radius = 180; // Sphere radius
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      
      // Apply position
      tag.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
      
      // Add to sphere
      sphere.appendChild(tag);
    });
    
    // Add sphere to container
    container.appendChild(sphere);
    
    // Add interactive behavior
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let rotation = { x: 0, y: 0 };
    let sphereRotation = { x: 0, y: 0 };
    
    container.addEventListener('mousedown', function(e) {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
      
      // Pause animation while dragging
      sphere.style.animation = 'none';
    });
    
    document.addEventListener('mousemove', function(e) {
      if (!isDragging) return;
      
      const deltaMove = {
        x: e.clientX - previousMousePosition.x,
        y: e.clientY - previousMousePosition.y
      };
      
      // Update rotation based on mouse movement
      rotation.x += deltaMove.y * 0.5;
      rotation.y += deltaMove.x * 0.5;
      
      // Apply rotation
      sphere.style.transform = `translate(-50%, -50%) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`;
      
      previousMousePosition = { x: e.clientX, y: e.clientY };
    });
    
    document.addEventListener('mouseup', function() {
      isDragging = false;
      
      // Store final rotation
      sphereRotation.x = rotation.x % 360;
      sphereRotation.y = rotation.y % 360;
      
      // Resume animation from current rotation
      sphere.style.animation = 'rotate 30s infinite linear';
      sphere.style.animationDelay = '0.5s';
    });
    
    // Insert the 3D visualization after the skills heading
    const skillsHeading = skillsSection.querySelector('.flat-title');
    if (skillsHeading) {
      skillsHeading.parentNode.insertBefore(container, skillsHeading.nextSibling);
    } else {
      skillsSection.appendChild(container);
    }
  }
});
