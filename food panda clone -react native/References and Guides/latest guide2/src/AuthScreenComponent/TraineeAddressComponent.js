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

const TraineeAddressComponent = ({traineeData, setTraineeData}) => {
  return (
    <>
      <View className="bg-white rounded-tr-[50] ">
        <View className="ml-14 mt-14">
          {/* <TextInput className='bg-[#F8F8F8] mb-4 pl-4 w-[85%] rounded-lg'
                        placeholder="Select Class"
                        cursorColor={'#191970'}
                        autoCapitalize="none"
                        keyboardType="default"
                        returnKeyType="next"
                        onSubmitEditing={Keyboard.dismiss}
                        blurOnSubmit={false}
                
                    />
                    <TextInput className='bg-[#F8F8F8] mb-4 pl-4 w-[85%] rounded-lg'
                        placeholder="Joning Date"
                        cursorColor={'#191970'}
                        autoCapitalize="none"
                        keyboardType="default"
                        returnKeyType="next"
                        onSubmitEditing={Keyboard.dismiss}
                        blurOnSubmit={false}
                
                    /> */}
          <TextInput
            className="bg-[#F8F8F8] mb-4 pl-4 w-[85%] rounded-lg text-black text-black"
            placeholder="Address"
            cursorColor={'#191970'}
            autoCapitalize="none"
            placeholderTextColor="#000"
            keyboardType="email-address"
            returnKeyType="next"
            onSubmitEditing={Keyboard.dismiss}
            blurOnSubmit={false}
            value={traineeData.address}
            onChangeText={val => setTraineeData({...traineeData, address: val})}
            // value={form.expire}
          />
          <TextInput
            className="bg-[#F8F8F8] mb-4 pl-4 w-[85%] rounded-lg text-black"
            placeholder="City"
            placeholderTextColor="#000"
            cursorColor={'#191970'}
            autoCapitalize="none"
            keyboardType="default"
            returnKeyType="next"
            onSubmitEditing={Keyboard.dismiss}
            blurOnSubmit={false}
            value={traineeData.city}
            onChangeText={val => setTraineeData({...traineeData, city: val})}
            // value={form.expire}
          />

          <View className="flex-row ">
            <View className="mr-1 w-[42%]">
              <TextInput
                className="bg-[#F8F8F8] mb-4 pl-4 w-[100%] rounded-lg text-black"
                placeholder="State"
                cursorColor={'#191970'}
                autoCapitalize="none"
                keyboardType="default"
                returnKeyType="next"
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                value={traineeData.state}
                placeholderTextColor="#000"
                onChangeText={val =>
                  setTraineeData({...traineeData, state: val})
                }
                // value={form.expire}
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
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                placeholderTextColor="#000"
                value={traineeData.zipCode}
                onChangeText={val =>
                  setTraineeData({...traineeData, zipCode: val})
                }
                // value={form.expire}
              />
            </View>
          </View>
        </View>

        {/* button*/}
        {/* <TouchableOpacity>
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 2 }}
                        colors={['#FF3636', '#BE1721']}
                        className="h-[50] w-[70%] rounded-[10px] ml-auto mr-auto">
                        <Text className="text-white font-bold text-center mt-[14]">Sign in</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <View className="flex-row justify-center">
                    <View>
                        <Text className="text-center font-medium ">Do you have an account?</Text>
                    </View>
                    <TouchableOpacity>
                        <View>
                            <Text className="text-center font-medium ml-1">Log in</Text>
                        </View>
                    </TouchableOpacity>
                </View> */}
      </View>
    </>
  );
};

export default TraineeAddressComponent;

const styles = StyleSheet.create({});
