import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../Store';
import {loadSetting} from '../../Settings/SettingUtil';
import {SettingState, SettingActions} from '../../Settings';

/**
 * 画面共通の最上位コンポーネント
 * @param props
 */
const Main: React.FC = props => {
  const {children} = props;
  const dispatch = useDispatch();
  // 表示する背景色
  const selectedBgColor: string[] = useSelector(
    (state: RootState) => state?.setting?.bgColor,
  );
  // useEffectを使ってMainが初めて表示された時だけ保存されたデータを読み込む
  useEffect(() => {
    loadSetting().then((setting: SettingState) => {
      // dispatch()を使ってActionをReducerに伝える
      dispatch(SettingActions.setSetting(setting));
    });
  }, []);

  return (
    <LinearGradient
      start={{x: 0, y: 0.75}}
      end={{x: 1, y: 0.25}}
      colors={selectedBgColor}
      style={{height: '100%'}}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
        {children}
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Main;
