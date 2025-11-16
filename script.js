// Exclamation point banner functionality and popup management
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
    
    // Desktop hover functionality (original working version)
    function initDesktopMode() {
        if (isMobile()) return;
        
        console.log('Desktop mode - using hover');
        
        // Reset any mobile styles
        paretoPopup.style.display = '';
        paretoPopup.style.position = '';
        paretoPopup.style.top = '';
        paretoPopup.style.bottom = '';
        paretoPopup.style.left = '';
        paretoPopup.style.right = '';
        paretoPopup.style.transform = '';
        paretoPopup.style.zIndex = '';
        paretoPopup.style.width = '';
        paretoPopup.style.maxWidth = '';
        paretoPopup.style.backgroundColor = '';
        paretoPopup.style.padding = '';
        paretoPopup.style.borderRadius = '';
        paretoPopup.style.boxShadow = '';
        
        humainPopup.style.display = '';
        humainPopup.style.position = '';
        humainPopup.style.top = '';
        humainPopup.style.bottom = '';
        humainPopup.style.left = '';
        humainPopup.style.right = '';
        humainPopup.style.transform = '';
        humainPopup.style.zIndex = '';
        humainPopup.style.width = '';
        humainPopup.style.maxWidth = '';
        humainPopup.style.backgroundColor = '';
        humainPopup.style.padding = '';
        humainPopup.style.borderRadius = '';
        humainPopup.style.boxShadow = '';
    }
    
    // Mobile click functionality
    function initMobileMode() {
        if (!isMobile()) return;
        
        console.log('Mobile mode - using click');
        
        // Hide popups initially
        paretoPopup.style.display = 'none';
        humainPopup.style.display = 'none';
        
        // Remove any existing mobile event listeners by cloning containers
        const existingParetoContainer = document.querySelector('.pareto-container');
        const existingHumainContainer = document.querySelector('.humain-container');
        
        if (existingParetoContainer && existingHumainContainer) {
            const newParetoContainer = existingParetoContainer.cloneNode(true);
            const newHumainContainer = existingHumainContainer.cloneNode(true);
            
            existingParetoContainer.parentNode.replaceChild(newParetoContainer, existingParetoContainer);
            existingHumainContainer.parentNode.replaceChild(newHumainContainer, existingHumainContainer);
            
            // Add click handlers to new containers
            newParetoContainer.addEventListener('click', function(e) {
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
            
            newHumainContainer.addEventListener('click', function(e) {
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
                if (!newParetoContainer.contains(e.target) && !newHumainContainer.contains(e.target)) {
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
        }
    }
    
    // Initialize appropriate mode
    if (isMobile()) {
        initMobileMode();
    } else {
        initDesktopMode();
    }
    
    // Re-initialize on resize
    window.addEventListener('resize', function() {
        setTimeout(function() {
            if (isMobile()) {
                initMobileMode();
            } else {
                initDesktopMode();
            }
        }, 100);
    });
    
    // Re-initialize on orientation change (mobile)
    window.addEventListener('orientationchange', function() {
        setTimeout(function() {
            if (isMobile()) {
                initMobileMode();
            }
        }, 100);
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
