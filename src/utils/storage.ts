class _Storage {
  public storage
  constructor(storage: Storage) {
    this.storage = storage
  }
  set(key: string, item: any) {
    this.storage.setItem(key, JSON.stringify(item))
  }
  get(key: string) {
    const target = this.storage.getItem(key)
    if (target) {
      return JSON.parse(target)
    }
    return undefined
  }
  remove(key: string) {
    const isExist = this.get(key)
    if (isExist) {
      this.storage.removeItem(key)
    }
  }
  clear() {
    this.storage.clear()
  }
}

export const useLocalStorage = new _Storage(localStorage)