// Exclamation point banner functionality
document.addEventListener('DOMContentLoaded', function() {
    const exclamationButton = document.getElementById('exclamationButton');
    const banner = document.getElementById('banner');
    const paretoButton = document.getElementById('paretoButton');
    const humainButton = document.getElementById('humainButton');
    const paretoPopup = document.getElementById('paretoPopup');
    const humainPopup = document.getElementById('humainPopup');
    const paretoContainer = document.querySelector('.pareto-container');
    const humainContainer = document.querySelector('.humain-container');
    
    // Simple mobile detection
    function isMobile() {
        return window.innerWidth <= 768;
    }
    
    // COMPLETELY NEW MOBILE APPROACH
    function initMobileMode() {
        if (!isMobile()) return;
        
        console.log('INIT MOBILE MODE');
        
        // 1. Hide all popups initially
        paretoPopup.style.display = 'none';
        humainPopup.style.display = 'none';
        
        // 2. Remove all existing event listeners by replacing containers
        const newParetoContainer = paretoContainer.cloneNode(true);
        const newHumainContainer = humainContainer.cloneNode(true);
        
        paretoContainer.parentNode.replaceChild(newParetoContainer, paretoContainer);
        humainContainer.parentNode.replaceChild(newHumainContainer, humainContainer);
        
        // 3. Simple click handlers
        newParetoContainer.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('PARETO CLICKED');
            
            // Hide humain
            humainPopup.style.display = 'none';
            
            // Toggle pareto
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
        
        newHumainContainer.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('HUMAIN CLICKED');
            
            // Hide pareto
            paretoPopup.style.display = 'none';
            
            // Toggle humain
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
        
        // 4. Close on outside click
        document.addEventListener('click', function(e) {
            if (!newParetoContainer.contains(e.target) && !newHumainContainer.contains(e.target)) {
                paretoPopup.style.display = 'none';
                humainPopup.style.display = 'none';
            }
        });
        
        // 5. Close on popup click (prevent inside clicks from closing)
        paretoPopup.addEventListener('click', function(e) {
            e.stopPropagation();
        });
        
        humainPopup.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
    
    // Initialize mobile mode
    initMobileMode();
    
    // Re-initialize on resize/orientation change
    window.addEventListener('resize', function() {
        setTimeout(initMobileMode, 100);
    });
    
    window.addEventListener('orientationchange', function() {
        setTimeout(initMobileMode, 100);
    });
    
    // Toggle banner when exclamation button is clicked
    exclamationButton.addEventListener('click', function(e) {
        e.stopPropagation();
        banner.classList.toggle('show');
    });
    
    // Redirect to values.capital when PARETO button is clicked
    paretoButton.addEventListener('click', function(e) {
        e.stopPropagation();
        window.location.href = 'https://values.capital';
    });
    
    // Redirect to phvalue.space when HUMAIN button is clicked
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
    
    // Add keyboard navigation
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
    
    // Add subtle animation on page load
    setTimeout(() => {
        const paretoContainer = document.querySelector('.pareto-container');
        const humainContainer = document.querySelector('.humain-container');
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
