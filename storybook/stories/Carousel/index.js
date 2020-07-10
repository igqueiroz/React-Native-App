import React, {useState, useRef, useEffect } from 'react';
import { Dimensions, StyleSheet, TextInput, Text, View } from 'react-native';
import Carousel, { ParallaxImage, Pagination } from 'react-native-snap-carousel';
import { 
  CarouselItem,
  CarouselContainer,
  CarouselDots,
  CarouselImagesContainer,
  CarouselView,
  CarouselImages
} from './style';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const MyCarousel = (props) => {
  const { carouselItems } = props;
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
          <>
            <Text numberOfLines={3}>
              {item.title}
            </Text>
            {/* <TextInput style={styles.input}></TextInput> */}
          </>
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
        layout={'tinder'}
        layoutCardOffset={`1`}
      />
      {pagination()}
    </CarouselView>
  );
};

const CarouselWelcome = (props) => {
  return (
    <>
      <MyCarousel carouselItems={props.carouselItems}/>
    </>
  );
};

export default CarouselWelcome;
