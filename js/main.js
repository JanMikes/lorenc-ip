// Accordion
document.querySelectorAll('.accordion-header').forEach(function(header) {
  header.addEventListener('click', function() {
    var item = this.parentElement;
    var isActive = item.classList.contains('active');
    // Close all
    document.querySelectorAll('.accordion-item').forEach(function(i) {
      i.classList.remove('active');
    });
    // Toggle current
    if (!isActive) {
      item.classList.add('active');
    }
  });
});

// Mobile menu
var burgerBtn = document.querySelector('.burger-btn');
var mobileOverlay = document.querySelector('.mobile-menu-overlay');
var mobileClose = document.querySelector('.mobile-menu-close');

if (burgerBtn) {
  burgerBtn.addEventListener('click', function() {
    mobileOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
}

function closeMobileMenu() {
  mobileOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

if (mobileClose) {
  mobileClose.addEventListener('click', closeMobileMenu);
}

// Close mobile menu on link click
document.querySelectorAll('.mobile-menu-nav a').forEach(function(link) {
  link.addEventListener('click', closeMobileMenu);
});

// Header scroll effect
var header = document.querySelector('.header');
window.addEventListener('scroll', function() {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
