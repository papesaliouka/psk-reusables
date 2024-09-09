import AsyncStorage from '@react-native-async-storage/async-storage';

type UpdateStateCallback<T> = (value: T) => void;

class StorageUtils {
  // Ensure that key is a non-empty string
  static isValidKey(key: string): boolean {
    return typeof key === 'string' && key !== '';
  }

  // Generate a unique key with a prefix
  static generateKey(prefix: string): string {
    return `${prefix}_${new Date().getTime()}`;
  }

  // Store an item in AsyncStorage
  static async storeItem<T>(key: string, value: T): Promise<void> {
    if (!this.isValidKey(key)) {
      throw new Error('[storeItem] Invalid key for storing item');
    }
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      throw new Error(`[storeItem] Error storing data with key ${key}: ${e}`);
    }
  }

  // Get an item from AsyncStorage
  static async getItem<T>(key: string): Promise<T | null> {
    if (!this.isValidKey(key)) {
      throw new Error('[getItem] Invalid key for getting item');
    }
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      throw new Error(`[getItem] Error reading data with key ${key}: ${e}`);
    }
  }

  // Remove an item from AsyncStorage
  static async removeItem(key: string): Promise<void> {
    if (!this.isValidKey(key)) {
      throw new Error('[removeItem] Invalid key for removing item');
    }
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      throw new Error(`[removeItem] Error removing data with key ${key}: ${e}`);
    }
  }

  // Store data and optionally update state
  static async storeData<T>(key: string, value: T, updateStateCallback?: UpdateStateCallback<T>): Promise<void> {
    try {
      await this.storeItem(key, value);
      if (updateStateCallback) {
        updateStateCallback(value);
      }
    } catch (e) {
      throw new Error(`[storeData] Error storing data with key ${key}: ${e}`);
    }
  }

  // Fetch data and optionally update state
  static async fetchData<T>(key: string, updateStateCallback?: UpdateStateCallback<T[]>): Promise<T[]> {
    if (!this.isValidKey(key)) {
      throw new Error('[fetchData] Invalid key for fetching data');
    }
    try {
      const data: T[] = (await this.getItem<T[]>(key)) || [];
      if (updateStateCallback) {
        updateStateCallback(data);
      }
      return data;
    } catch (e) {
      throw new Error(`[fetchData] Error fetching data with key ${key}: ${e}`);
    }
  }

  // Update or insert form data in storage
  static async updateFormData<T>(key: string, keyPrefix: string, value: T & { key?: string }, updateStateCallback?: UpdateStateCallback<T[]>): Promise<void> {
    try {
      if (!this.isValidKey(key)) {
        throw new Error('[updateFormData] Invalid key for updating form data');
      }

      const data: T[] = (await this.getItem<T[]>(key)) || [];

      const formIndex = data.findIndex(item => (item as any).key === value.key);

      if (formIndex === -1) {
        if (!value.key) {
          value.key = this.generateKey(keyPrefix);
        }
        data.push(value);
      } else {
        data[formIndex] = value;
      }

      await this.storeItem(key, data);
      if (updateStateCallback) {
        updateStateCallback(data);
      }
    } catch (e) {
      throw new Error(`[updateFormData] Error updating form data with key ${key}: ${e}`);
    }
  }

  // Remove form data from storage
  static async removeFormData<T>(key: string, formKey: string, updateStateCallback?: UpdateStateCallback<T[]>): Promise<void> {
    try {
      if (!this.isValidKey(key)) {
        throw new Error('[removeFormData] Invalid key for removing form data');
      }

      let data: T[] = (await this.getItem<T[]>(key)) || [];
      data = data.filter(item => (item as any).key !== formKey);

      await this.storeItem(key, data);
      if (updateStateCallback) {
        updateStateCallback(data);
      }
    } catch (e) {
      throw new Error(`[removeFormData] Error removing form data with key ${key}: ${e}`);
    }
  }

  // Store a form in storage and update the state
  static async storeForm<T>(value: T & { key?: string }, storageKey: string, setForms: UpdateStateCallback<T[]>): Promise<void> {
    if (!value.key) {
      value.key = this.generateKey('salt'); // Replace with your key generation logic
    }
    try {
      const previousData = await this.fetchData<T>(storageKey);
      const newData = previousData ? [...previousData, value] : [value];
      await AsyncStorage.setItem(storageKey, JSON.stringify(newData));
      setForms(newData);
    } catch (e) {
      throw new Error(`[storeForm] Error storing form data with key ${storageKey}: ${e}`);
    }
  }

  // Clear data from AsyncStorage
  static async clearData(key: string): Promise<void> {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      throw new Error(`[clearData] Error clearing data with key ${key}: ${e}`);
    }
  }
}

export default StorageUtils;
