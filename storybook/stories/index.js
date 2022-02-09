import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Welcome from './Welcome';
import Carousel from '../../src/pages/Welcome';
import Login from '../../src/pages/Login';
import { ConfigProvider } from '../../src/store/ConfigProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';

//\node_modules\@storybook\react-native\dist\preview\components\StoryListView\index.js
// var SearchBar=_native["default"].TextInput("border-top-left-radius:5px;border-top-right-radius:5px;border-bottom-left-radius:5px;border-bottom-right-radius:5px;font-size:16px;margin-horizontal:5px;margin-vertical:5px;padding-horizontal:5px;padding-vertical:5px;margin-top: 90px");

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

const carouselItems = [
  {
    illustration: require('../../src/assets/images/slider1.png'),
  },
  {
    illustration: require('../../src/assets/images/slider2.png'),
  },
  {
    illustration: require('../../src/assets/images/slider3.png'),
    title: '.'
  }
]
storiesOf('Carousel', module).add('New Client', () => {
  const envMode = Constants.manifest.extra.APP_ENV;
  AsyncStorage.setItem(`@Agenda4Pets${envMode}:userFirstTime`, 'false');
  return (
    <ConfigProvider>
      <Carousel carouselItems={carouselItems} />
    </ConfigProvider>
  )
});

storiesOf('Login', module).add('Login Page', () => <Login />);