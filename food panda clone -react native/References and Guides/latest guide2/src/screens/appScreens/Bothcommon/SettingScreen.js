import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import background from '../../.././assets/app-background.jpg';
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
import ellipseOne from '../../../assets/setting-ellipse-1.png';
import ellipseTwo from '../../../assets/setting-ellipse-2.png';
import {DrawerActions} from '@react-navigation/native';
import Popup from '../../../components/Popup';
import Error from '../../../components/Error';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import LogoutDelete from '../../../components/LogoutDelete';

const win = Dimensions.get('window');

export default function SettingScreen({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteState, setDeleteState] = useState(false);
  const [logoutState, setLogoutState] = useState(false);

  return (
    // <View className="w-full h-full relative">
    <ImageBackground source={background} className="w-full h-full relative">
      <Image source={ellipseOne} className="absolute right-0" />
      <Image source={ellipseTwo} className="absolute right-0" />
      <View className="m-[25] flex flex-row items-center mt-12">
        <Pressable
          className="p-2"
          onPress={() => {
            navigation.navigate('Home2');
          }}>
          <Image source={backIcon} />
        </Pressable>

        <Text className="flex flex-row items-center m-auto text-white font-bold text-lg justify-center">
          Settings
        </Text>
      </View>
      <View className="flex items-center justify-center rounded-[20px] overflow-hidden">
        <ImageBackground
          source={settingTopBackground}
          className="flex items-center w-[350] p-4">
          <Image source={profileImage} />
          <Text className="text-white font-bold text-lg">Dylan Meringue</Text>
          <Text className="text-[#353535] text-sm">@dylanmeringue</Text>
        </ImageBackground>
      </View>
      <View className="flex items-center mt-3">
        <ImageBackground
          source={settingBottomBackground}
          className="w-[350] h-[380] rounded-xl overflow-hidden object-cover">
          <Pressable className="flex items-center justify-center">
            <Pressable
              onPress={() => navigation.navigate('settingsProfile')}
              className="flex flex-row items-center w-3/4 justify-between my-2">
              <View className="flex flex-row items-center">
                <Image source={profileIcon} />
                <Text className="text-white font-semibold text-lg ml-4">
                  Profile
                </Text>
              </View>
              <Image source={rightArrowIcon} />
            </Pressable>
          </Pressable>
          <View className="flex items-center justify-center">
            <Pressable className="flex flex-row items-center w-3/4 justify-between my-2">
              <View className="flex flex-row items-center">
                <Image source={classIcon} />
                <Text className="text-white font-semibold text-lg ml-4">
                  Add Certificate
                </Text>
              </View>
              <Image source={rightArrowIcon} />
            </Pressable>
          </View>
          <View className="flex items-center justify-center">
            <Pressable
              onPress={() => {
                navigation.navigate('settingsContact');
              }}
              className="flex flex-row items-center w-3/4 justify-between my-2">
              <View className="flex flex-row items-center">
                <Image source={contactIcon} />
                <Text className="text-white font-semibold text-lg ml-4">
                  Contact Us
                </Text>
              </View>
              <Image source={rightArrowIcon} />
            </Pressable>
          </View>
          <View className="flex items-center justify-center">
            <Pressable
              onPress={() => navigation.navigate('settingsPrivacyPolicy')}
              className="flex flex-row items-center w-3/4 justify-between my-2">
              <View className="flex flex-row items-center">
                <Image source={privacyIcon} />
                <Text className="text-white font-semibold text-lg ml-4">
                  Privacy Policy
                </Text>
              </View>
              <Image source={rightArrowIcon} />
            </Pressable>
          </View>
          <View className="flex items-center justify-center">
            <Pressable
              onPress={() => navigation.navigate('settingsFaq')}
              className="flex flex-row items-center w-3/4 justify-between my-2">
              <View className="flex flex-row items-center">
                <Image source={faqIcon} />
                <Text className="text-white font-semibold text-lg ml-4">
                  App FAQs
                </Text>
              </View>
              <Image source={rightArrowIcon} />
            </Pressable>
          </View>
          <View className="flex items-center justify-center">
            <Pressable
              className="flex flex-row items-center w-3/4 justify-between my-2"
              // onPress={() => setDeleteState(true)}
            >
              <View className="flex flex-row items-center">
                <Image source={deleteIcon} />
                <Text className="text-white font-semibold text-lg ml-4">
                  Delete Account
                </Text>
              </View>
              <Image source={rightArrowIcon} />
            </Pressable>
          </View>
          <View className="flex items-center justify-center">
            <Pressable
              // onPress={() => {}}
              className="flex flex-row items-center w-3/4 justify-between my-2">
              <View className="flex flex-row items-center">
                <Image source={logoutIcon} />
                <Text className="text-white font-semibold text-lg ml-4">
                  Logout
                </Text>
              </View>
              <Image source={rightArrowIcon} />
            </Pressable>
          </View>
        </ImageBackground>
      </View>
      <Text
        className="text-[#ACACAC] opacity-50 text-center
        mt-2">
        Terms of Use Privacy Policy
      </Text>
      {deleteState && (
        <View className="absolute h-screen w-screen flex items-center justify-center m-auto z-[99999]">
          <LogoutDelete
            heading="Delete Account"
            text="Are you sure you want to delete your account?"
            navigation={navigation}
            setDeleteState
            myFunction={delete_api}
          />
        </View>
      )}
      {logoutState && (
        <View className="absolute h-screen w-screen flex items-center justify-center m-auto z-[99999]">
          <LogoutDelete
            heading="Logout Account"
            text="Are you sure you want to logout your account?"
            navigation={navigation}
            setDeleteState
            // myFunction={logout_api}
          />
        </View>
      )}
      {/* {modalVisible && (
        <Popup
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          name={'Logout'}
        />
      )} */}
    </ImageBackground>

    // </View>
  );
}

const styles = StyleSheet.create({});
