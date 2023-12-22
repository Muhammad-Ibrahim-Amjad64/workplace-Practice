import React, {useCallback, useMemo, useRef, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LoginScreen from '../screens/authScreens/LoginScreen';
import WelcomeScreen from '../screens/introScreens/WelcomeScreen';

const SignUpBottomSheet = ({navigation}) => {
  const [sheet, setSheet] = useState(false);
  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['1%', '30%'], []);

  // callbacks
  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
    if (index == 0) {
      setSheet(false);
    }
    if (index == 1) {
      setSheet(true);
    }
  }, []);

  // renders
  return (
    <View style={styles.container}>
      <LoginScreen sheet={sheet} setSheet={setSheet} />
      <BottomSheet
        ref={bottomSheetRef}
        index={sheet ? 1 : 0}
        snapPoints={snapPoints}
        style={{marginTop: 10}}
        onChange={handleSheetChanges}>
        <View style={styles.contentContainer}>
          <TouchableOpacity
            className="bg-[#BE1721] p-4 rounded-xl mx-8 my-3 items-center"
            onPress={() => navigation.navigate('signUpTrainee')}>
            <Text className="text-white font-bold text-lg ">
              Sign Up As a Trainee
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="border-2 border-[#BE1721] p-4 rounded-xl mx-8 items-center"
            onPress={() => navigation.navigate('signUpTrainer')}>
            <Text className="text-[#BE1721]  font-bold text-lg ">
              Sign Up As a Trainer
            </Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: '100%',
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,

    // alignItems: 'center',
  },
});

export default SignUpBottomSheet;
