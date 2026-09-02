// DOM Elements
const header = document.querySelector('header');
const navLinks = document.querySelectorAll('nav a');
const cards = document.querySelectorAll('.card');
const buttons = document.querySelectorAll('.btn');

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initSmoothScroll();
  initActiveNav();
  initCardInteractions();
  initButtonEffects();
  showWelcomeMessage();
});

// Smooth scroll for anchor links
function initSmoothScroll() {
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
}

// Active navigation highlighting
function initActiveNav() {
  const sections = document.querySelectorAll('section');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.remove('active'));
        const currentLink = document.querySelector(`nav a[href="#${entry.target.id}"]`);
        if (currentLink) {
          currentLink.classList.add('active');
        }
      }
    });
  }, { threshold: 0.3 });
  
  sections.forEach(section => observer.observe(section));
}

// Card interaction effects
function initCardInteractions() {
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
    });
  });
}

// Button effects
function initButtonEffects() {
  buttons.forEach(button => {
    button.addEventListener('mousedown', () => {
      button.style.transform = 'scale(0.98)';
    });
    
    button.addEventListener('mouseup', () => {
      button.style.transform = 'scale(1)';
    });
    
    button.addEventListener('mouseleave', () => {
      button.style.transform = 'scale(1)';
    });
  });
}

// Welcome message
function showWelcomeMessage() {
  console.log('🎉 Welcome to Hermes Web Project!');
  console.log('Happy coding! ✨');
}

// Utility functions
const utils = {
  // Debounce function
  debounce(fn, delay) {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn.apply(this, args), delay);
    };
  },
  
  // Throttle function
  throttle(fn, delay) {
    let lastCall = 0;
    return (...args) => {
      const now = Date.now();
      if (now - lastCall >= delay) {
        lastCall = now;
        fn.apply(this, args);
      }
    };
  },
  
  // Check if mobile
  isMobile() {
    return window.innerWidth <= 768;
  }
};

// Export for potential module use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { utils };
}