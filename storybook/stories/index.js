import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Welcome from './Welcome';
import Carousel from '../../src/pages/Welcome';
import Login from '../../src/pages/Login';
import Register from '../../src/pages/Signup';
import { ConfigProvider } from '../../src/store/ConfigProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';
import LoadingOverlay from '../../src/components/LoadingOverlay';
import Home from '../../src/pages/Home';

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
storiesOf('Carousel', module).add('for new users', () => {
  const envMode = Constants.manifest.extra.APP_ENV;
  AsyncStorage.setItem(`@Agenda4Pets${envMode}:userFirstTime`, 'false');
  return (
    <ConfigProvider>
      <Carousel carouselItems={carouselItems} />
    </ConfigProvider>
  )
});

storiesOf('Login', module).add('page', () => <Login />);
storiesOf('Register', module).add('new clients', () => <Register />);

storiesOf('LoadingOverlay', module).add('screen', () => <LoadingOverlay />);

storiesOf('Home', module).add('Page', () => <Home />);