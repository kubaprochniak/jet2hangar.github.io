/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.1.0/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404/index.html",
    "revision": "a3b6a20fc0249375c48119cdbf6c9f49"
  },
  {
    "url": "bundle.css",
    "revision": "2d6baf03363e43ee56732e6c2dcbc45b"
  },
  {
    "url": "offline.html",
    "revision": "30beb260b655e1a878901d05bb563680"
  },
  {
    "url": "service-worker-minimal.js",
    "revision": "b9705e63ab11bd58857361ce5ddbdad5"
  },
  {
    "url": "service-worker.js",
    "revision": "dc951b6526424ccaeec1ad67711b3054"
  },
  {
    "url": "workbox-config.js",
    "revision": "5364e3adfd1cd2598289c71b3aceb223"
  },
  {
    "url": "workbox-worker.js",
    "revision": "ed345e8c6b1d06996a00435b35eb00a9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
