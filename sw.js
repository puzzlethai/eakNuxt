importScripts('/eakNuxt/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/eakNuxt/_nuxt/2516b89f258b40ed56a6.js",
    "revision": "68bf06be3a697da986b6e04de65facae"
  },
  {
    "url": "/eakNuxt/_nuxt/4927c260d10e89e9729c.js",
    "revision": "44a2da62b8ce58020973559393f58591"
  },
  {
    "url": "/eakNuxt/_nuxt/51aaf60e5b5fbe52bbd0.js",
    "revision": "23dc795e88f1003d45ff419d27f4f3ca"
  },
  {
    "url": "/eakNuxt/_nuxt/9f366cef9a978da341e8.js",
    "revision": "b80d3f06f6a6851af5948100425c48c0"
  },
  {
    "url": "/eakNuxt/_nuxt/bf76e8dafd090844c715.js",
    "revision": "e224277fb71ebf79bcaa11eeeb1cb9b3"
  },
  {
    "url": "/eakNuxt/_nuxt/f2d06db7188cf9972e72.js",
    "revision": "3c99673dab1b6f33e1e47e5b587522e8"
  }
], {
  "cacheId": "testNuxtVue",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/eakNuxt/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/eakNuxt/.*'), workbox.strategies.networkFirst({}), 'GET')
