document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mainNav = document.getElementById('mainNav');
    
    mobileMenuToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      mainNav.classList.toggle('active');
      this.setAttribute('aria-expanded', this.classList.contains('active'));
    });
    
    // Close menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-item a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        if (window.innerWidth <= 992) {
          mobileMenuToggle.classList.remove('active');
          mainNav.classList.remove('active');
          mobileMenuToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  });