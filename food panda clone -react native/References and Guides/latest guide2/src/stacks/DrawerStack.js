import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/appScreens/HomeScreen';
import BrowseScreen from '../screens/appScreens/Trainer/BrowseScreen';

const Drawer = createDrawerNavigator();

const DrawerStack = ({navigation}) => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Hm" component={HomeScreen} />
      <Drawer.Screen name="br" component={BrowseScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerStack;

const styles = StyleSheet.create({});
