// Toggle navigation menu
function toggleNavMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
  }
  
  // Attach event listener for menu toggle
  document.getElementById('menu-toggle').addEventListener('click', toggleNavMenu);