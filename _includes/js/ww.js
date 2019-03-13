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
    "revision": "a5b945e01a95155b032c32cd21e149da"
  },
  {
    "url": "basic-webbox.html",
    "revision": "73a58836f1a71ef1129a72d809af30d5"
  },
  {
    "url": "bundle.css",
    "revision": "2d6baf03363e43ee56732e6c2dcbc45b"
  },
  {
    "url": "default-manifest.html",
    "revision": "544289dac904fab1e5545bfe9b7adba1"
  },
  {
    "url": "default-service-worker.html",
    "revision": "2233a794bf2439041d40675c4d3c5dc8"
  },
  {
    "url": "index.html",
    "revision": "ea2141592ed930ef40f7530ac7e84592"
  },
  {
    "url": "minimal-fetch.html",
    "revision": "47057af8719e280a4e53e2e48b0a67cc"
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
    "url": "useful.html",
    "revision": "b43463942a044b600943ee1d8ae56ec2"
  },
  {
    "url": "wizzard-webbox.html",
    "revision": "0e77e65c67cbb604db7fc20e9ecec297"
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
