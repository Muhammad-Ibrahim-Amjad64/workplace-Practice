import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';

const Error = ({heading, text, navigation, setDeleteState}) => {
  return (
    <View className="bg-white rounded-2xl h-1/6 w-3/4">
      <View className="flex flex-col items-center m-auto justify-center">
        <View className="gap-3 flex items-center justify-center">
          <Text className="font-semibold text-base">{heading}</Text>
          <Text className="text-[#858181] mb-3 text-center">{text}</Text>

          <View className="flex flex-row w-[60vw] justify-center">
            <Pressable
              onPress={() => navigation.navigate('Logout')}
              className="bg-[#BE1721] px-9 py-1 rounded-lg shadow shadow-lg shadow-red-400">
              <Text className="text-white text-base">ok</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Error;

const styles = StyleSheet.create({});
