import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import introTwoImage from '../../assets/intro-two-image.png';
import introTwoDots from '../../assets/intro-two-dots.png';
import arrow from '../../assets/arrow.png';
import IntroScreenComponent from '../../components/IntroScreenComponent';
import about_bg from '../../assets/about-bg.png';
import check from '../../assets/check.png';

const win = Dimensions.get('window');

export default function IntroScreenTwo({navigation}) {
  const [checked, setChecked] = useState(true);

  const handleClick = role => {
    setChecked(!checked);
    if (role == 'trainer') {
      navigation.navigate('Certified');
    }
    if (role == 'trainee') {
      navigation.navigate('Trainee');
    }
  };
  return (
    <SafeAreaView className="bg-black h-full">
      <StatusBar
        translucent={true}
        barStyle={'light-content'}
        backgroundColor={'transparent'}
      />
      <View className="bg-black h-3/4 w-full">
        <Image
          source={about_bg}
          resizeMode="contain"
          style={{}}
          className="w-[100%] h-[100%] rounded-br-[80] -z-10 rounded-bl-[-100] bg-no-repeat"
        />
      </View>

      <View
        className={` h-1/4 absolute rounded-tl-[80] top-[40%] z-50 bottom-0 w-full`}>
        <View className="m-7">
          <Text className="text-white font-bold text-3xl">About</Text>
          <Text className="text-white font-bold text-3xl">Stern's GYM</Text>
          <Text className="text-white my-2 text-xs">
            Stern's Gym is champ in providing its users with absolutely
            everything in finest. Stern’s is also the gym of choice for some of
            San Diego’s finest personal trainers. From weight loss specialist to
            power lifting coaches to retired pro bodybuilders we know a great.
            Certified trainer who can help you no matter what your goals are.
          </Text>
          <View className="flex flex-row gap-x-3.5 w-[100%]">
            <TouchableOpacity
              onPress={() => handleClick('trainer')}
              className="bg-[#9B1111] border border-white w-[50%] rounded-[10px] p-4  box-border  ">
              <View className="relative ">
                <View
                  className={`absolute right-0 ${
                    checked ? 'bg-white' : 'bg-[#3C3C3C]'
                  }  rounded-full w-[28px] h-[28px]`}>
                  {checked && (
                    <Image
                      className="w-[60%] flex m-auto mb-[5px]"
                      source={check}
                    />
                  )}
                </View>
                <View className="mt-8">
                  <Text className="text-white font-bold text-2xl ">
                    Certified
                  </Text>
                  <Text className="text-white font-bold text-2xl leading-[25px] ">
                    Coach
                  </Text>
                  <Text className="text-white font-bold text-[10px] w-[80%]">
                    Click here to continue as a certified coach
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handleClick('trainee')}
              className="border border-white w-[50%] rounded-[10px] p-4  box-border">
              <View className="relative">
                <View
                  className={`absolute right-0 ${
                    !checked ? 'bg-white' : 'bg-[#3C3C3C]'
                  }  rounded-full w-[28px] h-[28px]`}>
                  {!checked && (
                    <Image
                      className="w-[60%] flex m-auto mb-[5px]"
                      source={check}
                    />
                  )}
                </View>
                <View className="mt-8">
                  <Text className="text-white font-bold text-2xl ">
                    Pick Your
                  </Text>
                  <Text className="text-white font-bold text-2xl leading-[25px] ">
                    Coach
                  </Text>
                  <Text className="text-white font-bold text-[10px] w-[80%]">
                    if you’re an individual want to pick your coach
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View className="mt-2 flex flex-row justify-center gap-x-2 ">
            <Text className="text-white text-center ">
              Do you have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text className="text-red-900 text-[16px] font-bold">Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: win.width,
    height: win.height,
  },
  modalContainer: {
    backgroundColor: '#000',
    position: 'absolute',
    width: win.width,
    top: 420,
    borderTopStartRadius: 40,
    zIndex: 999999999,
    height: 300,
  },
  innerModalContainer: {
    margin: 25,
  },
  welcomeText: {
    color: '#fff',
    fontWeight: 700,
    fontSize: 30,
  },
  descriptionText: {
    color: '#6f6f6f',
    marginVertical: 20,
  },
  bottomContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  arrowBackground: {
    height: 60,
    width: 60,
    borderRadius: 50,
    backgroundColor: 'red',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
