import {
  StyleSheet,
  Text,
  View,
  Keyboard,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

const TrainerAddressComponent = ({trainerData, setTrainerData}) => {
  return (
    <>
      <View className="bg-white rounded-tr-[50]">
        <View className="ml-14 mt-14">
          <TextInput
            className="bg-[#F8F8F8] mb-4 pl-4 w-[85%] rounded-lg text-black"
            placeholder="Address"
            cursorColor={'#191970'}
            autoCapitalize="none"
            keyboardType="default"
            placeholderTextColor="#000"
            returnKeyType="next"
            onSubmitEditing={Keyboard.dismiss}
            blurOnSubmit={false}
            value={trainerData.address}
            onChangeText={val => setTrainerData({...trainerData, address: val})}
          />
          <TextInput
            className="bg-[#F8F8F8] mb-4 pl-4 w-[85%] rounded-lg text-black"
            placeholder="City"
            cursorColor={'#191970'}
            autoCapitalize="none"
            placeholderTextColor="#000"
            keyboardType="default"
            returnKeyType="next"
            onSubmitEditing={Keyboard.dismiss}
            blurOnSubmit={false}
            value={trainerData.city}
            onChangeText={val => setTrainerData({...trainerData, city: val})}
          />

          <View className="flex-row ">
            <View className="mr-1 w-[42%]">
              <TextInput
                className="bg-[#F8F8F8] mb-4 pl-4 w-[100%] rounded-lg text-black"
                placeholder="State"
                cursorColor={'#191970'}
                autoCapitalize="none"
                placeholderTextColor="#000"
                keyboardType="default"
                returnKeyType="next"
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                value={trainerData.state}
                onChangeText={val =>
                  setTrainerData({...trainerData, state: val})
                }
              />
            </View>
            <View className="w-[42%]">
              <TextInput
                className="bg-[#F8F8F8] mb-4 pl-4 w-[100%] rounded-lg text-black"
                placeholder="Zip Code"
                cursorColor={'#191970'}
                autoCapitalize="none"
                keyboardType="numeric"
                returnKeyType="next"
                placeholderTextColor="#000"
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                value={trainerData.zipCode}
                onChangeText={val =>
                  setTrainerData({...trainerData, zipCode: val})
                }
              />
            </View>
          </View>
        </View>

        {/* button*/}
      </View>
    </>
  );
};

export default TrainerAddressComponent;

const styles = StyleSheet.create({});
