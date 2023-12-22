import React, {useEffect, useState} from 'react';
import {CardField, CardForm, useStripe} from '@stripe/stripe-react-native';
import {StripeProvider} from '@stripe/stripe-react-native';

import {
  StyleSheet,
  Platform,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Button,
  Pressable,
  ScrollView,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {showMessage} from 'react-native-flash-message';
import axios from 'axios';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {images} from '../../../Utlies/constant/Themse';
import Fields from '../../../Common/Fields/Fields';
import {useForm} from 'react-hook-form';
import {MediumText, NormalText} from '../../../Common/Coustomtext/Index';
import CoustomButton from '../../../Common/CoustomButton.js/CoustomButton';
import {useDispatch, useSelector} from 'react-redux';
import {Api} from '../../../Utlies/constant/Api';
import useToast from '../../../Hooks/useToast';
import {
  getStatesByCountry,
  getCitiesByState,
} from '../../../Utlies/constant/Location';
import {ispay, setUser} from '../../../store/AuthSlice';

// import {BACKEND_URL} from '../../constant';
const BACKEND_URL = 'http://192.168.100.26:8000/api/v1/payments';

const publishableKey =
  'pk_test_51NwsHXDvuknc2PWCccUnsdL7lzZdvH2N1JGGSZaEqSMyt2CG4kkiAydS7Shvyp93LOVa82X54pikGDJUj9G9jEBH00wosIDGIl';
const City = [
  {key: '1', value: 'New York'},
  {key: '2', value: 'Los Angeles'},
  {key: '3', value: 'Chicago'},
];
const States = [
  {key: '1', value: 'Alabama'},
  {key: '2', value: 'Alaska'},
  {key: '3', value: 'Arizona'},
];
const StripePayment = ({route, navigation}) => {
  const {price} = route?.params;
  console.log(price);
  const [card, setCard] = useState([]);
  const [PaymentConfirm, setPaymentConfirm] = useState(false);
  const [PaymentId, setPaymentId] = useState('');
  const [PaymentConfirmLoader, setPaymentConfirmLoader] = useState(true);
  const [PaymentCancelLoader, setPaymentCancelLoader] = useState(false);
  const [Loading, setLoading] = useState(false);
  const {confirmPayment, createPaymentMethod} = useStripe();
  const accestoken = useSelector(state => state.userSlice.accestoken);
  const isPayed = useSelector(state => state.userSlice);
  var finaldata;
  console.log(accestoken);
  const headers = {
    Authorization: `Bearer ${accestoken}`,
  };
  const [states, setStates] = useState([]);
  const [selectedStates, setSelectedStates] = useState();
  const [city, setcity] = useState([]);
  const [cities, setcities] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      const state = getStatesByCountry('US');
      setStates(state);
    }, 3000);
  }, [selectedStates]);
  useEffect(() => {
    const cities = getCitiesByState('US', selectedStates);
    setcity(cities);
  }, [selectedStates]);
  useEffect(() => {
    console.log('-->', card);
    // navigation.navigate('bottomStack2');
  }, [card]);
  const {
    formState: {errors, defaultValues},
    control,
    handleSubmit,
  } = useForm();
  const {showToast} = useToast();
  const pay = async data => {
    console.log('data', data);
    // setLoading(true);
    if (
      card.complete &&
      card.validCVC &&
      card.validExpiryDate &&
      card.validNumber
    ) {
      const {paymentMethod, error} = await createPaymentMethod(
        Platform.OS === 'ios'
          ? {
              paymentMethodType: 'Card',
            }
          : {
              paymentMethodType: 'Card',
            },
      );
      console.log('wertyuhgfd', paymentMethod);
      if (error) {
        console.log('error 1---->', error);
        setLoading(false);
        showToast('error', 'Error', 'Request Failed', 1000);
        // showMessage({
        //   message: 'Request Failed',
        //   type: 'danger',
        //   duration: 2000,
        //   autoHide: true,
        // });
        // alert('Error');
      } else {
        // payload: {
        let newPrice = price;
        let payload = {
          address: data.Address,
          city: data.City,
          postal_code: data.Zip,
          state: data.State,
          country: data.Country,
          amount: Number(newPrice * 100),
          currency: 'USD',
          payment_method: paymentMethod,
          confirm: false,
        };
        setLoading(true);
        console.log('Payload', payload);
        axios
          .post(`${Api}payments/create-payment`, payload, {headers})

          .then(function (response) {
            console.log('2--->', response?.data);
            setLoading(false);
            setPaymentId(response?.data?.paymentIntentId);
            setPaymentConfirm(true);
          })
          .catch(function (err) {
            console.log('3--->', err?.response, 'err?.response');
            showToast(
              'error',
              'Error',
              err?.response?.data?.error ||
                err?.response?.data?.message ||
                'Invalid',
              1000,
            );
            setLoading(false);
          });
      }
    } else {
    }
  };

  const confirmFn = async () => {
    // setPaymentConfirmLoader(true);
    setLoading(true);
    let newPrice = price;
    // setLoading(true);
    let data = {
      paymentIntentId: PaymentId,
      amount: Number(newPrice * 100),
    };
    console.log(data, 'payment-loader');
    axios
      .post(`${Api}payments/confirm-payment`, data, {headers})
      .then(function (response) {
        console.log(response?.data);
        dispatch(ispay(isPayed));
        setLoading(false);
        showToast('success', 'Success', 'Invalid', 1000);
        navigation.navigate('bottomStack2');
      })
      .catch(function (err) {
        // setPaymentConfirmLoader(false);
        setLoading(false);
        console.log(err);
        showToast(
          'error',
          'Error',
          err?.response?.data?.error || 'Invalid',
          1000,
        );
        // showMessage({
        //   message: err?.response?.data?.error || 'Invalid',
        //   type: 'danger',
        //   duration: 2000,
        //   autoHide: true,
        // });
      });
  };

  const cancelFn = async () => {
    // setPaymentCancelLoader(true);
    setLoading(true);
    let data = {
      paymentIntentId: PaymentId,
    };
    console.log(data);
    axios
      .post(`${Api}payments/cancel-payment`, data, {headers})
      .then(function (response) {
        console.log(response);
        setLoading(false);

        setPaymentConfirm(false);
      })
      .catch(function (err) {
        setPaymentCancelLoader(false);
        console.log(err);
      });
  };

  return (
    <StripeProvider publishableKey={publishableKey}>
      <ScrollView
        style={{backgroundColor: '#Fff'}}
        contentContainerStyle={{
          height: responsiveHeight(98),
          paddingTop: responsiveHeight(7),
        }}>
        <View>
          <View>
            <Image
              source={images.Visa}
              resizeMode="contain"
              style={{
                height: responsiveHeight(25),
                width: responsiveWidth(70),
                alignSelf: 'center',
                marginTop: responsiveHeight(3),
                zIndex: 1000,
              }}
            />
          </View>
          {/* <Text
          style={{
            textAlign: 'center',
            color: '#002e58',
            fontSize: ,
            fontWeight: '700',
          }}>
          Transaction
        </Text> */}
        </View>
        {PaymentConfirm ? (
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                height: responsiveHeight(25),
                width: responsiveWidth(60),
                backgroundColor: '#fff',
                bottom: responsiveHeight(7),
                borderRadius: responsiveWidth(5),
                alignItems: 'center',
                justifyContent: 'center',
                elevation: 30,
              }}>
              <View>
                <NormalText
                  children={'Are You Sure to proceed...'}
                  color={'#000'}
                  bold
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  gap: responsiveWidth(10),
                  marginVertical: responsiveHeight(3),
                  top: responsiveHeight(2),
                }}>
                {Loading == true ? (
                  <ActivityIndicator size={'large'} color={'red'} />
                ) : (
                  <>
                    <CoustomButton
                      bgcolor={'red'}
                      text={'Cancil'}
                      height={responsiveHeight(10)}
                      width={responsiveWidth(20)}
                      textcolor={'#fff'}
                      onPress={() => cancelFn()}
                    />
                    <CoustomButton
                      bgcolor={'#000'}
                      text={'Confirm'}
                      height={responsiveHeight(10)}
                      width={responsiveWidth(20)}
                      textcolor={'#fff'}
                      onPress={confirmFn}
                    />
                  </>
                )}
              </View>
            </View>
          </View>
        ) : (
          <>
            <CardField
              hidePostalCode={true}
              postalCodeEnabled={false}
              placeholders={{
                number: '4242 4242 4242 4242',
              }}
              style={{
                height: responsiveHeight(8),

                alignItems: 'flex-start',
                width: responsiveWidth(90),
                alignSelf: 'center',
              }}
              cardStyle={{
                borderWidth: 1,
                backgroundColor: 'white',
                borderColor: 'black',
                borderRadius: responsiveWidth(5),
                fontSize: 14,
                color: '#707070',
              }}
              onCardChange={cardDetails => {
                setCard(cardDetails);
              }}
              onFocus={focusedField => {}}
            />
            <View>
              <View style={styles.Addressboxes}>
                <View>
                  <Fields
                    control={control}
                    name={'Address'}
                    placeholder={'Address'}
                    inputWidht={responsiveWidth(82)}
                    style={{
                      marginTop: responsiveHeight(2),
                      height: responsiveHeight(6.5),
                    }}
                    rules={
                      {
                        // required: {
                        //   value: true,
                        //   message: 'Please enter Address...',
                        // },
                      }
                    }
                    error={errors}
                    errorstyle={{left: responsiveWidth(5)}}
                  />
                  <Fields
                    control={control}
                    name={'Country'}
                    placeholder={'Country'}
                    inputWidht={responsiveWidth(80)}
                    style={{
                      marginTop: responsiveHeight(2),
                      height: responsiveHeight(6.5),
                    }}
                    alignSelf
                    rules={{
                      required: {
                        value: true,
                        message: 'Please enter Country...',
                      },
                    }}
                    error={errors}
                    errorstyle={{left: responsiveWidth(5)}}
                  />
                </View>
              </View>
              <View style={[styles.Addressboxes]}>
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

              <View
                style={[
                  styles.G$AGe,
                  {marginHorizontal: responsiveWidth(6.2)},
                ]}>
                <Fields
                  keyboardnumber
                  name={'Zip'}
                  error={errors}
                  inputWidht={responsiveWidth(40)}
                  style={{height: responsiveHeight(6.3)}}
                  control={control}
                  labelColor={'grey'}
                  bordercolor={'grey'}
                  placeholder={'Zip'}
                  maxLength={10}
                  rules={
                    {
                      // required: {value: true},
                    }
                  }
                />
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

              <>
                <Pressable
                  disabled={Loading}
                  mode="contained"
                  style={{
                    width: responsiveWidth(36),
                    backgroundColor: 'red',
                    height: responsiveHeight(8),
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf: 'center',
                    marginTop: responsiveWidth(5),
                    borderRadius: responsiveWidth(5),
                    zIndex: -9999,
                  }}
                  onPress={handleSubmit(pay)}>
                  {Loading ? (
                    <ActivityIndicator color={'#ffff'} />
                  ) : (
                    <Text style={{color: '#fff', fontSize: 16}}>Submit</Text>
                  )}
                </Pressable>
              </>
            </View>
          </>
        )}

        {/* {PaymentConfirm ? (
          <View
            style={{
              width: '100%',
              paddingTop: 15,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{width: '48%'}}>
              <Pressable
                style={{
                  width: 140,
                  height: 40,
                  backgroundColor: '#000',
                  borderRadius: 20,
                }}
                mode="outlined"
                onPress={() => cancelFn()}
                disabled={PaymentConfirmLoader || PaymentCancelLoader}>
                {PaymentCancelLoader ? (
                  <ActivityIndicator />
                ) : (
                  <Text style={{color: '#fff', fontSize: 16}}>
                    Cancel Payment
                  </Text>
                )}
              </Pressable>
            </View>
            <View style={{width: '48%'}}>
              <Pressable
                style={{
                  width: 140,
                  height: 40,
                  backgroundColor: '#000',
                  borderRadius: 20,
                }}
                mode="contained"
                disabled={PaymentConfirmLoader || PaymentCancelLoader}
                onPress={confirmFn}>
                {PaymentConfirmLoader ? (
                  <ActivityIndicator />
                ) : (
                  <Text style={{color: '#fff', fontSize: 16}}>
                    Confirm Payment
                  </Text>
                )}
              </Pressable>
            </View>
          </View>
        ) : (card.complete &&
            card.validCVC &&
            card.validExpiryDate &&
            card.validNumber &&
            card.postalCode) ||
          false ? (
          <Pressable disabled={Loading} mode="contained" onPress={pay}>
            {Loading ? (
              <ActivityIndicator />
            ) : (
              <Text style={{color: '#fff', fontSize: 16}}>Submit</Text>
            )}
          </Pressable>
        ) : (
          <>
            <Pressable
              disabled={Loading}
              mode="contained"
              style={{
                width: responsiveWidth(36),
                backgroundColor: 'red',
                height: responsiveHeight(8),
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
                marginTop: responsiveWidth(5),
                borderRadius: responsiveWidth(5),
              }}
              onPress={pay}>
              {Loading ? (
                <ActivityIndicator />
              ) : (
                <Text style={{color: '#fff', fontSize: 16}}>Submit</Text>
              )}
            </Pressable>
          </>
        )} */}
      </ScrollView>
    </StripeProvider>
  );
};

const styles = StyleSheet.create({
  G$AGe: {
    marginTop: responsiveHeight(1),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: responsiveWidth(5),
    // zIndex: 999,
  },
  Addressboxes: {
    marginTop: responsiveHeight(2),
    alignItems: 'center',
    zIndex: 999,
    marginHorizontal: responsiveWidth(2),
  },
});

export default StripePayment;
