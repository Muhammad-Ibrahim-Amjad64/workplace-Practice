import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import introOneImage from '../assets/intro-one-image.png';
import introOneDots from '../assets/intro-one-dots.png';
import arrow from '../assets/arrow.png';
import LinearGradient from 'react-native-linear-gradient';

const win = Dimensions.get('window');

export default function IntroScreenComponent({
  heading,
  text,
  dotSource,
  backgroundImage,
  action,
  navigation,
  routedTo,
}) {
  return (
    <SafeAreaView className="relative w-full min-h-screen bg-black">
      <View className="bg-black h-3/4 w-full">
        <Image
          source={backgroundImage}
          style={{
            resizeMode: 'contain',
          }}
          className="w-[100%] h-[78%] rounded-br-[80] -z-10 rounded-bl-[-100] bg-no-repeat"
        />
      </View>

      <View
        className={`bg-black h-1/4 absolute rounded-tl-[80] top-[60%] z-50 bottom-0 w-full`}>
        <View className="m-7">
          <Text className="text-white font-bold text-3xl">{heading}</Text>
          <Text className="text-white my-5 text-md">{text}</Text>

          <View className="flex flex-row justify-between items-center">
            <Image source={dotSource} />
            {action === 'arrow' ? (
              <Pressable onPress={() => navigation.navigate(routedTo)}>
                <LinearGradient
                  colors={['#ff3636', '#be1721']}
                  className="flex items-center justify-center rounded-full p-4">
                  <Image source={arrow} />
                </LinearGradient>
              </Pressable>
            ) : (
              //   <Pressable className="h-[40] w-[120] border rounded-full flex items-center justify-center">
              <Pressable onPress={() => navigation.navigate(routedTo)}>
                <LinearGradient
                  colors={['#ff3636', '#be1721']}
                  className="w-[120] h-[40] flex items-center justify-center rounded-full">
                  <Text className="text-md font-bold text-white">
                    Get Started
                  </Text>
                </LinearGradient>
              </Pressable>
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
