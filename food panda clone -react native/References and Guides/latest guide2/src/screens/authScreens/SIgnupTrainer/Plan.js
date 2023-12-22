import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {
  MediumText,
  NormalText,
  XXLargeText,
} from '../../../Common/Coustomtext/Index';
import CoustomHeader from '../../../Common/Header/Header';
import {images} from '../../../Utlies/constant/Themse';

const Plan = ({navigation}) => {
  const [Selectpayments, SetSelectedpayments] = useState(0);
  // useEffect(() => {
  //   if (Selectpayments == 1) {
  //     SetSubscriptionPlan({
  //       planType: '25Trainee',
  //       noOfTrainee: 25,
  //       price: 100,
  //       eachPrice: 4,
  //     });
  //   } else if (Selectpayments == 2) {
  //     SetSubscriptionPlan({
  //       planType: '50Trainee',
  //       noOfTrainee: 50,
  //       price: 162.5,
  //       eachPrice: 3.25,
  //     });
  //   } else if (Selectpayments == 3) {
  //     SetSubscriptionPlan({
  //       planType: '75Trainee',
  //       noOfTrainee: 75,
  //       price: 206.5,
  //       eachPrice: 2.75,
  //     });
  //   } else if (Selectpayments == 4) {
  //     SetSubscriptionPlan({
  //       planType: '100Trainee',
  //       noOfTrainee: 100,
  //       price: 200,
  //       eachPrice: 2,
  //     });
  //   }
  // }, [Selectpayments]);

  return (
    <View style={styles.container}>
      <View style={styles.cheatheaderBG}>
        <View style={styles.Headercontent}>
          {/* ==============header======================= */}
          <View style={{marginTop: responsiveHeight(7)}}>
            <CoustomHeader
              // lefticon={images.Backbtn}
              // leftTouch={handleback}
              Heading={'Select Plan'}
              color={'red'}
              textStyle={{fontSize: responsiveScreenFontSize(4)}}
            />
          </View>
          {/* ============================================= */}
        </View>
      </View>
      <View style={styles.CheatContentBG}>
        <View style={styles.contentcontainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Paymentgate', {price: 100});
            }}
            style={[
              styles.planbox,
              {
                backgroundColor: Selectpayments == 1 ? 'red' : '#fff',
              },
            ]}>
            <View style={{}}>
              <XXLargeText
                children={'25'}
                color={Selectpayments == 1 ? '#fff' : '#000'}
                bold
                textStyle={{fontStyle: 'italic'}}
              />
              <NormalText
                children={'trainee'}
                color={Selectpayments == 1 ? '#fff' : '#000'}
                textStyle={{bottom: responsiveHeight(1)}}
              />
              <MediumText
                children={'$100.00'}
                color={Selectpayments == 1 ? '#fff' : '#000'}
                textStyle={{bottom: responsiveHeight(1)}}
                bold
              />
            </View>
            <View>
              <MediumText
                children={'$4.00'}
                color={Selectpayments == 1 ? '#fff' : '#000'}
                center
                bold
              />
              <NormalText
                children={'each'}
                color={Selectpayments == 1 ? '#fff' : '#000'}
                textStyle={{bottom: responsiveHeight(1)}}
                center
              />
            </View>
          </TouchableOpacity>
          {/* ========== */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Paymentgate', {price: 162.0});
            }}
            style={[
              styles.planbox,
              {
                backgroundColor: Selectpayments == 2 ? 'red' : '#fff',
              },
            ]}>
            <View style={{}}>
              <XXLargeText
                children={'50'}
                color={Selectpayments == 2 ? '#fff' : '#000'}
                bold
                textStyle={{fontStyle: 'italic'}}
              />
              <NormalText
                children={'trainee'}
                color={Selectpayments == 2 ? '#fff' : '#000'}
                textStyle={{bottom: responsiveHeight(1)}}
              />
              <MediumText
                children={'$162.00'}
                color={Selectpayments == 2 ? '#fff' : '#000'}
                textStyle={{bottom: responsiveHeight(1)}}
                bold
              />
            </View>
            <View>
              <MediumText
                children={'$3.25'}
                color={Selectpayments == 2 ? '#fff' : '#000'}
                center
                bold
              />
              <NormalText
                children={'each'}
                color={Selectpayments == 2 ? '#fff' : '#000'}
                textStyle={{bottom: responsiveHeight(1)}}
                center
              />
            </View>
          </TouchableOpacity>
          {/* ========== */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Paymentgate', {price: 206.0});
            }}
            style={[
              styles.planbox,
              {
                backgroundColor: Selectpayments == 3 ? 'red' : '#fff',
              },
            ]}>
            <View style={{}}>
              <XXLargeText
                children={'75'}
                color={Selectpayments == 3 ? '#fff' : '#000'}
                bold
                textStyle={{fontStyle: 'italic'}}
              />
              <NormalText
                children={'trainee'}
                color={Selectpayments == 3 ? '#fff' : '#000'}
                textStyle={{bottom: responsiveHeight(1)}}
              />
              <MediumText
                children={'$206.00'}
                color={Selectpayments == 3 ? '#fff' : '#000'}
                textStyle={{bottom: responsiveHeight(1)}}
                bold
              />
            </View>
            <View>
              <MediumText
                children={'2.75'}
                color={Selectpayments == 3 ? '#fff' : '#000'}
                center
                bold
              />
              <NormalText
                children={'each'}
                color={Selectpayments == 3 ? '#fff' : '#000'}
                textStyle={{bottom: responsiveHeight(1)}}
                center
              />
            </View>
          </TouchableOpacity>
          {/* ========== */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Paymentgate', {price: 200});
            }}
            style={[
              styles.planbox,
              {
                backgroundColor: Selectpayments == 4 ? 'red' : '#fff',
              },
            ]}>
            <View style={{}}>
              <XXLargeText
                children={'100'}
                color={Selectpayments == 4 ? '#fff' : '#000'}
                textStyle={{fontStyle: 'italic'}}
                bold
              />
              <NormalText
                children={'trainee'}
                color={Selectpayments == 4 ? '#fff' : '#000'}
                textStyle={{bottom: responsiveHeight(1)}}
              />
              <MediumText
                children={'$200.00'}
                color={Selectpayments == 4 ? '#fff' : '#000'}
                textStyle={{bottom: responsiveHeight(1)}}
                bold
              />
            </View>
            <View>
              <MediumText
                children={'$2.00'}
                color={Selectpayments == 4 ? '#fff' : '#000'}
                center
                bold
              />
              <NormalText
                children={'each'}
                color={Selectpayments == 4 ? '#fff' : '#000'}
                textStyle={{bottom: responsiveHeight(1)}}
                center
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Plan;

const styles = StyleSheet.create({
  planbox: {
    height: responsiveHeight(12),
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cheatheaderBG: {
    flex: 0.27,
    backgroundColor: '#fff',
    height: responsiveHeight(16),
  },
  Headercontent: {
    flex: 1,
    backgroundColor: '#000',
    borderBottomLeftRadius: responsiveWidth(25),
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
    // top: responsiveHeight(2),
    paddingTop: responsiveHeight(5),
  },
});
