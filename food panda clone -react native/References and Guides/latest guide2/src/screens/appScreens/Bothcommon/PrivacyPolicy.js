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

const win = Dimensions.get('window');

export default function PrivacyPolicy({navigation}) {
  return (
    // <TouchableWithoutFeedback
    //   onPress={Keyboard.dismiss}
    //   className="w-full h-full relative">
    <ImageBackground source={background} className="w-full h-full relative">
      <View className="m-[25] flex flex-row items-center mt-12 ">
        <Pressable
          onPress={() => {
            navigation.pop();
          }}>
          <Image source={backIcon} />
        </Pressable>
        <Text className="flex flex-row items-center m-auto text-white font-bold text-lg justify-center">
          Privacy Policy
        </Text>
      </View>
      <View className="flex-1 items-center mx-10 mt-6">
        <ImageBackground
          source={settingTopBackground}
          className="flex items-center w-[350] p-8 relative ">
          <Text className="text-[#BDBDBD] text-center ">
            Donec quam quam, consequat ut est sit amet, tincidunt bibendum orci.
            Vestibulum in volutpat risus. Donec vestibulum sagittis leo, ut
            iaculis dolor ultrices vel. Praesent mauris justo, suscipit id
            venenatis id, dignissim ac justo. Praesent pellentesque vel lacus
            vitae iaculis. Donec efficitur placerat nulla sodales consectetur.
          </Text>
          <Text></Text>
          <Text className="text-[#BDBDBD] text-center w-[90%]">
            Sed rhoncus urna in eros hendrerit auctor. Vestibulum ante ipsum
            primis in faucibus orci luctus et ultrices posuere cubilia Curae;
            Aliquam nec tempor mi. Nulla efficitur, nunc quis placerat rutrum,
            odio ligula elementum erat, nec rutrum nibh nisi non tellus.
          </Text>
          <Text></Text>

          <Text className="text-[#BDBDBD] text-center w-[90%]">
            Sed Malesuade Mauris felis felis, malesuada a est vitae, ultricies
            ullamcorper orci. Sed malesuada imperdiet velit ac tincidunt.
            Integer quis est a arcu tempor facilisis. Integer ullamcorper justo
            gravida turpis posuere fermentum. Sed viverra lacus odio, id
            condimentum magna consectetur ac. Curabitur facilisis, ante ac
            imperdiet tempus, nulla tortor egestas lorem, id tempus libero nisi
            quis magna. Aenean euismod dolor a turpis.
          </Text>
        </ImageBackground>
      </View>
      <Image source={ellipseOne} className="absolute bottom-0 right-0" />
      <Image source={ellipseTwo} className="bottom-[230] left-[50]" />
    </ImageBackground>
    // </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({});
