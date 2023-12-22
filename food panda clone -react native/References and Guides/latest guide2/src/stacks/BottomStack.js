import React from 'react';
// import {Button, View, Text} from 'react-native';
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
import MemberShipBillingScreen from '.././screens/appScreens/Trainer/MemberShipBillingScreen';
import AuthStack from './AuthStack';
import CustomDrawer from './CustomDrawer';
import dumbellIcon from '../assets/dumbell.png';
import chatIcon from '../assets/chat.png';
import bulbIcon from '../assets/bulb.png';
import settingIcon from '../assets/setting.png';
import membershipIcon from '../assets/membership.png';
import logoutIcon from '../assets/logout.png';
import TrainerProfileScreen from '../screens/appScreens/TrainerProfileScreen';
import ChatScreen from '../screens/appScreens/ChatScreen';
import LogoutDelete from '../components/LogoutDelete';
import ProfileScreen from '../screens/appScreens/Bothcommon/ProfileScreen';
import ContactInner from '../screens/appScreens/Bothcommon/ContactInner';
import Faq from '../screens/appScreens/Bothcommon/Faq';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import featureLogo from '../assets/feature-logo.png';
import trainerLogo from '../assets/trainers-logo.png';
import SignUpBottomSheet from '../bottomsheet/SignUpBottomSheet';
import PrivacyPolicy from '../screens/appScreens/Bothcommon/PrivacyPolicy';

MaterialCommunityIcons.loadFont();
Feather.loadFont();
FontAwesome.loadFont();

const Tabs = createBottomTabNavigator();

function BrowseStack({navigation}) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="browse" component={BrowseScreen} />
      <Stack.Screen name="trainerProfile" component={TrainerProfileScreen} />
      <Stack.Screen name="chatScreen" component={ChatScreen} />
    </Stack.Navigator>
  );
}

function TrainerStack({navigation}) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="trainer" component={TrainerScreen} />
      <Stack.Screen name="trainerProfile" component={TrainerProfileScreen} />
      <Stack.Screen name="chatScreen" component={ChatScreen} />
    </Stack.Navigator>
  );
}

function SettingsStack({navigation}) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="settings" component={SettingScreen} />
      <Stack.Screen name="settingsProfile" component={ProfileScreen} />
      <Stack.Screen name="settingsContact" component={ContactInner} />
      <Stack.Screen name="signupsheet" component={SignUpBottomSheet} />
      <Stack.Screen name="settingsPrivacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen name="settingsFaq" component={Faq} />
      <Stack.Screen name="logoutDeleteModal" component={LogoutDelete} />
      <Stack.Screen name="Logout" component={AuthStack} />
      {/* <Stack.Screen name="chatScreen" component={ChatScreen} /> */}
    </Stack.Navigator>
  );
}

function HomeScreenTwo() {
  return (
    <Tabs.Navigator
      initialRouteName="home"
      activeColor="#fff"
      inactiveColor="#000"
      labeled={false}
      screenOptions={{
        // tabBarIcon: {focused: true, color: '#fff', size: 26},
        // tabBarShowLabel: true,
        headerShown: false,
        tabBarLabelPosition: 'below-icon',
        tabBarStyle: {
          backgroundColor: '#BE1721',
          height: 70,
          paddingTop: 10,
          paddingBottom: 10,
        },
      }}>
      <Tabs.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#000',
          tabBarLabelStyle: {
            fontSize: 13,
          },
          tabBarIcon: ({focused, color}) => (
            <Feather name="home" size={24} color={focused ? '#fff' : '#000'} />
          ),
        }}
      />
      <Tabs.Screen
        name="browseStack"
        component={BrowseStack}
        options={{
          tabBarLabel: 'Browse',
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#000',
          tabBarLabelStyle: {
            fontSize: 13,
          },
          tabBarIcon: ({focused, color}) => (
            <Feather
              name="search"
              size={24}
              color={focused ? '#fff' : '#000'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="feature"
        component={FeaturedTipsScreen}
        options={{
          tabBarLabel: 'Feature',
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#000',
          tabBarLabelStyle: {
            fontSize: 13,
          },
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name="lightbulb-on-outline"
              size={24}
              color={focused ? '#fff' : '#000'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="trainerStack"
        component={TrainerStack}
        options={{
          tabBarLabel: 'Trainers',
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#000',
          tabBarLabelStyle: {
            fontSize: 13,
          },
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="person-outline"
              size={24}
              color={focused ? '#fff' : '#000'}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

export default function BottomStack({navigation}) {
  return (
    <Drawer.Navigator
      initialRouteName="home"
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
      }}
      // drawerContentOptions={{
      //   activeTintColor: '#e91e63',
      //   itemStyle: {marginVertical: 5},
      // }}
      // drawerContent={() => (
      //   <View>
      //     <Text>Hi</Text>
      //   </View>
      // )}

      // drawerContent={props => {
      //   return (
      //     <View style={{flex: 1}}>
      //       <Text>Hi</Text>
      //     </View>
      //   );
      // }}
    >
      <Drawer.Screen
        name="Home1"
        component={HomeScreenTwo}
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
      {/* <Drawer.Screen
        name="Equipment"
        component={EquipmentScreen}
        options={{
          drawerIcon: () => (
            <Image
              source={dumbellIcon}
              style={{marginRight: -20, marginLeft: 50}}
            />
          ),
        }}
      /> */}
      <Drawer.Screen
        name="Chat with Trainers"
        component={ChattingScreen}
        options={{
          drawerIcon: () => (
            <Image
              source={chatIcon}
              style={{marginRight: -20, marginLeft: 50}}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="What's New"
        component={WhatsNewBottomsheet}
        options={{
          drawerIcon: () => (
            <Image
              source={bulbIcon}
              style={{marginRight: -20, marginLeft: 50}}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsStack}
        options={{
          drawerIcon: () => (
            <Image
              source={settingIcon}
              style={{marginRight: -20, marginLeft: 50}}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Membership"
        component={MemberShipBillingScreen}
        options={{
          drawerIcon: () => (
            <Image
              source={membershipIcon}
              style={{marginRight: -20, marginLeft: 50}}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Logout"
        component={AuthStack}
        options={{
          drawerItemStyle: {
            marginTop: 60,
          },
          drawerIcon: () => (
            <Image
              source={logoutIcon}
              style={{marginRight: -20, marginLeft: 50}}
            />
          ),
        }}
      />
      {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
    </Drawer.Navigator>
  );
}
