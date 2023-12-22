import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  KeyboardAvoidingView,
} from 'react-native';
import React from 'react';
import background from '../../../assets/background.jpg';
import CoustomHeader from '../../../Common/Header/Header';
import {images} from '../../../Utlies/constant/Themse';
import settingBottomBackground from '../../../assets/setting-bottom-background.png';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import CoustomTextinput from '../../../Common/Textinput/Textinput';
import CoustomButton from '../../../Common/CoustomButton.js/CoustomButton';
export const data = [
  {
    Images:
      'https://avnifitness.net/wp-content/uploads/2022/02/man-workout-gym-working-wallpaper-preview.jpg',
    Heading: 'biceps',
    disc: 'Amet minim mollit non deserunt ullamco',
  },
  {
    Images:
      'https://sunnyhealthfitness.com/cdn/shop/articles/10-fun-effective-gym-ball-exercises-01.jpg?v=1611016541',
    Heading: 'chest',
    disc: 'Amet minim mollit non ',
  },
  {
    Images:
      'https://thumbs.dreamstime.com/z/sexy-athletic-girl-working-out-gym-fitness-woman-doing-exercise-beautiful-butt-thong-133352981.jpg',
    Heading: 'legs',
    disc: 'Amet minim mollit non deserunt ullamco',
  },
  {
    Images:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6OtatI_DxCmtnefRQZYjo77cBvdYFGuMICtAhoVpTvF0GnJjxu6YHx7_aa_XMkhP3BQw&usqp=C',
    Heading: 'biceps',
    disc: 'Amet minim mollit non deserunt ullamco',
  },
  {
    Images:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYaZpbGt-ke7bzJQxXfbE4QajBysfM-6xG2Q&usqp=CAU',
    Heading: 'chest',
    disc: 'Amet minim mollit non deserunt ullamco',
  },
  {
    Images:
      'https://cdn.wareable.com/assets/images/368-sport-wearable-technology-features-the-best-gym-trackers-and-wearables-to-work-out-smarter-image1-8rvp5thbn1.jpg',
    Heading: 'legs',
    disc: 'Amet minim mollit non deserunt ullamco',
  },
  {
    Images:
      'https://cdn.wareable.com/assets/images/368-sport-wearable-technology-features-the-best-gym-trackers-and-wearables-to-work-out-smarter-image1-8rvp5thbn1.jpg',
    Heading: 'biceps',
    disc: 'Amet minim mollit non deserunt ullamco',
  },
];

const Myvideos = ({navigation}) => {
  return (
    <ImageBackground source={background} style={{flex: 1}}>
      <StatusBar
        barStyle={'default'}
        translucent={true}
        backgroundColor={'transparent'}
      />

      <View style={styles.header}>
        <CoustomHeader
          Heading={'My Videos`s'}
          lefticon={images.Backbtn}
          color={'#FFFF'}
          // righticon={images.bellIcon}
          leftTouch={() => navigation.goBack()}
          leftstyle={{top: responsiveWidth(1.5)}}
        />
      </View>
      <View style={{flex: 1}}>
        <CoustomTextinput
          style={{
            alignSelf: 'center',
            backgroundColor: '#FFFFFF21',
          }}
          inputWidht={responsiveWidth(90)}
          inputIcon={images.SearchIcon}
          placeholder={'Search..'}
          placeholdercolor="#fffF"
        />
        <View
          style={{
            flexDirection: 'row',
            gap: responsiveWidth(3),
            left: responsiveWidth(2),
            marginTop: responsiveHeight(1),
          }}>
          <CoustomButton
            bgcolor={'red'}
            style={{
              height: responsiveHeight(5),
              borderRadius: responsiveWidth(5),
            }}
            width={responsiveWidth(25)}
            text={'Videos'}
            textcolor={'#fff'}
          />
          <TouchableOpacity
            style={styles.logoplusbtn}
            onPress={() => {
              navigation.navigate('AddVideo');
            }}>
            <Image
              source={images.logoplusbtn}
              style={{
                height: responsiveHeight(3),
                width: responsiveHeight(3),
                tintColor: 'red',
              }}
            />
          </TouchableOpacity>
        </View>
        <FlatList
          data={data}
          numColumns={2}
          contentContainerStyle={{
            justifyContent: 'space-between',
          }}
          style={{
            alignSelf: 'center',
            width: responsiveWidth(95),
            marginVertical: responsiveHeight(1),
          }}
          renderItem={({item, index}) => (
            <View
              style={{
                marginVertical:
                  index % 2.5 !== 0 ? responsiveHeight(0) : responsiveHeight(2),
                width: responsiveWidth(50),
                alignSelf: 'center',
              }}>
              <ImageBackground
                style={{
                  width: responsiveWidth(45),
                  height:
                    index % 2.5 !== 0
                      ? responsiveHeight(25)
                      : responsiveHeight(30),
                  borderRadius: 20,
                  overflow: 'hidden',
                }}
                source={{uri: item.Images}}>
                <View style={styles.listtxtcontain}>
                  <Text style={styles.listheading}>{item.Heading}</Text>
                  <Text style={styles.listdisc}>{item.disc}</Text>
                </View>
              </ImageBackground>
            </View>
          )}
        />
      </View>
    </ImageBackground>
  );
};

export default Myvideos;

const styles = StyleSheet.create({
  header: {
    marginTop: responsiveHeight(5),
    marginBottom: responsiveHeight(2),
  },
  logoplusbtn: {
    height: responsiveHeight(5),
    width: responsiveHeight(8),
    borderRadius: responsiveHeight(2.5),
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  listtxtcontain: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: responsiveWidth(2),
    paddingBottom: responsiveHeight(1),
  },
  listheading: {
    fontSize: responsiveFontSize(3),
    color: 'white',
    fontWeight: 'bold',
    elevation: 10,
  },
  listdisc: {
    fontSize: responsiveFontSize(1.7),
    color: 'gray',
    fontWeight: 'light',
  },
});
