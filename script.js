// Smooth Scrolling for Links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith("#")) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        }
    });
});

// Contact Form Validation
document.querySelector('.contact form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.querySelector('.contact input[type="text"]').value.trim();
    const email = document.querySelector('.contact input[type="email"]').value.trim();
    const message = document.querySelector('.contact textarea').value.trim();

    if (!name || !email || !message) {
        alert("Please fill out all fields.");
    } else {
        alert("Your message has been sent!");
        this.reset();
    }
});

// Review Form Submission
document.getElementById('review-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('review-name').value.trim();
    const message = document.getElementById('review-message').value.trim();
    
    if (!name || !message) {
        alert("Please fill out all fields.");
        return;
    }

    const reviewDiv = document.createElement('div');
    reviewDiv.classList.add('review-card');
    reviewDiv.innerHTML = `
        <p>⭐⭐⭐⭐⭐ - "${message}" - <strong>${name}</strong></p>
    `;

    document.getElementById('review-list').appendChild(reviewDiv);

    this.reset();
});