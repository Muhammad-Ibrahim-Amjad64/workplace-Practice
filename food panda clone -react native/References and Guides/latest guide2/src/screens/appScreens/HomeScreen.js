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
} from 'react-native';
import React, {useEffect, useState} from 'react';
import menuIcon from '../../assets/menu-icon.png';
import bellIcon from '../../assets/bell.png';
import searchIcon from '../../assets/search.png';
import exercise1 from '../../assets/exercise1.png';
import trainer1 from '../../assets/trainers.png';
import homeCardSettings from '../../assets/home-card-settings.png';
import calenderImage from '../../assets/calender.png';
import clockImage from '../../assets/clock.png';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerActions} from '@react-navigation/native';
import bg from '../../assets/background.jpg';
import TopBar from '../../components/TopBar';
import BottomStack from '../../stacks/BottomStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const Drawer = createDrawerNavigator();

function DrawerStack({navigation}) {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Hm" component={HomeScreen} />
      <Drawer.Screen name="br" component={BrowseScreen} />
    </Drawer.Navigator>
  );
}

export default function HomeScreen({navigation}) {
  const [customers, setCustomers] = useState([]);

  const getCustomers = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const config = {
        headers: {Authorization: `Bearer ${token}`},
      };
      let {data} = await axios.get(
        'https://sterngym.project-demo.live/api/customers',
        config,
      );
      // const token = data?.token;
      if (data) {
        // console.log('equipements', data?.data[0]?.image_url);
        setCustomers(data?.data);
      }
    } catch (error) {
      console.log(error.response.data.message);
      // console.log(error.response.data.errors.email[0]);
    }
    console.log(' ');
    console.log(' ');
    console.log(' ');
    console.log('customers ==>', customers);
    // console.log('singleEquipment', equipments[0]?.name);
  };

  useEffect(() => {
    getCustomers();
  }, []);
  return (
    <View style={styles.container}>
      <ImageBackground source={bg} resizeMode="cover">
        <View style={styles.topBar}>
          <Pressable
            style={styles.topLeft}
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <Image source={menuIcon} />
          </Pressable>

          <View style={styles.topMiddle}>
            <Text style={styles.homeText}>Home</Text>
          </View>

          <Pressable style={styles.topRight}>
            <Image source={bellIcon} />
          </Pressable>
        </View>
        {/* <TopBar title="Home" /> */}
        <View style={styles.searchBarContainer}>
          <View style={styles.searchBar}>
            <Image source={searchIcon} />
            <TextInput
              style={{width: '100%', paddingLeft: 10, paddingRight: 20}}
              placeholder="Search..."
              placeholderTextColor="#fff"
            />
          </View>
        </View>

        <ScrollView>
          <View style={styles.exerciseSection}>
            <Text
              style={{
                color: '#fff',
                marginLeft: 25,
                fontWeight: 700,
                fontSize: 17,
                // zIndex: -100,
              }}>
              Exercise
            </Text>
            <ScrollView horizontal={true}>
              {[1, 2, 3].map((exercise, id) => (
                <Pressable
                  onPress={() => navigation.navigate('settingsProfile')}
                  style={styles.exerciseCard}
                  key={id}>
                  <Image
                    source={exercise1}
                    style={{width: 244, height: 118, objectFit: 'cover'}}
                  />
                  <View style={styles.bottomRedCard}>
                    <View style={styles.bottomTop}>
                      <View style={styles.bottomTopLeft}>
                        <Text style={{color: '#fff'}}>Strength</Text>
                        <Text style={{color: '#fff', opacity: 0.39}}>
                          10 Exercise
                        </Text>
                      </View>
                      <View style={styles.bottomTopRight}>
                        <Image source={homeCardSettings} />
                      </View>
                    </View>
                    <View
                      style={{
                        marginVertical: 10,
                        height: 1,
                        width: 220,
                        color: '#fff',
                        backgroundColor: '#fff',
                      }}
                    />

                    <View style={styles.bottomBottom}>
                      <View
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                        <Image source={calenderImage} />
                        <Text style={{marginLeft: 8, color: '#fff'}}>
                          MON-FRI
                        </Text>
                      </View>

                      <View
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                        <Image source={clockImage} />
                        <Text style={{marginLeft: 8, color: '#fff'}}>
                          10:00 - 18:00
                        </Text>
                      </View>
                    </View>
                  </View>
                </Pressable>
              ))}
            </ScrollView>
          </View>

          <View style={styles.trainerSection}>
            <Text
              style={{
                color: '#fff',
                marginLeft: 25,
                fontWeight: 700,
                fontSize: 17,
              }}>
              Trainers
            </Text>

            <View className="flex-row flex-wrap justify-center mb-[35%]">
              {customers?.map((trainer, id) => (
                <Pressable
                  onPress={() => navigation.navigate('settingsProfile')}
                  style={styles.trainerCard}
                  key={id}>
                  <Image source={trainer1} />
                  {/* <Image source={{uri: trainer?.image_url}} /> */}

                  <View>
                    <Text style={{color: '#fff', fontSize: 18}}>
                      {trainer?.name} {trainer?.last_name}
                    </Text>
                    <Text style={{color: '#C8C8C8', opacity: 0.46}}>
                      Yoga, Vinyasa
                    </Text>
                  </View>
                </Pressable>
              ))}
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '',
    height: '100%',
    width: '100%',
    // background:url("")
  },
  topBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 25,
  },
  homeText: {
    color: '#fff',
    fontWeight: 700,
    fontSize: 18,
  },
  searchBarContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  searchBar: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
    // justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    borderRadius: 15,
    paddingHorizontal: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.13)',
  },
  exerciseSection: {
    marginTop: 15,
  },
  exerciseCard: {
    width: 244,
    marginHorizontal: 8,
    marginTop: 10,
  },
  bottomRedCard: {
    backgroundColor: '#BE1721',
    padding: 10,
    borderBottomStartRadius: 15,
    borderBottomEndRadius: 15,
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
    marginTop: 15,
  },
  trainerCard: {
    marginBottom: 10,
    marginHorizontal: 8,
    marginTop: 10,
  },
});
