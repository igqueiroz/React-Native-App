import React, {useState, useRef, useEffect, useContext } from 'react';
import { Dimensions, Text, Image } from 'react-native';
import Carousel, { ParallaxImage, Pagination } from 'react-native-snap-carousel';
import { 
  CarouselItem,
  CarouselContainer,
  CarouselDots,
  CarouselImagesContainer,
  CarouselView,
  CarouselImages,
  StartButton
} from './style';
import { LinearGradient } from 'expo-linear-gradient';
import Button from '../../components/Button';
import { View } from 'react-native-animatable';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const MyCarousel = (props) => {
  const { carouselItems, navigation } = props;
  const [ entries, setEntries ] = useState([]);
  const [ activeDot, setactiveDot ] = useState(0);
  const [ firstTime, setfirstTime ] = useState(true);
  const carouselRef = useRef( null );

  const pagination = () => {
    return (
      <Pagination
        dotsLength={ entries.length }
        activeDotIndex={ activeDot }
        containerStyle={ CarouselContainer }
        dotStyle={ CarouselDots }
        inactiveDotStyle={{ }}
        inactiveDotOpacity={ 0.4 }
        inactiveDotScale={ 0.6 }
      />
    );
  };

  useEffect(() => {
    setEntries(carouselItems);
  }, []);

  const renderItem = ({ item }, parallaxProps) => {
    return (
      <CarouselItem>
        <ParallaxImage
          source={item.illustration}
          containerStyle={ CarouselImagesContainer }
          style={ CarouselImages }
          parallaxFactor={0.2}
          {...parallaxProps}
        />
        { item.title && (
            <LinearGradient
              colors={ StartButton.gradientAgenda }
              style={ StartButton.style }
              >
                <Button goScreen="Login" navigation={ navigation } >
                  <View style={StartButton.items}>
                    <Text style={StartButton.textStyle}>Começar</Text>
                    <Image source={ require("../../../src/assets/images/white-arrow-right.png") } style={ StartButton.imgSendStyle } />
                  </View>
                </Button>
            </LinearGradient>
        ) }
      </CarouselItem>
    );
  };

  return (
    <CarouselView>
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenHeight}
        itemWidth={screenWidth}
        data={entries}
        renderItem={renderItem}
        onSnapToItem={(index) => setactiveDot(index)}
        hasParallaxImages={true}
        layout={'stack'}
        layoutCardOffset={1}
      />
      {pagination()}
    </CarouselView>
  );
};

const Welcome = (props) => {
  return (
    <>
      <MyCarousel carouselItems={props.carouselItems} navigation={props.navigation}/>
    </>
  );
};

Welcome.navigationOptions = () => {
  const opt = {
    headerShown: false,
  }

  return opt;
}

export default Welcome;
