import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-community/async-storage';

/**
 * ストレージ
 */
const storage: Storage = new Storage({
  // 保存できる
  size: 1000,
  // データを保存するStorageとして何を使用するかを指定(ここではAsyncStorageを使用)
  storageBackend: AsyncStorage,
  // 有効期限(nullにすると永続化する)
  defaultExpires: null,
  // データをメモリにキャッシュするかどうか
  enableCache: true,
});

export default storage;
