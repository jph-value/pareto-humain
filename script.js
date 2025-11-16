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
    
    // Check if mobile device - more aggressive detection
    function isMobileDevice() {
        return window.innerWidth <= 768 || 
               window.innerHeight <= 768 || 
               /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
               ('ontouchstart' in window) ||
               (navigator.maxTouchPoints > 0);
    }
    
    // Mobile popup handling - force override
    function setupMobilePopups() {
        console.log('Setting up mobile popups, isMobile:', isMobileDevice(), 'width:', window.innerWidth, 'height:', window.innerHeight);
        
        if (isMobileDevice()) {
            // FORCE mobile styles - override everything
            paretoPopup.style.cssText = `
                position: fixed !important;
                top: 80px !important;
                left: 50% !important;
                transform: translateX(-50%) translateY(-100%) !important;
                opacity: 0 !important;
                visibility: hidden !important;
                z-index: 1500 !important;
                transition: all 0.3s ease !important;
                pointer-events: auto !important;
            `;
            
            humainPopup.style.cssText = `
                position: fixed !important;
                bottom: 20px !important;
                left: 50% !important;
                transform: translateX(-50%) translateY(100%) !important;
                opacity: 0 !important;
                visibility: hidden !important;
                z-index: 1500 !important;
                transition: all 0.3s ease !important;
                pointer-events: auto !important;
            `;
            
            // Remove all existing event listeners by cloning
            const newParetoContainer = paretoContainer.cloneNode(true);
            const newHumainContainer = humainContainer.cloneNode(true);
            paretoContainer.parentNode.replaceChild(newParetoContainer, paretoContainer);
            humainContainer.parentNode.replaceChild(newHumainContainer, humainContainer);
            
            // Add click handlers with force override
            newParetoContainer.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log('PARETO clicked');
                
                // Force close HUMAIN
                humainPopup.style.cssText += `
                    opacity: 0 !important;
                    visibility: hidden !important;
                    transform: translateX(-50%) translateY(100%) !important;
                `;
                
                // Toggle PARETO
                const isVisible = paretoPopup.style.opacity === '1';
                if (isVisible) {
                    paretoPopup.style.cssText += `
                        opacity: 0 !important;
                        visibility: hidden !important;
                        transform: translateX(-50%) translateY(-100%) !important;
                    `;
                } else {
                    paretoPopup.style.cssText += `
                        opacity: 1 !important;
                        visibility: visible !important;
                        transform: translateX(-50%) translateY(0) !important;
                    `;
                }
            });
            
            newHumainContainer.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log('HUMAIN clicked');
                
                // Force close PARETO
                paretoPopup.style.cssText += `
                    opacity: 0 !important;
                    visibility: hidden !important;
                    transform: translateX(-50%) translateY(-100%) !important;
                `;
                
                // Toggle HUMAIN
                const isVisible = humainPopup.style.opacity === '1';
                if (isVisible) {
                    humainPopup.style.cssText += `
                        opacity: 0 !important;
                        visibility: hidden !important;
                        transform: translateX(-50%) translateY(100%) !important;
                    `;
                } else {
                    humainPopup.style.cssText += `
                        opacity: 1 !important;
                        visibility: visible !important;
                        transform: translateX(-50%) translateY(0) !important;
                    `;
                }
            });
            
            // Close popups when clicking outside
            document.addEventListener('click', function closePopups(e) {
                if (!newParetoContainer.contains(e.target) && !newHumainContainer.contains(e.target)) {
                    paretoPopup.style.cssText += `
                        opacity: 0 !important;
                        visibility: hidden !important;
                        transform: translateX(-50%) translateY(-100%) !important;
                    `;
                    
                    humainPopup.style.cssText += `
                        opacity: 0 !important;
                        visibility: hidden !important;
                        transform: translateX(-50%) translateY(100%) !important;
                    `;
                }
            });
            
            console.log('Mobile popups setup complete');
        } else {
            // Desktop mode - ensure popups are reset
            paretoPopup.style.cssText = '';
            humainPopup.style.cssText = '';
            console.log('Desktop mode detected');
        }
    }
    
    // Initialize immediately
    setupMobilePopups();
    
    // Handle orientation change
    window.addEventListener('orientationchange', function() {
        console.log('Orientation changed');
        setTimeout(setupMobilePopups, 300);
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        console.log('Window resized');
        setTimeout(setupMobilePopups, 300);
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
