import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';

// Similar as local storage, just used storage on phone instead
const storage = new Storage({
    // maximum capacity, default 1000
    size: 1000,

    // Use AsyncStorage for RN, or window.localStorage for web.
    // If not set, data would be lost after reload.
    storageBackend: AsyncStorage,

    // expire time, default 1 day(1000 * 3600 * 24 milliseconds).
    // can be null, which means never expire.
    defaultExpires: null,

    // cache data in the memory. default is true.
    enableCache: true,
    sync: {
        // we'll talk about the details later.
    }
});

export default storage;
