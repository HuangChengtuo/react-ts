/**
 * Usage: https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB
 * Compatibility: https://caniuse.com/#feat=indexeddb
 */

declare var window: any;

class LocalIndexedDB {
  private _db: IDBDatabase;
  private _version: number;
  private _database: string;
  private _storeName: string;

  /**
   * Constructor a new indexedDB object
   * @param database 数据库名字
   * @param version 数据库版本号，该字段已废弃，根据 open() 时的情况自动递增
   * @param storeName 库中表名字
   */
  constructor (database: string, version: number, storeName: string) {
    if (!('indexedDB' in window)) {
      console.log('This browser doesn\'t support IndexedDB');
    } else {
      this._storeName = storeName;
      this._version = 1;
      this._database = database;
    }
  }

  /**
   * Open the database indicated in constructor function.
   * This method return a Promise object which success will resolve db instance.
   */
  public open () {
    return new Promise<IDBDatabase>((resolve, reject) => {
      try {
        const self = this;

        if (self._db) {
          return resolve(self._db);
        }

        // If exist the same version database, there need upgrade an new version database,
        // because of the same version can't trigger onupgradeneeded event which will occur
        // object stores was not found exception.
        const request = indexedDB.open(self._database, self._version);
        console.log('open', request)

        request.onsuccess = function (e: any) {
          self._db = request.result;
          self._db.onversionchange = (event) => {
            console.log('onversionchange', event);
          }
          resolve(request.result);
          console.log('Open indexedDB success!');
        }

        request.onupgradeneeded = function (e: any) {
          console.log('openDb.onupgradeneeded', e);
          self._db = request.result;
          if (!request.result.objectStoreNames.contains(self._storeName)) {
            request.result.createObjectStore(self._storeName);
          }
          resolve(request.result);
        }

        request.onblocked = function (e: any) {
          console.log('openDb onblocked', e);
        }

        request.onerror = (e: any) => {
          // open 版本过低的数据库时，递增一个版本再次 open
          if (e?.target?.error?.name === 'VersionError') {
            this._version += 1
            resolve(this.open())
            return
          }
          console.error(e)
          reject(e);
        }
      } catch (e) {
        console.error(e);
        reject(e);
      }
    })
  }

  private getObjectStore (storeName: string, mode: IDBTransactionMode): IDBObjectStore {
    try {
      const transaction = this._db.transaction([storeName], mode);
      return transaction.objectStore(storeName);
    } catch (e) {
      // 新建表的方法 createObjectStore 只有在 onupgradeneeded 回调中才执行，
      // onupgradeneeded 又只会在新建库或者库升级版本后才执行，
      // objectStore 不存在的表就会报错
      // 需要数据库提高数据库的版本，重新调用 onupgradeneeded 的方法执行 createObjectStore 创建表才行
      if (e?.stack?.includes('object stores was not found')) {
        this._db.close()
        this._db = null
        this._version += 1
        this.open()
      }
      return null;

    }
  }

  public add (value: any, key?: string) {
    return this.wrapStoreOperationPromise(function (store: IDBObjectStore) {
      return store.add(value, key);
    });
  }

  /**
   * Set a value to store object by key
   * @param key the key of store object
   * @param value the value of store object
   */
  public set (key: string, value: any) {
    console.log('IndexedDB set', key, value);
    return this.wrapStoreOperationPromise(function (store: IDBObjectStore) {
      return store.put(value, key);
    });
  }

  /**
   * Get the value with the given key
   * @param key the key of store object
   */
  public get (key: string) {
    console.log('IndexedDB get', key);
    return this.wrapStoreOperationPromise(function (store: IDBObjectStore) {
      return store.get(key);
    });
  }

  /**
   * Delete records in store with the given key
   * @param key the key of store object
   */
  public delete (key: string) {
    return this.wrapStoreOperationPromise(function (store: IDBObjectStore) {
      return store.delete(key);
    });
  }

  /**
   * Delete all data in store object
   */
  public clearAll () {
    return this.wrapStoreOperationPromise(function (store: IDBObjectStore) {
      return store.clear();
    });
  }

  /**
   * Get the store object
   */
  public getStore () {
    return this.getObjectStore(this._storeName, 'readwrite');
  }

  /**
   * Wrap the database request result as promise object
   * @param operate A function which operate store
   */
  public wrapStoreOperationPromise<T = IDBRequest> (operate: (store: IDBObjectStore) => IDBRequest): Promise<T> {
    return new Promise((resolve, reject) => {
      try {
        const store = this.getObjectStore(this._storeName, 'readwrite');
        if (store) {
          const req = operate(store);
          req.onsuccess = (evt: any) => resolve(evt.target.result);
          req.onerror = (evt: any) => reject(evt);
        }
      } catch (e) {
        console.error(e);
        reject(e);
      }
    })
  }

  private log (...args: any) {
    console.log('indexDB log:', args)
  }
}

export default LocalIndexedDB
