import {StyleSheet, Text, View, StatusBar, SafeAreaView} from 'react-native';
import React from 'react';
import Fields from '../../../Common/Fields/Fields';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {images} from '../../../Utlies/constant/Themse';
import {useForm} from 'react-hook-form';
import CoustomButton from '../../../Common/CoustomButton.js/CoustomButton';
import {DiscriptionText} from '../../../Common/Coustomtext/Index';
import CoustomHeader from '../../../Common/Header/Header';
import {useResetpasswordMutation} from '../../../store/Auth';
import Toast from 'react-native-toast-message';
import MsgModal from '../../../Common/MassegeModal/MsgModal';

const ResetPassword = ({navigation}) => {
  const {
    formState: {errors},
    control,
    handleSubmit,
  } = useForm();
  const [resetpass, {isLoading}] = useResetpasswordMutation();
  const onsumbit = async data => {
    const formdata = {
      ...data,
    };
    const response = await resetpass(formdata);
    console.log(response);
    if (response.data) {
      Toast.show({
        type: 'success',
        text1: 'Error',
        text2: response.data.message,
        visibilityTime: 3000,
        autoHide: true,
      });
      setTimeout(() => {
        navigation.navigate('Login');
      }, 2000);
    } else {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: response.error.data.message,
        visibilityTime: 5000,
        autoHide: true,
        bottomOffset: responsiveHeight(20),
      });
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <View style={styles.headercontainer}>
        <CoustomHeader
          lefticon={images.Backbtn}
          leftTouch={() => {
            navigation.replace('Login');
          }}
          Heading={'Reset Password'}
          color={'red'}
          textStyle={{
            fontSize: responsiveFontSize(3.7),
            marginTop: responsiveHeight(5),
          }}
        />
        <DiscriptionText
          children={'Please enter your new password and confirm the password'}
          color={'#fff'}
          center
          textStyle={{fontSize: responsiveFontSize(1.2)}}
        />
      </View>
      {isLoading ? <MsgModal loader={true} /> : null}
      <View
        style={{
          marginTop: responsiveHeight(8),
          marginBottom: responsiveHeight(5),
        }}>
        <Fields
          control={control}
          name={'password'}
          placeholder={'New Password'}
          inputIcon={images.InputPassIcon}
          secureTextEntry={true}
          inputWidht={responsiveWidth(80)}
          alignSelf
          rules={{
            required: {value: true, message: 'Please enter Password...'},
          }}
          error={errors}
          errorstyle={{left: responsiveWidth(10)}}
          errorcolor={'red'}
        />
        <Fields
          control={control}
          name={'confirmPassword'}
          placeholder={'Confirm New Password'}
          inputIcon={images.InputPassIcon}
          secureTextEntry={true}
          inputWidht={responsiveWidth(80)}
          style={{marginTop: responsiveHeight(3)}}
          alignSelf
          rules={{
            required: {value: true, message: 'Please enter Password...'},
          }}
          error={errors}
          errorstyle={{left: responsiveWidth(10)}}
          errorcolor={'red'}
        />
        <CoustomButton
          bgcolor={'red'}
          text={'Recover Password'}
          textcolor={'#fff'}
          width={responsiveWidth(80)}
          style={{marginTop: responsiveHeight(10)}}
          self
          onPress={handleSubmit(onsumbit)}
        />
      </View>
    </SafeAreaView>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: responsiveWidth(100),
    backgroundColor: '#fff',
  },
  headercontainer: {
    backgroundColor: '#000',
    height: responsiveHeight(28),
    borderBottomRightRadius: responsiveWidth(20),
    paddingTop: responsiveHeight(7),
  },
});
