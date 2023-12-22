import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
  Pressable,
  ImageBackground,
  Platform,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import menuIcon from '../../../assets/menu-icon.png';
import bellIcon from '../../../assets/bell.png';
import searchIcon from '../../../assets/search.png';
import exercise1 from '../../../assets/exercise1.png';
import trainer1 from '../../../assets/trainers.png';
import homeCardSettings from '../../../assets/home-card-settings.png';
import calenderImage from '../../../assets/calender.png';
import clockImage from '../../../assets/clock.png';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerActions} from '@react-navigation/native';
import bg from '../../../assets/background.jpg';
import TopBar from '../../../components/TopBar';
import BottomStack from '../../../stacks/BottomStack';
import muscle from '../../../assets/muscle.png';
import modl from '../../../assets/modal.jpg';
import TopTrainers from '../../../components/TopTrainers';
import AllUsers from '../../../components/AllUsers';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import MyExersice from '../../../components/MyExersice';
import CoustomTextinput from '../../../Common/Textinput/Textinput';
import {images} from '../../../Utlies/constant/Themse';

const Drawer = createDrawerNavigator();

function DrawerStack({navigation}) {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Hm" component={HomeScreen} />
      <Drawer.Screen name="br" component={BrowseScreen} />
    </Drawer.Navigator>
  );
}

export default function HomeTrainerScreen({navigation}) {
  const [customers, setCustomers] = useState([1, 2, 3, 4, 5, 5]);
  const [Exersice, setExersice] = useState([1, 2, 3, 4, 5, 5]);
  // const getCustomers = async () => {
  //   try {
  //     const token = await AsyncStorage.getItem('token');
  //     const config = {
  //       headers: {Authorization: `Bearer ${token}`},
  //     };
  //     let {data} = await axios.get(
  //       'https://sterngym.project-demo.live/api/customers',
  //       config,
  //     );
  //     // const token = data?.token;
  //     if (data) {
  //       // console.log('equipements', data?.data[0]?.image_url);
  //       setCustomers(data?.data);
  //     }
  //   } catch (error) {
  //     console.log(error.response.data.message);
  //     // console.log(error.response.data.errors.email[0]);
  //   }
  //   console.log(' ');
  //   console.log(' ');
  //   console.log(' ');
  //   console.log('customers ==>', customers);
  //   // console.log('singleEquipment', equipments[0]?.name);
  // };

  // useEffect(() => {
  //   getCustomers();
  // }, []);

  return (
    <ImageBackground source={bg} resizeMode="cover" style={{flex: 1}}>
      <View style={styles.topBar}>
        <Pressable
          style={styles.topLeft}
          onPress={() => navigation.openDrawer()}>
          <Image source={menuIcon} />
        </Pressable>

        <View style={styles.topMiddle}>
          <Text style={styles.homeText}>Home</Text>
        </View>

        <Pressable style={styles.topRight}>
          {/* <Image source={bellIcon} /> */}
        </Pressable>
      </View>
      {/* <TopBar title="Home" /> */}
      <View className="mt-4">
        <CoustomTextinput
          style={{
            alignSelf: 'center',
            backgroundColor: '#FFFFFF21',
            marginBottom: responsiveHeight(2),
          }}
          inputWidht={responsiveWidth(90)}
          inputIcon={images.SearchIcon}
          placeholder={'Search..'}
          placeholdercolor="#fffF"
          numberOfLines={1}
          widthinput={responsiveWidth(80)}
          inputstyle={{height: responsiveHeight(5)}}
        />
      </View>
      <ScrollView style={styles.container}>
        <View className="mt-4">
          <Text style={styles.heading}>My Clients</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="mt-4 mx-2">
            {[1, 2, 3, 4].map((e, i) => (
              <Pressable
                key={i + 1}
                className="mr-4"
                onPress={() => navigation.navigate('clientProfile')}>
                <ImageBackground
                  className="w-[260] h-[173]  rounded-xl overflow-hidden flex-col-reverse"
                  source={modl}>
                  <View className="bottom-30 bg-gray-500 opacity-70 h-[80] px-3 pb-3">
                    <Text className="text-base text-white font-bold ">
                      Jesi/
                    </Text>
                    <Text className="text-xs text-gray-300 font-light">
                      My Clints
                    </Text>
                  </View>
                </ImageBackground>
              </Pressable>
            ))}
          </ScrollView>
          <View style={styles.trainerSection}>
            <Text style={styles.heading}>My_Exersice</Text>

            <View className="mx-2 pb-3 bottom-4">
              <MyExersice myexersice={Exersice} />
            </View>
          </View>
          <View style={styles.trainerSection}>
            <Text
              style={{
                color: '#fff',
                marginLeft: responsiveWidth(5),
                fontWeight: 400,
                fontSize: responsiveFontSize(2.5),
              }}>
              All User
            </Text>
            <View className="mx-2 pb-3 bottom-4">
              <AllUsers customersData={customers} />
              {/* <AllUsers /> */}
            </View>
          </View>
          <View style={{height: responsiveHeight(14)}}></View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '',
    flexGrow: 1,
    marginBottom: responsiveHeight(5),
  },
  topBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: responsiveWidth(6),
    marginTop:
      Platform.OS === 'ios' ? responsiveHeight(2) : responsiveHeight(6),
  },
  homeText: {
    color: '#fff',
    fontWeight: 700,
    fontSize: responsiveFontSize(2.6),
  },
  searchBarContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsiveHeight(1),
    marginBottom: responsiveHeight(1),
  },
  searchBar: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
    // justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    borderRadius: responsiveWidth(2),
    paddingHorizontal: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.13)',
  },
  exerciseSection: {
    marginTop: responsiveHeight(1),
  },
  exerciseCard: {
    width: responsiveWidth(60),
    marginHorizontal: responsiveWidth(1),
    marginTop: responsiveHeight(1),
  },

  bottomTop: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomBottom: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  trainerSection: {
    top: responsiveHeight(2),
  },
  heading: {
    color: '#fff',
    marginLeft: responsiveWidth(5),
    fontWeight: 400,
    fontSize: responsiveFontSize(2.5),
  },
});
