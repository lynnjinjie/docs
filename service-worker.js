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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

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
    "url": "404.html",
    "revision": "c8126f8b9c8a52c53a5f0d8c20283259"
  },
  {
    "url": "archives/index.html",
    "revision": "27a22c0ae76ba722296f7876579ab414"
  },
  {
    "url": "assets/css/0.styles.0805e486.css",
    "revision": "6dcf2a184ac2069edc04e27cb464d0c3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d5e1b1f3.js",
    "revision": "f0dd9b1439e0d0914c05c4f9df354420"
  },
  {
    "url": "assets/js/11.2b2cd788.js",
    "revision": "7b61663dd08cc26fed1133ad699c7080"
  },
  {
    "url": "assets/js/12.1f18ec5e.js",
    "revision": "10d9213d6e6b1f954dd56f37b349d721"
  },
  {
    "url": "assets/js/13.02ef772f.js",
    "revision": "76f4740af09e415b4eda3ecbf0ea557a"
  },
  {
    "url": "assets/js/14.bfef61ce.js",
    "revision": "2a52bedea1704b50c505392ba171ece9"
  },
  {
    "url": "assets/js/15.5fe34bb3.js",
    "revision": "d32e19cb581257fce224e8ef58bb54b1"
  },
  {
    "url": "assets/js/16.6070e166.js",
    "revision": "7becae4fb2800d3dbe107146b385c4c6"
  },
  {
    "url": "assets/js/17.0013afbe.js",
    "revision": "62daee2a8c30d11f5665b7140131aeaa"
  },
  {
    "url": "assets/js/18.b45edf71.js",
    "revision": "e2d7b41f491f4c7e0e1b0d514ecc4ec8"
  },
  {
    "url": "assets/js/19.40441586.js",
    "revision": "1b35cb8eadcbf685cb71fc22605559b3"
  },
  {
    "url": "assets/js/20.8d109aeb.js",
    "revision": "2cdb049d354d6ebd078407e03ee8e55f"
  },
  {
    "url": "assets/js/21.6a359f42.js",
    "revision": "bad0ff8b2e30edd7b80e2788bf76376c"
  },
  {
    "url": "assets/js/22.16338800.js",
    "revision": "ad3fefbc554c1adaff830e7c3267b8bf"
  },
  {
    "url": "assets/js/23.2817835f.js",
    "revision": "5d26a2a5778fa04b9fca37cca50d9aca"
  },
  {
    "url": "assets/js/24.11f89ae4.js",
    "revision": "926e77b6e198bc118266db439198b51c"
  },
  {
    "url": "assets/js/25.2a25167f.js",
    "revision": "01b52f200b0b8abde7a09812f4d1c90c"
  },
  {
    "url": "assets/js/26.6d5720b3.js",
    "revision": "6c9cbc9f547b480b89d4f25e65d1d9ac"
  },
  {
    "url": "assets/js/27.3362b154.js",
    "revision": "cda23b4c800fa26c073ca8bfebb53774"
  },
  {
    "url": "assets/js/28.90b8dc77.js",
    "revision": "a60cec3f2b55d49d955e8c32ccff0bec"
  },
  {
    "url": "assets/js/29.c8a63643.js",
    "revision": "ab063b4a7d68abfc539f26ca77faca41"
  },
  {
    "url": "assets/js/3.222627c2.js",
    "revision": "94b27e5d6e73a4dee17cf309c0b4c0ff"
  },
  {
    "url": "assets/js/30.00a74826.js",
    "revision": "bd1439cdfde685b3b76d3a8e6051305b"
  },
  {
    "url": "assets/js/31.e779164b.js",
    "revision": "fad956dd82f27c06b7bd63d019c099ee"
  },
  {
    "url": "assets/js/32.6f30baaf.js",
    "revision": "b9a24b1daf77b3f9605185f8913516ff"
  },
  {
    "url": "assets/js/33.2af44b65.js",
    "revision": "bb56dba3178d24af2816bd0aae68e1e0"
  },
  {
    "url": "assets/js/4.0bea4dd3.js",
    "revision": "4186706e17b59ffcd2026fae97f55e47"
  },
  {
    "url": "assets/js/5.4a0e24ca.js",
    "revision": "f5ab0fa4b6150945e7987746f19f08fd"
  },
  {
    "url": "assets/js/6.5e5bea65.js",
    "revision": "b9ae0b48bc521440d00b450d8b07df2c"
  },
  {
    "url": "assets/js/7.5bc6dee1.js",
    "revision": "20f45e9b5da4c87d14e8534f45c28b69"
  },
  {
    "url": "assets/js/8.70ed29ee.js",
    "revision": "d0a092542a88d08d1546f6f40b04186e"
  },
  {
    "url": "assets/js/9.3bd7e9c0.js",
    "revision": "7c182062220818e2e600f9c7a8256a5a"
  },
  {
    "url": "assets/js/app.e4a0b03b.js",
    "revision": "73766b388acd0544c9a58ca02a1235de"
  },
  {
    "url": "assets/js/vendors~docsearch.b15e65d3.js",
    "revision": "b74cf40fe83ff3b84902ef5b48bbc8f5"
  },
  {
    "url": "backend/index.html",
    "revision": "81e6ecbcdecaa61f35f227b92911aba6"
  },
  {
    "url": "categories/index.html",
    "revision": "74d72ed16f0d2372a70849677ac96a5c"
  },
  {
    "url": "frontend/index.html",
    "revision": "74c572155fbf7f697f2b65b2ba09cba0"
  },
  {
    "url": "images/dunning-kruger.jpg",
    "revision": "2273c0a262ed90b8e38d9b87b2214770"
  },
  {
    "url": "images/icons/databasecloud.png",
    "revision": "721dac36a82be85b5d24fe14925a4162"
  },
  {
    "url": "images/icons/folderdoc.png",
    "revision": "4bc5f6b7a484e7b7d5f5d47b54c0d2bb"
  },
  {
    "url": "images/icons/JavaScript.png",
    "revision": "97b8fefff4c6d689f9fae1314b29b169"
  },
  {
    "url": "images/icons/nav.png",
    "revision": "391795186b064ca12c44a8346f44cf9a"
  },
  {
    "url": "images/icons/page_144x144.png",
    "revision": "282d06496ff08398c135ff3e223b0d48"
  },
  {
    "url": "images/icons/page_80x80.png",
    "revision": "af2694280f001fd456dc3ef08a82b66a"
  },
  {
    "url": "images/icons/react.png",
    "revision": "a8504ee6384e893d7c64f64f494572bd"
  },
  {
    "url": "images/icons/shell.png",
    "revision": "585f4f2cebc37c16dd8ab68ba95fd781"
  },
  {
    "url": "images/icons/vue.png",
    "revision": "53fb85655823ea3c4ef01f897ad04811"
  },
  {
    "url": "images/icons/web.png",
    "revision": "577c8d5266164f1501807f1c5072050e"
  },
  {
    "url": "index.html",
    "revision": "97c5644ddbfe22ab313c0d4698779286"
  },
  {
    "url": "nav/index.html",
    "revision": "9780d97ac566ad69a5b2b1c4b6f7bb99"
  },
  {
    "url": "note/react/index.html",
    "revision": "edac49f0fb3320dd6b3cad6550eac669"
  },
  {
    "url": "other/index.html",
    "revision": "e5e7a1f7e3ba4e983c8ad9c40ebef391"
  },
  {
    "url": "pages/07815f/index.html",
    "revision": "20f45fb5f66eae636e0b664f618d9d9f"
  },
  {
    "url": "pages/0b5b64/index.html",
    "revision": "5576e716288c5bb943a187f3a62cbf10"
  },
  {
    "url": "pages/545d59/index.html",
    "revision": "931f8d936a89c21999af16ebb2988689"
  },
  {
    "url": "pages/55b7e0/index.html",
    "revision": "b5dd4ccae6ed8d918d453b8c8c3bf21a"
  },
  {
    "url": "pages/5a22b5/index.html",
    "revision": "35aeab12e4921f6f57c68c77ee912c7d"
  },
  {
    "url": "pages/5fe574/index.html",
    "revision": "80bbaf77fc8bd271e5b1277ea39e3afc"
  },
  {
    "url": "pages/69d92f/index.html",
    "revision": "3f1cbb6f7fd4a1ee4d5d234090e7c9b5"
  },
  {
    "url": "pages/7d95a7/index.html",
    "revision": "34dbf813cbff65a80a0397524cb9f6e4"
  },
  {
    "url": "pages/952551/index.html",
    "revision": "7737fb95686b80210246b9e96239c192"
  },
  {
    "url": "pages/a69b73/index.html",
    "revision": "0f6e8dc286a7ad965dfd1aa14e39fc17"
  },
  {
    "url": "pages/c7b9f6/index.html",
    "revision": "de95967dffb6427ee4dbcc7ec992f8bb"
  },
  {
    "url": "pages/caeaa7/index.html",
    "revision": "dba07283779de2d59509f4ce16cb4ba9"
  },
  {
    "url": "pages/cc8225/index.html",
    "revision": "a827e013463db6bfffcbe876eb4c31cd"
  },
  {
    "url": "pages/d49db8/index.html",
    "revision": "f39fbe54c31dc653c3230134efee9a6e"
  },
  {
    "url": "pages/e6f710/index.html",
    "revision": "baa27d3df1740fa758774d6a3a4bc1d7"
  },
  {
    "url": "pages/f2c46d/index.html",
    "revision": "9921a2927b0c7769ae1dcb0c813a3cae"
  },
  {
    "url": "tags/index.html",
    "revision": "81bcac8fc181d2fc18d1fea49a2e9001"
  },
  {
    "url": "technology/index.html",
    "revision": "6ff9dd2d5119955561ebc2dfe5b95f83"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
