document.addEventListener('DOMContentLoaded', function() {
    const socialLinks = document.querySelectorAll('.social-links a');
    
    socialLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            link.style.backgroundColor = '#4CAF50';
            link.style.color = 'white';
        });
        
        link.addEventListener('mouseout', function() {
            link.style.backgroundColor = '#333';
            link.style.color = 'white';
        });
    });
});