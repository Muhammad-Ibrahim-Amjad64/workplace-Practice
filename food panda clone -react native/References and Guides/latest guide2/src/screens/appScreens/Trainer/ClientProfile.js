import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import React from 'react';
import background from '../../../assets/background.jpg';
import Icon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import client from '../../../assets/client.png';
import goldMember from '../../../assets/goldMember.png';
import chatIcon from '../../../assets/chatIcon.png';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import exercise from '../../../assets/exercise.png';

const ClientProfile = ({navigation}) => {
  return (
    // <View contentContainerStyle={{flexGrow: 1}}>
    <ImageBackground source={background} className="flex-1">
      {/* header */}
      <View className="flex-row justify-between mt-[5vh] mx-[3vh]">
        <Pressable onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-outline" size={26} color="#fff" />
        </Pressable>
        <Text className="text-white text-lg">Client Profile</Text>
        <View></View>
        {/* <Entypo name="dots-three-vertical" size={26} color="#Fff" /> */}
      </View>
      {/* profile section */}
      <View className="">
        <Image
          source={client}
          className="w-[95vw]  rounded-xl mt-[3vh] self-center "
          resizeMode="contain"
        />
        <Image source={goldMember} className="absolute left-4 mt-[4vh]" />
      </View>

      {/* details section */}
      <View className="rounded-xl overflow-hidden w-[95vw] self-center mt-[3vh]">
        <ImageBackground source={background} resizeMode="cover">
          <View className="px-[4vw] py-[4vw]">
            <View className="flex-row justify-between mb-2 ">
              <View>
                <Text className="text-white text-xl">Feddy Moe</Text>
              </View>
              <Pressable
                onPress={() => {
                  navigation.navigate('Inner');
                }}
                className="bg-[#BE1721] p-2 px-5 flex-row rounded-full justify-center">
                <Icon
                  name="chatbox-ellipses-outline"
                  size={16}
                  color="#fff"
                  alignSelf="center"
                  marginRight={5}
                />
                <Text className="text-white font-medium">Chat</Text>
              </Pressable>
            </View>
            <View className="flex-row ">
              <Entypo
                name="location-pin"
                size={25}
                color="#Fff"
                marginRight={7}
              />

              <Text className="text-gray-400 text-[12px] w-[60%]">
                2972 Westheimer Rd. Santa Ana, Illinois 85486{' '}
              </Text>
            </View>

            <View>
              <Text className="text-white  font-semibold my-2 text-xl">
                About
              </Text>
              <Text className="text-gray-400 text-[12px]">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </ImageBackground>
    // </View>
  );
};

export default ClientProfile;

const styles = StyleSheet.create({});
