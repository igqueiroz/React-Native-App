import { Dimensions, Platform, StyleSheet } from 'react-native';
import styled from 'styled-components';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const CarouselContainer = {
  backgroundColor: 'rgba(0, 0, 0, 0)',
  bottom: 110,
  zIndex: 1,
  paddingHorizontal: 0,
  paddingVertical: 0,
}

const CarouselDots = {
  width: 10,
  height: 10,
  borderRadius: 5,
  marginHorizontal: 8,
  backgroundColor: 'rgba(255, 255, 255, 0.92)',
}

const CarouselImagesContainer = {
  flex: 1,
  marginBottom: Platform.select({ios: 0, android: 1}), 
  borderRadius: 0,
}

const CarouselView = styled.View`
  flex: 1;
  backgroundColor: black;
  marginBottom: -10;
`;

const CarouselItem = styled.View`
  width: ${screenWidth};
  height: ${screenHeight};
`
const CarouselImages = {
  ...StyleSheet.absoluteFillObject,
  resizeMode: 'contain',
}

const Start = styled.View`
  
`



module.exports = { 
  CarouselContainer,
  CarouselItem,
  CarouselDots,
  CarouselImagesContainer,
  CarouselView,
  CarouselImages,
  Start
}