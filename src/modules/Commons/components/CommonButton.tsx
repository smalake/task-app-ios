import React from 'react';
import styled from 'styled-components/native';
import {ActiveColor, InactiveColor} from '../../../constants';

/**
 * Wrapのプロパティ
 */
type ButtonWrapProps = {
  primary: boolean;
};

/**
 * ボタンラップ コンポーネント
 */
const Wrap = styled.TouchableOpacity<ButtonWrapProps>`
  width: 50%;
  padding: 12px;
  border-radius: 10px;
  background-color: ${({primary}) => (primary ? ActiveColor : InactiveColor)};
`;

/**
 * ボタンラベル コンポーネント
 */
const Label = styled.Text<ButtonWrapProps>`
  font-size: 16px;
  text-align: center;
  color: ${({primary}) => (primary ? '#FFF' : '#FFF')};
`;

/**
 * Props
 */
type Props = {
  onPress: () => void;
  text: string;
  primary: boolean;
};

/**
 * 汎用ボタン
 * @param props プロパティ
 */
const CommonButton: React.FC<Props> = (props: Props) => {
  const {onPress, text, primary} = props;
  return (
    <Wrap onPress={onPress} primary={primary}>
      <Label primary={primary}>{text}</Label>
    </Wrap>
  );
};
export default CommonButton;
