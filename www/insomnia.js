
var exec    = require('cordova/exec'),
    channel = require('cordova/channel'),
    _isIos = false,

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
    // IOS

    // BOTH
    switchOnScreenAndForeground: function (successCallback, errorCallback, options) {
        cordova.exec(successCallback, errorCallback, 'Insomnia', 'switchOnScreenAndForeground', [options]);        
    }
    // BOTH    

}

// Called before 'deviceready' listener will be called
channel.onCordovaReady.subscribe(function() {
    channel.onCordovaInfoReady.subscribe(function() {
        _isAndroid = device.platform.match(/^android/i) !== null;
        _isIos = device.platform.match(/^iOS/i) !== null;
    });
});
