// Mobile-specific popup functionality
document.addEventListener('DOMContentLoaded', function() {
    const exclamationButton = document.getElementById('exclamationButton');
    const banner = document.getElementById('banner');
    const paretoButton = document.getElementById('paretoButton');
    const humainButton = document.getElementById('humainButton');
    const paretoPopup = document.getElementById('paretoPopup');
    const humainPopup = document.getElementById('humainPopup');
    const paretoContainer = document.querySelector('.pareto-container');
    const humainContainer = document.querySelector('.humain-container');
    
    console.log('Mobile version loaded');
    
    // Hide popups initially
    paretoPopup.style.display = 'none';
    humainPopup.style.display = 'none';
    
    // Add click handlers to containers
    paretoContainer.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('PARETO clicked');
        
        // Hide humain popup
        humainPopup.style.display = 'none';
        
        // Toggle pareto popup
        if (paretoPopup.style.display === 'block') {
            paretoPopup.style.display = 'none';
        } else {
            // Show pareto with mobile styles
            paretoPopup.style.display = 'block';
            paretoPopup.style.position = 'fixed';
            paretoPopup.style.top = '60px';
            paretoPopup.style.left = '50%';
            paretoPopup.style.transform = 'translateX(-50%)';
            paretoPopup.style.zIndex = '9999';
            paretoPopup.style.width = '90%';
            paretoPopup.style.maxWidth = '400px';
            paretoPopup.style.backgroundColor = 'white';
            paretoPopup.style.padding = '20px';
            paretoPopup.style.borderRadius = '12px';
            paretoPopup.style.boxShadow = '0 8px 32px rgba(0,0,0,0.3)';
        }
    });
    
    humainContainer.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('HUMAIN clicked');
        
        // Hide pareto popup
        paretoPopup.style.display = 'none';
        
        // Toggle humain popup
        if (humainPopup.style.display === 'block') {
            humainPopup.style.display = 'none';
        } else {
            // Show humain with mobile styles
            humainPopup.style.display = 'block';
            humainPopup.style.position = 'fixed';
            humainPopup.style.bottom = '20px';
            humainPopup.style.left = '50%';
            humainPopup.style.transform = 'translateX(-50%)';
            humainPopup.style.zIndex = '9999';
            humainPopup.style.width = '90%';
            humainPopup.style.maxWidth = '400px';
            humainPopup.style.backgroundColor = 'white';
            humainPopup.style.padding = '20px';
            humainPopup.style.borderRadius = '12px';
            humainPopup.style.boxShadow = '0 8px 32px rgba(0,0,0,0.3)';
        }
    });
    
    // Close popups when clicking outside
    document.addEventListener('click', function(e) {
        if (!paretoContainer.contains(e.target) && !humainContainer.contains(e.target) && 
            !paretoPopup.contains(e.target) && !humainPopup.contains(e.target)) {
            paretoPopup.style.display = 'none';
            humainPopup.style.display = 'none';
        }
    });
    
    // Prevent popup clicks from closing popups
    paretoPopup.addEventListener('click', function(e) {
        e.stopPropagation();
    });
    
    humainPopup.addEventListener('click', function(e) {
        e.stopPropagation();
    });
    
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
