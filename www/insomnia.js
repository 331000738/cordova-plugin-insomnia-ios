var exec    = require('cordova/exec'),
    channel = require('cordova/channel'),
    _isIos = false;

module.exports = {

    // IOS
    enable: function (successCallback, errorCallback) {
        if(_isIos) {
            cordova.exec(successCallback, errorCallback, 'Insomnia', 'enable', []);
        } else {
          errorCallback("iOS Only");
        }
    },
    disable: function (successCallback, errorCallback) {
        if(_isIos) {
            cordova.exec(successCallback, errorCallback, 'Insomnia', 'disable', []);
        } else {
          errorCallback("iOS Only");
        }
    },
    switchOnScreenAndForeground: function (successCallback, errorCallback, options) {
        if(_isIos) {
            cordova.exec(successCallback, errorCallback, 'Insomnia', 'switchOnScreenAndForeground', [options]);
        } else {
            errorCallback("iOS Only");
        }
    },
    acquireWakeLock: function (successCallback, errorCallback, options) {
        if(_isIos) {
            cordova.exec(successCallback, errorCallback, 'Insomnia', 'acquireWakeLock', [options]);
        } else {
            errorCallback("iOS Only");
        }
    },
    releaseWakeLock: function (successCallback, errorCallback, options) {
        if(_isIos) {
            cordova.exec(successCallback, errorCallback, 'Insomnia', 'releaseWakeLock', [options]);
        } else {
            errorCallback("iOS Only");
        }
    }
}

// Called before 'deviceready' listener will be called
channel.onCordovaReady.subscribe(function() {
    channel.onCordovaInfoReady.subscribe(function() {
        _isIos = device.platform.match(/^iOS/i) !== null;
    });
});
