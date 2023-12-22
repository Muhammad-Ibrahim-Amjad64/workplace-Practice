import {
  StyleSheet,
  Text,
  View,
  Image,
  Keyboard,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Profile from '../assets/profile.png';
import DateTimePicker from '@react-native-community/datetimepicker';

const TrainerPersonalComponent = ({trainerData, setTrainerData}) => {
  const [date, setDate] = useState(new Date());
  const [showpicker, setShowpicker] = useState(false);
  const togglepicker = () => {
    setShowpicker(!showpicker);
  };
  const onChange = ({type}, selectedDate) => {
    if (type == 'set') {
      const currentDate = selectedDate;
      setDate(currentDate);
      if (Platform.OS === 'android') {
        setTrainerData({...trainerData, birthDate: currentDate.toDateString()});
        togglepicker();
      }
    }
    // else {
    //   // togglepicker();
    // }
  };
  return (
    <View className="bg-white rounded-tr-[50]">
      <View className="items-center mt-[-30] left~2">
        <Image source={Profile} />
      </View>
      <View className="ml-14">
        <TextInput
          className="bg-[#F8F8F8] mb-2 pl-4 w-[85%] rounded-lg text-black"
          placeholder="First Name"
          cursorColor={'#191970'}
          autoCapitalize="none"
          keyboardType="default"
          returnKeyType="next"
          placeholderTextColor="#000"
          onSubmitEditing={Keyboard.dismiss}
          blurOnSubmit={false}
          value={trainerData.firstName}
          onChangeText={val => setTrainerData({...trainerData, firstName: val})}
        />
        <TextInput
          className="bg-[#F8F8F8] mb-2 pl-4 w-[85%] rounded-lg text-black"
          placeholder="Last Name"
          cursorColor={'#191970'}
          autoCapitalize="none"
          keyboardType="default"
          returnKeyType="next"
          placeholderTextColor="#000"
          onSubmitEditing={Keyboard.dismiss}
          blurOnSubmit={false}
          value={trainerData.lastName}
          onChangeText={val => setTrainerData({...trainerData, lastName: val})}
        />
        <TextInput
          className="bg-[#F8F8F8] mb-2 pl-4 w-[85%] rounded-lg text-black"
          placeholder="Email"
          cursorColor={'#191970'}
          autoCapitalize="none"
          keyboardType="default"
          placeholderTextColor="#000"
          returnKeyType="next"
          onSubmitEditing={Keyboard.dismiss}
          blurOnSubmit={false}
          value={trainerData.email}
          onChangeText={val => setTrainerData({...trainerData, email: val})}
        />

        <TextInput
          className="bg-[#F8F8F8] mb-2 pl-4 w-[85%] rounded-lg text-black"
          placeholder="Password"
          cursorColor={'#191970'}
          placeholderTextColor="#000"
          autoCapitalize="none"
          keyboardType="default"
          returnKeyType="next"
          secureTextEntry={true}
          onSubmitEditing={Keyboard.dismiss}
          blurOnSubmit={false}
          value={trainerData.password}
          onChangeText={val => setTrainerData({...trainerData, password: val})}
        />

        <TextInput
          className="bg-[#F8F8F8] mb-2 pl-4 w-[85%] rounded-lg text-black"
          placeholder="Confirm Password"
          cursorColor={'#191970'}
          autoCapitalize="none"
          placeholderTextColor="#000"
          keyboardType="default"
          returnKeyType="next"
          secureTextEntry={true}
          onSubmitEditing={Keyboard.dismiss}
          blurOnSubmit={false}
          value={trainerData.cpassword}
          onChangeText={val => setTrainerData({...trainerData, cpassword: val})}
        />

        <View className="flex-row ">
          <View className="mr-1 w-[42%]">
            <TextInput
              className="bg-[#F8F8F8] mb-2 pl-4 w-[100%] rounded-lg text-black"
              placeholder="Gender"
              placeholderTextColor="#000"
              cursorColor={'#191970'}
              autoCapitalize="none"
              keyboardType="default"
              returnKeyType="next"
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={false}
              value={trainerData.gender}
              onChangeText={val =>
                setTrainerData({...trainerData, gender: val})
              }
            />
          </View>
          {showpicker && (
            <DateTimePicker
              mode="date"
              display="spinner"
              value={date}
              onChange={onChange}
            />
          )}
          <View
            className="w-[42%]"
            onTouchEnd={() => setShowpicker(!showpicker)}>
            <TextInput
              className="bg-[#F8F8F8] mb-2 pl-4 w-[100%] rounded-lg"
              placeholder="Date of Birth"
              placeholderTextColor="#000"
              blurOnSubmit={false}
              value={trainerData.birthDate}
              onChangeText={val =>
                setTrainerData({...trainerData, birthDate: val})
              }
            />
          </View>
        </View>
      </View>
      {/* button*/}
    </View>
  );
};

export default TrainerPersonalComponent;

const styles = StyleSheet.create({});
