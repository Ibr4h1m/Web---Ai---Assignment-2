self.addEventListener('install', function() {
    console.log('SW Installed!');
    caches.open('static')
    .then(function(cache) {
        //cache.add('/');
        //cache.add('/index.html');
        //cache.add('/srs/js/index.js');
        cache.addAll([
           '/',
            '/index.html',
            '/src/index.js',
            '/src/Stylesheet.css',
            '/images/img1.png',
            '/images/img2.png',
            '/images/img3.png',
            '/images/img4.jpg',
            '/images/logo192.png',
            '/images/logo512.png'
            
        ]);
    })
});

self.addEventListener('activate', function(){
    console.log('SW Activated!')
})

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(res) {
                if (res) {
                    return res;
                } else {
                    return fetch(event.request);                    
                }
            })
    )
})