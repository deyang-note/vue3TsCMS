const storage = window.localStorage

class LocalCache {
  setCache(key: string, value: any) {
    storage.setItem(key, JSON.stringify(value))
  }

  getCache(key: string) {
    const value = storage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }

  deleteCache(key: string) {
    storage.removeItem(key)
  }

  clearCache() {
    storage.clear()
  }
}

export default new LocalCache()
