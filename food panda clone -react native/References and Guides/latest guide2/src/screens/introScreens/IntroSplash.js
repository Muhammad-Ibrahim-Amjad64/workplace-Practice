import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  StatusBar,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import intro_splash_bg from '../../assets/intro_splash_bg.png';
import overlay from '../../assets/intro_splash_overlay.png';
import logo from '../../assets/logo.png';

const IntroSplash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => navigation.navigate('introOne'), 5000);
  }, []);

  return (
    <View className="flex-1">
      <StatusBar
        translucent={true}
        barStyle={'light-content'}
        backgroundColor={'transparent'}
      />
      <ImageBackground
        source={intro_splash_bg}
        resizeMode="cover"
        className="flex-1  flex-col justify-center ">
        <Image
          source={overlay}
          resizeMode="cover"
          className="flex-1 flex-col w-[100%] justify-center opacity-[0.2] "
        />
        <Image
          source={logo}
          className="absolute left-15  ml-[20px] self-center "
          style={{width: 250, height: 270}}
        />
        {/* </ImageBackground> */}
      </ImageBackground>
    </View>
  );
};

export default IntroSplash;

const styles = StyleSheet.create({});
