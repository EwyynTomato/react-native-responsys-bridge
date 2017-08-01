import { NativeModules } from 'react-native';

const { RNResponsysBridge } = NativeModules;

const ResponsysBridge = {
    start: function() {
        RNResponsysBridge.start();
    },
    registerUserId: function(userId) {
        RNResponsysBridge.registerUserId(''+userId); //convert to string to prevent iOS conversion error
    },
    trackEvent: function(eventName) {
        RNResponsysBridge.trackEvent(eventName);
    },
}

export default ResponsysBridge;
