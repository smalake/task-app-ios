import React, {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import {RootState} from '../../../Store';
import {ActiveColor} from '../../../constants';
import {SettingActions, SettingState} from '..';
import {saveSetting} from '../SettingUtil';

/**
 * グラデーション
 */
const Gradation = styled(LinearGradient)`
  width: 100%;
  padding-top: 100%;
`;

/**
 * グラデーションラップ用
 */
const GradationWrap = styled.TouchableOpacity`
  width: 30%;
`;

/**
 * 選択状態アイコン
 */
const SelectedIcon = styled(Icon)`
  position: absolute;
  top: 2%;
  right: 2%;
  font-size: 20px
  color: ${ActiveColor};
`;

/**
 * Props
 */
type Props = {
  // カードに表示させる背景色
  colors: string[];
};

/**
 * グラデーションカード
 * @param props
 */
const GradationCard: React.FC<Props> = props => {
  const {colors} = props;
  const dispatch = useDispatch();
  // SettingStateをStoreから取得
  const settingState: SettingState = useSelector(
    (state: RootState) => state?.setting,
  );
  // 現在選択している背景色
  const selectedBgColor: string[] = settingState.bgColor;
  // 現在選択状態かどうか
  const isSelected: boolean = colors === selectedBgColor;
  // カードタップ時処理
  const onPress = useCallback(() => {
    // タップされた色を反映させた新しいSettingStateを作成
    const newSettingState: SettingState = {
      ...settingState,
      bgColor: colors,
    };
    // SettingStateの最新の状態をStoreに反映
    dispatch(SettingActions.setSetting(newSettingState));
    // 同時にStorageに保存
    saveSetting(newSettingState);
  }, [settingState, colors, dispatch]);

  return (
    <GradationWrap onPress={onPress}>
      <Gradation start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}} colors={colors}>
        {isSelected ? <SelectedIcon name="check" /> : null}
      </Gradation>
    </GradationWrap>
  );
};

export default GradationCard;
