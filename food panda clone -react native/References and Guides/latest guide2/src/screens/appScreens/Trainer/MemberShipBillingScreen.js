import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React from 'react';
import background from '../../../assets/background.jpg';
import Icon from 'react-native-vector-icons/Ionicons';
import blurdiv from '../../../assets/blurdiv.png';
import Entypo from 'react-native-vector-icons/Entypo';
import logovisa from '../../../assets/logovisa.png';
import gold from '../../../assets/gold.png';
import premium from '../../../assets/premium.png';
import silver from '../../../assets/silver.png';
import LinearGradient from 'react-native-linear-gradient';
import {DrawerActions} from '@react-navigation/native';

const MemberShipBillingScreen = ({navigation}) => {
  return (
    <View contentContainerStyle={{flexGrow: 1}}>
      <ImageBackground source={background} className=" w-full  h-full ">
        {/* header */}
        <View className="flex-row ml-4 my-8 mt-12">
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon name="arrow-back-outline" size={26} color="#fff" />
          </TouchableOpacity>
          <Text className="text-white text-lg font-bold text-center flex items-center justify-center m-auto">
            Membership & Billing Details
          </Text>
        </View>
        <View>
          <Text className="text-white text-[15px] mx-4">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.{' '}
          </Text>
        </View>

        <View className="py-6 mx-3 ">
          <ImageBackground
            source={blurdiv}
            resizeMode="cover"
            className="rounded-xl overflow-hidden">
            <View className="flex-row ml-5 my-3 ">
              <Image source={logovisa} className=" self-center" />
              <Text className="text-[#A3A3A3] text-lg ml-8">
                **** **** **** 1234
              </Text>
            </View>
            <View>
              <Text className="text-[#A3A3A3] text-[12px] ml-5 mb-3">
                Your next billing date is March 16 2023
              </Text>
            </View>
            <View className="flex-row justify-between px-5">
              <Text className="text-white font-bold text-[15px] mb-3">
                Billing Details
              </Text>
              <Text className="text-white font-bold text-[15px]">Edit</Text>
            </View>
          </ImageBackground>
        </View>

        <View>
          <Text className="text-white text-lg left-5 font-semibold ">
            Choose Plan
          </Text>
        </View>

        <View className="py-3 mx-4 ">
          <ImageBackground
            source={blurdiv}
            className="rounded-xl overflow-hidden">
            <View className="flex-row px-2 rounded-lg py-4 bg-[#BE1721] ">
              <View>
                <Image source={silver}></Image>
              </View>
              <View className="ml-4">
                <Text className="text-white text-[16px]">Silver</Text>
                <Text className="text-[#A3A3A3] text-[12px]">
                  Amet minim mollit non desernut ullamco
                </Text>
              </View>
            </View>
          </ImageBackground>
        </View>

        <View className="mx-4 ">
          <ImageBackground
            source={blurdiv}
            className="rounded-xl overflow-hidden">
            <View className="flex-row px-2 rounded-lg py-4 ">
              <View>
                <Image source={premium}></Image>
              </View>
              <View className="ml-4">
                <Text className="text-white text-[16px]">Platium</Text>
                <Text className="text-[#A3A3A3] text-[12px]">
                  Amet minim mollit non desernut ullamco
                </Text>
              </View>
            </View>
          </ImageBackground>
        </View>

        <View className="py-3 mx-4 ">
          <ImageBackground
            source={blurdiv}
            className="rounded-xl overflow-hidden">
            <View className="flex-row px-2 rounded-lg py-4">
              <View>
                <Image source={gold}></Image>
              </View>
              <View className="ml-4">
                <Text className="text-white text-[16px]">Gold</Text>
                <Text className="text-[#A3A3A3] text-[12px]">
                  Amet minim mollit non desernut ullamco
                </Text>
              </View>
            </View>
          </ImageBackground>
        </View>

        <TouchableOpacity className="mt-2">
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 0, y: 2}}
            colors={['#FF3636', '#BE1721']}
            className="h-[50] w-[90%] rounded-xl ml-auto mr-auto">
            <Text className="text-white text-[17px] font-bold text-center mt-[14]">
              Cancel Membership
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default MemberShipBillingScreen;

const styles = StyleSheet.create({});
