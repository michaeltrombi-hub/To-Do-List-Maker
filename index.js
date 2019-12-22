function onDeviceReady() {
    document.removeEventListener('deviceready', onDeviceReady, false);

    // Set AdMobAds options:
    admob.setOptions({
        publisherId:          "pub-8279078074288110",                    // Required
        interstitialAdId:     "ca-app-pub-8279078074288110/1995118464",  // Optional
    });
}

document.addEventListener("deviceready", onDeviceReady, false);
