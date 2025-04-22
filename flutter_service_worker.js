'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "17042ad573594910b62d2fd4de40a72e",
"version.json": "7439c66f2b00ef52b68f2795b7d096a3",
"index.html": "6c6cdc0855a94ef61796fc7cf98e6c20",
"/": "6c6cdc0855a94ef61796fc7cf98e6c20",
"main.dart.js": "16adc5a0a155f2e1fa39b9e28a0b68e3",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "7dedbf21914281fce45f1e4a9503027c",
"icons/Icon-192.png": "f6c96d2060f456b74127f555dab2c659",
"icons/Icon-maskable-192.png": "f6c96d2060f456b74127f555dab2c659",
"icons/Icon-maskable-512.png": "c167dd4f8ba048c890c2eb44e84c32e8",
"icons/Icon-512.png": "c167dd4f8ba048c890c2eb44e84c32e8",
"manifest.json": "950e85299fb1569c69c81e65ccdafb14",
"assets/AssetManifest.json": "1c040f93e160be44d268a4eada305144",
"assets/NOTICES": "8dd35614e1e26589619d8550e71ae630",
"assets/FontManifest.json": "7baeca389bafa791b06ce5627efd9dfa",
"assets/AssetManifest.bin.json": "d5ba5da9e486f0fe25983cf6cdc95722",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "a2bd7ca2cbd080c073798dfcc7f980b8",
"assets/fonts/AdvertisingScriptBoldTrial.ttf": "9013d6e81bb778958035523bee15a996",
"assets/fonts/nunito_bold.ttf": "ee4d00aaeaf8371a9016405cf85bcc51",
"assets/fonts/Nunito-ExtraBold.ttf": "5b5a206f5cd32fa496c93925d0caf609",
"assets/fonts/Montserrat-ExtraBold.ttf": "bd8fb30c6473177cfb9a5544c9ad8fdb",
"assets/fonts/AdvertisingScriptMonolineTrial.ttf": "e7cfb1dd29e6653679ac46098e2157f3",
"assets/fonts/MaterialIcons-Regular.otf": "5884000f411e7fcce46be818c6372f83",
"assets/assets/loading.json": "e891ce11baf3cb4badd5b89f58c7df32",
"assets/assets/chatBot/chatbot_circle.png": "3e1fbca6a6ef26f154bd1041e24c2cb9",
"assets/assets/chatBot/chat_arrow.svg": "a4b5cdabce69a44a2096d68939d0c79b",
"assets/assets/chatBot/ycallback.png": "34e04f69a2cea6554573918fd193ab27",
"assets/assets/chatBot/sonnie.png": "3f79252d2a4ac3537b28b1ef74a58d3a",
"assets/assets/chatBot/avatar.png": "37660f163dcc47fec3e886a24401e485",
"assets/assets/chatBot/check_mark.json": "84b1b40340b6440985a296ba9e30ab5f",
"assets/assets/chatBot/loading_message.json": "65bd1b7b2f7dd8a6ed3c6f683e1b0877",
"assets/assets/chatBot/magnet_circle.json": "279b61b06bf91cf5c8732889ec14e59d",
"assets/assets/chatBot/app_bar_bot_icon.png": "3c46f792827aa35ea8c85568bbab66c9",
"assets/assets/chatBot/Y-Logo.svg": "c57c2fa77b68801d7db8e72d1116614c",
"assets/assets/chatBot/holding.json": "f0ffcdf87da50766f024812d53b916c3",
"assets/assets/predictor/blood.svg": "1532b040b6837818453a313d8e05b6fa",
"assets/assets/predictor/wind.svg": "5b54ccafeef278cc87946dc8d1bc2d63",
"assets/assets/predictor/Polygon.svg": "b9cba64d2ec65a6d1e03e9e9628dfe14",
"assets/assets/predictor/Low-phone.png": "9f8b11ea4d2a30359ba83015f3105aa3",
"assets/assets/predictor/light-emergency-on.svg": "0498a570b15026772f37ca5f67455c46",
"assets/assets/predictor/Low-Web.png": "8355cf8088587a05d22533cf72df1645",
"assets/assets/predictor/blur_bg.png": "48955d52feb031ee3edb29edb3f94895",
"assets/assets/predictor/high-phone.png": "8f35bbfea8be237dc52dd662cf9bff89",
"assets/assets/predictor/meh.svg": "669c6ff312da7e31c621088921ce9a92",
"assets/assets/predictor/bolt.svg": "e20122ce21790b6387dcfb11f0c14b8d",
"assets/assets/predictor/bg_small.png": "bf23cc3e44bcb1b1427e24c6d08e64dc",
"assets/assets/predictor/happy.svg": "9c14f5e36fa320de7bed506c955ab5c7",
"assets/assets/predictor/sign_up_bg.png": "90114aa2591431b6a5d437890bf12f05",
"assets/assets/predictor/laugh-beam.svg": "4ad20aca5367f69aa388c7db398c705a",
"assets/assets/predictor/battery-exclamation.svg": "75c4a4936c6847eb7747e0bd231bf147",
"assets/assets/predictor/battery-bolt.svg": "1420120c81a576b6a80b3c495e3d3b33",
"assets/assets/predictor/march_icon.png": "ce6c23a75583af316918679a6ce9bc8b",
"assets/assets/predictor/High-web.png": "4620bfb32ab7c3d287009402c595a55f",
"assets/assets/predictor/check_box.svg": "14371cf65e04ebeca255fae73517c659",
"assets/assets/predictor/angry.svg": "66242dc5bd783be371995d4512632c32",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
