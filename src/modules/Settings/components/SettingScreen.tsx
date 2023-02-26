import React from 'react';
import styled from 'styled-components/native';
import {Main, BlurContent} from '../../Commons';
import {GradationCard} from '../';
import {
  PurpleGradation,
  PinkGradation,
  SunsetGradation,
  RedGradation,
  GreenGradation,
  BlueGradation,
} from '../../../constants';

/**
 * グラデーション表示用の行
 */
const Row = styled.View`
  margin-top: 2%;
  margin-bottom: 2%;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

/**
 * ラベル
 */
const Label = styled.Text`
  color: #333;
  font-size: 24px;
  font-weight: bold;
`;

/**
 * 設定画面
 */
const SettingScreen: React.FC = () => {
  return (
    <Main>
      <BlurContent blurAmount={1} blurType="light">
        <Label>テーマカラー</Label>
        <Row>
          <GradationCard colors={GreenGradation} />
          <GradationCard colors={RedGradation} />
          <GradationCard colors={BlueGradation} />
        </Row>
        <Row>
          <GradationCard colors={PurpleGradation} />
          <GradationCard colors={PinkGradation} />
          <GradationCard colors={SunsetGradation} />
        </Row>
      </BlurContent>
    </Main>
  );
};

export default SettingScreen;
