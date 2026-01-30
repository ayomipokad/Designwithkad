// FAQ Toggle
document.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.faq-question').addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
        
        // Toggle current item
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// Lesson Toggle (Outline Page)
document.querySelectorAll('.lesson-item').forEach(item => {
    item.querySelector('.lesson-header').addEventListener('click', () => {
        item.classList.toggle('active');
    });
});

// Navigation between pages
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Handle navigation clicks
document.querySelectorAll('a[data-page]').forEach(link => {
    link.addEventListener('click', (e) => {
        const page = link.getAttribute('data-page');
        if (page) {
            e.preventDefault();
            showPage(page);
        }
    });
});

// Handle anchor links within the home page
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        const page = link.getAttribute('data-page');
        
        if (href === '#outline') {
            e.preventDefault();
            showPage('outline');
        } else if (href === '#resources') {
            e.preventDefault();
            showPage('resources');
        } else if (page === 'home') {
            e.preventDefault();
            showPage('home');
            
            // After showing home page, scroll to the section
            setTimeout(() => {
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    const navHeight = document.querySelector('nav').offsetHeight;
                    const targetPosition = targetElement.offsetTop - navHeight;
                    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                }
            }, 100);
        }
    });
});

// Smooth scroll for CTA button
document.querySelector('.cta-button').addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector('#about');
    const navHeight = document.querySelector('nav').offsetHeight;
    const targetPosition = target.offsetTop - navHeight;
    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
});

// Smooth scroll for nav CTA button
document.querySelector('.nav-cta').addEventListener('click', (e) => {
    const page = e.target.getAttribute('data-page');
    if (page) {
        e.preventDefault();
        showPage('home');
        
        // After showing home page, scroll to the about section
        setTimeout(() => {
            const target = document.querySelector('#about');
            const navHeight = document.querySelector('nav').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }, 100);
    }
});

// Disable Right-Click
document.addEventListener('contextmenu', (e) => e.preventDefault());

// Disable F12 and Inspection Shortcuts
document.onkeydown = function(e) {
    // Disable F12
    if (e.keyCode == 123) {
        return false;
    }
    // Disable Ctrl+Shift+I (Inspect)
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    // Disable Ctrl+Shift+J (Console)
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    // Disable Ctrl+U (View Source)
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
};