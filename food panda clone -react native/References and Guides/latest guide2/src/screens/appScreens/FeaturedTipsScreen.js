import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
// import { Header, Search, TopTrainers } from '../../components';
import Header from '../../components/Header';
import background from '../../assets/background.jpg';
import Search from '../../components/Search';
import TopTrainers from '../../components/TopTrainers';
import exercise from '../../assets/exercise.png';
import muscle from '../../assets/muscle.png';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const FeaturedTipsScreen = ({navigation, props}) => {
  const [search, setSearch] = useState('');
  return (
    <ImageBackground source={background} className="h-full ">
      <SafeAreaView className="flex-1 ">
        <View className="flex flex-1 px-4">
          <Header Name={'Trainer'} navigation={navigation} />
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
          <ScrollView>
            <View className="">
              <Text className="text-white">Featured Tips</Text>

              <ScrollView horizontal className="mt-2">
                {[1, 2, 3, 4].map((e, i) => (
                  <View key={i + 1} className="mr-4">
                    <ImageBackground
                      className="w-[313] h-[310]  rounded-xl overflow-hidden flex-col-reverse"
                      source={muscle}>
                      <View className="bottom-0 bg-gray-500 opacity-70 h-1/5 px-3 pb-3">
                        <Text className="text-base text-white font-bold ">
                          {' '}
                          Legs
                        </Text>
                        <Text className="text-xs text-gray-300 font-light">
                          6 Workouts
                        </Text>
                      </View>
                    </ImageBackground>
                  </View>
                ))}
              </ScrollView>
            </View>
            {/* Firs Section */}
            <TopTrainers Name="Diet Plan & More" />
          </ScrollView>
          {/* Second Section */}
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default FeaturedTipsScreen;

const styles = StyleSheet.create({});
