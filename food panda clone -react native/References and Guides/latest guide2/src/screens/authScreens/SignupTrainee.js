import {
  StyleSheet,
  Text,
  View,
  Image,
  Keyboard,
  TextInput,
  TouchableOpacity,
  Pressable,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import SignUp from '../../assets/SignUp.png';
import TraineePersonalComponent from '../../AuthScreenComponent/TraineePersonalComponent';
import TraineeAddressComponent from '../../AuthScreenComponent/TraineeAddressComponent';
import LinearGradient from 'react-native-linear-gradient';
// import axios from 'axios';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignupTrainee = () => {
  const navigation = useNavigation();
  const [step, setStep] = useState(1);
  const [error, setError] = useState(null);
  const [traineeData, setTraineeData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    cpassword: '',
    gender: '',
    birthDate: '',
    weight: '',
    height: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    emailVerified: false,
    role: 'trainee',
  });

  const handleCount = () => {
    setStep(prevState => {
      return prevState + 1;
    });
  };
  const backHandler = () => {
    if (step === 1) {
      navigation.pop();
    } else {
      setStep(prevStep => prevStep - 1);
    }
  };

  const validateFields = () => {
    if (
      traineeData.firstName === '' ||
      traineeData.lastName === '' ||
      traineeData.email === '' ||
      traineeData.birthDate === '' ||
      traineeData.address === '' ||
      traineeData.state === '' ||
      traineeData.zipCode === '' ||
      traineeData.password === '' ||
      traineeData.cpassword === '' ||
      traineeData.gender === '' ||
      traineeData.city === ''
    ) {
      setError('All fields are required');
      return false;
    }
    return true;
  };
  // console.log("traineeData>>>>",traineeData)
  const handleSubmit = async e => {
    e.preventDefault();
    if (validateFields()) {
      return;
    }
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(traineeData.email)) {
      return setError('enter valid email');
    }
    const formData = new FormData();
    formData.append('first_name', traineeData.firstName);
    formData.append('last_name', traineeData.lastName);
    formData.append('email', traineeData.email);
    formData.append('user_type', 1);
    formData.append('phone', '121213');
    formData.append('gender_id', 12);
    formData.append('date_of_birth', traineeData.birthDate);
    formData.append('address', traineeData.address);
    formData.append('state', traineeData.state);
    formData.append('city', traineeData.city);
    formData.append('zip_code', traineeData.zipCode);
    formData.append('password', traineeData.password);
    formData.append('password_confirmation', traineeData.cpassword);
    al;
    try {
      console.log('formdata', formData);
      const {data} = await axios.post(
        'https://sterngym.project-demo.live/api/register',
        formData,
        {
          headers: {
            'Content-Type': 'Multipart/form-data',
          },
        },
      );
      if (data) {
        await AsyncStorage.setItem('User', JSON.stringify(data));
        await AsyncStorage.setItem('token', data.token);
        navigation.navigate('term', {role: 'trainer'});
      }
    } catch (error) {
      console.log(error);
      setError(error.response.data.errors.email[0]);
    }
  };
  return (
    <SafeAreaView className="h-full">
      <View className="bg-black ">
        <View className="bg-white h-[186.5] mt-12 ">
          <View className="bg-[#000]  rounded-bl-[50] w-[100%]">
            <View className="d-flex flex-row pb-4">
              <TouchableOpacity className="ml-8 mt-8" onPress={backHandler}>
                <Icon name="arrow-back-outline" size={26} color="#fff" />
              </TouchableOpacity>
              <View>
                <Image source={SignUp} className="mt-[33px] ml-20" />
                <Text className="text-center ml-[70] text-white">
                  Please add login details
                </Text>
              </View>
            </View>

            <View>
              <View className="flex-row justify-center">
                <Text
                  className={`mr-2 font-bold text-lg ${
                    step == 1 ? 'text-white' : 'text-[#363636]'
                  }`}>
                  Personal
                </Text>
                <Text
                  className={`text-lg ${
                    step == 2 ? 'text-white' : 'text-[#363636]'
                  }`}>
                  Address
                </Text>
              </View>
              <View className="flex-row justify-center">
                <View
                  className={`h-[4] mb-10 w-[18%]  ${
                    step == 1 ? 'bg-white' : 'bg-[#363636]'
                  }`}></View>
                <View
                  className={`h-[4] mb-[50] w-[18%]  ${
                    step == 2 ? 'bg-white' : 'bg-[#363636]'
                  }`}></View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View View className=" bg-white">
        {step == 1 && (
          <TraineePersonalComponent
            traineeData={traineeData}
            setTraineeData={setTraineeData}
          />
        )}
        {step == 2 && (
          <TraineeAddressComponent
            traineeData={traineeData}
            setTraineeData={setTraineeData}
          />
        )}
      </View>
      <ScrollView className="bg-white h-screen pt-2">
        {step == 1 && (
          <TouchableOpacity onPress={handleCount}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 0, y: 2}}
              colors={['#FF3636', '#BE1721']}
              className="h-[50] w-[70%] rounded-[10px] ml-auto mr-auto">
              <Text className="text-white font-bold text-center mt-[14]">
                Next
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        )}
        {step == 2 && (
          <TouchableOpacity onPress={handleSubmit}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 0, y: 2}}
              colors={['#FF3636', '#BE1721']}
              className="h-[50] w-[70%] rounded-[10px] ml-auto mr-auto">
              <Text className="text-white font-bold text-center mt-[14] cursor-pointer">
                SignUp
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        )}
        {/* 
        {error && (
          <View className="absolute h-screen w-screen flex items-center my-auto z-[99999]">
            <View className=" h-1/6 w-3/4" style={styles.shadow}>
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
                        className="bg-[#fff] px-9 py-1 rounded-lg shadow shadow-lg shadow-red-400">
                        <Text className="text-black text-base">ok</Text>
                      </Pressable>
                    </View>
                  </View>
                </View>
              </LinearGradient>
            </View>
          </View>
        )} */}
        <View className="flex-row justify-center">
          <View>
            <Text className="text-center font-medium ">
              Do you have an account?
            </Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('authStack')}>
            <Text className="text-center font-medium ml-1">Log in</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignupTrainee;

const styles = StyleSheet.create({});
