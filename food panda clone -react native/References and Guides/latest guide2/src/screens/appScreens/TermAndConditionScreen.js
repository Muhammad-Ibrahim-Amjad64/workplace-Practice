import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import blurbg from '../../assets/blurbg.png';
import Dot from '../../assets/Dot.png';
import LinearGradient from 'react-native-linear-gradient';

const TermAndConditionScreen = ({route, navigation}) => {
  const {role} = route.params;
  console.log('role>>>>', role);
  return (
    <View>
      <ImageBackground source={blurbg} className="w-full h-full">
        <View>
          <Text className="text-2xl text-center my-24 font-bold text-white">
            Terms and Condition
          </Text>
          {[1, 2, 3].map(id => (
            <View className="flex-row justify-center mt-4" key={id}>
              <Image source={Dot} className="self-center	mr-3" />
              <Text className="text-white text-[15px] font-medium	">
                Donec molestie ultricies dolor,
              </Text>
            </View>
          ))}

          <View>
            <Text className="text-white mt-8 text-center mx-12 text-[15px]">
              Vivamus ex felis, ullamcorper ac metus ac, finibus egestas nibh.
              Donec at mattis lacus. Duis cursus orci a convallis condimentum.
              Phasellus gravida felis leo.
            </Text>
          </View>
        </View>
        <TouchableOpacity
          className="mt-12"
          onPress={
            // role === 'trainer'
            //   ? () => navigation.navigate('bottomStack2')
            () => navigation.navigate('bottomStack')
          }>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 0, y: 2}}
            colors={['#FF3636', '#BE1721']}
            className="h-[50] w-[90%] rounded-full ml-auto mr-auto">
            <Text className="text-white font-bold text-center mt-[14]">
              Agree
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          className="mt-4 border border-white h-[50] w-[90%] rounded-full ml-auto mr-auto"
          onPress={() => navigation.navigate('authStack')}>
          <Text className="text-white font-bold text-center mt-[14]">
            Cancel
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default TermAndConditionScreen;

const styles = StyleSheet.create({});
