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
    
    // Check if mobile device - more comprehensive detection
    function isMobileDevice() {
        return window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
    
    // Initialize mobile popup handling
    function initMobilePopups() {
        const isMobile = isMobileDevice();
        
        if (isMobile) {
            // Remove CSS hover behavior for mobile
            paretoContainer.addEventListener('mouseenter', function(e) {
                e.preventDefault();
            });
            
            humainContainer.addEventListener('mouseenter', function(e) {
                e.preventDefault();
            });
            
            // Handle PARETO popup with touch/click events
            paretoContainer.addEventListener('click', function(e) {
                e.stopPropagation();
                
                // Close other popup if open
                humainPopup.style.opacity = '0';
                humainPopup.style.visibility = 'hidden';
                humainPopup.style.transform = 'translateX(-50%) translateY(100%)';
                
                // Toggle PARETO popup
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
            
            // Handle HUMAIN popup with touch/click events
            humainContainer.addEventListener('click', function(e) {
                e.stopPropagation();
                
                // Close other popup if open
                paretoPopup.style.opacity = '0';
                paretoPopup.style.visibility = 'hidden';
                paretoPopup.style.transform = 'translateX(-50%) translateY(-100%)';
                
                // Toggle HUMAIN popup
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
            document.addEventListener('click', function(e) {
                if (!paretoContainer.contains(e.target) && !humainContainer.contains(e.target)) {
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
    
    // Initialize on load
    initMobilePopups();
    
    // Handle orientation change
    window.addEventListener('orientationchange', function() {
        // Wait for orientation change to complete
        setTimeout(function() {
            initMobilePopups();
        }, 100);
    });
    
    // Handle window resize (for desktop testing)
    window.addEventListener('resize', function() {
        setTimeout(function() {
            initMobilePopups();
        }, 100);
    });
    
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
