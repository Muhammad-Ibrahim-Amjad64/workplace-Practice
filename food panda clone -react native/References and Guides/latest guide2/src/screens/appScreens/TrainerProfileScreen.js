import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import React from 'react';
import background from '../../assets/background.jpg';
import Icon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import trainer from '../../assets/Trainer.png';
import ticket from '../../assets/Ticket.png';
import chatIcon from '../../assets/chatIcon.png';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import exercise from '../../assets/exercise.png';

const TrainerProfileScreen = ({navigation}) => {
  return (
    <View contentContainerStyle={{flexGrow: 1}}>
      <ImageBackground source={background} className="w-full h-full">
        {/* header */}
        <View className="flex-row justify-between m-4">
          <Pressable onPress={() => navigation.goBack()}>
            <Icon name="arrow-back-outline" size={26} color="#fff" />
          </Pressable>
          <Text className="text-white text-lg">Trainer Profile</Text>
          <Entypo name="dots-three-vertical" size={26} color="#Fff" />
        </View>
        {/* profile section */}
        <View className="w-full">
          <Image
            source={trainer}
            className="w-[95%] left-2 rounded-xl"
            resizeMode="contain"
          />
          <Image source={ticket} className="absolute left-4 top-4" />
        </View>

        {/* details section */}
        <View className="m-4  rounded-xl overflow-hidden">
          <ImageBackground source={background} resizeMode="cover">
            <View className="p-4">
              <View className="flex-row justify-between mb-2 ">
                <View>
                  <Text className="text-white text-xl">Feddy Moe</Text>
                </View>
                <Pressable
                  onPress={() => navigation.navigate('Inner')}
                  className="bg-[#BE1721] p-2 px-5 flex-row rounded-full justify-center">
                  <Icon
                    name="chatbox-ellipses-outline"
                    size={16}
                    color="#fff"
                    alignSelf="center"
                    marginRight={5}
                  />
                  <Text className="text-white font-medium">Chat</Text>
                </Pressable>
              </View>
              <View className="flex-row">
                <FontAwesome
                  name="fire-alt"
                  size={15}
                  color="#fff"
                  marginRight={5}
                />
                <Text className="text-gray-400 mr-8">1200 kcal</Text>
                <MaterialIcons
                  name="access-time"
                  size={15}
                  color="#fff"
                  marginRight={5}
                />
                <Text className="text-gray-400 mr-8">1h 30m</Text>
                <AntDesign
                  name="star"
                  size={15}
                  color="#E75025"
                  marginRight={5}
                />
                <Text className="text-gray-400">4.9</Text>
              </View>
              <View>
                <Text className="text-white  font-semibold my-2 text-xl">
                  About
                </Text>
                <Text className="text-gray-400 text-[12px]">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </Text>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View>
          <Text className="text-white text-lg mt-[-15] ml-4">Exercise</Text>
        </View>
        {/* exercise section */}
        <ScrollView>
          {[1, 2, 3, 4].map((id, i) => (
            <View key={i} className="mx-4 my-2 rounded-xl overflow-hidden">
              <ImageBackground source={background} resizeMode="cover">
                <View className=" border flex-row ">
                  <View>
                    <Image source={exercise} />
                  </View>
                  <View className="p-4">
                    <Text className="text-white mb-4">Leg Muscle Workout</Text>
                    <View className="flex-row">
                      <FontAwesome
                        name="fire-alt"
                        size={15}
                        color="#fff"
                        marginRight={5}
                      />
                      <Text className="text-gray-400 mr-8">180 kcal</Text>
                      <MaterialIcons
                        name="access-time"
                        size={15}
                        color="#fff"
                        marginRight={5}
                      />
                      <Text className="text-gray-400 mr-8">10m</Text>
                    </View>
                  </View>
                </View>
              </ImageBackground>
            </View>
          ))}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default TrainerProfileScreen;

const styles = StyleSheet.create({});
