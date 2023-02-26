import {SettingState} from '.';
import {SettingStorage} from '../../storage/';

/**
 * 設定読み込み
 */
export const loadSetting = async (): Promise<SettingState> => {
  const setting: SettingState = await SettingStorage.load();
  return setting;
};

/**
 * 設定保存
 * @param setting 設定
 */
export const saveSetting = (setting: SettingState) => {
  SettingStorage.save(setting);
};
