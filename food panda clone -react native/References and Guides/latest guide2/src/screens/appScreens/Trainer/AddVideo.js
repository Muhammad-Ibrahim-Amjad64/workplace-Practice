import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import CoustomHeader from '../../../Common/Header/Header';
import {images} from '../../../Utlies/constant/Themse';
import settingBottomBackground from '../../../assets/setting-bottom-background.png';
import settingTopBackground from '../../../assets/setting-top-background.png';

import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import background from '../../../assets/background.jpg';
import Fields from '../../../Common/Fields/Fields';
import {useForm} from 'react-hook-form';
import CoustomButton from '../../../Common/CoustomButton.js/CoustomButton';

const AddVideo = ({navigation}) => {
  const {
    formState: {errors},
    control,
    handleSubmit,
  } = useForm();
  return (
    <ImageBackground source={background} style={{flex: 1}}>
      <StatusBar
        barStyle={'default'}
        translucent={true}
        backgroundColor={'transparent'}
      />

      <SafeAreaView style={{flex: 1}}>
        <View
          style={{
            flex: 0.13,
            justifyContent: 'center',
            alignItems: 'center',
            top: responsiveHeight(2),
          }}>
          <CoustomHeader
            Heading={'Add Video'}
            lefticon={images.Backbtn}
            color={'#FFFF'}
            leftstyle={{left: responsiveWidth(-7), top: responsiveWidth(1)}}
            leftTouch={() => navigation.navigate('Home2')}
          />
        </View>
        <View style={{flex: 0.85}}>
          <ImageBackground
            source={settingBottomBackground}
            style={styles.settingBottomBackground}>
            <TouchableOpacity style={{zIndex: 999}}>
              <Image
                source={settingTopBackground}
                style={styles.settingTopBackground}
              />
              <Image source={images.logoplusbtn} style={styles.logoplusbtn} />
            </TouchableOpacity>
            <View>
              <Fields
                control={control}
                name={'Videotitle'}
                placeholder={'Video title'}
                style={styles.videotitle}
                error={errors}
                placeholdercolor={'#fff'}
                inputstyle={{
                  width: responsiveWidth(70),
                }}
              />
              <Fields
                control={control}
                name={'Short Description'}
                placeholder={'Short Description'}
                style={styles.shortdisc}
                error={errors}
                placeholdercolor={'#fff'}
                multiline={true}
                inputstyle={{
                  width: responsiveWidth(70),
                  height: responsiveHeight(14),
                }}
                numberOfLines={4}
              />
              <Fields
                control={control}
                name={'LongDescription'}
                placeholder={'Long Description'}
                style={styles.longdisc}
                error={errors}
                placeholdercolor={'#fff'}
                multiline={true}
                inputstyle={{
                  width: responsiveWidth(70),
                  height: responsiveHeight(20),
                }}
                numberOfLines={8}
              />
            </View>
            <CoustomButton
              bgcolor={'red'}
              text={'Upload'}
              textStyle={{fontSize: responsiveFontSize(2)}}
              textcolor={'#fff'}
              width={responsiveWidth(80)}
              //   onPress={}
              self
              style={{
                borderRadius: responsiveWidth(10),
                marginTop: responsiveHeight(3),
                zIndex: 999,
              }}
            />
          </ImageBackground>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default AddVideo;

const styles = StyleSheet.create({
  videotitle: {
    alignSelf: 'center',
    backgroundColor: '#FFFFFF21',
    borderRadius: responsiveWidth(5),
    marginTop: responsiveHeight(2),
    zIndex: 999,
  },
  shortdisc: {
    alignSelf: 'center',
    backgroundColor: '#FFFFFF21',
    borderRadius: responsiveWidth(5),
    height: responsiveHeight(15),
    alignItems: 'baseline',
    marginTop: responsiveHeight(2),
    zIndex: 999,
  },
  longdisc: {
    alignSelf: 'center',
    backgroundColor: '#FFFFFF21',
    borderRadius: responsiveWidth(5),
    height: responsiveHeight(22),
    alignItems: 'baseline',
    marginTop: responsiveHeight(2),
    zIndex: 999,
  },
  logoplusbtn: {
    position: 'absolute',
    height: responsiveHeight(7),
    width: responsiveHeight(7),
    tintColor: 'red',
    alignSelf: 'center',
    marginTop: responsiveHeight(6),
  },
  settingTopBackground: {
    height: responsiveHeight(15),
    width: responsiveWidth(50),
    borderRadius: responsiveWidth(5),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsiveHeight(2),
    shadowOpacity: 20,
    opacity: 5,
  },
  settingBottomBackground: {
    height: responsiveHeight(80),
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: responsiveHeight(4),
  },
});
