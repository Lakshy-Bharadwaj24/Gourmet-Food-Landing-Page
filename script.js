// 1. Mobile Menu Auto-Close
// Jab mobile view mein kisi link par click ho, toh menu apne aap band ho jaye
const menuLinks = document.querySelectorAll('.menu li a');
const menuToggle = document.getElementById('menu-toggle');

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.checked = false;
    });
});

// 2. Newsletter Form Submission
const newsletterForm = document.querySelector('.newsletter-form');
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector('input').value;
    alert(`Thank you! ${email} has been added to our list. You will receive a 20% discount coupon shortly!`);
    newsletterForm.reset();
});

// 3. Contact Form Submission
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = contactForm.querySelector('input[type="text"]').value;
    alert(`Hello, ${name}! We have received your message. Our team will contact you shortly.`);
    contactForm.reset();
});

// 4. Header Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    if (window.scrollY > 50) {
        nav.style.boxShadow = '0 5px 20px rgba(0,0,0,0.2)';
    } else {
        nav.style.boxShadow = 'none';
    }
});
