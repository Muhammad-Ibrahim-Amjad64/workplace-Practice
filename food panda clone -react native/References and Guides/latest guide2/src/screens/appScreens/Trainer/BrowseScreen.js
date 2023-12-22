import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
// import { Header, Search, TopTrainers } from '../../components';
import Header from '../../../components/Header';
import background from '../../../assets/background.jpg';
import Search from '../../../components/Search';
import TopTrainers from '../../../components/TopTrainers';
import exercise from '../../../assets/exercise.png';
import muscle from '../../../assets/muscle.png';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import drawerProfile from '../../../assets/trainers.png';

import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import CoustomTextinput from '../../../Common/Textinput/Textinput';
import {images} from '../../../Utlies/constant/Themse';

const BrowseScreen = ({navigation}) => {
  const [search, setSearch] = useState('');
  return (
    <ImageBackground source={background} style={{}} className="flex-1 ">
      <SafeAreaView className="flex-1">
        <View className="flex-1 top-5">
          <View className="flex-0.2 mx-4">
            <Header Name={'Browse'} navigation={navigation} />

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
          </View>
          <View className="my-2 bottom-2">
            <Text className="text-white text-l text-[16px] left-4 top-2">
              My Client
            </Text>
            <ScrollView showsVerticalScrollIndicator={false} className="mt-2 ">
              {[1, 2, 3].map(i => (
                <View key={i}>
                  <View className="w-[90vw] items-center justify-between rounded-[18px] h-[10vh] px-[3vw] bg-[#FFFFFF21] my-2 flex-row  self-center">
                    <View className="flex-row  items-center justify-center">
                      <View>
                        <Image
                          source={drawerProfile}
                          className="h-16 w-20 right-1 rounded-[18px]"
                        />
                      </View>
                      <View>
                        <Text className="text-xl text-[#fff]">Suol</Text>
                        <Text className="text-[10px] text-[#C8C8C8]">
                          Classic Member
                        </Text>
                      </View>
                    </View>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('Inner');
                      }}
                      className="h-10 w-20 bg-[#FF0000] items-center justify-center rounded-[18px]">
                      <Text className=" text-[#fff]">Chat</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default BrowseScreen;

const styles = StyleSheet.create({});
