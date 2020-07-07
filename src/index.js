import React, {useState, useRef, useEffect} from 'react';
import {
  ScrollView,
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
  TextInput,
  Image,
} from 'react-native';

import Carousel, {ParallaxImage, Pagination} from 'react-native-snap-carousel';

const ENTRIES1 = [
  {
    illustration: require('./assets/images/slider1.png'),
  },
  {
    illustration: require('./assets/images/slider2.png'),
  },
  {
    illustration: require('./assets/images/slider3.png'),
  },
  {
    illustration: require('./assets/images/slider1.png'),
    title: 'Faça sua conta',
    subtitle: 'Lorem ipsum dolor sit amet',
  },
];
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const MyCarousel = () => {
  const [entries, setEntries] = useState([]);
  const [activeDot, setactiveDot] = useState(0);
  const carouselRef = useRef(null);

  const pagination = () => {
    return (
      <Pagination
        dotsLength={entries.length}
        activeDotIndex={activeDot}
        containerStyle={{
          backgroundColor: 'rgba(0, 0, 0, 0)',
          bottom: 110,
          zIndex: 1,
          paddingHorizontal: 0,
          paddingVertical: 0,
        }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: 'rgba(255, 255, 255, 0.92)',
        }}
        inactiveDotStyle={
          {
            // Define styles for inactive dots here
          }
        }
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  };

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

  const renderItem = ({item, index}, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={item.illustration}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.2}
          {...parallaxProps}
        />
        {item.title && (
          <>
            <Text style={styles.title} numberOfLines={3}>
              {item.title}
            </Text>
            <TextInput style={styles.input}></TextInput>
          </>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
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
    </View>
  );
};

const informacoes = [
  {
    usuario: 'Igor',
    foto: 'teste.jpg',
    id: 1,
  },
  {
    usuario: 'Zé',
    foto: 'teste.jpg',
    id: 2,
  },
  {
    usuario: 'Leo',
    foto: 'teste.jpg',
    id: 3,
  },
];
{
  /* <Text>Agenda 4Pets - Santarizers</Text>
<FlatList
  data={informacoes}
  renderItem={(element) => <Text>{element.item.usuario}</Text>}
  keyExtractor={(item) => item.id}
/>

<Text>
  {`Largura = ${Dimensions.get('window').width}
e Altura= ${Dimensions.get('window').height}`}
</Text> */
}
const App = () => {
  console.disableYellowBox = true;
  return (
    <>
      <MyCarousel />
    </>
  );
};
const largura = Dimensions.get('screen').width;
const estilos = StyleSheet.create({
  imagem: {
    width: largura,
    height: largura,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    marginBottom: -10,
  },
  item: {
    width: screenWidth,
    height: screenHeight,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    borderRadius: 0,
  },
  input: {
    zIndex: 3,
    borderStyle: 'solid',
    borderWidth: 1,
    marginHorizontal: 30,
    backgroundColor: '#ff990044',
    borderRadius: 10,
    marginBottom: -50,
    top: -(screenHeight / 1.5 - 20),
  },
  title: {
    top: -(screenHeight / 1.5),
    color: 'white',
    paddingHorizontal: 20,
    textAlign: 'center',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'contain',
  },
});

export default App;
