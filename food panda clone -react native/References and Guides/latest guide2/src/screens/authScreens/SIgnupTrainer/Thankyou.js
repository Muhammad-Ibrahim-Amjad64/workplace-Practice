import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  StatusBar,
} from 'react-native';
import React from 'react';
import {images} from '../../../Utlies/constant/Themse';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import {DiscriptionText, XXLargeText} from '../../../Common/Coustomtext/Index';
import CoustomHeader from '../../../Common/Header/Header';

const Thankyou = ({navigation}) => {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 1000);
  }, []);
  return (
    <ImageBackground
      style={{flex: 1, shadowOpacity: 0.8}}
      source={images.Background}>
      <StatusBar backgroundColor={'transparent'} translucent={true} />
      <View style={{flex: 0.13, justifyContent: 'center'}}>
        {/* <CoustomHeader
          leftTouch={() => {
            navigation.navigate('Login');
          }}
          lefticon={images.Backbtn}
        /> */}
      </View>
      <View style={{flex: 0.8, alignItems: 'center', justifyContent: 'center'}}>
        <Image source={images.ThumbsUp} style={styles.ThumbsUp} />
        <XXLargeText
          children={'Thank you'}
          color={'#fff'}
          bold
          textStyle={{marginBottom: responsiveHeight(5)}}
        />
        {/* <DiscriptionText
          children={'You will get payment receipt on your\n email address'}
          center
          color={'#fff'}
        /> */}
      </View>
    </ImageBackground>
  );
};

export default Thankyou;

const styles = StyleSheet.create({
  ThumbsUp: {
    height: responsiveHeight(20),
    width: responsiveHeight(20),
    tintColor: 'red',
    bottom: responsiveHeight(5),
    alignSelf: 'center',
    left: responsiveHeight(2),
  },
});
