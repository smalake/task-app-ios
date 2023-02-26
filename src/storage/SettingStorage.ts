import storage from './storage';
import {SettingState, initialState} from '../modules/Settings';

const KEY: string = 'setting';

/**
 * 設定情報 ストレージクラス
 */
export default class SettingStorage {
  /**
   * 読み込み処理
   */
  static load = async (): Promise<SettingState> => {
    // 端末内に保存されているSettingStateを読み込む
    const state: SettingState = await storage
      .load({key: KEY})
      .then((data: SettingState) => {
        // 正常に読み込めた場合の処理
        return data;
      })
      .catch(() => {
        // 読み込めなかった場合の処理
        // 初期値(initialState)を返却する
        return initialState;
      });
    return state;
  };

  /**
   * 保存処理
   * @param data SettingState
   */
  static async save(data: SettingState) {
    // 端末内にSettingStateを書き込む
    await storage.save({
      key: KEY,
      data: data,
    });
  }
}
