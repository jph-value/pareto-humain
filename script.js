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
    
    // Check if mobile device
    function isMobileDevice() {
        return window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
    
    // Mobile popup handling - completely separate from desktop
    function setupMobilePopups() {
        if (isMobileDevice()) {
            // Remove all hover-related styles and classes
            paretoPopup.style.transition = 'none';
            humainPopup.style.transition = 'none';
            
            // Set initial mobile positions
            paretoPopup.style.position = 'fixed';
            paretoPopup.style.top = '80px';
            paretoPopup.style.left = '50%';
            paretoPopup.style.transform = 'translateX(-50%) translateY(-100%)';
            paretoPopup.style.opacity = '0';
            paretoPopup.style.visibility = 'hidden';
            paretoPopup.style.zIndex = '1500';
            
            humainPopup.style.position = 'fixed';
            humainPopup.style.bottom = '20px';
            humainPopup.style.left = '50%';
            humainPopup.style.transform = 'translateX(-50%) translateY(100%)';
            humainPopup.style.opacity = '0';
            humainPopup.style.visibility = 'hidden';
            humainPopup.style.zIndex = '1500';
            
            // Clear any existing event listeners
            const newParetoContainer = paretoContainer.cloneNode(true);
            const newHumainContainer = humainContainer.cloneNode(true);
            paretoContainer.parentNode.replaceChild(newParetoContainer, paretoContainer);
            humainContainer.parentNode.replaceChild(newHumainContainer, humainContainer);
            
            // Add click handlers to new containers
            newParetoContainer.addEventListener('click', function(e) {
                e.stopPropagation();
                
                // Close HUMAIN if open
                humainPopup.style.opacity = '0';
                humainPopup.style.visibility = 'hidden';
                humainPopup.style.transform = 'translateX(-50%) translateY(100%)';
                
                // Toggle PARETO
                if (paretoPopup.style.opacity === '1') {
                    paretoPopup.style.opacity = '0';
                    paretoPopup.style.visibility = 'hidden';
                    paretoPopup.style.transform = 'translateX(-50%) translateY(-100%)';
                } else {
                    paretoPopup.style.opacity = '1';
                    paretoPopup.style.visibility = 'visible';
                    paretoPopup.style.transform = 'translateX(-50%) translateY(0)';
                }
            });
            
            newHumainContainer.addEventListener('click', function(e) {
                e.stopPropagation();
                
                // Close PARETO if open
                paretoPopup.style.opacity = '0';
                paretoPopup.style.visibility = 'hidden';
                paretoPopup.style.transform = 'translateX(-50%) translateY(-100%)';
                
                // Toggle HUMAIN
                if (humainPopup.style.opacity === '1') {
                    humainPopup.style.opacity = '0';
                    humainPopup.style.visibility = 'hidden';
                    humainPopup.style.transform = 'translateX(-50%) translateY(100%)';
                } else {
                    humainPopup.style.opacity = '1';
                    humainPopup.style.visibility = 'visible';
                    humainPopup.style.transform = 'translateX(-50%) translateY(0)';
                }
            });
            
            // Close popups when clicking outside
            document.addEventListener('click', function closePopups(e) {
                if (!newParetoContainer.contains(e.target) && !newHumainContainer.contains(e.target)) {
                    paretoPopup.style.opacity = '0';
                    paretoPopup.style.visibility = 'hidden';
                    paretoPopup.style.transform = 'translateX(-50%) translateY(-100%)';
                    
                    humainPopup.style.opacity = '0';
                    humainPopup.style.visibility = 'hidden';
                    humainPopup.style.transform = 'translateX(-50%) translateY(100%)';
                }
            });
        }
    }
    
    // Initialize mobile popups
    setupMobilePopups();
    
    // Handle orientation change
    window.addEventListener('orientationchange', function() {
        setTimeout(setupMobilePopups, 200);
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        setTimeout(setupMobilePopups, 200);
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

// Prevent popup from closing when clicking inside it
document.querySelectorAll('.popup-window').forEach(popup => {
    popup.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});
