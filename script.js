// Video Modal Functionality
function openVideoModal() {
    const modal = document.getElementById('videoModal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Add smooth fade in animation
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.opacity = '1';
        modal.style.transition = 'opacity 0.3s ease';
    }, 10);
}

function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    modal.style.opacity = '0';
    
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300);
}

// Contact Modal (placeholder for now)
function openContactModal() {
    alert('¡Gracias por tu interés en Nirvania Consulting! En breve implementaremos el formulario de contacto.');
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('videoModal');
    if (event.target === modal) {
        closeVideoModal();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeVideoModal();
    }
});

// Smooth scrolling for navigation (if added later)
function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
}

// Add subtle parallax effect to hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.cosmic-bg');
    const speed = scrolled * 0.5;
    
    if (parallax) {
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for fade-in animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.feature-card, .service-main-card, .service-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Dynamic particle generation for enhanced cosmic effect
function createFloatingParticle() {
    const particle = document.createElement('div');
    particle.className = 'dynamic-particle';
    
    const x = Math.random() * window.innerWidth;
    const y = window.innerHeight + 50;
    const size = Math.random() * 4 + 2;
    const duration = Math.random() * 10 + 5;
    
    particle.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        width: ${size}px;
        height: ${size}px;
        background: linear-gradient(45deg, #6366f1, #a855f7);
        border-radius: 50%;
        pointer-events: none;
        z-index: 1;
        animation: floatUp ${duration}s linear forwards;
        opacity: 0.7;
    `;
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, duration * 1000);
}

// Add CSS for dynamic particles
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) scale(0);
            opacity: 0;
        }
        10% {
            opacity: 0.7;
            transform: scale(1);
        }
        90% {
            opacity: 0.7;
        }
        100% {
            transform: translateY(-100vh) scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Generate particles periodically
setInterval(createFloatingParticle, 3000);

// Enhanced logo glow effect on hover
document.addEventListener('DOMContentLoaded', function() {
    const logoElements = document.querySelectorAll('.nirvania-logo');
    
    logoElements.forEach(logo => {
        logo.addEventListener('mouseenter', function() {
            this.style.filter = 'drop-shadow(0 0 40px rgba(99, 102, 241, 0.6))';
        });
        
        logo.addEventListener('mouseleave', function() {
            this.style.filter = 'drop-shadow(0 0 20px rgba(99, 102, 241, 0.3))';
        });
    });
});

// Service navigation toggle
document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

// Add typing effect to hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Cosmic cursor trail effect
let mouseX = 0;
let mouseY = 0;
let trail = [];

document.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    trail.push({x: mouseX, y: mouseY, life: 20});
    
    if (trail.length > 10) {
        trail.shift();
    }
});

function drawTrail() {
    const existingTrails = document.querySelectorAll('.cursor-trail');
    existingTrails.forEach(trail => trail.remove());
    
    trail.forEach((point, index) => {
        if (point.life > 0) {
            const trailElement = document.createElement('div');
            trailElement.className = 'cursor-trail';
            trailElement.style.cssText = `
                position: fixed;
                left: ${point.x}px;
                top: ${point.y}px;
                width: ${index * 2}px;
                height: ${index * 2}px;
                background: radial-gradient(circle, rgba(99, 102, 241, ${point.life / 20}), transparent);
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                transform: translate(-50%, -50%);
            `;
            
            document.body.appendChild(trailElement);
            point.life--;
        }
    });
    
    requestAnimationFrame(drawTrail);
}

// Start the cursor trail effect
drawTrail();