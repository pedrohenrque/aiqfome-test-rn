export interface IStorageService {
  getItem: <T = unknown>(key: string) => Promise<T | null>
  setItem: <T>(key: string, value: T) => Promise<void>
  removeItem: (key: string) => Promise<void>
}

export let storageService: IStorageService

export function initializeStorage(storageAdapter: IStorageService) {
  storageService = storageAdapter
}
