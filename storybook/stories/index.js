import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Welcome from './Welcome';
import Carousel from './Carousel';
import Login from './Login';

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
storiesOf('Carousel', module).add('Welcome Window', () =>  <Carousel carouselItems={carouselItems}/>);

storiesOf('Login', module).add('Login Page', () => <Login />);