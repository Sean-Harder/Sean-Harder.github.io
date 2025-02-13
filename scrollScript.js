// Function to update the navigation text on scroll
function updateNavTextOnScroll() {
    const sections = document.querySelectorAll('.section');
    const navText = document.getElementById('navText');
    const prevSection = document.getElementById('prevSection');
    const nextSection = document.getElementById('nextSection');
    
    let currentSectionIndex = null;
    let currentSection = null;
  
    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;
  
      if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
        currentSectionIndex = index;
        currentSection = section.id;
      }
    });
  
    if (currentSectionIndex !== null) {
      // Remove visible class from all sections to reset the transition
      document.querySelectorAll('.right-nav li').forEach(item => item.classList.remove('visible'));
      
      // Update the current section name with smooth animation and space between words
      navText.textContent = formatSectionName(currentSection);
      navText.classList.add('visible');
      
      // Handle previous section with space between words
      if (currentSectionIndex > 0) {
        const prev = sections[currentSectionIndex - 1].id;
        prevSection.textContent = `${formatSectionName(prev)}`;
        prevSection.classList.add('visible');
      } else {
        prevSection.textContent = 'None';
        prevSection.classList.add('visible');
      }
  
      // Handle next section with space between words
      if (currentSectionIndex < sections.length - 1) {
        const next = sections[currentSectionIndex + 1].id;
        nextSection.textContent = `${formatSectionName(next)}`;
        nextSection.classList.add('visible');
      } else {
        nextSection.textContent = 'None';
        nextSection.classList.add('visible');
      }
    }

    if (window.scrollY === 0) {
        // Hide the side nav at the top
        prevSection.textContent = ``;
        navText.textContent = ``;
        nextSection.textContent = ``;
      } else {
        // Show the side nav when scrolling down
        rightNav.style.transform = 'translateX(0)'; // Bring it back to normal position
        rightNav.style.opacity = '1'; // Make it visible
      }
  }
  
    // Helper function to format section names with spaces between words and capitalize the first letter
    function formatSectionName(section) {
        return section
        .replace(/([a-z])([A-Z])/g, '$1 $2') // Add space between camelCase words
        .replace(/^(.)/, (match) => match.toUpperCase()); // Capitalize the first letter
    }
  
  // Add the event listener to trigger the function on scroll
  window.addEventListener('scroll', updateNavTextOnScroll);
  