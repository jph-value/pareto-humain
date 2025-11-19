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

    const popupStyleProps = [
        'display', 'position', 'top', 'bottom', 'left', 'right', 'transform',
        'zIndex', 'width', 'maxWidth', 'backgroundColor', 'padding',
        'borderRadius', 'boxShadow'
    ];

    let currentMode = null;
    let mobileListenersAttached = false;

    function isMobile() {
        return window.innerWidth <= 768;
    }

    function resetPopupStyles(popup) {
        popupStyleProps.forEach(prop => {
            popup.style[prop] = '';
        });
    }

    function hideParetoPopup() {
        paretoPopup.style.display = 'none';
    }

    function hideHumainPopup() {
        humainPopup.style.display = 'none';
    }

    function showParetoPopup() {
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

    function showHumainPopup() {
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

    const stopPropagation = (e) => e.stopPropagation();

    const handleParetoTap = (e) => {
        e.preventDefault();
        e.stopPropagation();
        hideHumainPopup();

        if (paretoPopup.style.display === 'block') {
            hideParetoPopup();
        } else {
            showParetoPopup();
        }
    };

    const handleHumainTap = (e) => {
        e.preventDefault();
        e.stopPropagation();
        hideParetoPopup();

        if (humainPopup.style.display === 'block') {
            hideHumainPopup();
        } else {
            showHumainPopup();
        }
    };

    const handleOutsideTap = (e) => {
        if (
            !paretoContainer.contains(e.target) &&
            !humainContainer.contains(e.target) &&
            !paretoPopup.contains(e.target) &&
            !humainPopup.contains(e.target)
        ) {
            hideParetoPopup();
            hideHumainPopup();
        }
    };

    function attachMobileListeners() {
        if (mobileListenersAttached) return;
        paretoContainer.addEventListener('click', handleParetoTap);
        humainContainer.addEventListener('click', handleHumainTap);
        document.addEventListener('click', handleOutsideTap);
        paretoPopup.addEventListener('click', stopPropagation);
        humainPopup.addEventListener('click', stopPropagation);
        mobileListenersAttached = true;
    }

    function detachMobileListeners() {
        if (!mobileListenersAttached) return;
        paretoContainer.removeEventListener('click', handleParetoTap);
        humainContainer.removeEventListener('click', handleHumainTap);
        document.removeEventListener('click', handleOutsideTap);
        paretoPopup.removeEventListener('click', stopPropagation);
        humainPopup.removeEventListener('click', stopPropagation);
        mobileListenersAttached = false;
    }

    function applyDesktopMode() {
        if (currentMode === 'desktop') return;
        detachMobileListeners();
        hideParetoPopup();
        hideHumainPopup();
        resetPopupStyles(paretoPopup);
        resetPopupStyles(humainPopup);
        currentMode = 'desktop';
    }

    function applyMobileMode() {
        if (currentMode === 'mobile') return;
        attachMobileListeners();
        hideParetoPopup();
        hideHumainPopup();
        currentMode = 'mobile';
    }

    function syncMode() {
        if (isMobile()) {
            applyMobileMode();
        } else {
            applyDesktopMode();
        }
    }

    syncMode();

    window.addEventListener('resize', function() {
        setTimeout(syncMode, 100);
    });

    window.addEventListener('orientationchange', function() {
        setTimeout(syncMode, 100);
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
