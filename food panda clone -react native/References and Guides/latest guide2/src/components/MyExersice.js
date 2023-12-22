import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Myvideos = require('../assets/videoimages.jpg');
const MyExersice = props => {
  const {myexersice} = props;
  return (
    <View className="">
      <Text className="text-white">{props.Name}</Text>
      <View className="flex flex-row  items-center justify-between  mt-1 flex-wrap self-center left-1">
        {myexersice?.map((customer, i) => (
          <TouchableOpacity
            key={i + 1}
            className="  w-[120px] overflow-hidden ">
            <View className="w-full h-28  rounded-[20px] ">
              <Image
                className="w-[116px] object-fill h-[150px] rounded-[30px] mt-3 "
                // source={trainer}
                source={Myvideos}
                resizeMode="cover"
              />
            </View>
            <Text className="uppercase text-xs text-white tracking-wider mt-14 left-2">
              {'Legs'}
            </Text>
            <Text className="text-[8px] text-gray-200  tracking-wider opacity-50 w-full left-1">
              Donec molestie ultricies
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default MyExersice;

const styles = StyleSheet.create({});
