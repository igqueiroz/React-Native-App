import React, {useState, useRef, useEffect, useContext, memo } from 'react';
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
import { ConfigContext } from '../../store/ConfigProvider';
const whiteArrow = require("../../../src/assets/images/white-arrow-right.png");
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');


const MyCarousel = (props) => {
  const { carouselItems, navigation } = props;
  const { updateUserFirstTime } = useContext(ConfigContext)
  const [ entries, setEntries ] = useState([]);
  const [ activeDot, setactiveDot ] = useState(0);
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
                <Button goScreen="Routes" navigation={ navigation } execute={ updateUserFirstTime }>
                  <View style={StartButton.items}>
                    <Text style={StartButton.textStyle}>Começar</Text>
                    <Image source={ whiteArrow } style={ StartButton.imgSendStyle } />
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
        sliderWidth={parseFloat(screenWidth)}
        sliderHeight={parseFloat(screenHeight)}
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
  return <MyCarousel carouselItems={props.carouselItems} navigation={props.navigation}/>
};

export default memo(Welcome);
