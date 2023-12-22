import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  Pressable,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import background from '../../../assets/background.jpg';
import Header from '../../../components/Header';
import Search from '../../../components/Search';
import Icon from 'react-native-vector-icons/Ionicons';
import trainer from '../../../assets/Trainer.png';
import clints3 from '../../../assets/clints3.jpg';
import clints from '../../../assets/clints.jpg';
import {DrawerActions} from '@react-navigation/native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CoustomTextinput from '../../../Common/Textinput/Textinput';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {images} from '../../../Utlies/constant/Themse';
const ChattingScreen = ({navigation}) => {
  const [search, setSearch] = useState('');

  return (
    <ImageBackground source={background} className="h-full ">
      <SafeAreaView className="flex-1 ">
        <View className="flex flex-1">
          <View className="my-4 flex-row items-center justify-between mx-5 mt-[5vh]">
            <Pressable
              onPress={() => {
                navigation.openDrawer();
              }}>
              <Icon name="menu" size={26} color="#fff" />
            </Pressable>
            <View>
              <Text className="text-white text-xl leading-10 font-bold">
                Messages
              </Text>
            </View>
            <Pressable>
              {/* <MaterialCommunityIcons
                name="bell-outline"
                size={26}
                color="#fff"
              /> */}
            </Pressable>
          </View>

          <CoustomTextinput
            style={{
              alignSelf: 'center',
              backgroundColor: '#FFFFFF21',
            }}
            inputWidht={responsiveWidth(90)}
            inputIcon={images.SearchIcon}
            placeholder={'Search..'}
            placeholdercolor="#fffF"
            numberOfLines={1}
            widthinput={responsiveWidth(80)}
            inputstyle={{height: responsiveHeight(5)}}
          />

          <View className="my-5">
            <Text className="text-white mx-2">All Active Trainer</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              className="flex-row mt-2">
              {[1, 2, 3, 4, 5, 6].map(id => (
                <Image
                  source={clints3}
                  className="w-14 h-14 rounded-full mx-2 "
                  key={id + 1}
                />
              ))}
            </ScrollView>
          </View>
          <View>
            <Text className="text-white mx-[1vh] mb-[1vh] w-4/5">Chat</Text>
            <ScrollView
              showsVerticalScrollIndicator={false}
              className="h-[70vh] mx-2  ">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 11].map(e => (
                <View className="flex-row items-center my-1 " key={e}>
                  <View className=" mt-2">
                    <Image
                      source={clints}
                      className="w-14 h-14 rounded-full m-1 "
                    />
                  </View>
                  <Pressable
                    onPress={() => navigation.navigate('Inner')}
                    className="flex-row">
                    <View className="justify-center ml-4">
                      <Text className="text-white">Chu</Text>
                      <Text className="text-[#575757]">
                        omg,that was so much fun.let's go toge...
                      </Text>
                    </View>
                    <View className="right-[6vh]">
                      <Text className="text-[#575757]">08.33 PM</Text>
                    </View>
                  </Pressable>
                </View>
              ))}
              <View className={'h-[10vh]'}></View>
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default ChattingScreen;

const styles = StyleSheet.create({});
