// storybook/index.js
import { getStorybookUI, configure } from '@storybook/react-native';
import './rn-addons';

// import stories
configure(() => {
  require('./stories');
}, module);

const darkTheme = {
  base: 'dark',
  backgroundColor: '#222',
  headerTextColor: '#f0f0f0',
  labelColor: '#f0f0f0',
  borderColor: '#f0f0f0',
  previewBorderColor: 'gray',
  buttonTextColor: '#f0f0f0',
  buttonActiveTextColor: '#f0f0f0',
};

const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,
  theme: darkTheme
});

export default StorybookUIRoot;