import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Plan from '../screens/authScreens/SIgnupTrainer/Plan';
import StripePayment from '../screens/authScreens/Payments/Stripe';
import Paymentgate from '../screens/authScreens/Payments/Paymentgate';
const Stack = createNativeStackNavigator();
const TrainerPaymentsscreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Plan" component={Plan} />
      <Stack.Screen name="Paymentgate" component={Paymentgate} />
      <Stack.Screen name="PaymentFlow" component={StripePayment} />
    </Stack.Navigator>
  );
};
export default TrainerPaymentsscreen;
