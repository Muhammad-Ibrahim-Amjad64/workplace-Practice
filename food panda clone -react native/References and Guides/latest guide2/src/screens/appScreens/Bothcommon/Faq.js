import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import background from '../../../assets/app-background.jpg';
import backIcon from '../../../assets/back-icon.png';

import rightArrowIcon from '../../../assets/right-arrow.png';
import settingBottomBackground from '../../../assets/setting-bottom-background.png';
import settingTopBackground from '../../../assets/setting-top-background.png';
import ellipseOne from '../../../assets/profile-ellipse-1.png';
import ellipseTwo from '../../../assets/profile-ellipse-2.png';
import pencilIcon from '../../../assets/pencil.png';
import close from '../../../assets/closearrow.png';
import openarrow from '../../../assets/open.png';
import profilePencil from '../../../assets/profile-pencil.png';

export default function Faq({navigation}) {
  const [select, setSelect] = useState(null);

  const open = i => {
    if (select === i) {
      return setSelect(null);
    }
    setSelect(i);
  };

  const data = [
    {
      Question: 'How App Work ?',
      Answer:
        'Donec quam quam, consequat ut est sit amet, tincidunt bibendum orci. Vestibulum',
    },
    {
      Question: 'How App Work ?',
      Answer:
        'Donec quam quam, consequat ut est sit amet, tincidunt bibendum orci. Vestibulum',
    },
    {
      Question: 'How App Work ?',
      Answer:
        'Donec quam quam, consequat ut est sit amet, tincidunt bibendum orci. Vestibulum',
    },
    {
      Question: 'How App Work ?',
      Answer:
        'Donec quam quam, consequat ut est sit amet, tincidunt bibendum orci. Vestibulum',
    },
    {
      Question: 'How App Work ?',
      Answer:
        'Donec quam quam, consequat ut est sit amet, tincidunt bibendum orci. Vestibulum',
    },
  ];

  return (
    <ImageBackground source={background} className="flex-1">
      <View
        // style={styles.header}
        className="flex-row align-center justify-between  mt-[6vh] mx-[4vh]">
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image resizeMode="contain" source={backIcon} />
        </TouchableOpacity>
        {/* flex: 1, color: 'white', fontSize: 18, fontWeight: 'bold', textAlign:
        'center', */}
        <View>
          <Text className="text-white text-xl font-bold text-center">
            App FAQ's
          </Text>
        </View>
        <View></View>
      </View>

      <View
        className="items-center justify-center flex-1"

        // style={styles.content}
      >
        <ImageBackground
          source={settingTopBackground}
          className="w-[90vw] h-[50vh] items-center justify-center mb-[5vh]"
          // style={styles.contentBackground}
        >
          {data.map((item, i) => (
            <View key={i}>
              <Pressable
                onPress={() => open(i)}
                //               backgroundColor: 'rgba(255, 255, 255, 0.15)',
                // marginVertical: 2,
                // width: 300,
                // borderRadius: 20,
                // flexDirection: 'row',
                //           justifyContent: 'space-between',
                className="bg-neutral-800 w-[80vw] h-[7vh] rounded-[20px] my-[1vh] flex-row justify-between items-center"
                // style={styles.questionContainer}
              >
                <Text
                  className="pl-[2vh] color-[#fff]"
                  // style={styles.questionText}
                >
                  {item.Question}
                </Text>
                <Image
                  source={select === i ? openarrow : close}
                  style={styles.arrowIcon}
                />
              </Pressable>
              {select === i ? (
                <View>
                  <Text
                    className="color-[#fff] text-l justify-between items-center "
                    // style={styles.answerText}
                  >
                    {item.Answer}
                  </Text>
                </View>
              ) : null}
            </View>
          ))}
        </ImageBackground>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    marginLeft: 25,
  },
  title: {
    flex: 1,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentBackground: {
    width: 350,
    padding: 8,
    marginTop: 10,
  },
  questionContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    marginVertical: 2,
    width: 300,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  questionText: {
    paddingLeft: 10,
    color: 'white',
    padding: 10,
  },
  arrowIcon: {
    marginRight: 10,
  },
  answerText: {
    color: 'white',
    fontSize: 12,
  },
});
