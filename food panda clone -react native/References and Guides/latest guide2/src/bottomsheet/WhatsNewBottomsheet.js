import React, {useCallback, useMemo, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Pressable,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import background from '../assets/background.jpg';
import blurBackground from '../assets/blurBackground.png';
import NewImage from '../assets/NewImage.png';
import Header from '../components/Header';
import Search from '../components/Search';
import Icon from 'react-native-vector-icons/Ionicons';
import trainer from '../assets/Trainer.png';
import exercise from '../assets/exercise.png';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ScrollView} from 'react-native-gesture-handler';
import {DrawerActions} from '@react-navigation/native';
// import bottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet';

const win = Dimensions.get('window');

const WhatsNewBottomsheet = ({navigation}) => {
  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['1%', '94%'], []);

  // callbacks

  const [open, setOpen] = useState(false);
  const [indexs, setIndexs] = useState(0);

  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
    if (index == 0) {
      setOpen(false);
    }
  }, []);
  const [activePopular, setActivePopular] = useState(true);
  const [activeFeeds, setActiveFeeds] = useState(false);
  const [activeFollowing, setActiveFollowing] = useState(false);
  const [activeFirst, setActiveFirst] = useState(true);
  const [activeSecond, setActivesecond] = useState(false);
  const [activeThird, setActivethird] = useState(false);
  const [activeFourth, setActivefourth] = useState(false);
  const handleFilter = parameters => {
    if (parameters === 'popular') {
      setActivePopular(true);
      setActiveFeeds(false);
      setActiveFollowing(false);
    }
    if (parameters === 'Feeds') {
      setActivePopular(false);
      setActiveFeeds(true);
      setActiveFollowing(false);
    }
    if (parameters === 'Following') {
      setActivePopular(false);
      setActiveFeeds(false);
      setActiveFollowing(true);
    }
  };
  const handleTimer = parameter => {
    if (parameter === 'first') {
      setActiveFirst(true);
      setActivesecond(false);
      setActivethird(false);
      setActivefourth(false);
    }
    if (parameter === 'second') {
      setActiveFirst(false);
      setActivesecond(true);
      setActivethird(false);
      setActivefourth(false);
    }
    if (parameter === 'third') {
      setActiveFirst(false);
      setActivesecond(false);
      setActivethird(true);
      setActivefourth(false);
    }
    if (parameter === 'fourth') {
      setActiveFirst(false);
      setActivesecond(false);
      setActivethird(false);
      setActivefourth(true);
    }
  };

  // renders
  return (
    <View style={styles.container}>
      <ImageBackground source={background} className="h-full ">
        <SafeAreaView className="flex-1 ">
          <View className="flex flex-1 px-4">
            <View className="my-4 flex-row items-center justify-between">
              <Pressable
                onPress={() => {
                  navigation.goBack();
                }}>
                <Icon name="arrow-back-outline" size={26} color="#fff" />
              </Pressable>
              <View>
                <Text className="text-white text-xl leading-10 font-bold">
                  Whats New
                </Text>
              </View>
              <Pressable>
                <MaterialCommunityIcons
                  name="bell-outline"
                  size={26}
                  color="#fff"
                />
              </Pressable>
            </View>
            <View className="flex-row">
              <ScrollView horizontal>
                {[1, 2, 3, 4].map((e, i) => (
                  <TouchableOpacity
                    onPress={() => setOpen(!open)}
                    className="relative mr-4"
                    key={i}>
                    <Image
                      source={NewImage}
                      className="w-[300] h-[180] rounded-xl"
                      resizeMode="cover"
                    />
                    <View className="flex-row absolute">
                      <Text className="bg-white rounded-full py-1 px-2 m-1 top-3 ml-4 ">
                        Healthy
                      </Text>
                      <Text className="bg-white rounded-full py-1 px-2 m-1 top-3 ">
                        Sports
                      </Text>
                    </View>
                    <View className="absolute bottom-2 ml-2">
                      <Text className="text-white  w-56">
                        At what weight should I start weight training?
                      </Text>
                      <View>
                        <View className="flex-row">
                          <Image
                            source={trainer}
                            className="w-10 h-10 rounded-full"
                          />
                          <View className="ml-4  justify-center">
                            <Text className=" text-white">Feddy Moe</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>

            <View>
              <ImageBackground
                source={blurBackground}
                className="flex-row justify-around my-4 py-2 rounded-xl overflow-hidden">
                <TouchableOpacity
                  className={`${
                    activePopular ? 'bg-white' : ''
                  } px-8 mx-2 rounded-lg`}
                  onPress={() => handleFilter('popular')}>
                  <Text
                    className={`${
                      activePopular ? 'text-[#BE1721]' : 'text-white'
                    } py-2 `}>
                    popular
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className={`${
                    activeFeeds ? 'bg-white' : ''
                  } px-8 mx-2 rounded-lg`}
                  onPress={() => handleFilter('Feeds')}>
                  <Text
                    className={`${
                      activeFeeds ? 'text-[#BE1721]' : 'text-white'
                    } py-2`}>
                    Feeds
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className={`${
                    activeFollowing ? 'bg-white' : ''
                  } px-8 mx-2 rounded-lg `}
                  onPress={() => handleFilter('Following')}>
                  <Text
                    className={`${
                      activeFollowing ? 'text-[#BE1721]' : 'text-white'
                    } py-2`}>
                    Following
                  </Text>
                </TouchableOpacity>
              </ImageBackground>
            </View>

            <View>
              <Text className="text-white">Just For You</Text>
            </View>

            <ScrollView>
              <View>
                {[1, 2, 3, 4, 5].map(e => (
                  <Pressable
                    onPress={() => {
                      navigation.navigate('Profile');
                    }}
                    key={e}>
                    <ImageBackground
                      source={blurBackground}
                      className="flex-row p-3 rounded-2xl overflow-hidden my-2"
                      key={e}>
                      <View>
                        <Image source={exercise} />
                      </View>
                      <View className="justify-center ml-3">
                        <Text className="text-white">Healthy</Text>
                        <Text className="text-[#9F9F9F] w-56">
                          Outdoor sports give people more energy
                        </Text>
                        <View className="flex-row">
                          <Text className="text-[#9F9F9F]">
                            Theodore Handle
                          </Text>
                          <Text className="text-[#9F9F9F] ml-4">1hr ago</Text>
                        </View>
                      </View>
                      <View className="justify-center">
                        <Pressable>
                          <Icon
                            name="arrow-forward-outline"
                            size={26}
                            color="#fff"
                          />
                        </Pressable>
                      </View>
                    </ImageBackground>
                  </Pressable>
                ))}
              </View>
            </ScrollView>
          </View>
        </SafeAreaView>
      </ImageBackground>

      <BottomSheet
        ref={bottomSheetRef}
        index={open ? 1 : 0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        style={{marginTop: 10}}
        handleIndicatorStyle={{display: 'none'}}>
        <View style={styles.contentContainer} className="mx-5">
          <View className="rounded-lg overflow-hidden">
            <Image source={NewImage} className="w-[100%] " />
            <View className="m-2 first-letter:">
              <View className="flex-row justify-between mb-2 ">
                <View>
                  <Text className="text-black text-xl">Feddy Moe</Text>
                </View>
              </View>
              <View className="flex-row">
                <FontAwesome
                  name="fire-alt"
                  size={15}
                  color="#908E8C"
                  marginRight={5}
                />
                <Text className="text-[#908E8C] mr-8">1200 kcal</Text>
                <Feather
                  name="users"
                  size={15}
                  color="#908E8C"
                  marginRight={5}
                />
                <Text className="text-[#908E8C] mr-8">12 Member</Text>
                <AntDesign
                  name="star"
                  size={15}
                  color="#E75025"
                  marginRight={5}
                />
                <Text className="text-[#908E8C]">4.9</Text>
              </View>

              <View className="border-t border-[#ECECEC] mt-2">
                <Text className="text-gray-400 text-[12px] mt-4">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint.{' '}
                </Text>
              </View>

              <View className="p-4 mt-8 flex-row justify-between bg-[#F5F5F5]">
                <View className="flex-row">
                  <View className="flex-row">
                    <Image
                      source={trainer}
                      className="w-14 h-14 rounded-full"
                    />
                    <View className="ml-4  justify-center">
                      <Text className=" text-[#908E8C]">Instructor</Text>
                      <Text className=" text-black">Feddy Moe</Text>
                    </View>
                  </View>
                </View>
                <Pressable
                  onPress={() => {
                    navigation.navigate('Inner');
                  }}
                  className="justify-center">
                  <Icon name="chatbox-ellipses" size={26} color="#BE1721" />
                </Pressable>
              </View>

              <View className="my-3">
                <Text className="text-black">Availabaility</Text>
              </View>

              <View className="flex-row justify-between">
                <TouchableOpacity
                  onPress={() => handleTimer('first')}
                  className={`items-center ${
                    activeFirst ? 'bg-[#BE1721]' : 'bg-white'
                  } p-2 rounded-lg`}>
                  <AntDesign
                    name="calendar"
                    size={35}
                    color={`${activeFirst ? 'white' : '#D4D0CD'}`}
                  />
                  <Text
                    className={`${activeFirst ? 'text-white' : 'text-black'}`}>
                    10:00 AM
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => handleTimer('second')}
                  className={`items-center ${
                    activeSecond ? 'bg-[#BE1721]' : 'bg-white'
                  } p-2 rounded-lg`}>
                  <AntDesign
                    name="calendar"
                    size={35}
                    color={`${activeSecond ? 'white' : '#D4D0CD'}`}
                  />
                  <Text
                    className={`${activeSecond ? 'text-white' : 'text-black'}`}>
                    12:00 PM
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => handleTimer('third')}
                  className={`items-center ${
                    activeThird ? 'bg-[#BE1721]' : 'bg-white'
                  } p-2 rounded-lg`}>
                  <AntDesign
                    name="calendar"
                    size={35}
                    color={`${activeThird ? 'white' : '#D4D0CD'}`}
                  />
                  <Text
                    className={`${activeThird ? 'text-white' : 'text-black'}`}>
                    02:00 PM
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => handleTimer('fourth')}
                  className={`items-center ${
                    activeFourth ? 'bg-[#BE1721]' : 'bg-white'
                  } p-2 rounded-lg`}>
                  <AntDesign
                    name="calendar"
                    size={35}
                    color={`${activeFourth ? 'white' : '#D4D0CD'}`}
                  />
                  <Text
                    className={`${activeFourth ? 'text-white' : 'text-black'}`}>
                    04:00 PM
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity className="bg-[#BE1721] my-2 p-3 rounded-full">
                <Text className="text-center text-white font-bold">
                  BOOK THIS CLASS
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,

    height: '100%',
    // padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
  },
});

export default WhatsNewBottomsheet;
