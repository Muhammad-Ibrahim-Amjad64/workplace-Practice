import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  ImageBackground,
  Image,
  Animated,
  Text,
  StyleSheet,
} from 'react-native';
import gym from '../../assets/gym.png';
import overlay from '../../assets/overlay.png';
import logo2 from '../../assets/logo2-without-bg.png';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const HomePageLoadingScreen = ({route}) => {
  const navigation = useNavigation();
  const counter = useRef(new Animated.Value(0)).current;
  const countInterval = useRef(null);
  const [count, setCount] = useState(0);
  const role = useSelector(state => state.userSlice.role);
  const isPayed = useSelector(
    state => state.userSlice.user.isSubscriptionActive,
  );
  const isverified = useSelector(state => state.userSlice.user.verifiedUser);
  console.log(role, 'isSubscriptionActive', isPayed);

  // const {role} = route.params || {role: false};

  useEffect(() => {
    countInterval.current = setInterval(() => {
      setCount(prev => (prev === 100 ? prev : prev + 5));
    }, 100);

    return () => {
      clearInterval(countInterval.current); // Clear the interval on unmount
    };
  }, []);

  useEffect(() => {
    load(count);
    if (count > 100) {
      setCount(100);
      clearInterval(countInterval.current);
    }
  }, [count]);

  const load = countVal => {
    Animated.timing(counter, {
      toValue: countVal,
      duration: 100,
      useNativeDriver: false,
    }).start();
  };

  const width = counter.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
    extrapolate: 'clamp',
  });

  useEffect(() => {
    if (count === 100) {
      console.log('Loading complete', count);
      console.log('count', role);
      // This is jugar.... In payment confirm we can get user data and add logic here
      if (role === 'Trainer' && isPayed === true) {
        return navigation.replace('bottomStack2');
      } else if (role === 'Trainer' && isverified == true) {
        return navigation.replace('bottomStack2');
      }
      {
        navigation.navigate('TrainerPaymentsscreen');
        // navigation.navigate('bottomStack2');
      }
    }
  }, [count]);

  return (
    <ImageBackground
      source={gym}
      resizeMode="cover"
      style={{flex: 1, justifyContent: 'center'}}>
      <ImageBackground
        source={overlay}
        resizeMode="cover"
        style={{flex: 1, justifyContent: 'center'}}>
        <View style={styles.containcontainer}>
          <Image source={logo2} resizeMode="contain" style={styles.logo} />
          <View style={styles.Loader_tagline_container}>
            <Animated.View
              style={{
                ...StyleSheet.absoluteFill,
                backgroundColor: '#FF3636',
                width,
              }}
            />
          </View>

          <View
            style={{
              alignSelf: 'center',
              position: 'absolute',
              bottom: 0,
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                width: responsiveWidth(90),
              }}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </Text>
          </View>
        </View>
      </ImageBackground>
    </ImageBackground>
  );
};

export default HomePageLoadingScreen;

const styles = StyleSheet.create({
  containcontainer: {
    flexGrow: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    alignSelf: 'center',
    width: responsiveHeight(30),
    height: responsiveHeight(30),
  },
  Loader_tagline_container: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: responsiveWidth(80),
    height: responsiveHeight(0.5),
    backgroundColor: 'white',
    marginTop: responsiveHeight(0.6),
    borderRadius: responsiveWidth(0.5),
  },
});
