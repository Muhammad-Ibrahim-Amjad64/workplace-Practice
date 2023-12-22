import React, {useEffect, useState} from 'react';
import {CardField, useStripe, CardForm} from '@stripe/stripe-react-native';
import {StripeProvider} from '@stripe/stripe-react-native';

import {
  StyleSheet,
  Platform,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Button,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {showMessage} from 'react-native-flash-message';
// import Loader from './Loader';
// import Button from './Button';

import axios from 'axios';
import {responsiveHeight} from 'react-native-responsive-dimensions';
// import {BACKEND_URL} from '../../constant';

function StripePayment({
  isVisible,
  stripeId,
  quantity,
  price,
  productId,
  title,
  onClose,
  submitFn,
}) {
  const [card, setCard] = useState([]);
  const [PaymentConfirm, setPaymentConfirm] = useState(false);
  const [PaymentId, setPaymentId] = useState('');
  const [PaymentConfirmLoader, setPaymentConfirmLoader] = useState(false);
  const [PaymentCancelLoader, setPaymentCancelLoader] = useState(false);
  const [Loading, setLoading] = useState(false);
  const {confirmPayment, createPaymentMethod} = useStripe();

  const pay = async () => {
    setLoading(true);

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
              // billingDetails,
            },
      );

      if (error) {
        console.log(error);
        setLoading(false);
        showMessage({
          message: 'Request Failed',
          type: 'danger',
          duration: 2000,
          autoHide: true,
        });
      } else {
        let newPrice = Number(price) * Number(quantity);
        let data = {
          amount: Number(newPrice * 100),
          currency: 'EUR',
          description: productId,
          payment_method: paymentMethod,
          customer: stripeId,
          confirm: false,
        };

        axios
          .post('', data)
          .then(function (response) {
            console.log(response?.data);
            setLoading(false);
            setPaymentId(response?.data?.id);
            setPaymentConfirm(true);
          })
          .catch(function (err) {
            setLoading(false);
            console.log(err?.response, 'err?.response');
            showMessage({
              message:
                err?.response?.data?.error ||
                err?.response?.data?.message ||
                'Invalid',
              type: 'danger',
              duration: 2000,
              autoHide: true,
            });
          });
      }
    }
  };

  const confirmFn = async () => {
    setPaymentConfirmLoader(true);
    let data = {
      paymentIntentId: PaymentId,
    };
    console.log(data, 'payment-loader');
    axios
      .post('', data)
      .then(function (response) {
        console.log(response?.data);
        setPaymentConfirm(false);
        setPaymentConfirmLoader(false);
        submitFn(response?.data?.data);
      })
      .catch(function (err) {
        setPaymentConfirmLoader(false);
        console.log(err);
        showMessage({
          message: err?.response?.data?.error || 'Invalid',
          type: 'danger',
          duration: 2000,
          autoHide: true,
        });
      });
  };

  const cancelFn = async () => {
    setPaymentCancelLoader(true);
    let data = {
      paymentIntentId: PaymentId,
    };
    console.log(data);
    axios
      .post('', data)
      .then(function (response) {
        console.log(response);
        setPaymentCancelLoader(false);
        setPaymentConfirm(false);
        showMessage({
          message: 'you cancelled your payment',
          type: 'danger',
          duration: 2000,
          autoHide: true,
        });
        onClose();
      })
      .catch(function (err) {
        setPaymentCancelLoader(false);
        console.log(err);
        showMessage({
          message: err?.response?.data?.error || 'Invalid',
          type: 'danger',
          duration: 2000,
          autoHide: true,
        });
      });
  };

  return (
    <>
      <View>
        <Text
          style={{
            textAlign: 'center',
            color: '#002e58',
            fontSize: 20,
            fontWeight: '700',
          }}>
          Transaction
        </Text>
      </View>
      {PaymentConfirm ? (
        <View>
          <Text
            style={{
              color: 'black',
              textAlign: 'center',
              marginTop: 10,
              fontSize: 15,
            }}>
            Are you sure you want to buy {title} for €
            {Number(price) * Number(quantity)}
          </Text>
        </View>
      ) : (
        <CardField
          postalCodeEnabled={true}
          placeholders={{
            number: '4242 4242 4242 4242',
          }}
          cardStyle={{
            borderWidth: 1,
            backgroundColor: 'white',
            borderColor: 'black',
            borderRadius: 10,
            fontSize: 14,
          }}
          style={{
            width: '100%',
            height: 50,
            marginVertical: 20,
            flexDirection: 'row',
          }}
          onCardChange={cardDetails => {
            setCard(cardDetails);
          }}
          onFocus={focusedField => {}}
        />
      )}
      {PaymentConfirm ? (
        <View
          style={{
            width: '100%',
            paddingTop: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{width: '48%'}}>
            {/* <Button
              mode="outlined" */}
            <TouchableOpacity
              onPress={() => cancelFn()}
              style={{height: 100, width: 100, backgroundColor: 'red'}}>
              {/* // disabled={PaymentConfirmLoader || PaymentCancelLoader}> */}
              {PaymentCancelLoader ? (
                <ActivityIndicator size={'large'} color={'#000'} />
              ) : (
                // <Loader
                //   customStyle={{
                //     width: '100%',
                //     display: 'flex',
                //     alignItems: 'center',
                //     height: '100%',
                //     justifyContent: 'center',
                //   }}
                // />
                <Text style={{color: '#fff', fontSize: 16}}>
                  Cancel Payment
                </Text>
              )}
            </TouchableOpacity>
            {/* </Button> */}
          </View>
          <View style={{width: '48%'}}>
            {/* <Button
              mode="contained"
              disabled={PaymentConfirmLoader || PaymentCancelLoader} */}
            <TouchableOpacity
              onPress={() => confirmFn()}
              style={{height: 100, width: 100, backgroundColor: 'red'}}>
              {PaymentConfirmLoader ? (
                // <Loader
                //   customStyle={{
                //     alignItems: 'center',
                //     justifyContent: 'center',
                //   }}
                // />
                <ActivityIndicator size={'large'} color={'#000'} />
              ) : (
                <Text style={{color: '#fff', fontSize: 16}}>
                  Confirm Payment
                </Text>
              )}
            </TouchableOpacity>
            {/* </Button> */}
          </View>
        </View>
      ) : card.complete &&
        card.validCVC &&
        card.validExpiryDate &&
        card.validNumber &&
        card.postalCode ? (
        // <Button disabled={Loading} mode="contained" onPress={pay}>
        <TouchableOpacity
          style={{height: 100, width: 100, backgroundColor: 'blue'}}
          onPress={pay}>
          {Loading ? (
            <ActivityIndicator size={'large'} />
          ) : (
            <Text style={{color: '#fff', fontSize: 16}}>Submit</Text>
          )}
        </TouchableOpacity>
      ) : (
        <>
          {/* <Button disabled={Loading} mode="contained" onPress={pay}> */}
          <TouchableOpacity
            style={{height: 100, width: 100, backgroundColor: 'orange'}}>
            {Loading ? (
              // <Loader />
              <ActivityIndicator size={'large'} />
            ) : (
              <Text style={{color: '#fff', fontSize: 16}}>Submit</Text>
            )}
          </TouchableOpacity>
          {/* </Button> */}
        </>
      )}
    </>
  );
}
export default StripePayment;
