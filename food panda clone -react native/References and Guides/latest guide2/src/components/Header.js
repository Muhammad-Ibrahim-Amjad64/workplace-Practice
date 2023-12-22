import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {DrawerActions} from '@react-navigation/native';

const Header = ({Name, navigation}) => {
  return (
    <View className="my-4 flex-row items-center justify-between">
      <Pressable onPress={() => navigation.openDrawer()}>
        <Icon name="ios-menu" size={26} color="#fff" />
      </Pressable>
      <View>
        <Text className="text-white text-xl leading-10 font-bold">{Name}</Text>
      </View>
      <Pressable>
        {/* <MaterialCommunityIcons name="bell-outline" size={26} color="#fff" /> */}
      </Pressable>
    </View>
  );
};

export default React.memo(Header);

const styles = StyleSheet.create({});
