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
import React, {useEffect, useState} from 'react';
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
import {
  useGetEquipmentdataQuery,
  useUpdateEquipmentdataMutation,
} from '../../../store/Trainer';
import {useSelector} from 'react-redux';
import useToast from '../../../Hooks/useToast';
import MsgModal from '../../../Common/MassegeModal/MsgModal';

const win = Dimensions.get('window');

export default function ProfileScreen({navigation}) {
  const id = useSelector(state => state.userSlice.user._id);
  console.log(id);
  const {data, error} = useGetEquipmentdataQuery(id);
  const userData = data?.user;
  console.log(userData);
  const [edit, setEdit] = useState();
  const [update, setUpdate] = useState({
    firstName: userData?.firstName,
    lastName: userData?.lastName,
    email: userData?.email,
    address: userData?.address,
  });
  const [setSavedata, {isError, isLoading, status}] =
    useUpdateEquipmentdataMutation();
  const {showToast} = useToast();
  const handlesave = async () => {
    let data = {
      firstName: update?.firstName,
      lastName: update?.lastName,
      email: update?.email,
      address: update?.address,
    };
    console.log('==>>>>>>>>>>>>>>>data', data);
    const response = await setSavedata(id, data);
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
      <View className="m-[25] flex flex-row items-center mt-10 ">
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image source={backIcon} />
        </TouchableOpacity>
        <Text className="flex flex-row items-center m-auto text-white font-bold text-lg justify-center">
          Profile
        </Text>
      </View>

      <View className="flex items-center justify-center rounded-xl">
        <ImageBackground
          source={settingTopBackground}
          className="flex items-center w-[350] p-8 relative">
          <Image source={profileImage} />
          {/* <Image
            source={profilePencil}
            className="absolute top-20 right-[110]"
          /> */}
          <Text className="text-white text-lg">
            {userData?.firstName} {userData?.lastName}
          </Text>
          <Text className="text-[#353535] text-sm">{userData?.email}</Text>

          <View className="mt-10">
            <View className="bg-[#FFFFFF15]  w-[300] rounded-full flex items-center flex-row justify-between ">
              <TextInput
                className="pl-4 w-[90%]"
                placeholder="Dylan Meringue"
                placeholderTextColor={'#fff'}
                editable={edit == 1}
                value={update.firstName}
                style={{color: '#fff'}}
                onChangeText={pre =>
                  setUpdate(txt => ({...txt, firstName: pre}))
                }
              />
              <Pressable
                onPress={() => {
                  setEdit(edit == 1 ? false : 1);
                }}>
                <Image source={pencilIcon} className="mr-3  " />
              </Pressable>
            </View>
            {isLoading ? <MsgModal loader={true} /> : null}
            <View className="bg-[#FFFFFF15] w-[300] mt-3 rounded-full flex items-center flex-row justify-between">
              <TextInput
                className="pl-4 w-[90%]"
                placeholder="+880 000 111 333"
                placeholderTextColor={'#fff'}
                editable={edit == 2}
                value={update.lastName}
                style={{color: '#fff'}}
                onChangeText={pre =>
                  setUpdate(txt => ({...txt, lastName: pre}))
                }
              />
              <TouchableOpacity
                onPress={() => {
                  setEdit(edit == 2 ? false : 2);
                }}>
                <Image source={pencilIcon} className="mr-3  " />
              </TouchableOpacity>
            </View>

            <View className="bg-[#FFFFFF15]  w-[300] mt-3 rounded-full flex items-center flex-row justify-between">
              <TextInput
                className="pl-4 w-[90%]"
                placeholder="@dylanmeringue.com"
                placeholderTextColor={'#fff'}
                editable={edit == 3}
                value={update.email}
                style={{color: '#fff'}}
                onChangeText={pre => setUpdate(txt => ({...txt, email: pre}))}
              />
              <TouchableOpacity
                onPress={() => {
                  setEdit(edit == 3 ? false : 3);
                }}>
                <Image source={pencilIcon} className="mr-3  " />
              </TouchableOpacity>
            </View>

            <View className="bg-[#FFFFFF15] w-[300] mt-3 rounded-full flex items-center flex-row justify-between z-50">
              <TextInput
                className="pl-4 w-[90%]"
                placeholder="Iris Watson P.O. Box 283 8562"
                placeholderTextColor={'#fff'}
                numberOfLines={2}
                editable={edit == 4}
                value={update.address}
                style={{color: '#fff'}}
                onChangeText={pre => setUpdate(txt => ({...txt, address: pre}))}
              />
              <Pressable
                onPress={() => {
                  setEdit(pre => (pre == 4 ? false : 4));
                }}>
                <Image source={pencilIcon} className="mr-3  " />
              </Pressable>
            </View>
          </View>

          <Pressable
            onPress={handlesave}
            className="bg-[#BE1721] rounded-full w-[300] h-[43] items-center justify-center mt-4">
            <Text className="text-white font-bold">Save Now</Text>
          </Pressable>
        </ImageBackground>
      </View>
      <Text
        className="text-[#ACACAC] opacity-50 text-center
          mt-2">
        Terms of Use Privacy Policy
      </Text>
    </ImageBackground>
    // </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({});
