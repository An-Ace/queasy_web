'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "f8fd3602b383dc159d34232b940c03f0",
"assets/AssetManifest.smcbin": "f8ffd1d30e22b1f301f6a4d59614e77a",
"assets/assets/avatars/avatar.svg": "8ff82ae80a723b81be99f82a95c2bd4a",
"assets/assets/avatars/avatar_2.svg": "ef96ff8e3a79c88ab40d3b982ff704ad",
"assets/assets/avatars/avatar_3.svg": "cf59c5d2a0dd9283f61a159b8a737bff",
"assets/assets/avatars/leaderboard_1.svg": "335e725d680574ae94d9b2b58bbf303b",
"assets/assets/avatars/leaderboard_2.svg": "91fa4683bbbe75f8c17231e35fb48fb6",
"assets/assets/avatars/leaderboard_3.svg": "0a538727b20a39ae92027af256aab624",
"assets/assets/avatars/leaderboard_4.svg": "c71445d830e9be7dd61c2d194a52f4ba",
"assets/assets/avatars/leaderboard_5.svg": "942be0a2044908d1aaca68ad3d4d7653",
"assets/assets/avatars/leaderboard_6.svg": "c1bd39d45839bfb438ae0a25f429329b",
"assets/assets/backgrounds/background_1.png": "599210130f53f15995fb44de54b0f90b",
"assets/assets/badges/badge_1.png": "1b8bebf267e1c0a70bd0eefb5242c8ff",
"assets/assets/badges/badge_1.svg": "53296712ad9ccdc0a3c5b5a08f9ea0f6",
"assets/assets/badges/badge_2.png": "f44991f45e025ead060d3cf3d08666ca",
"assets/assets/badges/badge_3.png": "10ee6362801fbfe38dc7db43b66f9339",
"assets/assets/badges/badge_4.png": "33776a7c5634220e6db7eddd7b0a73bb",
"assets/assets/badges/badge_5.png": "04a7c7bb4d02bb79326f4aba0f0d572f",
"assets/assets/badges/badge_6.png": "d3ac4012783fa0fb563fe6cdb79fb9ed",
"assets/assets/flags/canada.png": "b61c590b33b014abf1d84ef9fc07dbdd",
"assets/assets/flags/czech.png": "27e271c77d916ff4bf9d757234643f74",
"assets/assets/flags/france.png": "7263e477e9f7badbfab7f7c0dca62206",
"assets/assets/flags/hungary.png": "91121260550193b94e073e6382e126e4",
"assets/assets/flags/italy.png": "e2f55cdbfb4ba53e636f95b95d283c6c",
"assets/assets/flags/portugal.png": "495bf3b259d309ade796f2ed3a112778",
"assets/assets/fonts/nunito/Nunito-Medium.ttf": "108670f0b05efd5a10ca1afce69e28a3",
"assets/assets/fonts/nunito/Nunito-Regular.ttf": "0c890be2af0d241a2387ad2c4c16af2c",
"assets/assets/fonts/rubik/Rubik-Medium.ttf": "bb476f36e32039a411d1f3afaf5a81af",
"assets/assets/fonts/rubik/Rubik-Regular.ttf": "e100d91366c744a9fcf055b7c5af9961",
"assets/assets/icons/active_slider_indicator.svg": "b2a25ad066280174cea313cf269ac3a7",
"assets/assets/icons/add_cover_icon.svg": "faf6262ff9aa1a1ffa31e1896d95ec76",
"assets/assets/icons/app_logo.png": "193a5918306f0916f364898d6920cb86",
"assets/assets/icons/app_logo.svg": "dd720b8d16d3aa446c3be219f2c6e208",
"assets/assets/icons/arrow_bottom.svg": "b57106d7e3a20569f36bc0f022dba621",
"assets/assets/icons/art_icon.svg": "1f7d4bb1b3b3005aba7bec6d3de303b4",
"assets/assets/icons/back_arrow_icon.svg": "d8424e6ea125e3bb23aed9671419afff",
"assets/assets/icons/button_icon.svg": "8f5f635b5c4e546412af8841d928b934",
"assets/assets/icons/clock_icon.svg": "bc8a37b58f308611c467070b113d89b8",
"assets/assets/icons/curve_line.svg": "917132283dd24228838edd5e5dc0c9e6",
"assets/assets/icons/curve_line_2.png": "aa5133345ea797adc36784189920d923",
"assets/assets/icons/curve_line_2.svg": "c720db20f249663b31a74168adde3330",
"assets/assets/icons/curve_line_3.svg": "d3b3db95f9a27416948f8b990deefd55",
"assets/assets/icons/duplicate_icon.svg": "36deb2aeecc6213ea33c846f44889b78",
"assets/assets/icons/fb_icon.svg": "474ca2c0e115eccc79aaa6af015f9c27",
"assets/assets/icons/flag.png": "b69b45be91060cf8dd6f7eba687025b7",
"assets/assets/icons/flag.svg": "9743e661fe26729c0cd27ec5b07d0754",
"assets/assets/icons/globe.svg": "32ea49a5977f9878a6f53fbb179c0e70",
"assets/assets/icons/google_icon.svg": "f0e865e6971e6bc20336df714b9cf958",
"assets/assets/icons/headphone.svg": "fde4bbb2e664ffe42f27b4fbb3639665",
"assets/assets/icons/history_icon.svg": "1e1a6d544e837f84c24d9c998e3112f8",
"assets/assets/icons/icon_mic.svg": "a378002d39374806492532a9012dcd57",
"assets/assets/icons/icon_puzzle.svg": "d98304ccc135a26936bb387abb03b04e",
"assets/assets/icons/icon_puzzle_only.svg": "eb8515f4b21f9715a075fa6d05da1a2a",
"assets/assets/icons/icon_question_mark.svg": "adf641ac58d43a65f289b9c06c708963",
"assets/assets/icons/icon_share.svg": "8cf85446ac550059f09c4075851a4165",
"assets/assets/icons/jigsaw.svg": "700b401c1734c3d06c7db4dc8a218f92",
"assets/assets/icons/local_rank_icon.svg": "1ebcb543015c276bc7b7d9711835293e",
"assets/assets/icons/logo_only.png": "03e534ffdeecc79abc7d614cd79f7a49",
"assets/assets/icons/man1.svg": "48dc7286408e70526fb753a6c8d13d64",
"assets/assets/icons/man2.svg": "c480d53191a19c4e81b8b4712160b8bd",
"assets/assets/icons/math_icon.svg": "a63ab9bbe5ae00a3c72e7dc8e6e42abb",
"assets/assets/icons/medal_bronze.svg": "351cdf1bef335d2dba2efd680f42cc8d",
"assets/assets/icons/medal_gold.svg": "bddba82f8a7c485e33507534e60d289c",
"assets/assets/icons/medal_silver.svg": "e3b59d6166194d83e4aa167729df93b4",
"assets/assets/icons/music_icon.svg": "6bcc576ca8562efc59d8749b55ddb414",
"assets/assets/icons/oval_big.svg": "d6db4dbb43fbe1617b77de9f5723d371",
"assets/assets/icons/oval_home_screen.svg": "442ce6a984504ea65b871e82cfb6bb11",
"assets/assets/icons/oval_mini.svg": "5aa6e24015785e9daea01daff3d8136e",
"assets/assets/icons/oval_outline_bottom.svg": "33665c2be8c8af1372abf225817b75ff",
"assets/assets/icons/oval_outline_bottom_onboarding.svg": "8e09a58ebc2b35d038a42ee9e7706dcc",
"assets/assets/icons/oval_outline_top.svg": "b8d91586970ec610b3974761ada34888",
"assets/assets/icons/oval_outline_top_onboarding.svg": "6305231c5807fb521f52f2e2f02add4d",
"assets/assets/icons/oval_review_quiz.svg": "c0bd59130f34e6c3ea220791183c32d8",
"assets/assets/icons/oval_two_big.png": "0e77b5dbf1cfa42cc9887b2887c4bafb",
"assets/assets/icons/pencil.svg": "2ce2767cbe985545216d5d4aa434696b",
"assets/assets/icons/play_button.svg": "11ea608c80612df84f9bdff9a7d42dc5",
"assets/assets/icons/plus_icon.svg": "4ec8865f191c55d0a42246e26c853b51",
"assets/assets/icons/quiz_checkbox.svg": "abec93fc456e553517551e150916bd54",
"assets/assets/icons/quiz_multiple.svg": "34cc7d87ffc7e26ef4e29b5b6ccf33dc",
"assets/assets/icons/quiz_puzzle.svg": "804a01a755c33eefe2d3501fd8b21763",
"assets/assets/icons/quiz_true_false.svg": "b525e9c0531722f99502c7e3d8c06906",
"assets/assets/icons/quiz_type.svg": "1d0f5d081664862f15f005ed671f3f59",
"assets/assets/icons/quiz_voice.svg": "5fdd7dd91ef49e9cdc644f1709462152",
"assets/assets/icons/rank_1.png": "1a705849808e8244c621fa9df0670149",
"assets/assets/icons/rank_2.png": "4751349ac1d5812330114e3c8578f5f3",
"assets/assets/icons/rank_3.png": "41cb7a2ca4ee72975eadd0050726f13c",
"assets/assets/icons/science_icon.svg": "ad5a3366f0e7579dbc3dbc04601b68c8",
"assets/assets/icons/search.svg": "67d95913664dcd3c08ad43caf8c0471c",
"assets/assets/icons/slider_indicator.svg": "585ac3c6c0daa72b38886528dab91e68",
"assets/assets/icons/sport_icon.svg": "aa579f8efa586eebf40832ad4306e058",
"assets/assets/icons/star.svg": "1062c4fc4e754cf3fa05faadff9550a7",
"assets/assets/icons/tech_icon.svg": "be6b97e7af284e468b020f2a7837e5be",
"assets/assets/icons/three_dots_icon.svg": "91f987a9f676757b78acffc8be9e105e",
"assets/assets/icons/trash_icon.svg": "f77b0bdae986655cad412271125b893c",
"assets/assets/icons/travel_icon.svg": "6e35bfc4964851440929cfed3eefb989",
"assets/assets/icons/voice_note.png": "1760dd6e51015119084daa3b7ec3d367",
"assets/assets/icons/voice_note.svg": "6b46319f797a2b0ee8954384876b620a",
"assets/assets/icons/youtube.svg": "0fa1f0e7951300b63f7ab6f944a67523",
"assets/assets/illustrations/1.svg": "aac049757221415cfffdd86b996bdc13",
"assets/assets/illustrations/2.svg": "bfc5b45e6874bac5cda1033a7767ea6e",
"assets/assets/illustrations/3.svg": "e63fd09d95d37c55e8424d13c1e65db6",
"assets/assets/illustrations/chart.svg": "ebb0726112b38d893632faf965340d07",
"assets/assets/illustrations/football_team.svg": "27097c035136bc0e64a3c17879bdc00e",
"assets/assets/illustrations/Illustration_drone.svg": "40205cbccdbfb409479ce3cf9e6df9b9",
"assets/assets/illustrations/Illustration_key.svg": "ef76dbeaef77cd4d338f434939c334e2",
"assets/assets/illustrations/illustration_line_chart.png": "490817f32e6d2fb62041fcc957a38bb0",
"assets/assets/illustrations/illustration_line_chart.svg": "e31a079ff5710f9a17e76706797ce5ae",
"assets/assets/illustrations/illustration_onboarding_1.svg": "e4084f849619a5d3a7efc1b8f50cbba9",
"assets/assets/illustrations/illustration_onboarding_2.svg": "467fb3537005f136356f8e25419d11cb",
"assets/assets/illustrations/illustration_onboarding_3.svg": "e63fd09d95d37c55e8424d13c1e65db6",
"assets/assets/illustrations/integers.svg": "7c6027c9be8416a55a6796896ef4c507",
"assets/assets/illustrations/person.svg": "332c354153c94ea7eae1b53ff1a7e7ce",
"assets/assets/illustrations/person_2.svg": "b8b1ab6b0a2018b99d061a3b2b75fdcb",
"assets/assets/illustrations/person_3.svg": "9f5a9b1ae9da6be155ced34b8b327b41",
"assets/assets/illustrations/quiz_review.svg": "970c6c09258165283d4312fc6f809fb5",
"assets/assets/illustrations/trophy.png": "bd7500f224b83a67d1948678d2e06b5e",
"assets/assets/vectors/invite_friend_cloud.svg": "7b712ea65315e041a316168558c041b7",
"assets/assets/vectors/invite_friend_round.svg": "c0de8d4c314e5cfb0d0bf28da028ad44",
"assets/assets/vectors/leaderboard_oval.svg": "4a15639e5d1b1cead367038b800e76a6",
"assets/assets/vectors/leaderboard_white_container.svg": "9a215556555bbfbeb2cb0bc92363a8c5",
"assets/assets/vectors/quiz_purple_container.svg": "001f84fa537a97bd95dc998cb609f367",
"assets/assets/vectors/quiz_white_container.svg": "86aa2e9a1b656914c1d201870c3eb165",
"assets/FontManifest.json": "1c9e220e80cf6fa820fb3f2f36237efa",
"assets/fonts/MaterialIcons-Regular.otf": "90d64035a05d8258a45dbe131da7d87a",
"assets/NOTICES": "2a1c0009212bbadbbbd684a6ef4e5f35",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f132bcee9885722de55c37e8e577c3d6",
"/": "f132bcee9885722de55c37e8e577c3d6",
"main.dart.js": "145831b55ec03e1f4ca95909740929af",
"manifest.json": "2d7732aaf0e84fb90057ee1f5930663f",
"version.json": "ba97339b988cbdf079f46fa4ac98d3c0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
