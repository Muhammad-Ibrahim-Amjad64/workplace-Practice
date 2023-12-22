import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import trainer from '../assets/Trainer.png';
// import usersImage from '../assets/userpro.jpg';
const usersImage = require('../assets/userpro.jpg');
const AllUsers = props => {
  const {customersData} = props;
  return (
    <View className="">
      <Text className="text-white">{props.Name}</Text>
      <View className="flex flex-row  items-center justify-between  mt-1 flex-wrap">
        {customersData?.map((customer, i) => (
          <TouchableOpacity
            key={i + 1}
            className="  w-[120px] overflow-hidden ">
            <View className="w-full h-28  rounded-[20px] ">
              <Image
                className="w-[120px] object-fill h-full rounded-[30px] mt-3 "
                // source={trainer}
                source={usersImage}
                resizeMode="cover"
              />
            </View>
            <Text className="uppercase text-xs text-white tracking-wider mt-4 left-2">
              {'kane smith'}
            </Text>
            <Text className=" text-[8px] text-gray-200  tracking-wider opacity-50 w-full left-1">
              Donec molestie ultricies
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default AllUsers;

const styles = StyleSheet.create({});
