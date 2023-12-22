import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../../components/Header';
import background from '../../../assets/background.jpg';
import Search from '../../../components/Search';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {data as Data} from './Myvideos';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import CoustomTextinput from '../../../Common/Textinput/Textinput';
import {images} from '../../../Utlies/constant/Themse';
import CoustomHeader from '../../../Common/Header/Header';
import {useGetEquipmentQuery} from '../../../store/Trainer';
import {useSelector} from 'react-redux';

const EquipmentScreen = ({navigation}) => {
  const [search, setSearch] = useState('');
  const id = useSelector(state => state.userSlice.user._id);
  console.log(id);
  const {data, status, isError, isLoading} = useGetEquipmentQuery();
  console.log('===>>>>equipment data ', data, status, isError, isLoading);
  console.log(data);
  const fast = item => {
    console.log(item);
  };
  return (
    <ImageBackground source={background} style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <CoustomHeader
              Heading={'Equipment'}
              lefticon={images.Backbtn}
              color={'#FFFF'}
              // righticon={images.bellIcon}
              // rightstyle={{right: responsiveWidth(-1)}}
              leftstyle={{top: responsiveWidth(1.5)}}
              leftTouch={() => navigation.goBack()}
            />
          </View>
          <View style={styles.searchContainer}>
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
          </View>
          <FlatList
            data={Data}
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
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Equimentsitems', {items: item.Heading});
                }}
                style={{
                  marginVertical:
                    index % 2.5 !== 0
                      ? responsiveHeight(0)
                      : responsiveHeight(2),
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
              </TouchableOpacity>
            )}
          />
          {/* <View style={styles.scrollContainer}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
              {data?.map((e, i) => (
                <View style={styles.card} key={i}>
                  <ImageBackground
                    style={[
                      styles.cardImage,
                      i % 1.5 ? styles.cardImageLarge : styles.cardImageSmall,
                    ]}
                    source={{uri: e?.Images}}>
                    <View style={styles.cardTextContainer}>
                      <Text style={styles.cardTitle}>{e?.Heading}</Text>
                      <Text style={styles.cardDescription}>{e?.disc}</Text>
                    </View>
                  </ImageBackground>
                </View>
              ))}
            </ScrollView>
          </View> */}
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 4,
  },
  headerContainer: {
    marginTop: responsiveHeight(5),
    marginBottom: responsiveHeight(2),
  },
  headerButton: {
    paddingHorizontal: responsiveWidth(5),
  },
  headerText: {
    color: 'white',
    fontSize: responsiveFontSize(2.5),
    fontWeight: 'bold',
  },
  searchContainer: {
    marginBottom: responsiveHeight(2),
  },
  scrollContainer: {
    flex: 1,
    // marginBottom: '35%',
  },
  scrollContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
    marginHorizontal: responsiveWidth(4),
    // top: responsiveHeight(2),
  },
  card: {
    marginVertical: 2,
  },
  cardImage: {
    width: responsiveWidth(45),
    borderRadius: responsiveWidth(10),
    overflow: 'hidden',
  },
  cardImageLarge: {
    height: responsiveHeight(30),
  },
  cardImageSmall: {
    height: responsiveHeight(25),
  },
  cardTextContainer: {
    bottom: 0,
    height: responsiveHeight(10),
    paddingVertical: responsiveHeight(2),
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    alignSelf: 'center',
    width: responsiveWidth(45),
    paddingHorizontal: responsiveWidth(3),
  },
  cardTitle: {
    fontSize: responsiveFontSize(2.3),
    color: 'white',
    fontWeight: 'bold',
  },
  cardDescription: {
    fontSize: responsiveFontSize(1.6),
    color: 'gray',
    fontWeight: 'light',
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

export default EquipmentScreen;
