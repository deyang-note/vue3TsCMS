const storage = window.localStorage;
class LocalCache {
    setCache(key, value) {
        storage.setItem(key, JSON.stringify(value));
    }
    getCache(key) {
        const value = storage.getItem(key);
        if (value) {
            return JSON.parse(value);
        }
    }
    deleteCache(key) {
        storage.removeItem(key);
    }
    clearCache() {
        storage.clear();
    }
}
export default new LocalCache();
//# sourceMappingURL=cache.js.map