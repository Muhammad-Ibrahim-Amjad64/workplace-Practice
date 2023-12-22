import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  SafeAreaView,
  Pressable,
  ImageBackground,
  StatusBar,
} from 'react-native';
import welcome from '../../assets/welcomeScreen.png';
import Logo from '../../assets/welcomeLogo.png';
import dumbel from '../../assets/dumbel.png';
import React from 'react';
import introOneImage from '../../assets/intro-one-image.png';
import introOneDots from '../../assets/intro-one-dots.png';
import arrow from '../../assets/arrow.png';
import contestprep from '../../assets/contestprep.png';
import Accountabilty from '../../assets/Accountabilty.png';
import muscletoning from '../../assets/muscletoning.png';
import nutriton from '../../assets/nutriton.png';
import weight1 from '../../assets/weight1.png';
import strngh from '../../assets/strngh.png';

import IntroScreenComponent from '../../components/IntroScreenComponent';
import Icon from 'react-native-vector-icons/Ionicons';

const win = Dimensions.get('window');

export default function IntroScreenOne({navigation}) {
  return (
    <SafeAreaView className="flex-1 h-full">
      <StatusBar
        translucent={true}
        barStyle={'light-content'}
        backgroundColor={'transparent'}
      />
      <View className="flex-1 bg-black ">
        <View className="flex-[0.7]">
          <Image source={Logo} className="flex mx-auto mt-24" />
          <View>
            <Text className="text-[#6D6D6D] my-4 flex items-center  font-medium text-[10px] px-20 text-center">
              UNLIMITED ACCESS TO THE WORLD'S BEST TRAINERS TRAINING SINCE 1946
            </Text>
          </View>
          <View>
            <View className="flex flex-row justify-evenly w-[80%] my-1  left-2">
              <View
                className="border-[1px] ml-[11] flex items-center rounded-lg border-white
               h-24 w-24 align-center justify-center">
                <Image source={dumbel} />
                <Text className="text-white text-[10px] mt-2">
                  BODYBUILDING
                </Text>
              </View>
              <View
                className="border-[1px] ml-[11] flex items-center rounded-lg border-white
               h-24 w-24 align-center justify-center">
                <Image source={strngh} />
                <Text className="text-white text-[10px] mt-2">
                  Strength Training
                </Text>
              </View>
              <View
                className="border-[1px] ml-[11] flex items-center rounded-lg border-white
               h-24 w-24 align-center justify-center">
                <Image source={muscletoning} />
                <Text className="text-white text-[10px] mt-2">
                  Muscle Toning
                </Text>
              </View>
            </View>
            <View className="flex flex-row ml-[53px] my-1  right-12">
              <View
                className="border-[1px] ml-[11] flex items-center rounded-lg border-white
               h-24 w-24 align-center justify-center">
                <Image source={nutriton} />
                <Text className="text-white text-[10px] mt-2">Nutrition</Text>
              </View>
              <View
                className="border-[1px] ml-[11] flex items-center rounded-lg border-white
               h-24 w-24 align-center justify-center">
                <Image source={weight1} />
                <Text className="text-white text-[10px] mt-2">Weight Loss</Text>
              </View>
              {/* <View className="border-[1px]  flex items-center rounded-lg border-white  px-2 py-4">
              <Image source={dumbel} />
              <Text className="text-white text-[10px] mt-2">BODYBUILDING</Text>
            </View> */}
            </View>
            <View className="flex flex-row ml-[53px] my-1 right-12">
              <View
                className="border-[1px] ml-[11] flex items-center rounded-lg border-white
               h-24 w-24 align-center justify-center">
                <Image source={Accountabilty} />
                <Text className="text-white text-[10px] mt-2">
                  Accountability
                </Text>
              </View>
              <View
                className="border-[1px] ml-[11] flex items-center rounded-lg border-white
               h-18 w-24 align-center justify-center">
                <Image source={contestprep} />
                <Text className="text-white text-[10px] mt-2 text-center">
                  {'Contest Prep \n& More'}
                </Text>
              </View>
              {/* <View className="border-[1px]  flex items-center rounded-lg border-white  px-2 py-4">
              <Image source={dumbel} />
              <Text className="text-white text-[10px] mt-2">BODYBUILDING</Text>
            </View> */}
            </View>
          </View>
        </View>
        <View className="absolute bottom-12 right-[-125]">
          <Image source={welcome} />
          <Pressable
            onPress={() => navigation.navigate('introTwo')}
            className="bg-[#FF3636] absolute bottom-5 left-40 rounded-full mx-auto p-3">
            <Icon name="arrow-forward-outline" size={26} color="#fff" />
          </Pressable>
        </View>

        {/* <ImageBackground
          source={welcome}
          className="flex-1"
          resizeMode="cover"></ImageBackground> */}
      </View>
    </SafeAreaView>
  );
}
