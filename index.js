module.exports = function activeLinks(elems, activeClasses, inactiveClasses) {
    document.querySelectorAll(elems).forEach(elem => {
        if (!elem.getAttribute('href')) {
            return;
        }

        let elemUrl = new URL(elem.getAttribute('href'), window.location.origin);
        if (elem.getAttribute('href').substr(0, 4) === 'http') {
            elemUrl = new URL(elem.getAttribute('href'));
        }

        let currentUrl = new URL(window.location.href);

        let elemPath = elemUrl.pathname.endsWith('/') ? elemUrl.pathname.slice(0, -1) : elemUrl.pathname;
        let currentPath = currentUrl.pathname.endsWith('/') ? currentUrl.pathname.slice(0, -1) : currentUrl.pathname;

        if (elemPath === currentPath) {
            elem.classList.add(
                Array.isArray(activeClasses) ? activeClasses : activeClasses.split(',').map(item => item.trim())
            );
            return;
        }

        if (inactiveClasses) {
            elem.classList.add(
                Array.isArray(inactiveClasses) ? inactiveClasses : inactiveClasses.split(',').map(item => item.trim())
            );
        }
    });
}