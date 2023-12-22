import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
} from 'react-native';
import React, {useState} from 'react';
// import { Header, Search, TopTrainers } from '../../components';
import Header from '../../../components/Header';
import background from '../../../assets/background.jpg';
import modal from '../../../assets/modalF.jpg';
import Search from '../../../components/Search';
import TopTrainers from '../../../components/TopTrainers';
import exercise from '../../../assets/exercise.png';
import muscle from '../../../assets/muscle.png';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import menuIcon from '../../../assets/menu-icon.png';
import bellIcon from '../../../assets/bell.png';
import {DrawerActions} from '@react-navigation/native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import CoustomTextinput from '../../../Common/Textinput/Textinput';
import {images} from '../../../Utlies/constant/Themse';
const ClientScreen = ({navigation}) => {
  const data = [
    {
      title: 'Classic Members',
      workouts: [
        {
          type: 'John',
          count: 'Rank 6',
          imageSource: muscle,
          width: '175',
          height: '218',
        },
        {
          type: 'John',
          count: 'Rank 6',
          imageSource: muscle,
          width: '175',
          height: '173',
        },
      ],
    },
  ];
  const workouts = [
    {
      type: 'John',
      count: 'Rank 6',
      imageSource: muscle,
      width: '175',
      height: '173',
    },
    {
      type: 'John',
      count: 'Rank 6',
      imageSource: muscle,
      width: '175',
      height: '218',
    },
  ];
  const [search, setSearch] = useState('');
  return (
    <ImageBackground source={background} className="h-full  ">
      <SafeAreaView className="flex-1  ">
        <View className="flex flex-1 mx-1 mt-6">
          <View className="mx-5 my-4" style={styles.topBar}>
            <Pressable
              style={styles.topLeft}
              onPress={() => navigation.openDrawer()}>
              <Image source={menuIcon} />
            </Pressable>

            <View style={styles.topMiddle}>
              <Text style={styles.homeText}>Client</Text>
            </View>

            <Pressable style={styles.topRight}>
              {/* <Image source={bellIcon} /> */}
            </Pressable>
          </View>
          {/* <View className="my-4 flex-row items-center justify-between">
                        <Pressable >
                        <Icon name="ios-menu" size={26} color="#fff" />
                        
                        </Pressable>
                        <View>
                        <Text className="text-white text-xl leading-10 font-bold">Browse</Text>
                        </View>
                        <Pressable>
                        <MaterialCommunityIcons name="bell-outline" size={26} color="#fff" />
                        </Pressable>
                    </View> */}
          <CoustomTextinput
            style={{
              alignSelf: 'center',
              backgroundColor: '#FFFFFF21',
              marginBottom: responsiveHeight(2),
            }}
            inputWidht={responsiveWidth(90)}
            inputIcon={images.SearchIcon}
            placeholder={'Search..'}
            placeholdercolor="#fffF"
            numberOfLines={1}
            widthinput={responsiveWidth(80)}
            inputstyle={{height: responsiveHeight(5)}}
          />

          <ScrollView showsVerticalScrollIndicator={false}>
            {/* Firs Section */}
            <View>
              <TopTrainers navigation={navigation} Name={'Gold Members'} />
            </View>
            {/* Second Section */}
            <View>
              <Text className="text-white">Premium Members</Text>

              <ScrollView horizontal className="mt-2">
                {[1, 2, 3, 4].map((e, i) => (
                  <View key={i + 1} className="mr-4">
                    <ImageBackground
                      className="w-[260] h-[173]  rounded-xl overflow-hidden flex-col-reverse"
                      source={modal}>
                      <View className="bottom-0 bg-gray-500 opacity-70 h-[80] px-3 pb-3">
                        <Text className="text-base text-white font-bold mt-2 ">
                          ALice Nanda
                        </Text>
                        <Text className="text-xs text-gray-300 font-light mt-1">
                          Premium Members
                        </Text>
                      </View>
                    </ImageBackground>
                  </View>
                ))}
              </ScrollView>
            </View>
            <View className="flex-row">
              {data.map((item, index) => (
                <View key={index} className="my-5 ">
                  <View className="mt-2">
                    <Text className="text-white">{item.title}</Text>
                    <View className=" flex-wrap flex h-50">
                      {item.workouts.map((workout, idx) => (
                        <View key={idx} className="mr-4">
                          <View className="my-2">
                            <ImageBackground
                              className={`w-[45vw] h-[20vh] rounded-3xl overflow-hidden flex-col-reverse`}
                              source={workout.imageSource}>
                              <View className="bottom-0 px-3 pb-3">
                                <Text className="text-base text-[20px] text-white font-bold">
                                  {workout.type}
                                </Text>
                                <Text className="text-xs text-gray-300 font-light">
                                  {workout.count}
                                </Text>
                              </View>
                            </ImageBackground>
                          </View>
                        </View>
                      ))}
                    </View>
                  </View>
                </View>
              ))}
              <View className="my-12">
                {workouts.map((workout, idx) => (
                  <View key={idx} className="mr-4">
                    <View className={`my-2 w-[45vw] h-[20vh]`}>
                      <ImageBackground
                        className={`w-[45vw] h-[20vh] rounded-3xl overflow-hidden flex-col-reverse`}
                        source={workout.imageSource}>
                        <View className="bottom-0 px-3 pb-3">
                          <Text className="text-base text-[20px] text-white font-bold">
                            {workout.type}
                          </Text>
                          <Text className="text-xs text-gray-300 font-light">
                            {workout.count}
                          </Text>
                        </View>
                      </ImageBackground>
                    </View>
                  </View>
                ))}
              </View>
            </View>

            <View style={{height: responsiveHeight(20)}}></View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default ClientScreen;

const styles = StyleSheet.create({
  topBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    // margin: responsiveWidth(7),
  },
  homeText: {
    color: '#fff',
    fontWeight: 700,
    fontSize: responsiveFontSize(2.7),
  },
});
