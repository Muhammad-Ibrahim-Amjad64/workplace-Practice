import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import LoginScreen from '../screens/authScreens/LoginScreen';
import SignupTrainee from '../screens/authScreens/SignupTrainee';
import BottomStack from './BottomStack';
import LoginBottomSheet from '../bottomsheet/SignUpBottomSheet';
import TermAndConditionScreen from '../screens/appScreens/TermAndConditionScreen';
import HomePageLoadingScreen from '../screens/appScreens/HomePageLoadingScreen';
import DrawerStack from './DrawerStack';
import Login from '../screens/authScreens/Login/Login';
import SignUpCertified from '../screens/authScreens/SIgnupTrainer/SignUpCertified';
import Thankyou from '../screens/authScreens/SIgnupTrainer/Thankyou';
import Signup from '../screens/authScreens/SignupTrainee/Signup';
import IntroScreenTwo from '../screens/introScreens/IntroScreenTwo';
import IntroScreenOne from '../screens/introScreens/IntroScreenOne';
import IntroSplash from '../screens/introScreens/IntroSplash';
import ForgetPassword from '../screens/authScreens/Login/ForgetPassword';
import ResetPassword from '../screens/authScreens/Login/ResetPassword';
import OTP from '../screens/authScreens/Login/OTP';
import EmailScreen from '../screens/authScreens/Login/EmailScreen';
import Plan from '../screens/authScreens/SIgnupTrainer/Plan';
import PaymentFlow from '../screens/authScreens/SIgnupTrainer/PaymentFlow';
import Payments from '../screens/authScreens/Payments/Stripe';
import StripePayment from '../screens/authScreens/Payments/Stripe';

const Stack = createNativeStackNavigator();

const AuthStack = ({navigation, state}) => {
  //   console.log('state==>', state);
  return (
    <Stack.Navigator
      initialRouteName="introSplash"
      screenOptions={{
        headerShown: false,
        animation: 'flip',
      }}>
      <Stack.Screen name="introSplash" component={IntroSplash} />
      <Stack.Screen name="introOne" component={IntroScreenOne} />
      <Stack.Screen name="introTwo" component={IntroScreenTwo} />
      <Stack.Screen name="Certified" component={SignUpCertified} />
      <Stack.Screen name="Trainee" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="OTP" component={OTP} />
      <Stack.Screen name="EmailScreen" component={EmailScreen} />

      <Stack.Screen name="Thankyou" component={Thankyou} />
      {/* <Stack.Screen name="Payments" component={Payments} /> */}
      {/* <Stack.Screen name="homeloading" component={HomePageLoadingScreen} /> */}
      <Stack.Screen name="signUpTrainee" component={SignupTrainee} />
      <Stack.Screen
        name="termAndCondition"
        component={TermAndConditionScreen}
      />
      {/* <Stack.Screen name="payment" component={Paymentsscreen} /> */}
      {/* <Stack.Screen name="Plan" component={Plan} />
      <Stack.Screen name="PaymentFlow" component={StripePayment} /> */}
      <Stack.Screen name="bottomStack" component={BottomStack} />
    </Stack.Navigator>
  );
};
export default AuthStack;
const styles = StyleSheet.create({});
