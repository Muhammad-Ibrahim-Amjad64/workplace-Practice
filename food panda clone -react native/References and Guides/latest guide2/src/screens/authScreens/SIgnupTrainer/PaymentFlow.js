import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Modal,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {
  DiscriptionText,
  LargeText,
  MediumText,
  NormalText,
  XLargeText,
  XXLargeText,
} from '../../../Common/Coustomtext/Index';
import {images} from '../../../Utlies/constant/Themse';
import CoustomTextinput from '../../../Common/Textinput/Textinput';
import Fields from '../../../Common/Fields/Fields';
import CoustomButton from '../../../Common/CoustomButton.js/CoustomButton';
import CoustomCardSelected from '../../../Common/CoustomCardSelected/CoustomCardSelected';
import {useForm} from 'react-hook-form';
import {showMessage} from 'react-native-flash-message';
import {Api} from '../../../Utlies/constant/Api';
import {
  StripeProvider,
  confirmPayment,
  createPaymentMethod,
} from '@stripe/stripe-react-native';
import axios from 'axios';

const PaymentFlow = ({onPress, GoNext, route, navigation}) => {
  // const {price} = route.params;
  // console.log(price);
  const [Visible, SetVasible] = useState(false);
  const [show, setShow] = useState(false);
  const [paymentId, setPaymentId] = useState();
  const {
    formState: {errors, defaultValues},
    control,
    handleSubmit,
  } = useForm();
  // const Next = () => {
  //   setTimeout(() => {
  //     SetVasible(true);
  //   }, 1000);
  //   return (
  //     <>
  //       <ActivityIndicator size={'large'} />
  //     </>
  //   );
  // };
  // const pay = async () => {
  //   // setLoading(true);
  //   let con = true;
  //   let CardElement = {
  //     number: 1234567890,
  //     expMonth: 4667,
  //     expYear: 3425,
  //     cvc: 444,
  //   };
  //   // const cardElement = C.getElement(CardElement);
  //   const {paymentMethod, error} = await createPaymentMethod({
  //     type: 'card',
  //     card: CardElement,
  //   });
  //   let data = {
  //     firstName: 'Amar',
  //     lastName: 'qwert',
  //     email: 'qwertyuio@gmail.com',
  //     amount: 100,
  //   };

  //   axios
  //     .post(`${Api}/payments/create-payment`, data)
  //     .then(function (response) {
  //       console.log(response?.data);

  //       setPaymentId(response?.data?.id);
  //     })
  //     .catch(function (err) {
  //       // setLoading(false);
  //       console.log(err, 'err?.response');
  //       showMessage({
  //         message:
  //           err?.response?.data?.error ||
  //           err?.response?.data?.message ||
  //           'Invalid',
  //         type: 'danger',
  //         duration: 2000,
  //         autoHide: true,
  //       });
  //     });

  //   // if (
  //   //   con
  //   //   // card.complete &&
  //   //   // card.validCVC &&
  //   //   // card.validExpiryDate &&
  //   //   // card.validNumber
  //   // ) {
  //   // const {paymentMethod, error} = await createPaymentMethod(
  //   //   Platform.OS === 'ios'
  //   //     ? {
  //   //         paymentMethodType: 'Card',
  //   //       }
  //   //     : {
  //   //         paymentMethodType: 'Card',
  //   //         // billingDetails,
  //   //       },
  //   // );

  //   // if (error) {
  //   //   console.log(error);
  //   //   // setLoading(false);
  //   //   showMessage({
  //   //     message: 'Request Failed',
  //   //     type: 'danger',
  //   //     duration: 2000,
  //   //     autoHide: true,
  //   //   });
  //   // } else {
  //   // let newPrice = Number(price) * Number(quantity);

  //   // }
  //   // }
  // };
  const BACKEND_URL = 'http://192.168.1.104:8000/api/v1/payments';
  const publishableKey =
    'pk_test_51NwsHXDvuknc2PWCccUnsdL7lzZdvH2N1JGGSZaEqSMyt2CG4kkiAydS7Shvyp93LOVa82X54pikGDJUj9G9jEBH00wosIDGIl';
  // const onSubmit = () => {};
  const onSubmit = async () => {
    try {
      // Attempt to create a payment method
      const {paymentMethod, error} = await createPaymentMethod({
        type: 'Card',
        card: {
          number: '4242 4242 4242 4242',
          expMonth: '10/',
          expYear: '24',
          cvc: '111',
        },
        billingDetails: {
          name: 'John Doe',
        },
        paymentMethodType: 'Card',
      });

      // Check if an error occurred during payment method creation
      if (error) {
        console.error('Error creating payment method:', error);
        // Handle the error appropriately, e.g., display an error message to the user.
      } else {
        console.log('Payment method created:', paymentMethod);
        // You can proceed with handling the payment method here
      }
    } catch (error) {
      console.error('An error occurred:', error);
      // Handle any unexpected errors that may occur during the API call or execution.
    }
  };
  // try {
  //   const res = confirmPayment({
  //     type: 'Card',

  //     number: '4242 4242 4242 4242',
  //     expMonth: '10',
  //     expYear: '24',
  //     cvc: '111',

  //     billingDetails: {
  //       name: 'John Doe',
  //     },
  //   });
  //   console.log(res.then(i => i.paymentIntent));
  //   return;
  //   if (error) {
  //     console.log('error 1---->', error);

  //     showMessage({
  //       message: 'Request Failed',
  //       type: 'danger',
  //       duration: 2000,
  //       autoHide: true,
  //     });
  // alert('Error');
  //     } else {
  //       // payload: {
  //       let newPrice = 100;
  //       let data = {
  //         amount: Number(newPrice * 100),
  //         currency: 'USD',
  //         payment_method: paymentMethod,
  //         confirm: false,
  //       };
  //       // setLoading(false)
  //       console.log(typeof data, data);
  //       return;
  //       axios
  //         .post(`${BACKEND_URL}/create-payment`, data)
  //         .then(function (response) {
  //           console.log('2--->', response?.data);
  //           // setLoading(false);
  //           // setPaymentId(response?.data?.paymentIntentId);
  //           // setPaymentConfirm(true);
  //         })
  //         .catch(function (err) {
  //           // setLoading(false);
  //           console.log('3--->', err?.response, 'err?.response');
  //           showMessage({
  //             message:
  //               err?.response?.data?.error ||
  //               err?.response?.data?.message ||
  //               'Invalid',
  //             type: 'danger',
  //             duration: 2000,
  //             autoHide: true,
  //           });
  //         });
  //     }
  //   } catch (error) {}
  // };
  return (
    <StripeProvider publishableKey={publishableKey}>
      {/* <Modal transparent visible={!Visible}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <View
            style={{
              // flex: 0.5,
              height: responsiveHeight(50),
              width: responsiveWidth(80),
              alignSelf: 'center',
              backgroundColor: '#fff',
              marginTop: responsiveHeight(8),
              borderRadius: responsiveHeight(2),
              elevation: 10,
            }}>
            <View>
              <CoustomCardSelected
                btnIcon={
                  show === 'Credit or Debit Card'
                    ? images.redtick
                    : images.Greytick
                }
                children={'Credit or Debit Card'}
                onPress={() => {
                  setShow('Credit or Debit Card');
                  Next();
                }}
                isButton
                icon={images.Visa}
                width={responsiveWidth(70)}
                center={'center'}
                height={responsiveHeight(8)}
              />
              <CoustomCardSelected
                btnIcon={
                  show === 'Pay with cash' ? images.redtick : images.Greytick
                }
                onPress={() => {
                  setShow('Pay with cash');
                  Next();
                }}
                children={'Pay with cash'}
                isButton
                icon={images.paycashlogo}
                width={responsiveWidth(70)}
                center={'center'}
                height={responsiveHeight(8)}
              />
              <CoustomCardSelected
                btnIcon={
                  show === 'Pay with Venmo' ? images.redtick : images.Greytick
                }
                children={'Pay with Venmo'}
                onPress={() => {
                  setShow('Pay with Venmo');
                  Next();
                }}
                isButton
                icon={images.paywithVenmo}
                width={responsiveWidth(70)}
                center={'center'}
                height={responsiveHeight(8)}
              />
              <DiscriptionText
                children={'Select Payment Options'}
                center
                color={'#000'}
                textStyle={{marginTop: responsiveHeight(1)}}
              />
              <MediumText
                children={'Or'}
                color={'grey'}
                center
                textStyle={{marginTop: responsiveHeight(1)}}
              />
              <TouchableOpacity>
                <CoustomButton
                  height={responsiveHeight(7)}
                  width={responsiveWidth(60)}
                  onPress={onPress}
                  bgcolor={'#000'}
                  text={'Cancil'}
                  textcolor={'#fff'}
                  self
                  style={{marginTop: responsiveHeight(1)}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      {Visible && ( */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{height: responsiveHeight(55)}}>
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
          <View
            style={{
              height: responsiveHeight(80),
              backgroundColor: '#fff',
              width: responsiveWidth(70),
              // elevation: 4,
              marginTop: responsiveHeight(-13),
              alignSelf: 'center',
              borderTopLeftRadius: responsiveWidth(10),
              borderTopRightRadius: responsiveWidth(10),
              borderRadius: responsiveWidth(4),
            }}>
            {/* <View style={styles.Addressboxes}> */}
            <Fields
              control={control}
              name={'cardNumber'}
              placeholder={'cardNumber'}
              type={'card'}
              keyboardnumber={true}
              inputWidht={responsiveWidth(58.5)}
              alignSelf
              style={{
                marginTop: responsiveHeight(11),
                height: responsiveHeight(5.5),
              }}
              rules={
                {
                  // required: {
                  //   value: true,
                  //   message: 'Please enter Name on card...',
                  // },
                }
              }
              error={errors}
              errorstyle={{left: responsiveWidth(5)}}
            />
            {/* <Fields
                control={control}
                name={'Card Name'}
                placeholder={'Card Name'}
                inputWidht={responsiveWidth(58.5)}
                alignSelf
                style={{
                  marginTop: responsiveHeight(1),
                  height: responsiveHeight(5.5),
                }}
                rules={
                  {
                    // required: {
                    //   value: true,
                    //   message: 'Please enter Card Name...',
                    // },
                  }
                }
                error={errors}
                errorstyle={{left: responsiveWidth(5)}}
              /> */}
            {/* </View> */}
            <View style={styles.G$AGe}>
              <Fields
                keyboardnumber
                type={'DateFormate'}
                name={'Expiry'}
                error={errors}
                inputWidht={responsiveWidth(29)}
                style={{height: responsiveHeight(5.5)}}
                control={control}
                labelColor={'grey'}
                bordercolor={'grey'}
                placeholder={'Expiry'}
                maxLength={10}
                rules={{
                  // required: {value: true},
                  pattern: {
                    value: true,
                    message: 'Date is not Valid',
                  },
                }}
              />
              <Fields
                keyboardnumber
                name={'cvv'}
                error={errors}
                inputWidht={responsiveWidth(29)}
                style={{height: responsiveHeight(5.5)}}
                control={control}
                labelColor={'grey'}
                bordercolor={'grey'}
                placeholder={'CVV'}
                maxLength={3}
                rules={{
                  // required: {
                  //   value: true,
                  //   message: 'Please enter CVV...',
                  // },
                  pattern: {
                    maxLength: 3,
                    message: 'Email is not Valid',
                  },
                }}
              />
            </View>

            {/* <View
                style={{
                  flexDirection: 'row',
                  marginTop: responsiveHeight(1),
                  gap: 10,
                }}>
                <NormalText children={'Save card Information'} color={'#000'} />
                <TouchableOpacity
                  style={{
                    height: responsiveHeight(2.2),
                    width: responsiveWidth(4.4),
                    borderRadius: responsiveWidth(2.2),
                    borderWidth: responsiveWidth(0.1),
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={images.redtick}
                    resizeMode="contain"
                    style={{
                      height: responsiveHeight(2.5),
                      width: responsiveWidth(5),
                      borderRadius: responsiveWidth(2.5),
                    }}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <View style={styles.Addressboxes}>
                  <View>
                    <Fields
                      control={control}
                      name={'Address'}
                      placeholder={'Address'}
                      inputWidht={responsiveWidth(60)}
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
                  </View>
                </View>
                <View style={styles.Addressboxes}>
                  <Fields
                    type={'Dropdown'}
                    name={'CITY'}
                    control={control}
                    error={errors}
                    inputWidht={responsiveWidth(60)}
                    rules={
                      {
                        // required: {value: true},
                      }
                    }
                    item={[
                      {label: 'Toronto', value: 'Toronto'},
                      {label: 'Toronto', value: 'Toronto'},
                      {label: 'Toronto', value: 'Toronto'},
                      {label: 'Toronto', value: 'Toronto'},
                    ]}
                    placeholder={'City'}
                  />
                </View>

                <View
                  style={[
                    styles.G$AGe,
                    {marginHorizontal: responsiveWidth(3)},
                  ]}>
                  <Fields
                    keyboardnumber
                    name={'Zip'}
                    error={errors}
                    inputWidht={responsiveWidth(28)}
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
                    type={'Dropdown'}
                    name={'State'}
                    control={control}
                    error={errors}
                    inputWidht={responsiveWidth(28)}
                    rules={
                      {
                        // required: {value: true},
                      }
                    }
                    item={[
                      {label: 'LSA', value: 'LSA'},
                      {label: 'MLA', value: 'MLA'},
                    ]}
                    placeholder={'Gender'}
                  />
                </View>
              </View>

              <TouchableOpacity style={[styles.Amount, {zIndex: -9999}]}>
                <NormalText children={'Amount'} bold color={'#000'} />
                <NormalText children={price} bold color={'#000'} />
              </TouchableOpacity> */}
            <CoustomButton
              bgcolor={'red'}
              text={'Procced'}
              textcolor={'#fff'}
              style={{marginTop: 10}}
              onPress={onSubmit}
            />
          </View>
        </View>
      </ScrollView>
      {/* )} */}
    </StripeProvider>
  );
};

export default PaymentFlow;

const styles = StyleSheet.create({
  container: {},
  G$AGe: {
    marginTop: responsiveHeight(1),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: responsiveWidth(5),
    // zIndex: 999,
  },
  Amount: {
    height: responsiveHeight(6),
    width: responsiveWidth(60),
    borderRadius: responsiveWidth(2),
    backgroundColor: '#FFDADA',
    marginTop: responsiveHeight(3),
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    flexDirection: 'row',
    paddingHorizontal: responsiveWidth(2),
  },
  Addressboxes: {
    marginTop: responsiveHeight(2),
    alignItems: 'center',
    zIndex: 999,
  },
});
