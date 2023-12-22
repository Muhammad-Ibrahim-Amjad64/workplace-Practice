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
import {useForgetpasswordMutation} from '../../../store/Auth';
import Toast from 'react-native-toast-message';
import MsgModal from '../../../Common/MassegeModal/MsgModal';
import useToast from './../../../Hooks/useToast';

const ForgetPassword = ({navigation}) => {
  const {updateButton, showToast, count} = useToast();
  const {
    formState: {errors},
    control,
    handleSubmit,
  } = useForm();
  const [forgetpass, {isSuccess, isLoading, data, isError}] =
    useForgetpasswordMutation();

  const onsubmit = async data => {
    console.log(data);
    updateButton(10);
    const formdata = {
      ...data,
    };
    try {
      const response = await forgetpass(formdata);
      // console.log('respones', response);
      if (response.data) {
        // console.log('response', response);
        return navigation.replace('EmailScreen');
      } else {
        showToast('error', 'Error', response.error.data.message, 5000);
      }
    } catch (error) {
      showToast('error', 'Error', 'Network req failed', 5000);
    }
  };

  console.log('count', count);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={true} backgroundColor="transparent" />
      {isLoading ? <MsgModal loader={true} /> : null}
      <View style={styles.headercontainer}>
        <CoustomHeader
          lefticon={images.Backbtn}
          Heading={'Forget Password'}
          leftTouch={() => {
            navigation.pop();
          }}
          color={'red'}
          textStyle={{
            fontSize: responsiveFontSize(3.7),
            marginTop: responsiveHeight(5),
          }}
        />
        <DiscriptionText
          children={'Please enter your registered email '}
          color={'#fff'}
          center
          textStyle={{fontSize: responsiveFontSize(1.2)}}
        />
      </View>
      <View
        style={{
          marginTop: responsiveHeight(10),
          marginBottom: responsiveHeight(5),
        }}>
        <Fields
          control={control}
          name={'email'}
          placeholder={'Email/Phone Number'}
          inputIcon={images.InputEmailicon}
          inputWidht={responsiveWidth(80)}
          alignSelf
          rules={{
            required: {value: true, message: 'Please enter email...'},
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'Email is not Valid',
            },
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
          style={{marginTop: responsiveHeight(7)}}
          self
          onPress={handleSubmit(onsubmit)}
        />
      </View>
    </SafeAreaView>
  );
};

export default ForgetPassword;

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
