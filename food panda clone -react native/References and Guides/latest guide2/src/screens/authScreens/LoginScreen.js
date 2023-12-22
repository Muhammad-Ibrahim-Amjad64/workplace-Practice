import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Keyboard,
  TouchableOpacity,
  onPress,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Login from '../../assets/login.png';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import googleLogo from '../../assets/googleLogo.png';
import {useNavigation} from '@react-navigation/native';
import {api} from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

// import axios from 'axios';

const LoginScreen = ({sheet, setSheet}) => {
  const [error, setError] = useState(null);

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const navigation = useNavigation();

  const handleSubmit = async e => {
    e.preventDefault();
    const _data = new FormData();

    _data.append('email', loginData.email);
    _data.append('password', loginData.password);
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (
      loginData.email === '' ||
      loginData.password === '' ||
      !emailRegex.test(loginData.email)
    ) {
      setError('All Field Are Required');
      console.log(error);
      return;
    }
    // console.log(data);
    try {
      console.log('login data', _data);
      // const token = await AsyncStorage.getItem('token')
      const {data} = await axios.post(
        'https://sterngym.project-demo.live/api/login',
        _data,
        {
          headers: {
            'Content-Type': 'Multipart/form-data',
            // Authorization: `Bearer ${token}`
          },
        },
      );
      // const token = data?.token;
      if (data) {
        await AsyncStorage.setItem('User', JSON.stringify(data));
        await AsyncStorage.setItem('token', data.token);
        navigation.navigate('homeloading', {role: data.user.user_type});
        console.log('next line');
      }
    } catch (error) {
      console.log(error.response.data.message);
      setError(error.response.data.message);
      // console.log(error.response.data.errors.email[0]);
    }
  };
  return (
    <View className={`bg-black h-[2000]  ${sheet ? 'opacity-[0.7]' : ''}`}>
      <View className="bg-white h-[200.5] mt-10">
        {/* header */}
        <View className="bg-[#000] d-flex flex-row pb-20 rounded-br-[50]">
          <TouchableOpacity className="m-8" onPress={() => navigation.pop()}>
            <Icon name="arrow-back-outline" size={26} color="#fff" />
          </TouchableOpacity>
          <View>
            <Image source={Login} className="mt-16 ml-16 align-middle" />
            <Text className="text-center text-white ml-8">
              Please add login details
            </Text>
          </View>
        </View>
      </View>

      {/* loginSection */}
      <View className="bg-white rounded-tl-[50] h-full">
        <View className="ml-4">
          <View className="flex-row mt-16 pl-12">
            <View style={{zIndex: 10, justifyContent: 'center'}}>
              <Entypo name="mail" size={26} color="#77838F" />
            </View>

            <TextInput
              className="bg-[#F8F8F8] ml-[-40] pl-12 w-[90%] rounded-lg text-black"
              placeholder="E-mail"
              cursorColor={'#191970'}
              autoCapitalize="none"
              keyboardType="default"
              returnKeyType="next"
              placeholderTextColor="#000"
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={false}
              value={loginData.email}
              onChangeText={val => setLoginData({...loginData, email: val})}
              // value={form.expire}
            />
          </View>
          <View className="flex-row  mt-4 pl-12">
            <View style={{zIndex: 10, justifyContent: 'center'}}>
              <MaterialIcons name="lock" size={26} color="#77838F" />
            </View>

            <TextInput
              className="bg-[#F8F8F8] ml-[-40] pl-12 w-[90%] rounded-lg text-black"
              placeholder="Password"
              cursorColor={'#191970'}
              autoCapitalize="none"
              placeholderTextColor="#000"
              keyboardType="default"
              returnKeyType="next"
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={false}
              value={loginData.password}
              secureTextEntry={true}
              onChangeText={val => setLoginData({...loginData, password: val})}
              // value={form.expire}
            />
          </View>
        </View>

        {/* button*/}
        <TouchableOpacity
          className="mt-6"
          // onPress={() => navigation.navigate('homeloading')}
          onPress={handleSubmit}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 0, y: 2}}
            colors={['#FF3636', '#BE1721']}
            className="h-[50] w-[70%] rounded-[10px] ml-auto mr-auto">
            <Text className="text-white font-bold text-center mt-[14]">
              Sign in
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        <View className="text-center">
          <Text className="text-center mt-2 font-medium text text-lg	">or</Text>
        </View>
        <TouchableOpacity className="mt-4">
          <View className="h-[50] w-[70%] rounded-[10px] ml-auto mr-auto bg-black  flex-row justify-center">
            <FontAwesome
              name="apple"
              size={26}
              alignSelf="center"
              paddingRight={10}
              color="#fff"
              // marginRight="10px"
            />

            <Text className="text-white font-bold text-center mt-[14]">
              Sign up with Apple
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity className="mt-2">
          <View className="h-[50] w-[70%] rounded-[10px] ml-auto mr-auto flex-row  border-2 justify-center 	">
            <Image
              style={{
                width: 25,
                height: 25,
                marginRight: 5,
                alignSelf: 'center',
              }}
              source={googleLogo}
            />
            <Text className="text-black font-bold text-center mt-[14]">
              Continue with Google
            </Text>
          </View>
        </TouchableOpacity>
        <View className="flex-row justify-center mt-2">
          <Text>Didn’t have an account?</Text>
          <TouchableOpacity onPress={() => setSheet(!sheet)}>
            <Text className="text-[#BE1721] font-bold">Sign up</Text>
          </TouchableOpacity>
        </View>
        {error && (
          <View className="absolute h-screen w-screen flex items-center my-auto z-[99999]">
            <View
              className=" h-1/6 mt-32 w-3/4"
              // style={styles.shadow}
            >
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 0, y: 2}}
                colors={['#FF3636', '#BE1721']}
                className=" rounded-2xl">
                <View className="flex flex-col py-10  rounded-2xl items-center m-auto justify-center">
                  <View className="gap-3 flex items-center justify-center">
                    <Text className="font-semibold text-white text-base">
                      {error}
                    </Text>

                    <View className="flex flex-row w-[60vw] justify-center">
                      <Pressable
                        onPress={() => setError(null)}
                        className="bg-[#fff] px-9 py-1 rounded-lg shadow shadow-lg shadow-red-300">
                        <Text className="text-black text-base">ok</Text>
                      </Pressable>
                    </View>
                  </View>
                </View>
              </LinearGradient>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default LoginScreen;
