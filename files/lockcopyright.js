(function () {
    const allowedDomain = "nasirlintech.web.app";
    if (window.location.hostname !== allowedDomain) {
        alert("Nasir 開發者所有，請聯繫作者");
        window.location.href = "https://nasir1014.github.io";
    }
})();


(function () {
    let devtoolsOpen = false;
    const element = new Image();
    Object.defineProperty(element, "id", {
        get: function () {
            devtoolsOpen = true;
            window.location.href = "https://nasir1014.github.io";
        }
    });
    console.log(element);
})();


(function () {
    const allowedDomain = "nasir1014.github.io";
    document.querySelectorAll('link[rel="stylesheet"]').forEach((link) => {
        const cssDomain = new URL(link.href).hostname;
        if (cssDomain !== allowedDomain) {
            link.parentNode.removeChild(link);
            console.warn("CSS禁止在未授權網域加載。");
        }
    });
})();

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
