import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
} from 'react-native';
import React from 'react';
import trainer from '../assets/Trainer.png';
import {useNavigation} from '@react-navigation/native';
import modal from '../assets/modalmale.jpg';
const TopTrainers = props => {
  console.log(props);
  // const navigation = useNavigation();
  return (
    <View className="my-2">
      <Text className="text-white">{props.Name}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className="flex flex-row  items-center justify-between gap-2 mt-1">
          {['1', '2', '3', '4'].map((e, i) => (
            <Pressable
              onPress={() => props.navigation.navigate('Profile')}
              key={i + 1}
              className="  w-[110px] overflow-hidden ">
              <View className="w-full h-28  rounded-[20px] ">
                <Image
                  className="w-full object-fill h-full rounded-[15px] "
                  source={modal}
                  resizeMode="cover"
                />
              </View>
              <Text className="uppercase text-xs text-white my-2 tracking-wider  ">
                LOYNIE BROWN
              </Text>
              <Text className=" text-[10px] text-gray-200  tracking-wider opacity-50 ">
                Gym, Owner
              </Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default TopTrainers;

const styles = StyleSheet.create({});
