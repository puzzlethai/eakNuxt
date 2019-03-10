importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/2516b89f258b40ed56a6.js",
    "revision": "68bf06be3a697da986b6e04de65facae"
  },
  {
    "url": "/_nuxt/3b30208b125ce13f5c31.js",
    "revision": "2ebba9f549808d4eac31ac4d5cbafc27"
  },
  {
    "url": "/_nuxt/4927c260d10e89e9729c.js",
    "revision": "44a2da62b8ce58020973559393f58591"
  },
  {
    "url": "/_nuxt/51aaf60e5b5fbe52bbd0.js",
    "revision": "23dc795e88f1003d45ff419d27f4f3ca"
  },
  {
    "url": "/_nuxt/6a24d1ba24a2ad4ddec6.js",
    "revision": "edfd8ae0a1cae7636f7fe7a23787c38b"
  },
  {
    "url": "/_nuxt/9f366cef9a978da341e8.js",
    "revision": "b80d3f06f6a6851af5948100425c48c0"
  }
], {
  "cacheId": "testNuxtVue",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
