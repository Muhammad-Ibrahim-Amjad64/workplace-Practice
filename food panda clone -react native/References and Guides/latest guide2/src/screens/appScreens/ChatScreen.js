import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import trainer from '../../assets/Trainer.png';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {ScrollView} from 'react-native-gesture-handler';

const ChatScreen = ({navigation}) => {
  return (
    <SafeAreaView className="bg-black flex-1 ">
      {/* header */}
      <View className="flex-row items-center mx-5 mt-[4vh]  ">
        {/* <View className=" items-center justify-between"> */}
        <Pressable
          onPress={() => navigation.goBack()}
          className="items-center justify-center h-[5vh] w-[5vh] ">
          <FontAwesome name="angle-left" size={26} color="#fff" />
        </Pressable>
        <View className="flex-row ml-4">
          <Image source={trainer} className="w-14 h-14 rounded-full" />
          <View className="  justify-center ml-4">
            <Text className=" text-white">Feddy Moe</Text>
            <Text className=" text-[#575757]">prep & fitness Coach</Text>
          </View>
        </View>
      </View>
      {/* </View> */}

      <ScrollView className="">
        <View className="ml-4 flex-0.8">
          <View className="bg-[#575757] w-[70%] p-6 my-5 rounded-bl-3xl rounded-r-3xl">
            <Text className="text-[#FFF] font-normal">
              Hi! Is there anything I can help? 😊
            </Text>
          </View>
          <Text className="text-gray-500"> 10:34 PM</Text>
        </View>

        <View className="mr-4 items-end">
          <View className="bg-[#BE1721] w-[70%] p-6 my-5 rounded-br-3xl rounded-l-3xl">
            <Text className="text-[#FFF] font-normal">
              Hi Richard! How are you? Can you provide tips to improve body
              posture to be ideal? 🤔
            </Text>
          </View>
          <Text className="text-gray-500"> 10:34 PM</Text>
        </View>

        <View className="ml-4">
          <View className="bg-[#575757] w-[70%] p-6 my-5 rounded-bl-3xl rounded-r-3xl">
            <Text className="text-[#FFF] font-normal">
              Hi Sir, thank you for contacting me 😁, here are tips that you can
              practice to improve your ideal body 1. Running: The physical
              demands of people who exercise make bones grow and become
              stronger. Besides being good for body shape, this is also good for
              mental health.
            </Text>
          </View>
          <Text className="text-gray-500"> 10:34 PM</Text>
        </View>
      </ScrollView>
      <View className="flex-row absolute bottom-[10vh] self-center">
        <View className="bg-[#BE1721] w-[70vw] flex-row  rounded-xl justify-between">
          <View className="flex-row justify-between px-2">
            {/* <Fontisto name="smiley" size={26} color="#fff" alignSelf="center" /> */}
            <TextInput
              className=""
              placeholder="Type Here..."
              placeholderTextColor={'#fff'}
              // value="type"
            />
          </View>
          <View className="flex-row">
            {/* <Entypo
              name="link"
              size={26}
              color="#fff"
              alignSelf="center"
              marginRight={10}
            />
            <FontAwesome5
              name="camera"
              size={26}
              color="#fff"
              alignSelf="center"
            /> */}
          </View>
        </View>
        <View className="bg-white w-[5vh] w-[7vh] rounded-2xl justify-center ml-3">
          <Feather name="send" size={26} color="#BE1721" alignSelf="center" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
