import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import React, {useState} from 'react';

import menuIcon from '../assets/menu-icon.png';
import bellIcon from '../assets/bell.png';
import close from '../assets/close.png';
import profile from '../assets/setting-profile-image.png';
import equipment from '../assets/dumbell.png';
import chat from '../assets/chat.png';
import idea from '../assets/bulb.png';
import setting from '../assets/setting.png';
import membership from '../assets/membership.png';
import logout from '../assets/logout.png';
import {useNavigation} from '@react-navigation/native';
import {DrawerActions} from '@react-navigation/native';

const navLinks = [
  {
    title: 'Equipment',
    icon: equipment,
    link: 'Equipment',
  },
  {
    title: 'Chat with Trainers',
    icon: chat,
    link: 'Chat with Trainers',
  },
  {
    title: "What's New",
    icon: idea,
    link: "What's New",
  },
  {
    title: 'Settings',
    icon: setting,
    link: 'Settings',
  },
  {
    title: 'Membership',
    icon: membership,
    link: 'Membership',
  },
];

const TopBar = ({title, arrow_icon, navigation}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <View className="flex flex-row  justify-between items-center m-6">
        <View>
          <Pressable
            className="z-50"
            onPress={() => (menuIcon ? setOpen(!open) : navigation.goBack())}>
            <Image source={arrow_icon ? arrow_icon : menuIcon} />
          </Pressable>
        </View>

        <View>
          <Text className="text-white font-bold text-xl">{title}</Text>
        </View>
        <Pressable>
          <Image source={bellIcon} />
        </Pressable>
      </View>
      {/* navbar */}
      <View
        className={`absolute -top-0 transition-all ease-in ${
          open ? '-translate-x-56' : 'translate-x-0'
        } bg-white w-56 h-[800] z-10 transition-all duration-1000`}>
        <View className="mt-7 ml-5">
          <Pressable onPress={() => setOpen(!open)}>
            <Image source={close} />
          </Pressable>
        </View>

        <View className="mt-4 ">
          <View className="mb-2 self-center ml-2  w-20 border-2 rounded-full border-[#BE1721] ">
            <Image source={profile} />
          </View>

          <Text className=" text-center font-bold text-lg text-[#252525]">
            Dylan Meringue
          </Text>
          <Text className="text-center">@dylanmeringue</Text>
        </View>

        <View className="mt-[40%] w-3/5 mx-auto  ">
          {navLinks &&
            navLinks.map((navLink, i) => (
              <Pressable
                key={i}
                onPress={() => navigation.navigate('')}
                className="flex flex-row gap-x-2 my-3 items-center cursor-pointer">
                <View>
                  <Image source={navLink.icon} />
                </View>
                <View>
                  <Text className="font-bold text-[#0B0B0B]">
                    {navLink.title}
                  </Text>
                </View>
              </Pressable>
            ))}
        </View>
        <View className="mt-[20%] w-3/5 mx-auto ">
          <Pressable className="flex flex-row gap-x-2 my-3 items-center cursor-pointer">
            <View>
              <Image source={logout} />
            </View>
            <View>
              <Text className="font-bold text-[#0B0B0B]">Logout</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default TopBar;

const styles = StyleSheet.create({});
