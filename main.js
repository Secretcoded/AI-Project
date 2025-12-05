// maniEd Website - Main JavaScript File
// Handles all interactive functionality, animations, and user interactions

// Global variables
let isChatOpen = false;
let currentFilter = 'all';
let currentCategory = 'all';

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    initializeParticles();
    initializeNavigation();
    initializeForms();
    initializeFAQ();
    initializeFeatureFilters();
    initializeScrollAnimations();
});

// Animation and reveal system
function initializeAnimations() {
    // Intersection Observer for reveal animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, observerOptions);

    // Observe all reveal elements
    document.querySelectorAll('.reveal-element').forEach(el => {
        observer.observe(el);
    });
}

// Particle background system
function initializeParticles() {
    const particleContainer = document.getElementById('particle-container');
    if (!particleContainer) return;

    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random size and position
        const size = Math.random() * 4 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = Math.random() * 100 + '%';
        
        // Random animation duration
        const duration = Math.random() * 3 + 5;
        particle.style.animationDuration = duration + 's';
        
        // Random delay
        const delay = Math.random() * 2;
        particle.style.animationDelay = delay + 's';
        
        particleContainer.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, (duration + delay) * 1000);
    }

    // Create particles periodically
    setInterval(createParticle, 300);
    
    // Create initial particles
    for (let i = 0; i < 20; i++) {
        setTimeout(createParticle, i * 100);
    }
}

// Navigation functionality
function initializeNavigation() {
    // Mobile menu toggle
    const mobileMenuButton = document.querySelector('.md\\:hidden button');
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', toggleMobileMenu);
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function toggleMobileMenu() {
    // Mobile menu implementation
    console.log('Mobile menu toggled');
}

// Form handling
function initializeForms() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }

    // Add form validation for all forms
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', validateForm);
    });
}

function handleContactForm(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitButton = form.querySelector('button[type="submit"]');
    const spinner = submitButton.querySelector('.loading-spinner');
    const buttonText = submitButton.querySelector('span');
    
    // Show loading state
    submitButton.disabled = true;
    spinner.style.display = 'block';
    buttonText.textContent = 'Sending...';
    
    // Simulate form submission
    setTimeout(() => {
        // Hide loading state
        submitButton.disabled = false;
        spinner.style.display = 'none';
        buttonText.textContent = 'Send Message';
        
        // Show success message
        showMessage('success', 'Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.');
        
        // Reset form
        form.reset();
    }, 2000);
}

function validateForm(e) {
    const form = e.target;
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            field.style.borderColor = '#ef4444';
        } else {
            field.style.borderColor = '#e5e7eb';
        }
    });
    
    if (!isValid) {
        e.preventDefault();
        showMessage('error', 'Please fill in all required fields.');
    }
}

function showMessage(type, message) {
    const messageElement = document.getElementById(type + '-message');
    if (messageElement) {
        messageElement.querySelector('span').textContent = message;
        messageElement.style.display = 'block';
        
        // Hide after 5 seconds
        setTimeout(() => {
            messageElement.style.display = 'none';
        }, 5000);
    }
}

// FAQ functionality
function initializeFAQ() {
    // Search functionality
    const searchInput = document.getElementById('faq-search');
    if (searchInput) {
        searchInput.addEventListener('input', handleFAQSearch);
    }
    
    // Category filtering
    const categoryTabs = document.querySelectorAll('.category-tab');
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', handleCategoryFilter);
    });
}

function toggleAccordion(header) {
    const accordionItem = header.parentElement;
    const content = accordionItem.querySelector('.accordion-content');
    const icon = header.querySelector('.accordion-icon');
    
    // Close all other accordions
    document.querySelectorAll('.accordion-item').forEach(item => {
        if (item !== accordionItem) {
            item.querySelector('.accordion-content').classList.remove('active');
            item.querySelector('.accordion-header').classList.remove('active');
            item.querySelector('.accordion-icon').classList.remove('active');
        }
    });
    
    // Toggle current accordion
    content.classList.toggle('active');
    header.classList.toggle('active');
    icon.classList.toggle('active');
}

function handleFAQSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    const faqItems = document.querySelectorAll('.faq-item');
    const noResults = document.getElementById('no-results');
    let visibleCount = 0;
    
    faqItems.forEach(item => {
        const question = item.querySelector('h3').textContent.toLowerCase();
        const content = item.querySelector('.accordion-content-inner').textContent.toLowerCase();
        
        if (question.includes(searchTerm) || content.includes(searchTerm)) {
            item.classList.remove('hidden');
            visibleCount++;
            
            // Highlight search terms
            if (searchTerm) {
                highlightSearchTerms(item, searchTerm);
            } else {
                removeHighlights(item);
            }
        } else {
            item.classList.add('hidden');
        }
    });
    
    // Show/hide no results message
    if (visibleCount === 0 && searchTerm) {
        noResults.classList.remove('hidden');
    } else {
        noResults.classList.add('hidden');
    }
}

function handleCategoryFilter(e) {
    const category = e.target.dataset.category;
    const faqItems = document.querySelectorAll('.faq-item');
    
    // Update active tab
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    e.target.classList.add('active');
    
    // Filter FAQ items
    faqItems.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
    
    currentCategory = category;
}

function highlightSearchTerms(item, term) {
    const textElements = item.querySelectorAll('h3, p, li');
    textElements.forEach(el => {
        const text = el.textContent;
        const regex = new RegExp(`(${term})`, 'gi');
        el.innerHTML = text.replace(regex, '<span class="highlight">$1</span>');
    });
}

function removeHighlights(item) {
    const highlightedElements = item.querySelectorAll('.highlight');
    highlightedElements.forEach(el => {
        const parent = el.parentNode;
        parent.replaceChild(document.createTextNode(el.textContent), el);
        parent.normalize();
    });
}

function clearSearch() {
    const searchInput = document.getElementById('faq-search');
    if (searchInput) {
        searchInput.value = '';
        handleFAQSearch({ target: searchInput });
    }
}

// Feature filtering (for features page)
function initializeFeatureFilters() {
    const filterTabs = document.querySelectorAll('.filter-tab');
    filterTabs.forEach(tab => {
        tab.addEventListener('click', handleFeatureFilter);
    });
}

function handleFeatureFilter(e) {
    const filter = e.target.dataset.filter;
    const featureCards = document.querySelectorAll('.feature-card');
    
    // Update active tab
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    e.target.classList.add('active');
    
    // Filter feature cards
    featureCards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
    
    currentFilter = filter;
}

// Chat widget functionality
function toggleChat() {
    if (window.botpress && window.botpress.webchat) {
        if (isChatOpen) {
            window.botpress.webchat.close();
            isChatOpen = false;
        } else {
            window.botpress.webchat.open();
            isChatOpen = true;
        }
    } else {
        // Fallback - show chat not available message
        alert('Chat is currently unavailable. Please try again later or contact us via email.');
    }
}

// Scroll animations
function initializeScrollAnimations() {
    // Add parallax effect to hero sections
    window.addEventListener('scroll', handleScrollAnimations);
}

function handleScrollAnimations() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-animation');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Performance optimization
function initializePerformanceOptimizations() {
    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Preload critical resources
    preloadCriticalResources();
}

function preloadCriticalResources() {
    const criticalImages = [
        'resources/hero-wallet.png',
        'resources/edibot-avatar.png',
        'resources/security-features.png'
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // Could send to error tracking service
});

// Analytics and tracking
function trackEvent(eventName, properties = {}) {
    // Placeholder for analytics tracking
    console.log('Event tracked:', eventName, properties);
}

// Accessibility enhancements
function initializeAccessibility() {
    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Close any open modals or dropdowns
            closeAllModals();
        }
    });
    
    // Add focus management
    const focusableElements = document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    focusableElements.forEach(el => {
        el.addEventListener('focus', function() {
            this.setAttribute('data-focused', 'true');
        });
        
        el.addEventListener('blur', function() {
            this.removeAttribute('data-focused');
        });
    });
}

function closeAllModals() {
    // Close any open modals, dropdowns, etc.
    if (isChatOpen) {
        toggleChat();
    }
}

// Initialize accessibility features
document.addEventListener('DOMContentLoaded', function() {
    initializeAccessibility();
    initializePerformanceOptimizations();
});

// Export functions for global access
window.maniEd = {
    toggleChat,
    toggleAccordion,
    clearSearch,
    trackEvent
};