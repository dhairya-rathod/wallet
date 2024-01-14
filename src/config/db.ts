let request: IDBOpenDBRequest;
let db: IDBDatabase;
let version: number = 1;
const dbName: string = "WALLETDB";

export interface Transaction {
  id: string;
  title: string;
  description: string;
  amount: number;
  dateAndTime: string;
}

export enum Stores {
  Transactions = "transactions",
}

export const initDB = (): Promise<boolean> => {
  return new Promise((resolve) => {
    request = indexedDB.open(dbName);

    request.onupgradeneeded = () => {
      db = request.result;

      // if the data object store doesn't exist, create it
      if (!db.objectStoreNames.contains(Stores.Transactions)) {
        console.log("Wallet :: Creating 'transactions' store");
        db.createObjectStore(Stores.Transactions, { keyPath: "id" });
      }
    };

    request.onsuccess = () => {
      db = request.result;
      version = db.version;
      console.log("Wallet initDB success :: ", version);
      resolve(true);
    };

    request.onerror = (err: Event) => {
      console.error("Wallet initDB error :: ", err, version);
      resolve(false);
    };
  });
};

export const addData = <T>(
  storeName: string,
  data: T
): Promise<T | string | null> => {
  return new Promise((resolve) => {
    request = indexedDB.open(dbName, version);

    request.onsuccess = () => {
      db = request.result;
      const tx = db.transaction(storeName, "readwrite");
      const store = tx.objectStore(storeName);
      store.add(data);
      resolve(data);
    };

    request.onerror = (err: Event) => {
      console.error("Wallet add record error :: ", err, version);
      const errMessage = request.error?.message;
      if (errMessage) {
        resolve(errMessage);
      } else {
        resolve("Unknown Error");
      }
    };
  });
};

export const getStoreData = <T>(storeName: string): Promise<T[]> => {
  return new Promise((resolve) => {
    request = indexedDB.open(dbName);

    request.onsuccess = () => {
      db = request.result;
      const tx = db.transaction(storeName, "readonly");
      const store = tx.objectStore(storeName);
      const res = store.getAll();
      res.onsuccess = () => {
        resolve(res.result);
      };
    };
  });
};

export const getData = <T>(
  storeName: string,
  key: string
): Promise<T | string | null> => {
  return new Promise((resolve) => {
    request = indexedDB.open("myDB", version);

    request.onsuccess = () => {
      db = request.result;
      const tx = db.transaction(storeName, "readwrite");
      const store = tx.objectStore(storeName);
      const res = store.get(key);

      // add listeners that will resolve the Promise
      res.onsuccess = () => {
        resolve(res as T);
      };
      res.onerror = (err: Event) => {
        console.error("Wallet get record error :: ", err, version);
        resolve("Unknown Error");
      };
    };

    request.onerror = (err: Event) => {
      console.error("Wallet get record error :: ", err, version);
      const errMessage = request.error?.message;
      if (errMessage) {
        resolve(errMessage);
      } else {
        resolve("Unknown Error");
      }
    };
  });
};

export const deleteData = (
  storeName: string,
  key: string
): Promise<boolean> => {
  return new Promise((resolve) => {
    request = indexedDB.open("myDB", version);

    request.onsuccess = () => {
      db = request.result;
      const tx = db.transaction(storeName, "readwrite");
      const store = tx.objectStore(storeName);
      const res = store.delete(key);

      // add listeners that will resolve the Promise
      res.onsuccess = () => {
        resolve(true);
      };
      res.onerror = () => {
        resolve(false);
      };
    };
  });
};
