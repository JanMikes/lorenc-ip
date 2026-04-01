document.addEventListener('DOMContentLoaded', function() {
  'use strict';

  // ---- Accordion ----
  var accordionHeaders = document.querySelectorAll('.accordion-header');
  for (var i = 0; i < accordionHeaders.length; i++) {
    (function(header) {
      header.addEventListener('click', function() {
        var item = this.parentElement;
        var isActive = item.classList.contains('active');
        var allItems = document.querySelectorAll('.accordion-item');
        for (var j = 0; j < allItems.length; j++) {
          allItems[j].classList.remove('active');
          var content = allItems[j].querySelector('.accordion-content');
          if (content) content.style.maxHeight = null;
        }
        if (!isActive) {
          item.classList.add('active');
          var content = item.querySelector('.accordion-content');
          if (content) content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    })(accordionHeaders[i]);
  }

  // ---- Mobile Menu ----
  var burgerBtn = document.querySelector('.burger-btn');
  var mobileOverlay = document.querySelector('.mobile-menu-overlay');
  var mobileClose = document.querySelector('.mobile-menu-close');

  function openMobileMenu() {
    if (mobileOverlay) {
      mobileOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeMobileMenu() {
    if (mobileOverlay) {
      mobileOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (burgerBtn) burgerBtn.addEventListener('click', openMobileMenu);
  if (mobileClose) mobileClose.addEventListener('click', closeMobileMenu);

  var mobileLinks = document.querySelectorAll('.mobile-menu-nav a');
  for (var i = 0; i < mobileLinks.length; i++) {
    mobileLinks[i].addEventListener('click', closeMobileMenu);
  }

  // ---- Header scroll effect ----
  var header = document.querySelector('.header');
  function onScroll() {
    if (window.scrollY > 80) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ---- Smooth scroll for anchor links ----
  var anchorLinks = document.querySelectorAll('a[href^="#"]');
  for (var i = 0; i < anchorLinks.length; i++) {
    (function(link) {
      link.addEventListener('click', function(e) {
        var href = this.getAttribute('href');
        if (href === '#') return;
        var target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          var headerHeight = header ? header.offsetHeight : 0;
          var targetPos = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          window.scrollTo({ top: targetPos, behavior: 'smooth' });
        }
      });
    })(anchorLinks[i]);
  }

  // ---- Scroll Reveal Animations ----
  var revealElements = document.querySelectorAll('.reveal');
  var revealObserver = null;

  if ('IntersectionObserver' in window) {
    revealObserver = new IntersectionObserver(function(entries) {
      for (var i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) {
          entries[i].target.classList.add('revealed');
          revealObserver.unobserve(entries[i].target);
        }
      }
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    });

    for (var i = 0; i < revealElements.length; i++) {
      revealObserver.observe(revealElements[i]);
    }
  } else {
    // Fallback: just show everything
    for (var i = 0; i < revealElements.length; i++) {
      revealElements[i].classList.add('revealed');
    }
  }

  // ---- Hero entrance animation ----
  var heroBtn = document.querySelector('.hero-btn');
  var heroText = document.querySelector('.hero-text');
  setTimeout(function() {
    if (heroBtn) heroBtn.classList.add('animate-in');
    setTimeout(function() {
      if (heroText) heroText.classList.add('animate-in');
    }, 400);
  }, 300);
});
