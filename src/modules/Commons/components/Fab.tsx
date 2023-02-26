import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ActiveColor} from '../../../constants';

/**
 * Props
 */
type Props = {
  onPressFab: () => void;
  iconName: string;
};

/**
 * Fabをラップする用のコンポーネント
 */
export const FabWrap = styled.View`
  position: absolute;
  bottom: 4%;
  right: 5%;
`;

/**
 * 円形のタッチ可能領域
 */
const ToucableCircle = styled.TouchableOpacity`
  background-color: #fff;
  margin-top: 2%;
  margin-bottom: 2%;
  width: 60px;
  height: 60px;
  border-radius: 60px;
  justify-content: center;
  align-items: center;
`;

/**
 * Fab コンポーネント
 * @param props プロパティ
 */
const Fab: React.FC<Props> = props => {
  const {onPressFab, iconName} = props;
  return (
    <ToucableCircle onPress={onPressFab}>
      <Icon name={iconName} style={{color: ActiveColor, fontSize: 24}} />
    </ToucableCircle>
  );
};

export default Fab;
