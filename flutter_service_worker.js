'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "fe6f0ef11bca40ef716ac73fec933f0c",
"assets/AssetManifest.bin.json": "8d92ae1e86dc10ad9f320ae95e996c21",
"assets/AssetManifest.json": "8a96c042a731aaf8c9812fb7931103ae",
"assets/assets/db/d.json": "aa410df19b26012ae6bd93c2f71a6a9b",
"assets/assets/images/back_arrow.png": "d686acbce4e5d892c3cecfd14d81ade0",
"assets/assets/images/back_full.png": "9bfcdbf097432737067841c34313fff9",
"assets/assets/images/bat.png": "edfc9027a09ab4e0763d3426e2c878df",
"assets/assets/images/bat45.png": "e0888379b846f776b2af4728d8d0581a",
"assets/assets/images/bats.png": "1f8630e70551672099ce6c2eb973add0",
"assets/assets/images/bat_pink.png": "b4b91c1d3513f5c8f2615db0e7a21916",
"assets/assets/images/candies.png": "442e8692e11db2ca962292948b84f015",
"assets/assets/images/candy.png": "cf4c5e15bb8f823223d52fec8722536c",
"assets/assets/images/candy45.png": "8a5c5b1c1270fc9b02e1b8dacaf96724",
"assets/assets/images/developer.png": "34c2b272e82cad2da13f94283b483479",
"assets/assets/images/dracula.png": "5463a606ffdb64c2a504aabf479907c1",
"assets/assets/images/flashlight.png": "240d06a9d161cb7f6e0e839d44132b50",
"assets/assets/images/full_black.png": "cce2aff4f8831a8814f2196f5966b1b1",
"assets/assets/images/gamedesigner.png": "e9e6a4b3bf508aa467e1625576bf9e55",
"assets/assets/images/ghost.png": "9f6970c58102dd78cf8aeb85fe389813",
"assets/assets/images/ghost_blue.png": "9b2a1d7c84244c5d6dc50af33c05fded",
"assets/assets/images/ghost_cry.png": "5be52180452695ae38753d3a43f22c53",
"assets/assets/images/ghost_pink.png": "c32a4f1615e4f0ac216abbcdfb214bde",
"assets/assets/images/icon.png": "98d7143cdfcd73fcf41b1915db874581",
"assets/assets/images/icon2.png": "a6b545206281ceb4745adc4ea1de4df5",
"assets/assets/images/moon.png": "9bc8a309edc77a8012104ca6b399d2b5",
"assets/assets/images/room_dracula.png": "1286a0e6a8b0dfd25b5992995f2c9604",
"assets/assets/images/setting.png": "68c73a2f55080b93c1f421ea02d5af3c",
"assets/assets/images/sile.jpg": "aa024ba75b78e7fab3678f2e512bc429",
"assets/assets/images/star.png": "ad0e9a08fb2858bf10fa6d33bd75b478",
"assets/assets/images/stars.png": "f1b8557d29875004f297db1ec187cd6c",
"assets/assets/mp3/novella_song.mp3": "7c2a5ff3a31fdb63d5f9dc0de34176b8",
"assets/assets/rive/back.riv": "524eeea44463a7b8bf032e6a1ebbc873",
"assets/assets/rive/back_demon.riv": "9f000ae0a5a0344f19560dad361cb3a2",
"assets/assets/rive/back_full.riv": "4bbcf58bf467da0e3139e491e6a31d90",
"assets/assets/rive/clo.riv": "02701b14ce28f08caf4f876d7b7c903c",
"assets/assets/rive/clo_back_room.riv": "c6ea8af4cb378bcbcbf7d47f039028fd",
"assets/assets/rive/dracula_afk.riv": "0c9d7bc97b093938648b219c81f65137",
"assets/assets/rive/dracula_armod.riv": "f1d0ea35251930cd070ae411992cf02a",
"assets/assets/rive/dracula_back_room.riv": "6e5cbb2bd0e489ac0cac196850b73660",
"assets/assets/rive/dracula_back_room_3.riv": "f99f416ce7b37417bccb65f1a3bd8ef7",
"assets/assets/rive/dracula_back_room_31.riv": "e7ff2286e995e3701bac645c1a32bd31",
"assets/assets/rive/dracula_back_room_red.riv": "368912da806b4fd0bd680b11d8f88c89",
"assets/assets/rive/dracula_bookshelf.riv": "c953e97844311e54cff4232f02a3b3fb",
"assets/assets/rive/dracula_cloak.riv": "6edc6f299cb914503402938930667883",
"assets/assets/rive/dracula_cloak_down.riv": "d095015cbd0fc47b1792e3f1ac8461da",
"assets/assets/rive/dracula_cloak_vamp.riv": "6edc6f299cb914503402938930667883",
"assets/assets/rive/dracula_demon_die.riv": "a5ed81c900caeff8d57adbecaca72e43",
"assets/assets/rive/dracula_find_book.riv": "2d7bcaa80c3e84406739572e585cf25d",
"assets/assets/rive/dracula_go_event.riv": "7dc7cfbb38521da6bb8b33140b712b11",
"assets/assets/rive/dracula_hehe.riv": "cacb2cdc5bd79150089915ba0e14c5ef",
"assets/assets/rive/dracula_hehe2.riv": "8685f57b8dcc6d7877dd2911710f298a",
"assets/assets/rive/dracula_hug_book.riv": "c03cbc69814068be92cdd0e9987262ce",
"assets/assets/rive/dracula_hug_book_hehe.riv": "c2f562356d6c65fad69ae03bdd8eddc3",
"assets/assets/rive/dracula_hug_book_hehe2.riv": "9492156155cb9d475a618c2bef0068f1",
"assets/assets/rive/dracula_open_book1.riv": "4d6ca02aefa6a7d40d613b0fee129cc2",
"assets/assets/rive/dracula_open_book2.riv": "68ddbe3e7f4fff89d16cbf81b491bb77",
"assets/assets/rive/dracula_pajamas.riv": "792f5b0449b147c0fc121115e1f65dbc",
"assets/assets/rive/dracula_panik.riv": "687ec28fd82e82fb5d9011a54019b4c0",
"assets/assets/rive/dracula_really_sukkub.riv": "2c46e688016e701444568f00ba002f96",
"assets/assets/rive/dracula_show_sukkub.riv": "5bc338f0e27238e669221a7c3b436d53",
"assets/assets/rive/dracula_start_afk.riv": "813dca0a6f8152716a68ad80ae5b2ea5",
"assets/assets/rive/dracula_sukkub.riv": "3f7bcbb4e7ea5b3de76f0a34883842e5",
"assets/assets/rive/dracula_sukkub_2.riv": "7c2825c7851ca42512cef5b62c98796c",
"assets/assets/rive/dracula_think.riv": "c76eae69b723b9a79cac224e78939df1",
"assets/assets/rive/luna.riv": "9f29b405e270c838df74c16888eb5ad1",
"assets/assets/rive/luna_back_room.riv": "1d216359e031feefa6a873f0776470cc",
"assets/assets/rive/miky%2520(1).riv": "9194a6890ada107e86610e231bf5c686",
"assets/assets/svg/onboarding.svg": "0d57386e602253dce061f4d27490bc7a",
"assets/FontManifest.json": "3b6558bf917921db044f5e5370e8def8",
"assets/fonts/Inknut_Antiqua/InknutAntiqua-Regular.ttf": "174da21c80975e95f76065b06ffb402d",
"assets/fonts/MaterialIcons-Regular.otf": "bf6a4a45e30586ee404f25576ce0e35f",
"assets/NOTICES": "15427ded1a5d6ab254ecf35b4b382ae6",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "db1d8007b6db6fc5caa56fe17cca50b4",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "895f43ef291b78c0b293e09f8b7bcdb2",
"icons/Icon-192.png": "379fc974061f51d3240900f0b8fe5bca",
"icons/Icon-512.png": "b784c3addbc3648aa58742812bd413a4",
"icons/Icon-maskable-192.png": "379fc974061f51d3240900f0b8fe5bca",
"icons/Icon-maskable-512.png": "b784c3addbc3648aa58742812bd413a4",
"index.html": "d15ead2a19c459db1fe39131027ad1fd",
"/": "d15ead2a19c459db1fe39131027ad1fd",
"main.dart.js": "6e7816b913af6814099ff9af70a6e285",
"manifest.json": "ddc929a5941f0ba6bc7e2776275cf0f6",
"version.json": "165a61f9ffccd222bd3e33d1242b3af8"};
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
