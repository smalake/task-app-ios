import React from 'react';
import {
  Fab,
  FabWrap,
  CommonButton,
  CommonTextInput,
  BlurContent,
  Main,
} from './modules/Commons';
import {Provider} from 'react-redux';
import store from './Store';
import {SettingScreen} from './modules/Settings';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <SettingScreen />
    </Provider>
  );
};

export default App;
