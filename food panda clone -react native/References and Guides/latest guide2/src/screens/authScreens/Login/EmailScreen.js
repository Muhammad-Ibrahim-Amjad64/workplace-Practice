import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import CoustomButton from '../../../Common/CoustomButton.js/CoustomButton';
import CoustomHeader from '../../../Common/Header/Header';
import {images} from '../../../Utlies/constant/Themse';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {DiscriptionText, LargeText} from '../../../Common/Coustomtext/Index';

const EmailScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('OTP');
    }, 4000);
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <View style={{flex: 0.15}}>
        <View
          style={{
            marginTop: responsiveHeight(8),
          }}>
          {/* <CoustomHeader
            righticon={images.Cancillogo}
            rightpress={rightpress}
          /> */}
        </View>
      </View>
      <View
        style={{
          flex: 0.85,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View>
          <Image
            resizeMode="contain"
            source={images.EmailLogo}
            style={{alignSelf: 'center', bottom: responsiveHeight(5)}}
          />
          <LargeText children={'Check Your Email'} bold color={'#fff'} center />
          <DiscriptionText
            children={
              'We have sent you a reset password link on your registered email address.'
            }
            center
            color={'#fff'}
            textStyle={{fontSize: responsiveFontSize(1.2)}}
          />
        </View>
        <View>
          <CoustomButton
            text={'Go to Email'}
            textcolor={'#fff'}
            bgcolor={'red'}
            width={responsiveWidth(70)}
            style={{marginTop: responsiveHeight(3)}}
          />
        </View>
      </View>
    </View>
  );
};

export default EmailScreen;

const styles = StyleSheet.create({
  container: {},
});
