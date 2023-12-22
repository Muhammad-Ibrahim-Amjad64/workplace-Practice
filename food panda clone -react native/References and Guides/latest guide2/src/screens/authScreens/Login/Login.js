import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  DiscriptionText,
  LargeText,
  MediumText,
  NormalText,
  XLargeText,
  XXLargeText,
} from '../../../Common/Coustomtext/Index';
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';
import CoustomTextinput from '../../../Common/Textinput/Textinput';
import Fields from '../../../Common/Fields/Fields';
import {useForm} from 'react-hook-form';
import {Button} from 'react-native-paper';
import CoustomButton from '../../../Common/CoustomButton.js/CoustomButton';
import CoustomHeader from '../../../Common/Header/Header';
import {images} from '../../../Utlies/constant/Themse';
import {AvoidSoftInput} from 'react-native-avoid-softinput';
import {useLoginUserMutation} from '../../../store/Auth';
import {setUser} from '../../../store/AuthSlice';
import {useDispatch, useSelector} from 'react-redux';
import MsgModal from '../../../Common/MassegeModal/MsgModal';
import useToast from '../../../Hooks/useToast';
const Login = ({fontFamily, navigation}) => {
  // useEffect(() => {
  //   navigation.navigate('homeloading');
  // }, []);
  const {updateButton, showToast, count} = useToast();
  const [selected, Setselected] = useState(0);

  const [loginuser, {isError, isSuccess, status, data, isLoading}] =
    useLoginUserMutation();
  const userinfo = useSelector(state => state.userSlice);
  const {
    formState: {errors},
    control,
    handleSubmit,
  } = useForm();
  const dispatch = useDispatch();
  const loginData = async Payload => {
    const formdata = {
      ...Payload,
    };
    console.log('=====>>>>>', formdata);
    const response = await loginuser(formdata);
    if (response?.data) {
      dispatch(setUser(response?.data));
      console.log('response', response.data);
      navigation.navigate('homeloading');
    } else {
      console.log(response.error);
      showToast('error', 'Error', response.error.data.message, 5000);
    }
  };
  // console.log('==>>>>userinfo', userinfo);
  useEffect(() => {
    AvoidSoftInput.setShouldMimicIOSBehavior(true);
    AvoidSoftInput.setEnabled(true);
    // AvoidSoftInput.setAdjustPan(true)
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor="transparent" />

      <>
        <View style={styles.headercontainer}>
          <CoustomHeader
            leftTouch={() => {
              navigation.navigate('introTwo');
            }}
            lefticon={images.Backbtn}
            Heading={'LOGIN'}
            color={'red'}
            textStyle={{
              fontSize: responsiveFontSize(4),
              marginTop: responsiveHeight(4),
            }}
          />
          <DiscriptionText
            children={'Please add email detail'}
            color={'#fff'}
            center
            textStyle={{fontSize: responsiveFontSize(1.2)}}
          />
        </View>
        {/* ===================  Login  ============================= */}
        {isLoading ? <MsgModal loader={true} /> : null}
        <View style={styles.fieldcontainer}>
          <>
            <Fields
              control={control}
              name={'email'}
              placeholder={'Email'}
              inputIcon={images.InputEmailicon}
              inputWidht={responsiveWidth(80)}
              alignSelf
              rules={{
                required: {
                  value: true,
                  message: 'Please enter email...',
                },
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
            <View style={{marginTop: responsiveHeight(3)}}>
              <Fields
                control={control}
                name={'password'}
                placeholder={'password'}
                inputIcon={images.InputPassIcon}
                secureTextEntry={true}
                inputWidht={responsiveWidth(80)}
                passwordEye={true}
                alignSelf
                rules={{
                  required: {
                    value: true,
                    message: 'Please enter Password...',
                  },
                }}
                error={errors}
                errorstyle={{left: responsiveWidth(10)}}
                errorcolor={'red'}
              />
            </View>
          </>

          <CoustomButton
            bgcolor={'red'}
            text={'Sign in'}
            textcolor={'#fff'}
            width={responsiveWidth(80)}
            style={{marginTop: responsiveHeight(2)}}
            self
            onPress={handleSubmit(loginData)}
          />
          <>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ForgetPassword');
              }}>
              <Text
                style={{
                  alignSelf: 'flex-end',
                  right: responsiveWidth(6),
                  color: '#000',
                  fontWeight: '900',
                }}>
                ForgetPassword?
              </Text>
            </TouchableOpacity>
            <MediumText
              children={'or'}
              color={'#000'}
              textStyle={{marginTop: responsiveHeight(1)}}
              center
            />
            <CoustomButton
              bgcolor={'#000'}
              text={'SignUp with Apple'}
              textcolor={'#fff'}
              width={responsiveWidth(80)}
              style={{marginTop: responsiveHeight(3)}}
              self
              withicon={images.AppleIcon}
              iconcolor={'#fff'}
            />
            <CoustomButton
              bgcolor={'#FFF'}
              text={'Continue With Google'}
              textcolor={'#000'}
              width={responsiveWidth(80)}
              style={{marginTop: responsiveHeight(2)}}
              self
              withicon={images.googleIcon}
              borderwidth
            />
            <View style={styles.tagline}>
              <DiscriptionText
                children={'Do you have an account ?'}
                color={'grey'}
              />
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('introTwo');
                }}>
                <NormalText bold children={'Sign In'} color={'#000'} />
              </TouchableOpacity>
            </View>
          </>
        </View>
      </>
    </View>
  );
};

export default Login;

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
  fieldcontainer: {
    height: responsiveHeight(72),
    paddingTop: responsiveHeight(10),
  },
  tagline: {
    flexDirection: 'row',
    position: 'absolute',

    height: responsiveHeight(5),
    bottom: 0,
    alignSelf: 'center',
    alignItems: 'center',
  },
});
