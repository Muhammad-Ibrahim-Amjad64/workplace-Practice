import {
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import Logo from '../../assets/logo-full.png';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from 'react-native-gesture-handler';
// import { useRoute } from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';

const WelcomeScreen = ({sheet, setSheet}) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className={`bg-black   ${sheet ? 'opacity-[0.7]' : ''}`}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <View className="h-1/4 bg-white">
        <View className="flex-1 bg-black rounded-br-[50] justify-center items-center">
          <Image source={Logo} />
        </View>
      </View>
      <View className="h-3/4 bg-black">
        <View className="flex-1 bg-white rounded-tl-[50] items-center justify-around px-10">
          <View>
            <Text className="text-5xl font-bold leading-[50px] tracking-wide text-black">
              Welcome to the Stern's Gym
            </Text>
            <Text className="text-gray-500 font-normal text-sm leading-4 pr-[10%] my-2">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.{' '}
            </Text>
          </View>
          <View>
            <Pressable onPress={() => navigation.navigate('authStack')}>
              <LinearGradient
                colors={['#ff3636', '#be1721']}
                style={{
                  width: 300,
                  height: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 8,
                }}>
                <Text className="text-white font-bold text-base">Login</Text>
              </LinearGradient>
            </Pressable>
            <View className="my-[7%] flex flex-row items-center  justify-center ">
              <Text className="text-xs text-gray-600 font-normal leading-4 ">
                Didn't Have an account?{' '}
              </Text>
              <TouchableOpacity onPress={() => setSheet(!sheet)}>
                <Text className="font-medium text-red-700">Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
export default WelcomeScreen;
