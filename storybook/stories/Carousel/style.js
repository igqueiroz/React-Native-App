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
  marginBottom: -10px;
`;

const CarouselItem = styled.View`
  width: ${screenWidth};
  height: ${screenHeight};
`
const CarouselImages = {
  ...StyleSheet.absoluteFillObject,
  resizeMode: 'contain',
}

const StartButton = {
  gradientAgenda: ['#FCB314', '#ED1C24'],
  style: { 
    padding: 15, 
    alignItems: 'center', 
    borderRadius: 5, 
    marginHorizontal: 30, 
    bottom: 210, 
    marginBottom: -70 
  },
  textStyle: {
    backgroundColor: 'transparent',
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  }
}

const CarouselStyledButtons = {
  
  styleGradient: { 
    padding: 15, 
    alignItems: 'center', 
    borderRadius: 5,
    zIndex: 3,
    borderStyle: 'solid',
    borderWidth: 0,
    marginHorizontal: 30,
    borderRadius: 10,
    marginBottom: -50,
  },
  styleTopFacebook: {
    top: -(screenHeight / 1.5 - 150)
  },
  styleTopAgenda: {
    top: -(screenHeight / 1.5 - 140)
  },
  styleButton: {
    backgroundColor: 'transparent',
    fontSize: 15,
    color: '#fff',
  },
  tinyLogo: {
    top: -(screenHeight / 1.8),
    alignItems: 'center',
    left: screenWidth/7,
  }
}


module.exports = { 
  CarouselContainer,
  CarouselItem,
  CarouselDots,
  CarouselImagesContainer,
  CarouselView,
  CarouselImages,
  CarouselStyledButtons,
  StartButton
}