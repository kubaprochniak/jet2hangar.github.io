if ('serviceWorker' in navigator) {
    console.log('CLIENT: service worker registration in progress.');
    navigator.serviceWorker.register('/assets/js/{% if page.service-worker %}{{ page.service-worker }}{% else %}service-worker.js{% endif %}').then(function() {
        console.log('CLIENT: service worker registration complete.');
    }, function() {
        console.log('CLIENT: service worker registration failure.');
    });
    } else {
    console.log('CLIENT: service worker is not supported.');
}