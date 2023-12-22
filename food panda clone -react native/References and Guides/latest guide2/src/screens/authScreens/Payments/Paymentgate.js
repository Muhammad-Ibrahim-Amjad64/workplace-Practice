import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import CoustomButton from '../../../Common/CoustomButton.js/CoustomButton';
import {DiscriptionText, MediumText} from '../../../Common/Coustomtext/Index';
import {images} from '../../../Utlies/constant/Themse';
import CoustomCardSelected from '../../../Common/CoustomCardSelected/CoustomCardSelected';
import cardpay from './../../../assets/cardpay.png';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const Paymentgate = ({navigation, route}) => {
  const {price} = route.params;
  return (
    <View className="flex-1 bg-[#000] items-center justify-evenly">
      <Image
        source={cardpay}
        resizeMode="contain"
        className="h-[20vh] w-[20vh]"
      />
      <View className="h-[50vh] w-[80vw] bg-[#fff] rounded-[20px]  mb-[5vh] ">
        <View>
          <CoustomCardSelected
            btnIcon={images.redtick}
            children={'Credit or Debit Card'}
            ontouch={() => {
              navigation.navigate('PaymentFlow', {price});
            }}
            // onPress={}
            isButton
            icon={images.Visa}
            width={responsiveWidth(70)}
            center={'center'}
            height={responsiveHeight(8)}
          />
          <CoustomCardSelected
            btnIcon={images.redtick}
            //   onPress={() => {}}
            children={'Pay with cash'}
            isButton
            icon={images.paycashlogo}
            width={responsiveWidth(70)}
            center={'center'}
            height={responsiveHeight(8)}
          />
          <CoustomCardSelected
            btnIcon={images.redtick}
            children={'Pay with Venmo'}
            //   onPress={() => {}}
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
              onPress={() => {
                navigation.goBack();
              }}
              bgcolor={'red'}
              text={'Cancil'}
              textcolor={'#fff'}
              self
              style={{marginTop: responsiveHeight(1)}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Paymentgate;
