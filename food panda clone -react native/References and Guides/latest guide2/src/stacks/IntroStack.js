import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IntroScreenOne from '../screens/introScreens/IntroScreenOne';
import IntroScreenTwo from '../screens/introScreens/IntroScreenTwo';
import IntroScreenThree from '../screens/introScreens/IntroScreenThree';
import WelcomeBottomSheet from '../bottomsheet/WelcomeBottomSheet';
import AuthStack from './AuthStack';
import SignupTrainee from '../screens/authScreens/SignupTrainee';
import TermAndConditionScreen from '../screens/appScreens/TermAndConditionScreen';
import HomePageLoadingScreen from '../screens/appScreens/HomePageLoadingScreen';
import IntroSplash from '../screens/introScreens/IntroSplash';
import SignupTrainer from '../screens/authScreens/SignupTrainer';
import ClientScreen from '../screens/appScreens/Trainer/ClientScreen';
import BottomStack from './BottomStack';
import BottomStack2 from './BottomStack2';
import SignUpCertified from '../screens/authScreens/SIgnupTrainer/SignUpCertified';
import Signup from '../screens/authScreens/SignupTrainee/Signup';
import Login from '../screens/authScreens/Login/Login';

const Stack = createNativeStackNavigator();

export default function IntroStack({navigation}) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      {/* <Stack.Screen name="bottomStack2" component={BottomStack2} />
      <Stack.Screen name="Client" component={ClientScreen} /> */}
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
