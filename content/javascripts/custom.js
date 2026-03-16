// ==========================================================================
// HealthData.ai docs -- custom scripts
// ==========================================================================

// 1. Mark image-only paragraphs with the .img-only class so CSS can let
//    them stretch to full width while regular text stays constrained.

document.querySelectorAll('article p').forEach(function (p) {
    if (p.querySelector('img') === null) {
        return;
    }
    if (p.innerText.trim() !== '') {
        return;
    }
    p.classList.add('img-only');
});

// 2. Make the header title clickable -- navigates to the site root.

(function () {
    var title = document.querySelector('.md-header__title');
    if (title) {
        title.addEventListener('click', function () {
            window.location = '/';
        });
    }
})();

// 3. Detect the visitor language and redirect to the matching localized page.
//    We only auto-redirect once per browser to avoid fighting manual switches.

(function () {
    var STORAGE_KEY = 'hdai_lang_redirect_done';

    try {
        if (window.localStorage.getItem(STORAGE_KEY) === '1') {
            return;
        }
    } catch (error) {
        // Ignore storage errors (e.g. private mode restrictions).
    }

    var browserLanguage = (navigator.language || '').toLowerCase();
    var preferredLanguage = browserLanguage.split('-')[0];

    if (!preferredLanguage) {
        return;
    }

    var currentLanguage = (document.documentElement.lang || '').toLowerCase().split('-')[0];

    if (currentLanguage === preferredLanguage) {
        try {
            window.localStorage.setItem(STORAGE_KEY, '1');
        } catch (error) {
            // Ignore storage errors.
        }
        return;
    }

    var alternateLinks = Array.prototype.slice.call(
        document.querySelectorAll('link[rel="alternate"][hreflang][href]')
    );

    var matchingLink = alternateLinks.find(function (link) {
        var hreflang = (link.getAttribute('hreflang') || '').toLowerCase();
        return hreflang.split('-')[0] === preferredLanguage;
    });

    if (!matchingLink) {
        return;
    }

    var targetUrl = matchingLink.getAttribute('href');
    if (!targetUrl) {
        return;
    }

    try {
        window.localStorage.setItem(STORAGE_KEY, '1');
    } catch (error) {
        // Ignore storage errors.
    }

    window.location.replace(targetUrl);
})();
