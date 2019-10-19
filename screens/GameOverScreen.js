import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  Dimensions,
  ScrollView,
} from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';
import colors from '../constants/colors';

const GameOverScreen = props => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText>The Game is Over!</TitleText>
        <View style={styles.imageContainer}>
          <Image
            resizeMode="cover"
            style={styles.image}
            source={require('../assets/success.png')}
          />
          {/* <Image fadeDuration={1000} source={{ uri: 'https://www.theuiaa.org/wp-content/uploads/2017/12/2018_banner.jpg' }} resizeMode="cover" style={styles.image} /> */}
        </View>
        <View style={styles.resultContainer}>
          <BodyText style={styles.resultText}>
            Your phone needed{' '}
            <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
            guess the number{' '}
            <Text style={styles.highlight}>{props.userNumber}</Text>
          </BodyText>
        </View>
        {/* <Text numberOfLines={1} ellipsizeMode="tail">
        This text will never wrap into a new line, instead it will be cut off like this if it is too lon...
      </Text> */}
        {/* <Button title="NEW GAME" onPress={props.onRestart} /> */}
        <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: Dimensions.get('window').height / 60,
  },
  resultText: {
    textAlign: 'center',
    fontSize: Dimensions.get('window').height < 400 ? 16 : 20,
  },
  highlight: {
    color: colors.primaryColor,
    fontFamily: 'open-sans-bold',
  },
  imageContainer: {
    borderRadius: (Dimensions.get('window').width * 0.4) / 2,
    width: Dimensions.get('window').width * 0.4,
    height: Dimensions.get('window').width * 0.4,
    overflow: 'hidden',
    marginVertical: Dimensions.get('window').height / 30,
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default GameOverScreen;
