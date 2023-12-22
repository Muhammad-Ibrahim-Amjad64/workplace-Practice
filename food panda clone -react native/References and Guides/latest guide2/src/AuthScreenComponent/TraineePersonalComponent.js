import {
  StyleSheet,
  Text,
  View,
  Image,
  Keyboard,
  TextInput,
  TouchableOpacity,
  Pressable,
  Platform,
} from 'react-native';
// import DropDown from 'react-native-paper-dropdown';
import React, {useState} from 'react';
import Profile from '../assets/profile.png';
import DropDown from 'react-native-paper-dropdown';
import {Provider, TextInput as TextInput1} from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
const TraineePersonalComponent = ({traineeData, setTraineeData}) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [gender, setGender] = useState();
  const [date, setDate] = useState(new Date());
  const [showpicker, setShowpicker] = useState(false);
  const genderList = [
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'},
    {label: 'Others', value: 'others'},
  ];
  const togglepicker = () => {
    setShowpicker(!showpicker);
  };
  const onChange = ({type}, selectedDate) => {
    if (type == 'set') {
      const currentDate = selectedDate;
      setDate(currentDate);
      if (Platform.OS === 'android') {
        setTraineeData({...traineeData, birthDate: currentDate.toDateString()});
        togglepicker();
      }
    }
    // else {
    //   // togglepicker();
    // }
  };
  return (
    <View>
      <View className="rounded-tr-[50]">
        <View className="items-center mt-[-35]">
          <Image source={Profile} />
        </View>
        <View className="ml-14">
          <TextInput
            className="bg-[#F8F8F8] mb-2 pl-4 w-[85%] rounded-lg text-black"
            placeholder="First Name"
            cursorColor={'#191970'}
            autoCapitalize="none"
            keyboardType="default"
            placeholderTextColor="#000"
            returnKeyType="next"
            onSubmitEditing={Keyboard.dismiss}
            blurOnSubmit={false}
            value={traineeData.firstName}
            onChangeText={val =>
              setTraineeData({...traineeData, firstName: val})
            }
          />
          <TextInput
            className="bg-[#F8F8F8] mb-2 pl-4 w-[85%] rounded-lg text-black"
            placeholder="Last Name"
            cursorColor={'#191970'}
            autoCapitalize="none"
            placeholderTextColor="#000"
            keyboardType="default"
            returnKeyType="next"
            onSubmitEditing={Keyboard.dismiss}
            blurOnSubmit={false}
            value={traineeData.lastName}
            onChangeText={val =>
              setTraineeData({...traineeData, lastName: val})
            }
          />
          <TextInput
            className="bg-[#F8F8F8] mb-2 pl-4 w-[85%] rounded-lg text-black"
            placeholder="Email"
            cursorColor={'#191970'}
            autoCapitalize="none"
            placeholderTextColor="#000"
            keyboardType="email-address"
            returnKeyType="next"
            onSubmitEditing={Keyboard.dismiss}
            blurOnSubmit={false}
            value={traineeData.email}
            onChangeText={val => setTraineeData({...traineeData, email: val})}
          />
          <View className="flex-row ">
            <View className="mr-1 w-[42%]">
              <TextInput
                className="bg-[#F8F8F8] mb-2 pl-4 w-[100%] rounded-lg text-black"
                placeholder="Password"
                cursorColor={'#191970'}
                autoCapitalize="none"
                placeholderTextColor="#000"
                keyboardType="default"
                returnKeyType="next"
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                value={traineeData.password}
                secureTextEntry={true}
                onChangeText={val =>
                  setTraineeData({...traineeData, password: val})
                }
              />
            </View>
            <View className="w-[42%]">
              <TextInput
                className="bg-[#F8F8F8] mb-2 pl-4 w-[100%] rounded-lg text-black"
                placeholder="Confirm Password"
                cursorColor={'#191970'}
                autoCapitalize="none"
                keyboardType="default"
                placeholderTextColor="#000"
                returnKeyType="next"
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                value={traineeData.cpassword}
                secureTextEntry={true}
                onChangeText={val =>
                  setTraineeData({...traineeData, cpassword: val})
                }
              />
            </View>
          </View>

          <View className="flex-row ">
            <View className="mr-1 w-[42%]">
              <TextInput
                className="bg-[#F8F8F8] mb-2 pl-4 w-[100%] rounded-lg text-black"
                placeholder="Gender"
                cursorColor={'#191970'}
                autoCapitalize="none"
                placeholderTextColor="#000"
                keyboardType="default"
                returnKeyType="next"
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                value={traineeData.gender}
                onChangeText={val =>
                  setTraineeData({...traineeData, gender: val})
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
            {/* {showpicker && ( */}
            {/* <Pressable onPress={togglepicker()}> */}
            <View
              className="w-[42%]"
              onTouchEnd={() => setShowpicker(!showpicker)}>
              <TextInput
                className="bg-[#F8F8F8] mb-2 pl-4 w-[100%] rounded-lg text-black"
                placeholder="Date of Birth"
                returnKeyType="next"
                placeholderTextColor="#000"
                blurOnSubmit={false}
                editable={false}
                value={traineeData.birthDate}
                onChangeText={val =>
                  setTraineeData({...traineeData, birthDate: val})
                }
              />
            </View>
            {/* </Pressable> */}
            {/* )} */}
          </View>
          <View className="flex-row ">
            <View className="mr-1 w-[42%]">
              <TextInput
                className="bg-[#F8F8F8] mb-2 pl-4 w-[100%] rounded-lg text-black"
                placeholder="Weight in ibs"
                cursorColor={'#191970'}
                autoCapitalize="none"
                keyboardType="number-pad"
                returnKeyType="next"
                placeholderTextColor="#000"
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                value={traineeData.weight}
                onChangeText={val =>
                  setTraineeData({...traineeData, weight: val})
                }
              />
            </View>
            <View className="w-[42%]">
              <TextInput
                className="bg-[#F8F8F8] mb-2 pl-4 w-[100%] rounded-lg text-black"
                placeholder="Height in ft"
                cursorColor={'#191970'}
                autoCapitalize="none"
                keyboardType="visible-password"
                returnKeyType="next"
                placeholderTextColor="#000"
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                value={traineeData.height}
                onChangeText={val =>
                  setTraineeData({...traineeData, height: val})
                }
              />
            </View>
          </View>
        </View>
        {/* button*/}
      </View>
    </View>
  );
};

export default TraineePersonalComponent;

const styles = StyleSheet.create({});
