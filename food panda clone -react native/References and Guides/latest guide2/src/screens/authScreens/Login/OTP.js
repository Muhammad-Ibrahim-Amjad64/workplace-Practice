import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import {useForm} from 'react-hook-form';
import {images} from '../../../Utlies/constant/Themse';
import Fields from '../../../Common/Fields/Fields';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import COTP from '../../../Common/CoustomOTP/CoustomOTP';
import CoustomHeader from '../../../Common/Header/Header';
import {DiscriptionText, NormalText} from '../../../Common/Coustomtext/Index';
import CoustomButton from '../../../Common/CoustomButton.js/CoustomButton';
import {useOtpMutation} from '../../../store/Auth';
// import Toast from 'react-native-toast-message';
import MsgModal from '../../../Common/MassegeModal/MsgModal';
import useToast from '../../../Hooks/useToast';

const OTP = ({onpressback, onpressresnt, onPress, navigation}) => {
  const toast = useToast();
  const {
    formState: {errors, defaultValues},
    control,
    handleSubmit,
  } = useForm();
  const [otopdata, {isLoading}] = useOtpMutation();
  const Sumbit = async data => {
    console.log(data.otp);
    const number = data.otp;
    const result = number.join('');
    console.log(result);

    await otopdata(result)
      .unwrap()
      .then(i => {
        // console.log('==>>>>>>>>>>>', i);
        navigation.replace('ResetPassword');
      })
      .catch(error => {
        toast.showToast('error', 'Error', error.data.message, 5000);
      });
  };

  return (
    <ImageBackground style={{flex: 1}} source={images.Background}>
      <StatusBar backgroundColor={'transparent'} translucent={true} />

      <View style={{flex: 0.2, justifyContent: 'center'}}>
        {/* <CoustomHeader lefticon={images.Backbtn} leftTouch={onpressback} /> */}
      </View>
      {isLoading ? <MsgModal loader={true} /> : null}
      <View style={{flex: 0.2, alignItems: 'center'}}>
        <Text style={styles.firstHtxt}>
          {'Enter 4 digit code sent\n  to you'}
          <Text style={styles.txtnumber}>{'\r  at 1234567890'}</Text>
        </Text>
      </View>
      <View style={{flex: 0.1, justifyContent: 'center'}}>
        <COTP control={control} />
      </View>

      <View style={{flex: 0.5}}>
        <CoustomButton
          bgcolor={'red'}
          text={'Verify'}
          textcolor={'#fff'}
          self
          height={responsiveHeight(5)}
          width={responsiveWidth(60)}
          style={{marginTop: responsiveHeight(10)}}
          onPress={handleSubmit(Sumbit)}
        />

        {/* <NormalText
          children={'Didn’t recieve a verification code?'}
          color={'#fff'}
          center
          textStyle={{marginTop: responsiveHeight(4)}}
        /> */}
        {/* <TouchableOpacity onPress={onPress}>
          <DiscriptionText
            children={'Didn’t recieve a verification code?'}
            color={'red'}
            center
            textStyle={{marginTop: responsiveHeight(2)}}
          />
        </TouchableOpacity> */}
      </View>
    </ImageBackground>
  );
};

export default OTP;

const styles = StyleSheet.create({
  txtnumber: {
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
  },
  firstHtxt: {
    color: 'red',
    fontSize: responsiveFontSize(4),
    fontWeight: '800',
  },
});
