import styled from 'styled-components/native';
import {BlurView} from '@react-native-community/blur';

/**
 * 半透明要素
 */
const BlurContent = styled(BlurView)`
  width: 90%;
  height: 100%;
  border-radius: 20px;
  margin-top: 1%;
  margin-bottom: 1%;
  padding: 10px;
  align-items: center;
`;

export default BlurContent;
