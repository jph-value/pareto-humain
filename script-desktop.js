// Desktop-specific popup functionality
document.addEventListener('DOMContentLoaded', function() {
    const exclamationButton = document.getElementById('exclamationButton');
    const banner = document.getElementById('banner');
    const paretoButton = document.getElementById('paretoButton');
    const humainButton = document.getElementById('humainButton');
    
    console.log('Desktop version loaded');
    
    // Banner functionality
    exclamationButton.addEventListener('click', function(e) {
        e.stopPropagation();
        banner.classList.toggle('show');
    });
    
    // Button redirects
    paretoButton.addEventListener('click', function(e) {
        e.stopPropagation();
        window.location.href = 'https://values.capital';
    });
    
    humainButton.addEventListener('click', function(e) {
        e.stopPropagation();
        window.location.href = 'https://phvalue.space';
    });
    
    // Close banner when clicking outside
    document.addEventListener('click', function(e) {
        if (e.target !== exclamationButton && !banner.contains(e.target)) {
            banner.classList.remove('show');
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === '1') {
            window.location.href = 'https://values.capital';
        }
        if (e.key === '2') {
            window.location.href = 'https://phvalue.space';
        }
        if (e.key === 'Escape') {
            banner.classList.remove('show');
        }
    });
    
    // Page load animations
    setTimeout(() => {
        const paretoContainer = document.querySelector('.pareto-container');
        if (paretoContainer) {
            paretoContainer.style.opacity = '1';
            paretoContainer.style.transform = 'translateY(0)';
        }
    }, 200);
    
    setTimeout(() => {
        const humainContainer = document.querySelector('.humain-container');
        if (humainContainer) {
            humainContainer.style.opacity = '1';
            humainContainer.style.transform = 'translateY(0)';
        }
    }, 400);
});
