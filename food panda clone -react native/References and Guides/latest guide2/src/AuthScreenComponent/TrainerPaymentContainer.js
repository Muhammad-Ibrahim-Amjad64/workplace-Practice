import {
  StyleSheet,
  Text,
  View,
  Image,
  Keyboard,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Pressable,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import visa from '../assets/visa.png';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const TrainerPaymentContainer = ({trainerData, setTrainerData}) => {
  const handleDateChange = text => {
    // Check if the input length is less than or equal to 5 characters
    if (text.length <= 5) {
      // Use a regular expression to add a slash after the first two characters
      const formattedDate = text
        .replace(/\D/g, '') // Remove non-numeric characters
        .replace(/(\d{2})(\d{0,2})/, '$1/$2');
      setTrainerData({...trainerData, expiryDate: formattedDate});
    }
  };
  const options = {
    title: 'Select Image',
    type: 'library',
    options: {
      maxWidth: 200,
      maxHeight: 200,
      selectionLimit: 3,
      mediaType: 'photo',
      includeBase64: false,
    },
  };

  const openGallery = async () => {
    const images = await launchImageLibrary(options);
    console.log('images>>>', images);
    const formData = new FormData();
    formData.append('file', {
      uri: images.assets[0].uri,
      type: images.assets[0].type,
      name: images.assets[0].fileName,
    });
    console.log('formData>>>', formData);
    setTrainerData({...trainerData, trainerCertificate: formData});
  };

  return (
    <View className="bg-white">
      <View className="bg-white">
        <View className=" rounded-tr-[50] z-10">
          <Image
            source={visa}
            resizeMode="contain"
            className=" h-[200] w-full z-10"
          />
        </View>
        <View className="bg-white -z-10 px-5 mx-8 rounded-lg">
          <TextInput
            className="bg-[#F8F8F8] mb-2 pl-4 w-[100%] rounded-lg text-black"
            placeholder="Card number"
            cursorColor={'#191970'}
            autoCapitalize="none"
            keyboardType="decimal-pad"
            returnKeyType="next"
            placeholderTextColor="#000"
            onSubmitEditing={Keyboard.dismiss}
            blurOnSubmit={false}
            value={trainerData.cardNumber}
            onChangeText={val =>
              setTrainerData({...trainerData, cardNumber: val})
            }
          />

          <View className="flex-row ">
            <View className="mr-1 w-[50%]">
              <TextInput
                className="bg-[#F8F8F8] mb-2 pl-4 w-[100%] rounded-lg text-black"
                placeholder="Expiry Date"
                cursorColor={'#191970'}
                keyboardType="numeric"
                placeholderTextColor="#000"
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                maxLength={5}
                value={trainerData.expiryDate}
                onChangeText={handleDateChange}
              />
            </View>
            <View className="w-[50%]">
              <TextInput
                className="bg-[#F8F8F8] mb-2 pl-4 w-[100%] rounded-lg text-black"
                placeholder="CVV"
                cursorColor={'#191970'}
                keyboardType="numeric"
                blurOnSubmit={false}
                placeholderTextColor="#000"
                maxLength={3}
                value={trainerData.cvv}
                onChangeText={val => setTrainerData({...trainerData, cvv: val})}
              />
            </View>
          </View>
          <View className=" flex flex-row justify-between items-center bg-[#F8F8F8] mb-2 pl-4 w-[100%] rounded-lg">
            <TextInput
              placeholder="Trainer's Certificate"
              cursorColor={'#191970'}
              autoCapitalize="none"
              keyboardType="default"
              returnKeyType="next"
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={false}
              placeholderTextColor="#000"
              // value={form.expire}
            />
            <TouchableOpacity onPress={openGallery} className="cursor-pointer">
              <FontAwesome
                name="image"
                size={20}
                color="#000000"
                marginRight={30}
              />
            </TouchableOpacity>
          </View>
          <View className=" flex flex-row justify-between items-center bg-[#FFDADA] mb-2 px-6 w-[100%] rounded-lg py-3 ">
            <Text className="font-bold text-base">Amount</Text>
            <Text className="font-bold text-base">$90.00</Text>
          </View>
        </View>
        {/* button*/}
      </View>
    </View>
  );
};

export default TrainerPaymentContainer;

const styles = StyleSheet.create({});
