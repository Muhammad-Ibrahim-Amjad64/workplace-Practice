import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  SafeAreaView,
  Pressable,
} from 'react-native';
import React from 'react';
import introThreeImage from '../../assets/intro-three-image.png';
import introThreeDots from '../../assets/intro-three-dots.png';
import arrow from '../../assets/arrow.png';
import IntroScreenComponent from '../../components/IntroScreenComponent';

const win = Dimensions.get('window');

export default function IntroScreenThree({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      {/* <IntroScreenComponent
        backgroundImage={introThreeImage}
        heading="Stay Strong and Healthy"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua."
        dotSource={introThreeDots}
        navigation={navigation}
        routedTo="welcomeOne"
      /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: win.width,
    height: win.height,
  },
  modalContainer: {
    backgroundColor: '#000',
    position: 'absolute',
    width: win.width,
    top: 420,
    borderTopStartRadius: 40,
    zIndex: 999999999,
    height: 300,
  },
  innerModalContainer: {
    margin: 25,
  },
  welcomeText: {
    color: '#fff',
    fontWeight: 700,
    fontSize: 30,
  },
  descriptionText: {
    color: '#6f6f6f',
    marginVertical: 20,
  },
  bottomContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonBackground: {
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'red',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
