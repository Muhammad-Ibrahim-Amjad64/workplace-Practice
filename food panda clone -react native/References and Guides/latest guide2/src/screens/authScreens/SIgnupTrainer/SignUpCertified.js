import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';
import {launchImageLibrary} from 'react-native-image-picker';
import {AvoidSoftInput} from 'react-native-avoid-softinput';

import Address from './Address';
import CoustomButton from '../../../Common/CoustomButton.js/CoustomButton';
import {DiscriptionText, NormalText} from '../../../Common/Coustomtext/Index';
import Fields from '../../../Common/Fields/Fields';
import CoustomHeader from '../../../Common/Header/Header';
import MsgModal from '../../../Common/MassegeModal/MsgModal';
import {useSignupTrainerMutation} from '../../../store/Auth';
import {images} from '../../../Utlies/constant/Themse';
import useToast from '../../../Hooks/useToast';

const SignUpCertified = ({navigation}) => {
  const {showToast} = useToast();
  const [profileImages, setProfileImage] = useState(null);
  const [certificateImages, setCertificateImages] = useState();
  const [screens, SetScreens] = useState(0);

  const [Trainersignup, {isLoading, isSuccess, isError}] =
    useSignupTrainerMutation();

  const {
    formState: {errors, defaultValues},
    control,
    handleSubmit,
  } = useForm();

  const openProfilePicker = async () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    const response = await launchImageLibrary(options);
    if (!response.didCancel && !response.error) {
      setProfileImage(response.assets[0]);
      console.log(response.assets[0]);
    }
  };

  const openCertificatePicker = async () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    await launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setCertificateImages(response.assets[0]);
      }
    });
  };

  const onsumbit = async data => {
    if (!profileImages) {
      return showToast(
        'error',
        'Error',
        'Please Upload Profile Picture👋',
        4000,
      );
    }

    if (!certificateImages) {
      return showToast(
        'error',
        'Error',
        'Please Upload Certificate Image',
        4000,
      );
    }

    if (screens == 1) {
      const formData = new FormData();

      formData.append('role', 'Trainer');
      formData.append('firstName', data.firstName);
      formData.append('lastName', data.lastName);
      formData.append('email', data.email);
      formData.append('password', data.password);
      formData.append('confirmPassword', data.confirmPassword);
      formData.append('gender', data.gender);
      formData.append('dateOfBirth', data.dateOfBirth);
      formData.append('address', data.address);
      formData.append('city', data.city);
      formData.append('state', data.state);
      formData.append('zipcode', data.zipcode);

      const profileImage = {
        name: profileImages.fileName,
        type: profileImages.type,
        uri: profileImages.uri,
      };
      formData.append('profile', profileImage);

      const certificateImage = {
        name: certificateImages.fileName,
        type: certificateImages.type,
        uri: certificateImages.uri,
      };
      let form = {
        ...data,
        role: 'Trainer',
        formData: formData.append('certificate', certificateImage),
        profileURL: formData.append('profile', profileImage),
      };
      formData.append('certificate', certificateImage);
      // console.log(form);

      try {
        const response = await Trainersignup(form);
        console.log(response);
        if (response.data) {
          // showToast('success', 'THANKS FOR SIGNUP', '', 1000);
          return navigation.replace('Thankyou');
        } else {
          console.log(response.data);
          showToast(
            'error',
            'Error',
            response.error.data.error.message || response.error.data.message,
            10000,
          );
        }
      } catch (error) {
        showToast('error', 'Error', error, 4000);
        console.log('error', error.message);
      }
    } else {
      SetScreens(screens + 1);
    }
  };

  const handleback = () => {
    SetScreens(screens - 1);
    if (screens === 0) {
      navigation.navigate('introTwo');
    }
  };

  useEffect(() => {
    if (screens == 2) {
      AvoidSoftInput.setShouldMimicIOSBehavior(false);
      AvoidSoftInput.setEnabled(false);
    } else {
      AvoidSoftInput.setShouldMimicIOSBehavior(true);
      AvoidSoftInput.setEnabled(true);
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.cheatheaderBG}>
        <View style={styles.Headercontent}>
          {/* ==============header======================= */}
          <View style={{marginTop: responsiveHeight(7)}}>
            <CoustomHeader
              lefticon={images.Backbtn}
              leftTouch={handleback}
              Heading={'Sign Up'}
              color={'red'}
              textStyle={{fontSize: responsiveScreenFontSize(4)}}
            />
            <DiscriptionText
              children={'Please add Signup details'}
              textStyle={{fontSize: responsiveScreenFontSize(1.2)}}
              color={'#fff'}
              center
            />
          </View>
          {/* =================== pages heading======================*/}

          {isLoading ? <MsgModal loader={true} /> : null}
          <View style={styles.pagesheadingcontain}>
            <View
              style={[
                styles.pagesline,
                {borderColor: screens == 0 ? '#fff' : '#808080'},
              ]}>
              <NormalText
                children={'Personal'}
                color={screens == 0 ? '#fff' : '#808080'}
                bold
              />
            </View>
            <View
              style={[
                styles.pagesline,
                {borderColor: screens == 1 ? '#fff' : '#808080'},
              ]}>
              <NormalText
                children={'Address'}
                color={screens == 1 ? '#fff' : '#808080'}
                bold
                center
              />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.CheatContentBG}>
        <View style={styles.contentcontainer}>
          {screens > 0 ? null : (
            <TouchableOpacity onPress={openProfilePicker}>
              {!!profileImages?.uri ? (
                <Image
                  resizeMode="contain"
                  source={{uri: profileImages.uri}}
                  style={[
                    styles.profileimage,
                    {
                      height: responsiveHeight(10),
                      width: responsiveHeight(10),
                      borderRadius: responsiveHeight(5),
                      marginBottom: responsiveHeight(2),
                    },
                  ]}
                />
              ) : (
                <Image
                  resizeMode="contain"
                  source={images.Profileimage}
                  style={styles.profileimage}
                />
              )}
            </TouchableOpacity>
          )}
          {/* ============Textinputs=====Firstscreen==================== */}

          <View>
            {screens === 0 && (
              <>
                <Fields
                  control={control}
                  name={'firstName'}
                  placeholder={'First Name'}
                  inputWidht={responsiveWidth(80)}
                  errorcolor={'red'}
                  alignSelf
                  rules={{
                    required: {
                      value: true,
                      message: 'Please enter first name...',
                    },
                  }}
                  error={errors}
                  errorstyle={{left: responsiveWidth(10)}}
                />
                <Fields
                  control={control}
                  name={'lastName'}
                  placeholder={'Last Name'}
                  inputWidht={responsiveWidth(80)}
                  style={{marginTop: responsiveHeight(1)}}
                  alignSelf
                  rules={{
                    required: {
                      value: true,
                      message: 'Please enter Last Name...',
                    },
                  }}
                  error={errors}
                  errorstyle={{left: responsiveWidth(10)}}
                  errorcolor={'red'}
                />
                <Fields
                  control={control}
                  name={'email'}
                  placeholder={'Email'}
                  inputWidht={responsiveWidth(80)}
                  style={{marginTop: responsiveHeight(1)}}
                  alignSelf
                  rules={{
                    required: {value: true, message: 'Please enter Email...'},
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
                  textcolor={'grey'}
                  withicon={images.uploadpin}
                  text={'Attachement for Certificate'}
                  textStyle={{fontSize: responsiveFontSize(1.9)}}
                  onPress={openCertificatePicker}
                  style={{marginTop: responsiveHeight(1)}}
                  self
                  width={responsiveWidth(80)}
                  bgcolor={'#F8F8F8'}
                />

                <Fields
                  control={control}
                  name={'password'}
                  placeholder={'Password'}
                  inputWidht={responsiveWidth(80)}
                  secureTextEntry={true}
                  passwordEye={true}
                  style={{marginTop: responsiveHeight(1)}}
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
                <Fields
                  control={control}
                  name={'confirmPassword'}
                  placeholder={'Confirm Password'}
                  inputWidht={responsiveWidth(80)}
                  style={{marginTop: responsiveHeight(1)}}
                  secureTextEntry
                  passwordEye={true}
                  alignSelf
                  rules={{
                    required: {
                      value: true,
                      message: 'Please enter Confirm Password...',
                    },
                  }}
                  error={errors}
                  errorstyle={{left: responsiveWidth(10)}}
                  errorcolor={'red'}
                />

                <View style={styles.G$AGe}>
                  <Fields
                    type={'Dropdown'}
                    name={'gender'}
                    control={control}
                    error={errors}
                    inputWidht={responsiveWidth(38)}
                    rules={{
                      required: {value: true},
                    }}
                    item={[
                      {label: 'male', value: 'male'},
                      {label: 'female', value: 'female'},
                    ]}
                    placeholder={'Gender'}
                    errorstyle={{left: responsiveWidth(10)}}
                    errorcolor={'red'}
                  />
                  <Fields
                    type={'date'}
                    name={'dateOfBirth'}
                    error={errors}
                    errorcolor={'red'}
                    inputWidht={responsiveWidth(38)}
                    control={control}
                    labelColor={'grey'}
                    style={{height: responsiveHeight(7)}}
                    bordercolor={'grey'}
                    rules={{
                      required: {value: true},
                    }}
                  />
                </View>
              </>
            )}

            {screens == 1 && <Address control={control} errors={errors} />}

            {/* ==================End Payment================= */}
            <CoustomButton
              width={screens == 1 ? responsiveWidth(60) : responsiveWidth(80)}
              bgcolor={'red'}
              height={responsiveHeight(6)}
              textcolor={'#fff'}
              text={screens == 1 ? 'Sign up' : 'Next'}
              onPress={handleSubmit(onsumbit)}
              self
              style={{
                marginTop: responsiveHeight(3),
              }}
            />

            <View style={{}}></View>
            <View style={styles.tagline}>
              <DiscriptionText
                children={'Do you have an account ?'}
                color={'grey'}
              />
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Login');
                }}>
                <NormalText bold children={'Log In'} color={'#000'} />
              </TouchableOpacity>
            </View>
          </View>

          {/* ==============================----====---==---======== */}
        </View>
      </View>
      {/* </ScrollView> */}
    </View>
  );
};

export default SignUpCertified;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cheatheaderBG: {
    flex: 0.27,
    backgroundColor: '#fff',
  },
  Headercontent: {
    flex: 1,
    backgroundColor: '#000',
    borderBottomLeftRadius: responsiveWidth(25),
  },
  pagesheadingcontain: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsiveHeight(2),
  },

  pagesline: {
    borderBottomWidth: responsiveWidth(1),
    width: responsiveWidth(18),
    borderColor: '#Fff',
    // alignItems: 'center',
    justifyContent: 'center',
    height: responsiveHeight(4),
  },
  CheatContentBG: {
    flex: 0.73,
    backgroundColor: '#000',
    position: 'relative',
  },
  contentcontainer: {
    flex: 1,
    borderTopRightRadius: responsiveWidth(18),
    backgroundColor: '#fff',
    position: 'relative',
  },
  profileimage: {marginTop: responsiveHeight(-5), alignSelf: 'center'},
  G$AGe: {
    marginTop: responsiveHeight(1),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: responsiveWidth(5),
    // zIndex: 999,
  },
  tagline: {
    flexDirection: 'row',
    height: responsiveHeight(5),
    marginTop: responsiveHeight(3),
    alignSelf: 'center',
    alignItems: 'center',
    zIndex: -9999,
  },
  Addressboxes: {
    marginTop: responsiveHeight(2),
    alignItems: 'center',
    zIndex: 999,
  },
  Amount: {
    height: responsiveHeight(6),
    width: responsiveWidth(60),
    borderRadius: responsiveWidth(2),
    backgroundColor: '#FFDADA',
    marginTop: responsiveHeight(6),
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    flexDirection: 'row',
    paddingHorizontal: responsiveWidth(2),
  },
  planbox: {
    height: responsiveHeight(11.6),
    width: responsiveWidth(82),
    alignSelf: 'center',
    borderRadius: responsiveWidth(4),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(5),
    marginBottom: responsiveHeight(1),
    borderWidth: responsiveWidth(0.5),
    borderColor: 'red',
  },
});
