import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import {
  SettingState,
  initialState as settingInitialState,
  SettingActions,
  SettingReducer,
} from './modules/Settings';

/**
 * アプリ全体のState
 */
export class RootState {
    setting: SettingState = settingInitialState;
}

/**
 * 各modulesで生成したReducerを結合
 */
const reducer = combineReducers<RootState>({
    setting: SettingReducer,
});

/**
 * ReducerからStoreを生成
 */
const store = configureStore({
  reducer: reducer,
});

export default store;
