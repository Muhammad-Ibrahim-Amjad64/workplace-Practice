/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
{
  /* <GestureHandlerRootView> */
}
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewappScreens';
import HomeScreen from './src/screens/appScreens/HomeScreen';
import ProfileScreen from './src/screens/appScreens/Bothcommon/ProfileScreen';
import SettingScreen from './src/screens/appScreens/Bothcommon/SettingScreen';
import BrowseScreen from './src/screens/appScreens/Trainer/BrowseScreen';
import TrainersScreen from './src/screens/appScreens/TrainerScreen';
import IntroScreenOne from './src/screens/introScreens/IntroScreenOne';
import IntroScreenThree from './src/screens/introScreens/IntroScreenThree';
import IntroScreenTwo from './src/screens/introScreens/IntroScreenTwo';
import BottomStack from './src/stacks/BottomStack';
import IntroStack from './src/stacks/IntroStack';
import WelcomeScreen from './src/screens/introScreens/WelcomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import WhatsNewBottomsheet from './src/bottomsheet/WhatsNewBottomsheet';
import ClientScreen from './src/screens/appScreens/Trainer/ClientScreen';
import ClientProfile from './src/screens/appScreens/Trainer/ClientProfile';
import TrainerBrowseScreen from './src/screens/appScreens/TrainerBrowseScreen';
import TrainerProfileScreen from './src/screens/appScreens/TrainerProfileScreen';
import EquipmentScreen from './src/screens/appScreens/Trainer/EquipmentScreen';
import ChatScreen from './src/screens/appScreens/ChatScreen';
import ChattingScreen from './src/screens/appScreens/Trainer/ChattingScreen';
import MemberShipBillingScreen from './src/screens/appScreens/Trainer/MemberShipBillingScreen';
import AuthStack from './src/stacks/AuthStack';
import FeaturedTipsScreen from './src/screens/appScreens/FeaturedTipsScreen';
import TermAndConditionScreen from './src/screens/appScreens/TermAndConditionScreen';
import ContactInner from './src/screens/appScreens/Bothcommon/ContactInner';
import PrivacyPolicy from './src/screens/appScreens/Bothcommon/PrivacyPolicy';
import Faq from './src/screens/appScreens/Bothcommon/Faq';
import Popup from './src/components/Popup';
// import bottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet';
// import BottomStack from './src/stacks/BottomStack';
// import dotenv from  'dotenv'

const Stack = createNativeStackNavigator();
import {Store} from './src/redux/Store';
import {Provider, useSelector} from 'react-redux';
import {AvoidSoftInput} from 'react-native-avoid-softinput';
import Login from './src/screens/authScreens/Login/Login';
import Signup from './src/screens/authScreens/SignupTrainee/Signup';
import SignUpCertified from './src/screens/authScreens/SIgnupTrainer/SignUpCertified';
import BottomStack2, {Paymentsscreen} from './src/stacks/BottomStack2';
import TrainerPaymentsscreen from './src/stacks/PaymentStack';
import HomePageLoadingScreen from './src/screens/appScreens/HomePageLoadingScreen';

function App() {
  const isValid = useSelector(state => state.userSlice.isValid);
  console.log(isValid);
  //   useEffect(() => {
  //   AvoidSoftInput.setShouldMimicIOSBehavior(true)
  //     AvoidSoftInput.setEnabled(true)
  //     // AvoidSoftInput.setAdjustPan(true)

  // },[])

  return (
    <NavigationContainer>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'light-content'}
      />

      {isValid ? (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="homeloading" component={HomePageLoadingScreen} />
          <Stack.Screen name="bottomStack2" component={BottomStack2} />
          <Stack.Screen
            name="TrainerPaymentsscreen"
            component={TrainerPaymentsscreen}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Auth" component={AuthStack} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default App;
const styles = StyleSheet.create({});
