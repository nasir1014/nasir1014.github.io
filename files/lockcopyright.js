

document.addEventListener('contextmenu', event => event.preventDefault());
document.onkeydown = function(e) {
    if (e.key === "F12" || 
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J" || e.key === "C")) || 
        (e.ctrlKey && e.key === "U")) {
        e.preventDefault();
        return false;
    }
};
function isMobileDevice() {
    return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

window.onload = function() {
    detectWebDriver();
};

document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'i') {
        e.preventDefault();
        window.location.href = 'about:blank';
    }
});


document.addEventListener('contextmenu', (e) => {
    e.preventDefault();

});


function detectDevTools() {
    const threshold = 160;
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isMobile) {
        const isDevToolsOpen = window.outerWidth - window.innerWidth > threshold || window.outerHeight - window.innerHeight > threshold;

        if (isDevToolsOpen) {
            window.location.href = 'about:blank';
        }
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'F12') {
        e.preventDefault();
        window.location.href = 'about:blank';
    }
});
document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
    }
});

document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'i') {
        e.preventDefault();
        window.location.href = 'about:blank';
    }
});

setInterval(detectDevTools, 50);
