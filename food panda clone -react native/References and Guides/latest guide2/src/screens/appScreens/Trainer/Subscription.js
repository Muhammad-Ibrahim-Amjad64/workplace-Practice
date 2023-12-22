import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import background from '../../../assets/background.jpg';
import {XXLargeText} from '../../../Common/Coustomtext/Index';
const Subscription = () => {
  return (
    <ImageBackground
      source={background}
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View>
        <XXLargeText children={'Soon...!'} color={'#ffff'} />
      </View>
    </ImageBackground>
  );
};

export default Subscription;

const styles = StyleSheet.create({});
