import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import background from '../../../assets/app-background.jpg';
import backIcon from '../../../assets/back-icon.png';
import profileImage from '../../../assets/setting-profile-image.png';
import profileIcon from '../../../assets/profile-icon.png';
import classIcon from '../../../assets/class-icon.png';
import contactIcon from '../../../assets/contact-icon.png';
import privacyIcon from '../../../assets/privacy-icon.png';
import faqIcon from '../../../assets/faq-icon.png';
import deleteIcon from '../../../assets/delete-icon.png';
import logoutIcon from '../../../assets/logout-icon.png';
import rightArrowIcon from '../../../assets/right-arrow.png';
import settingBottomBackground from '../../../assets/setting-bottom-background.png';
import settingTopBackground from '../../../assets/setting-top-background.png';
import ellipseOne from '../../../assets/profile-ellipse-1.png';
import ellipseTwo from '../../../assets/profile-ellipse-2.png';
import pencilIcon from '../../../assets/pencil.png';
import profilePencil from '../../../assets/profile-pencil.png';
import email from '../../../assets/EmailIcon.png';
import call from '../../../assets/CallIcon.png';
import location from '../../../assets/locationIcon.png';
import {useForm} from 'react-hook-form';
import Fields from '../../../Common/Fields/Fields';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useContectusMutation} from '../../../store/Trainer';
import useToast from '../../../Hooks/useToast';
import MsgModal from '../../../Common/MassegeModal/MsgModal';
const win = Dimensions.get('window');

const ContactInner = ({navigation}) => {
  const {
    formState: {errors},
    control,
    handleSubmit,
  } = useForm();
  const [setcontectus, {status, isLoading}] = useContectusMutation();
  const {showToast} = useToast();
  const onSubmit = async data => {
    const response = await setcontectus(data);

    if (response.data) {
      showToast('success', 'Success', 'Your request sent to Admin', 5000);
      navigation.goBack();
    } else {
      showToast('error', 'error', 'you can`t sent request', 5000);
      console.log(response.error);
    }
  };
  return (
    // <TouchableWithoutFeedback
    //   onPress={Keyboard.dismiss}
    //   className="w-full h-full relative">
    <ImageBackground source={background} className="w-full h-full relative">
      <View className="mx-[25] my-[25] flex flex-row items-center mt-10">
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}>
          <Image source={backIcon} />
        </Pressable>
        <Text className="flex flex-row items-center m-auto text-white font-bold text-lg justify-center">
          Contact Us
        </Text>
      </View>
      <View className="flex items-center  rounded-[20px] overflow-hidden">
        <ImageBackground
          source={settingTopBackground}
          className="flex items-center w-[350] p-4">
          <Text className="text-white font-bold text-lg">Company Info</Text>
          <Text className="text-[#353535] text-sm">
            Fitness is not a destination it is a way of life
          </Text>
          <View className="flex flex-row justify-evenly">
            <View className="flex justify-center items-center m-2 ">
              <Image source={email} />
              <Text className="text-white">Email</Text>
              <Text className="text-white text-[8px]">SternsGym@gmail.com</Text>
            </View>
            <View className="flex justify-center items-center m-2">
              <Image source={call} />
              <Text className="text-white">Call</Text>
              <Text className="text-white text-[8px]">SternsGym@gmail.com</Text>
            </View>
            <View className="flex justify-center items-center m-2">
              <Image source={location} />
              <Text className="text-white">Location</Text>
              <Text className="text-white text-[8px]">SternsGym@gmail.com</Text>
            </View>
          </View>
        </ImageBackground>
      </View>

      <View className="flex items-center justify-center mt-2  rounded-xl ">
        <ImageBackground
          source={settingTopBackground}
          className="flex items-center w-[350] px-8 py-2 relative">
          <Text className="text-white text-lg">Ask Us Anything</Text>
          <Text className="text-[#353535] text-sm">
            Have a question? Need more info?
          </Text>
          {isLoading ? <MsgModal loader={true} /> : null}
          <View className="mt-4">
            <View>
              <Fields
                control={control}
                name={'name'}
                placeholder={'Name'}
                style={styles.videotitle}
                error={errors}
                placeholdercolor={'#fff'}
                inputstyle={{
                  width: responsiveWidth(70),
                }}
              />
            </View>

            <View>
              <Fields
                control={control}
                name={'email'}
                placeholder={'Email'}
                style={styles.videotitle}
                error={errors}
                placeholdercolor={'#fff'}
                inputstyle={{
                  width: responsiveWidth(70),
                }}
              />
            </View>

            <View>
              <Fields
                control={control}
                name={'phoneNumber'}
                placeholder={'Phone Number'}
                style={styles.videotitle}
                error={errors}
                placeholdercolor={'#fff'}
                inputstyle={{
                  width: responsiveWidth(70),
                }}
                keyboardnumber
              />
            </View>

            <View>
              <Fields
                control={control}
                name={'message'}
                placeholder={'Message'}
                style={styles.shortdisc}
                error={errors}
                placeholdercolor={'#fff'}
                inputstyle={{
                  width: responsiveWidth(70),
                  height: responsiveHeight(13.5),
                }}
                multiline={true}
                numberOfLines={6}
              />
            </View>
          </View>

          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            className="bg-[#BE1721] rounded-full w-[300] h-[43] items-center justify-center mt-4">
            <Text className="text-white font-bold">Contact Us</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
      <Text
        className="text-[#ACACAC] opacity-50 text-center
        mt-2">
        Terms of Use Privacy Policy
      </Text>

      {/* <Image source={ellipseOne} className="absolute bottom-0 right-0" />
        <Image source={ellipseTwo} className="bottom-[230] left-[50]" /> */}
    </ImageBackground>
    // </TouchableWithoutFeedback>
  );
};

export default ContactInner;

const styles = StyleSheet.create({
  videotitle: {
    alignSelf: 'center',
    backgroundColor: '#FFFFFF21',
    borderRadius: responsiveWidth(5),
    marginTop: responsiveHeight(1),
    zIndex: 999,
  },
  shortdisc: {
    alignSelf: 'center',
    backgroundColor: '#FFFFFF21',
    borderRadius: responsiveWidth(5),
    height: responsiveHeight(15),
    alignItems: 'baseline',
    marginTop: responsiveHeight(1),
    zIndex: 999,
  },
});
