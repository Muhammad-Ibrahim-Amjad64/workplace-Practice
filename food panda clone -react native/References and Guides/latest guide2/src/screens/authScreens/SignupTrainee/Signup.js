import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  StatusBar,
  Image,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Fields from '../../../Common/Fields/Fields';
import {useForm} from 'react-hook-form';
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';
import {images} from '../../../Utlies/constant/Themse';
import Coustomdate from '../../../Common/CoustomDateinput.js/Coustomdate';
import CoustomHeader from '../../../Common/Header/Header';
import {launchImageLibrary} from 'react-native-image-picker';

import {
  DiscriptionText,
  MediumText,
  NormalText,
} from '../../../Common/Coustomtext/Index';
import {AvoidSoftInput} from 'react-native-avoid-softinput';
import CoustomButton from '../../../Common/CoustomButton.js/CoustomButton';
import {useSignuptraineeMutation} from '../../../store/Auth';
import MsgModal from '../../../Common/MassegeModal/MsgModal';
import Toast from 'react-native-toast-message';
import {
  getCitiesByState,
  getStatesByCountry,
} from '../../../Utlies/constant/Location';
import useToast from '../../../Hooks/useToast';

const Signup = ({navigation}) => {
  const {
    formState: {errors, defaultValues},
    control,
    handleSubmit,
  } = useForm();

  const [screens, SetScreens] = useState(0);
  const [profileImages, setProfileImage] = useState(null);
  const [error, setError] = useState(null);
  const [states, setStates] = useState([]);
  const [selectedStates, setSelectedStates] = useState([]);
  const [city, setcity] = useState([]);
  const [cities, setcities] = useState([]);
  const [Signuptrainee, {isError, isLoading, isSuccess, data}] =
    useSignuptraineeMutation();
  const {showToast} = useToast();
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
    }
  };

  const onsumbit = async data => {
    // setSelectedStates(data.state);
    console.log(data);
    if (!profileImages) {
      return showToast(
        'error',
        'Error',
        'Please Upload profile Picture👋',
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
      formData.append('height', data.height);
      formData.append('weight', data.weight);
      formData.append('city', data.city);
      formData.append('state', data.state);
      formData.append('zipcode', data.zipcode);
      formData.append('profile', {
        uri: profileImages.uri,
        type: profileImages.type,
        name: profileImages.fileName,
      });
      console.log(JSON.stringify(formData));
      try {
        const response = await Signuptrainee(formData);
        console.log('====>>>>>>>>response', response.data);
        if (response.data) {
          showToast('success', 'Account Created', 'Back to login', 10000);
          return navigation.replace('Login');
        } else {
          Toast.show({
            type: 'error',
            text1: 'Error',
            text2:
              response.error.data.error.message || response.error.data.message,
            visibilityTime: 10000,
            autoHide: true,
            bottomOffset: responsiveHeight(10),
          });
        }
      } catch (error) {
        console.log('error', error);
        alert('Network error');
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
    AvoidSoftInput.setShouldMimicIOSBehavior(true);
    AvoidSoftInput.setEnabled(true);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      const state = getStatesByCountry('US');
      setStates(state);
    }, 3000);
  }, []);
  useEffect(() => {
    const cities = getCitiesByState('US', selectedStates);
    console.log('citys', cities);
    console.log('citys', states);
    console.log(selectedStates);
    setcity(cities);
  }, [selectedStates]);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={true} backgroundColor="black" />
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
              children={'Please add sigup detail'}
              textStyle={{fontSize: responsiveScreenFontSize(1.2)}}
              color={'#fff'}
              center
            />
          </View>
          {/* ============================================= */}
          {/* =================== pagesheading======================*/}
          <View style={styles.pagesheadingcontain}>
            <View
              style={[
                styles.pagesline,
                {borderColor: screens == 0 ? '#fff' : '#808080'},
              ]}>
              <MediumText
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
              <MediumText
                children={'Address'}
                color={screens == 1 ? '#fff' : '#808080'}
                bold
              />
            </View>
          </View>
        </View>
      </View>
      {/* ================================================ */}
      {isLoading ? <MsgModal loader={true} /> : null}
      {/* {isError && <MsgModal msg={error} />} */}
      <View style={styles.CheatContentBG}>
        <View style={styles.contentcontainer}>
          {screens === 1 ? null : (
            <TouchableOpacity onPress={openProfilePicker}>
              {profileImages ? (
                <Image
                  resizeMode="contain"
                  source={{uri: profileImages?.uri}}
                  style={[
                    styles.profileimage,
                    {
                      height: responsiveHeight(9),
                      width: responsiveHeight(9),
                      borderRadius: responsiveHeight(4.5),
                      marginBottom: responsiveHeight(1),
                      marginTop: responsiveHeight(-4),
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

          <View style={{height: responsiveHeight(3)}}>
            {screens === 0 && (
              <>
                <Fields
                  control={control}
                  name={'firstName'}
                  placeholder={'First Name'}
                  inputWidht={responsiveWidth(80)}
                  alignSelf
                  rules={{
                    required: {
                      value: true,
                      message: 'Please enter first name...',
                    },
                  }}
                  error={errors}
                  errorstyle={{left: responsiveWidth(10)}}
                  errorcolor={'red'}
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
                <Fields
                  control={control}
                  name={'password'}
                  placeholder={'Password'}
                  inputWidht={responsiveWidth(80)}
                  secureTextEntry
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
                  />
                  <Fields
                    type={'date'}
                    name={'dateOfBirth'}
                    error={errors}
                    inputWidht={responsiveWidth(38)}
                    control={control}
                    labelColor={'grey'}
                    bordercolor={'grey'}
                    rules={{
                      required: {value: true},
                    }}
                  />
                </View>
                <View style={[styles.G$AGe, {zIndex: 0}]}>
                  <View style={{}}>
                    <Fields
                      control={control}
                      name={'height'}
                      placeholder={'height in ft'}
                      inputWidht={responsiveWidth(38)}
                      style={{height: responsiveHeight(6.5)}}
                      rules={{
                        required: {
                          value: true,
                          message: 'Please enter height in ft',
                        },
                      }}
                      error={errors}
                      errorstyle={{left: responsiveWidth(2)}}
                      errorcolor={'red'}
                    />
                  </View>
                  <Fields
                    control={control}
                    name={'weight'}
                    placeholder={'Weight in lbs'}
                    inputWidht={responsiveWidth(38)}
                    style={{height: responsiveHeight(6.5)}}
                    rules={{
                      required: {
                        value: true,
                        message: 'Please enter Weight in lbs',
                      },
                    }}
                    error={errors}
                    errorstyle={{left: responsiveWidth(2)}}
                    errorcolor={'red'}
                  />
                </View>
              </>
            )}
            {screens === 1 && (
              <>
                <View>
                  <View style={styles.Addressboxes}>
                    <Fields
                      type={'Dropdown'}
                      name={'class'}
                      control={control}
                      error={errors}
                      inputWidht={responsiveWidth(80)}
                      rules={{
                        required: {value: true},
                      }}
                      item={[
                        {label: 'First', value: 'First'},
                        {label: 'Second', value: 'Second'},
                      ]}
                      placeholder={'Select classes'}
                    />
                  </View>

                  <View style={[styles.Addressboxes, {zIndex: 0}]}>
                    <View style={{}}>
                      <Fields
                        type={'date'}
                        name={'joiningDate'}
                        error={errors}
                        inputWidht={responsiveWidth(80)}
                        control={control}
                        labelColor={'grey'}
                        bordercolor={'grey'}
                        placeholder={'joining_Date'}
                        rules={{
                          required: {value: true},
                        }}
                      />
                    </View>
                    <View>
                      <Fields
                        control={control}
                        name={'address'}
                        placeholder={'Address'}
                        inputWidht={responsiveWidth(80)}
                        alignSelf
                        style={{
                          marginTop: responsiveHeight(2),
                          height: responsiveHeight(6.5),
                        }}
                        rules={{
                          required: {
                            value: true,
                            message: 'Please enter Address...',
                          },
                        }}
                        error={errors}
                        errorstyle={{left: responsiveWidth(1)}}
                        errorcolor={'red'}
                      />
                    </View>
                  </View>
                  <View style={styles.Addressboxes}>
                    <View style={{zIndex: 9999}}>
                      <Fields
                        type={'selectionlist'}
                        name={'state'}
                        control={control}
                        // error={errors}
                        inputWidht={responsiveWidth(80)}
                        rules={{
                          required: {value: true},
                        }}
                        data={states}
                        placeholder={'state'}
                        errorstyle={{left: responsiveWidth(1)}}
                        setSelected={setSelectedStates}
                        // errorcolor={'red'}
                      />
                    </View>
                  </View>

                  <View style={[styles.G$AGe, {zIndex: 0}]}>
                    <View style={{}}>
                      <Fields
                        type={'selectionlist'}
                        name={'city'}
                        control={control}
                        error={errors}
                        inputWidht={responsiveWidth(38)}
                        rules={{
                          required: {value: true},
                        }}
                        height={responsiveHeight(6.9)}
                        data={city}
                        placeholder={'city'}
                        errorstyle={{left: responsiveWidth(1)}}
                        errorcolor={'red'}
                        setSelected={setcities}
                      />
                    </View>
                    <Fields
                      keyboardnumber
                      name={'zipcode'}
                      error={errors}
                      inputWidht={responsiveWidth(38)}
                      style={{height: responsiveHeight(6.9)}}
                      control={control}
                      labelColor={'grey'}
                      bordercolor={'grey'}
                      placeholder={'Zip'}
                      rules={{
                        required: {value: true},
                      }}
                      errorstyle={{left: responsiveWidth(1)}}
                      errorcolor={'red'}
                    />
                  </View>
                </View>
              </>
            )}
            <CoustomButton
              width={responsiveWidth(80)}
              bgcolor={'red'}
              height={responsiveHeight(6)}
              textcolor={'#fff'}
              text={screens == 1 ? 'Sign up' : 'Next'}
              onPress={handleSubmit(onsumbit)}
              self
              style={{
                marginTop:
                  screens == 1 ? responsiveHeight(4) : responsiveHeight(1),
              }}
            />
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

          {/* ==============firstscreen end ================== */}
          {/* ============================================ */}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Signup;

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
    width: responsiveWidth(20),
    borderColor: '#Fff',
    alignItems: 'center',
    height: responsiveHeight(5),
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
    zIndex: 999,
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
});
