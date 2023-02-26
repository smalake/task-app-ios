import {PurpleGradation} from '../../constants/';

/**
 * 設定 State
 */
type SettingState = {
  /** 背景色 */
  bgColor: string[];
}

/**
 * State 初期値
 */
export const initialState: SettingState = {
  bgColor: PurpleGradation,
}

export default SettingState;