import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from './Button';
import CenterView from './CenterView';
import Welcome from './Welcome';
import Carousel from './Carousel';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module) 
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with text', () => (
    <Button onPress={action('clicked-text')}>
      <Text>Hello Button</Text>
    </Button>
  ))
  .add('with some emoji', () => (
    <Button onPress={action('clicked-emoji')}>
      <Text>😀 😎 👍 💯</Text>
    </Button>
  ));

const carouselItems = [
  {
    illustration: require('../../src/assets/images/slider1.png'),
  },
  {
    illustration: require('../../src/assets/images/slider2.png'),
  },
  {
    illustration: require('../../src/assets/images/slider3.png'),
  },
  {
    illustration: require('../../src/assets/images/slider1.png'),
    title: 'Faça sua conta',
    subtitle: 'Lorem ipsum dolor sit amet',
  },
]
storiesOf('Carousel', module).add('Welcome Window', () =>  <Carousel carouselItems={carouselItems}/>);