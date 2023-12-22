import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';

const LogoutDelete = ({
  heading,
  text,
  navigation,
  myFunction,
  setDeleteState,
}) => {
  return (
    <View className="bg-white rounded-2xl h-1/4 w-3/4">
      <View className="flex flex-col items-center m-auto justify-center">
        <View className="gap-3 flex items-center justify-center">
          <Text className="font-semibold text-base">{heading}</Text>
          <Text className="text-[#858181] mb-3 text-center">{text}</Text>

          <View className="flex flex-row w-[60vw] justify-between">
            <Pressable
              onPress={() => myFunction()}
              className="bg-[#BE1721] px-9 py-1 rounded-lg shadow shadow-lg shadow-red-400">
              <Text className="text-white text-base">Yes</Text>
            </Pressable>
            <Pressable
              onPress={() => navigation.navigate('settings')}
              className="bg-[#D9D9D9] px-9 py-1 rounded-lg">
              <Text className="text-white text-base">No</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LogoutDelete;

const styles = StyleSheet.create({});
