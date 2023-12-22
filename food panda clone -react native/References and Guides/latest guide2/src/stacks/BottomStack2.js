import React from 'react';
// import {Button, View, Text} from 'react-native';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FeaturedTipsScreen from '../screens/appScreens/FeaturedTipsScreen';
import BrowseScreen from '../screens/appScreens/Trainer/BrowseScreen';
import TrainerScreen from '../screens/appScreens/TrainerScreen';
import HomeScreen from '../screens/appScreens/HomeScreen';
import EquipmentScreen from '../screens/appScreens/Trainer/EquipmentScreen';
import ChattingScreen from '../screens/appScreens/Trainer/ChattingScreen';
import WhatsNewBottomsheet from '../bottomsheet/WhatsNewBottomsheet';
import SettingScreen from '../screens/appScreens/Bothcommon/SettingScreen';
import MemberShipBillingScreen from '../screens/appScreens/Trainer/MemberShipBillingScreen';
import AuthStack from './AuthStack';
import CustomDrawer from './CustomDrawer';

import dumbellIcon from '../assets/dumbell.png';
import chatIcon from '../assets/chat.png';
import bulbIcon from '../assets/bulb.png';
import settingIcon from '../assets/setting.png';
import VideosIcon from '../assets/Vector.png';
import membershipIcon from '../assets/membership.png';
// import Subscription from '../assets/Subscription.png';
import logoutIcon from '../assets/logout.png';
import HomeTrainerScreen from '../screens/appScreens/Trainer/HomeTrainerScreen';
import ChatScreen from '../screens/appScreens/ChatScreen';
import ClientScreen from '../screens/appScreens/Trainer/ClientScreen';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import trainerLogo from '../assets/trainers-logo.png';
import ClientProfile from '../screens/appScreens/Trainer/ClientProfile';
import TrainerProfileScreen from '../screens/appScreens/TrainerProfileScreen';
import ProfileScreen from '../screens/appScreens/Bothcommon/ProfileScreen';
import ContactInner from '../screens/appScreens/Bothcommon/ContactInner';
import PrivacyPolicy from '../screens/appScreens/Bothcommon/PrivacyPolicy';

import Faq from '../screens/appScreens/Bothcommon/Faq';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Plan from '../screens/authScreens/SIgnupTrainer/Plan';
import StripePayment from '../screens/authScreens/Payments/Stripe';
import Myvideos from '../screens/appScreens/Trainer/Myvideos';
import AddVideo from '../screens/appScreens/Trainer/AddVideo';
import Subscription from '../screens/appScreens/Trainer/Subscription';
import {useDispatch} from 'react-redux';
import {logoutUser} from '../store/AuthSlice';
import Equimentsitems from '../screens/appScreens/Trainer/Equimentsitems';
const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function ClientStack({navigation}) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="homeTrainer" component={HomeTrainerScreen} />
      <Stack.Screen name="clientProfile" component={ClientProfile} />
    </Stack.Navigator>
  );
}
function Inner() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="chat" component={ChatScreen} />
    </Stack.Navigator>
  );
}
function SettingsProfile() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ProfileUser" component={ProfileScreen} />
    </Stack.Navigator>
  );
}
function Settingsscreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Setting" component={SettingScreen} />
      <Stack.Screen name="settingsProfile" component={ProfileScreen} />
      <Stack.Screen name="settingsContact" component={ContactInner} />
      <Stack.Screen name="settingsFaq" component={FAQs} />
      <Stack.Screen name="settingsPrivacyPolicy" component={PrivacyPolicy} />
    </Stack.Navigator>
  );
}
function Contact() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Contacts" component={ContactInner} />
    </Stack.Navigator>
  );
}
function Policy() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Policy" component={PrivacyPolicy} />
    </Stack.Navigator>
  );
}
function Trainer() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {/* <Stack.Screen name="Profile" component={TrainerProfileScreen} /> */}
      <Stack.Screen name="Profile" component={ClientProfile} />
    </Stack.Navigator>
  );
}
function FAQs() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="FAQs" component={Faq} />
    </Stack.Navigator>
  );
}
function Addvideos() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Myvideos" component={Myvideos} />
      <Stack.Screen name="AddVideo" component={AddVideo} />
    </Stack.Navigator>
  );
}

function TrainerHomeScreen() {
  return (
    <Tabs.Navigator
      initialRouteName="homeTrainer"
      activeColor="#fff"
      inactiveColor="#000"
      labeled={false}
      screenOptions={{
        headerShown: false,
        tabBarLabelPosition: 'below-icon',
        tabBarIconStyle: {top: responsiveHeight(0.5)},
        tabBarStyle: {
          backgroundColor: '#BE1721',
          position: 'absolute',
          bottom: responsiveHeight(9),
          height: responsiveHeight(9),
          // paddingVertical: responsiveHeight(5),

          marginHorizontal: responsiveWidth(5),
          paddingTop: responsiveHeight(0.5),
          borderRadius: responsiveHeight(2),
          borderTopColor: '#BE1721',
          paddingBottom: responsiveHeight(2),
        },
      }}>
      <Tabs.Screen
        name="homeTrainer"
        component={ClientStack}
        options={{
          unmountOnBlur: true,
          tabBarLabel: 'Home',
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#000',
          tabBarLabelStyle: {
            fontSize: 13,
            top: responsiveHeight(1),
          },

          tabBarIcon: ({focused, color}) => (
            <Feather name="home" size={26} color={focused ? '#fff' : '#000'} />
          ),
        }}
      />
      <Tabs.Screen
        name="browse"
        component={BrowseScreen}
        options={{
          tabBarLabel: 'Browse',
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#000',
          tabBarLabelStyle: {
            fontSize: 13,
            top: responsiveHeight(1),
          },
          tabBarIcon: ({focused, color}) => (
            <Feather
              name="search"
              size={26}
              color={focused ? '#fff' : '#000'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        component={ChattingScreen}
        options={{
          tabBarLabel: 'Messages',
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#000',
          tabBarLabelStyle: {
            fontSize: 13,
            top: responsiveHeight(1),
          },
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name="chat"
              size={26}
              color={focused ? '#fff' : '#000'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="clients"
        component={ClientScreen}
        options={{
          tabBarLabel: 'Clients',
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#000',
          tabBarLabelStyle: {
            fontSize: 13,
            top: responsiveHeight(1),
          },
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="person-outline"
              size={26}
              color={focused ? '#fff' : '#000'}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}

function equiments() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="EquipmentScreen" component={EquipmentScreen} />
      <Stack.Screen name="Equimentsitems" component={Equimentsitems} />
    </Stack.Navigator>
  );
}

export default function BottomStack2({navigation}) {
  return (
    <Drawer.Navigator
      initialRouteName="homeTrainer"
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#fff',
        drawerActiveTintColor: '#000',
        drawerInactiveTintColor: '#000',
        drawerStyle: {
          width: 260,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          width: 270,
        },
      }}>
      <Drawer.Screen
        name="Home2"
        component={TrainerHomeScreen}
        options={{
          drawerItemStyle: {
            display: 'none',
          },
          drawerIcon: () => (
            <Image
              source={trainerLogo}
              style={{marginRight: -20, marginLeft: 50}}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Inner"
        component={Inner}
        options={{
          drawerItemStyle: {
            display: 'none',
          },
          // drawerIcon: () => (
          //   <Image
          //     source={trainerLogo}
          //     style={{marginRight: -20, marginLeft: 50}}
          //   />
          // ),
        }}
      />
      {/* <Drawer.Screen
        name="FAQs"
        component={FAQs}
        options={{
          drawerItemStyle: {
            display: 'none',
          },
          // drawerIcon: () => (
          //   <Image
          //     source={trainerLogo}
          //     style={{marginRight: -20, marginLeft: 50}}
          //   />
          // ),
        }}
      /> */}
      <Drawer.Screen
        name="SettingsProfile"
        component={SettingsProfile}
        options={{
          drawerItemStyle: {
            display: 'none',
          },
          // drawerIcon: () => (
          //   <Image
          //     source={trainerLogo}
          //     style={{marginRight: -20, marginLeft: 50}}
          //   />
          // ),
        }}
      />
      {/* <Drawer.Screen
        name="Policy"
        component={Policy}
        options={{
          drawerItemStyle: {
            display: 'none',
          },
          // drawerIcon: () => (
          //   <Image
          //     source={trainerLogo}
          //     style={{marginRight: -20, marginLeft: 50}}
          //   />
          // ),
        }}
      /> */}

      <Drawer.Screen
        name="Profile"
        component={Trainer}
        options={{
          drawerItemStyle: {
            display: 'none',
          },
          // drawerIcon: () => (
          //   <Image
          //     source={trainerLogo}
          //     style={{marginRight: -20, marginLeft: 50}}
          //   />
          // ),
        }}
      />
      <Drawer.Screen
        name="Contact"
        component={Contact}
        options={{
          drawerItemStyle: {
            display: 'none',
          },
          // drawerIcon: () => (
          //   <Image
          //     source={trainerLogo}
          //     style={{marginRight: -20, marginLeft: 50}}
          //   />
          // ),
        }}
      />
      <Drawer.Screen
        name="Exercise Videos"
        component={Addvideos}
        options={{
          drawerIcon: () => (
            <Image
              source={VideosIcon}
              style={{
                marginRight: responsiveWidth(-5),
                marginLeft: responsiveWidth(11),
              }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Subscription"
        component={Subscription}
        options={{
          drawerIcon: () => (
            <Image
              source={membershipIcon}
              style={{
                marginRight: responsiveWidth(-5),
                marginLeft: responsiveWidth(12),
              }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Equipment"
        component={equiments}
        options={{
          drawerIcon: () => (
            <Image
              source={dumbellIcon}
              style={{
                marginRight: responsiveWidth(-5),
                marginLeft: responsiveWidth(12),
              }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settingsscreen}
        options={{
          drawerIcon: () => (
            <Image
              source={settingIcon}
              style={{
                marginRight: responsiveWidth(-5),
                marginLeft: responsiveWidth(12),
              }}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createDrawerNavigator} from '@react-navigation/drawer';

// const Tabs = createBottomTabNavigator();
// function HomeScreenThree() {
//   return (
//     <Tabs.Navigator
//       initialRouteName="home2"
//       activeColor="#fff"
//       inactiveColor="#000"
//       labeled={false}
//       screenOptions={{
//         headerShown: false,
//         tabBarLabelPosition: 'below-icon',
//         tabBarStyle: {
//           backgroundColor: '#BE1721',
//           height: 70,
//           paddingTop: 10,
//           paddingBottom: 10,
//         },
//       }}>
//       <Tabs.Screen
//         name="home2"
//         component={TrainerHome}
//         options={{
//           tabBarLabel: 'Home',
//           tabBarActiveTintColor: '#fff',
//           tabBarInactiveTintColor: '#000',
//           tabBarLabelStyle: {
//             fontSize: 13,
//           },
//           tabBarIcon: ({focused, color}) => (
//             <Feather name="home" size={24} color={focused ? '#fff' : '#000'} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="browse"
//         component={BrowseScreen}
//         options={{
//           tabBarLabel: 'Browse',
//           tabBarActiveTintColor: '#fff',
//           tabBarInactiveTintColor: '#000',
//           tabBarLabelStyle: {
//             fontSize: 13,
//           },
//           tabBarIcon: ({focused, color}) => (
//             <Feather
//               name="search"
//               size={24}
//               color={focused ? '#fff' : '#000'}
//             />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="feature"
//         component={FeaturedTipsScreen}
//         options={{
//           tabBarLabel: 'Feature',
//           tabBarActiveTintColor: '#fff',
//           tabBarInactiveTintColor: '#000',
//           tabBarLabelStyle: {
//             fontSize: 13,
//           },
//           tabBarIcon: ({focused, color}) => (
//             <MaterialCommunityIcons
//               name="lightbulb-on-outline"
//               size={24}
//               color={focused ? '#fff' : '#000'}
//             />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="trainer"
//         component={TrainerScreen}
//         options={{
//           tabBarLabel: 'Trainers',
//           tabBarActiveTintColor: '#fff',
//           tabBarInactiveTintColor: '#000',
//           tabBarLabelStyle: {
//             fontSize: 13,
//           },
//           tabBarIcon: ({focused, color}) => (
//             <Ionicons
//               name="person-outline"
//               size={24}
//               color={focused ? '#fff' : '#000'}
//             />
//           ),
//         }}
//       />
//     </Tabs.Navigator>
//   );
// }

// const Drawer = createDrawerNavigator();
// export default function BottomStack2({}) {
//   return (
//     <Drawer.Navigator
//       initialRouteName="home"
//       drawerContent={props => <CustomDrawer {...props} />}
//       screenOptions={{
//         headerShown: false,
//         drawerActiveBackgroundColor: '#fff',
//         drawerActiveTintColor: '#000',
//         drawerInactiveTintColor: '#000',
//         drawerStyle: {
//           width: 260,
//           display: 'flex',
//           flexDirection: 'row',
//           justifyContent: 'center',
//           width: 270,
//         },
//       }}>
//       <Drawer.Screen
//         name="Home2"
//         component={HomeScreenThree}
//         options={{
//           drawerItemStyle: {
//             display: 'none',
//           },
//           drawerIcon: () => (
//             <Image
//               source={trainerLogo}
//               style={{marginRight: -20, marginLeft: 50}}
//             />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name="Equipment"
//         component={EquipmentScreen}
//         options={{
//           drawerIcon: () => (
//             <Image
//               source={dumbellIcon}
//               style={{marginRight: -20, marginLeft: 50}}
//             />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name="Chat with Trainers"
//         component={ChattingScreen}
//         options={{
//           drawerIcon: () => (
//             <Image
//               source={chatIcon}
//               style={{marginRight: -20, marginLeft: 50}}
//             />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name="What's New"
//         component={WhatsNewBottomsheet}
//         options={{
//           drawerIcon: () => (
//             <Image
//               source={bulbIcon}
//               style={{marginRight: -20, marginLeft: 50}}
//             />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name="Settings"
//         component={SettingScreen}
//         options={{
//           drawerIcon: () => (
//             <Image
//               source={settingIcon}
//               style={{marginRight: -20, marginLeft: 50}}
//             />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name="Membership"
//         component={MemberShipBillingScreen}
//         options={{
//           drawerIcon: () => (
//             <Image
//               source={membershipIcon}
//               style={{marginRight: -20, marginLeft: 50}}
//             />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name="Logout"
//         component={AuthStack}
//         options={{
//           drawerItemStyle: {
//             marginTop: 60,
//           },
//           drawerIcon: () => (
//             <Image
//               source={logoutIcon}
//               style={{marginRight: -20, marginLeft: 50}}
//             />
//           ),
//         }}
//       />
//     </Drawer.Navigator>
//   );
// }

// //       {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
// //     </Drawer.Navigator>
// //   );
// // }
