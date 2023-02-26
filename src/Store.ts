import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import {
  SettingState,
  initialState as settingInitialState,
  SettingActions,
  SettingReducer,
} from './modules/Settings';
import {
  TaskState,
  initialState as taskInitialState,
  TaskReducer,
} from './modules/Tasks';

/**
 * アプリ全体のState
 */
export class RootState {
  setting: SettingState = settingInitialState;
  task: TaskState = taskInitialState;
}

/**
 * 各modulesで生成したReducerを結合
 */
const reducer = combineReducers<RootState>({
  setting: SettingReducer,
  task: TaskReducer,
});

/**
 * ReducerからStoreを生成
 */
const store = configureStore({
  reducer: reducer,
});

export default store;
