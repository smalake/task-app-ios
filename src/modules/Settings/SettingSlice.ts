import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import SettingState, {initialState} from './SettingState';

/**
 * 設定機能 Slice
 */
const SettingSlice = createSlice({
  name: 'setting',
  initialState: initialState,
  reducers: {
    /** Setting設定アクション */
    setSetting: (state: SettingState, action: PayloadAction<SettingState>) => ({
      ...state,
      ...action.payload,
    }),
  },
});

// Actionを切り出し
export const SettingActions = SettingSlice.actions;
// Reducerを切り出し
export const SettingReducer = SettingSlice.reducer;

export default SettingSlice;