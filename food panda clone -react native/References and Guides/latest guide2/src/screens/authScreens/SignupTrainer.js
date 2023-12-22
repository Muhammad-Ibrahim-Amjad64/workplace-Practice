import {
  StyleSheet,
  Text,
  View,
  Image,
  Keyboard,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import SignUp from '../../assets/SignUp.png';
import TraineePersonalComponent from '../../AuthScreenComponent/TraineePersonalComponent';
import TrainerPersonalComponent from '../../AuthScreenComponent/TrainerPersonalComponent';
import TrainerAddressComponent from '../../AuthScreenComponent/TrainerAddressComponent';
import TrainerPaymentContainer from '../../AuthScreenComponent/TrainerPaymentContainer';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';

const SignupTrainer = () => {
  const [step, setStep] = useState(1);
  const [trainerData, setTrainerData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    cpassword: '',
    gender: '',
    birthDate: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    trainerCertificate: {},
    emailVerified: false,
    role: 'trainer',
  });
  const navigation = useNavigation();
  const handleCount = () => {
    setStep(prevState => {
      return prevState + 1;
    });
  };
  const backHandler = () => {
    setStep(prevState => {
      if (step == 1) {
        navigation.goBack();
      }
      return prevState - 1;
    });
  };
  const handleSubmit = async e => {
    e.preventDefault();
    const _data = new FormData();
    _data.append('first_name', trainerData.firstName);
    _data.append('last_name', trainerData.lastName);
    _data.append('email', trainerData.email);
    _data.append('user_type', 2);
    _data.append('phone', '121213');
    _data.append('gender_id', 12);
    _data.append('date_of_birth', trainerData.birthDate);
    _data.append('address', trainerData.address);
    _data.append('state', trainerData.state);
    _data.append('city', trainerData.city);
    _data.append('zip_code', trainerData.zipCode);
    _data.append('password', trainerData.password);
    _data.append('password_confirmation', trainerData.cpassword);
    _data.append('cardNumber', trainerData.cardNumber);
    _data.append('city', trainerData.city);
    _data.append('city', trainerData.city);
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (
      !emailRegex.test(trainerData.email) ||
      trainerData.firstName === '' ||
      trainerData.lastName === '' ||
      trainerData.email === '' ||
      trainerData.birthDate === '' ||
      trainerData.address === '' ||
      trainerData.state === '' ||
      trainerData.zipCode === '' ||
      trainerData.password === '' ||
      trainerData.cpassword === '' ||
      trainerData.gender === '' ||
      trainerData.city === ''
    ) {
      setError('All Field Are Required');
      console.log(error);
      return;
    }
    // console.log(data);
    try {
      const {data} = await axios.post(
        'https://sterngym.project-demo.live/api/register',
        _data,
        {
          headers: {
            'Content-Type': 'Multipart/form-data',
          },
        },
      );
      // const token = data?.token;
      if (data) {
        console.log('SignupUsers>>', data, typeof data, data.token);
        // // localStorage.setItem('yrux', 'here');
        await AsyncStorage.setItem('User', data.token);
        navigation.navigate('term', {role: 'trainer'});
        console.log('next line');
      }
    } catch (error) {
      console.log(error);
      // setError(error.response.data.errors);
      console.log(error.response.data.errors.email[0]);
    }
  };

  return (
    <SafeAreaView style={{flex: 1, height: '100%'}}>
      <View className="bg-black" style={{borderBottomLeftRadius: 60}}>
        <View className=" bg-#000 h-[160.5] w-full mt-1 bottom-4 ">
          {/* <View className=""> */}
          <View
            className="flex flex-row  mt-8 rounded-se"
            style={{borderBottomLeftRadius: 30}}>
            <TouchableOpacity className="ml-8 mt-8" onPress={backHandler}>
              <Icon name="arrow-back-outline" size={26} color="#fff" />
            </TouchableOpacity>
            <View className="left-3">
              <Image source={SignUp} className="mt-8 ml-20 " />
              <Text className="text-center ml-[70] text-white">
                Please add login details
              </Text>
            </View>
          </View>

          <View className="left-3 bottom~2">
            <View className="flex-row justify-center">
              <Text
                className={`mr-2 font-bold text-sm ${
                  step == 1 ? 'text-white' : 'text-[#363636]'
                }`}>
                Personal
              </Text>
              <Text
                className={`text-sm mr-2 ${
                  step == 2 ? 'text-white' : 'text-[#363636]'
                }`}>
                Address
              </Text>
              <Text
                className={`text-sm ${
                  step == 3 ? 'text-white' : 'text-[#363636]'
                }`}>
                Payment
              </Text>
            </View>
            <View className="flex-row justify-center">
              <View
                className={`h-[4] mb-10 w-[17%]  ${
                  step == 1 ? 'bg-white' : 'bg-[#363636]'
                }`}></View>
              <View
                className={`h-[4] mb-[50] w-[17%]  ${
                  step == 2 ? 'bg-white' : 'bg-[#363636]'
                }`}></View>
              <View
                className={`h-[4] mb-[50] w-[17%]  ${
                  step == 3 ? 'bg-white' : 'bg-[#363636]'
                }`}></View>
            </View>
          </View>
          {/* </View> */}
        </View>
      </View>
      <View className="bg-white">
        {step == 1 && (
          <TrainerPersonalComponent
            trainerData={trainerData}
            setTrainerData={setTrainerData}
          />
        )}
        {step == 2 && (
          <TrainerAddressComponent
            trainerData={trainerData}
            setTrainerData={setTrainerData}
          />
        )}
        {step == 3 && (
          <TrainerPaymentContainer
            trainerData={trainerData}
            setTrainerData={setTrainerData}
          />
        )}
      </View>
      <View className="h-screen bg-white pt-4  flex-1">
        {step !== 3 && (
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
        {step == 3 && (
          //   <TouchableOpacity onPress={() => navigation.navigate('term')}>
          <TouchableOpacity className="" onPress={handleSubmit}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 0, y: 2}}
              colors={['#FF3636', '#BE1721']}
              className="h-[50] w-[74%] mt-1 rounded-[10px] ml-auto mr-auto">
              <Text className="text-white font-bold text-center mt-[14]">
                Sign Up
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        )}
        <View className="flex-row justify-center">
          <View>
            <Text className="text-center font-medium ">
              Do you have an account?
            </Text>
          </View>
          <TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('authStack')}>
              <Text className="text-center font-medium ml-1">Log in</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignupTrainer;

const styles = StyleSheet.create({});
