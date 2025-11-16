// Exclamation point banner functionality
document.addEventListener('DOMContentLoaded', function() {
    const exclamationButton = document.getElementById('exclamationButton');
    const banner = document.getElementById('banner');
    const paretoButton = document.getElementById('paretoButton');
    const humainButton = document.getElementById('humainButton');
    
    // Toggle banner when exclamation button is clicked
    exclamationButton.addEventListener('click', function(e) {
        e.stopPropagation();
        banner.classList.toggle('show');
    });
    
    // Redirect to values.capital when PARETO button is clicked
    paretoButton.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent triggering hover events
        window.location.href = 'https://values.capital';
    });
    
    // Redirect to phvalue.space when HUMAIN button is clicked
    humainButton.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent triggering hover events
        window.location.href = 'https://phvalue.space';
    });
    
    // Close banner when clicking outside
    document.addEventListener('click', function(e) {
        if (e.target !== exclamationButton && !banner.contains(e.target)) {
            banner.classList.remove('show');
        }
    });
    
    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        // Press '1' for PARETO redirect
        if (e.key === '1') {
            window.location.href = 'https://values.capital';
        }
        // Press '2' for HUMAIN redirect
        if (e.key === '2') {
            window.location.href = 'https://phvalue.space';
        }
        // Press 'Escape' to close banner
        if (e.key === 'Escape') {
            banner.classList.remove('show');
        }
    });
    
    // Add subtle animation on page load
    const paretoContainer = document.querySelector('.pareto-container');
    const humainContainer = document.querySelector('.humain-container');
    
    setTimeout(() => {
        paretoContainer.style.opacity = '1';
        paretoContainer.style.transform = 'translateY(0)';
    }, 200);
    
    setTimeout(() => {
        humainContainer.style.opacity = '1';
        humainContainer.style.transform = 'translateY(0)';
    }, 400);
});

// Prevent popup from closing when clicking inside it
document.querySelectorAll('.popup-window').forEach(popup => {
    popup.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});
