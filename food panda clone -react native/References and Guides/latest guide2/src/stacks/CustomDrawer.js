import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import drawerProfile from '../assets/drawer-profile.png';
import logoutIcon from '../assets/logout.png';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {logoutUser} from '../store/AuthSlice';
import {useGetEquipmentdataQuery} from '../store/Trainer';

const CustomDrawer = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const Togglelogout = () => {
    dispatch(logoutUser());
  };
  const id = useSelector(state => state.userSlice.user._id);
  console.log(id);
  const {data, error} = useGetEquipmentdataQuery(id);
  console.log(data);

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={{flex: 1}}>
          <View className="flex items-center mt-8 mb-14">
            <Image
              source={{uri: data?.user?.profileURL}}
              style={{
                height: 80,
                width: 80,
                borderRadius: 40,
                marginBottom: 10,
              }}
            />
            <Text className="text-black font-semibold text-lg">
              {data?.user?.firstName}
              {data?.user?.lastName}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text className="text-[#353535] text-sm">
                {data?.user?.email}
              </Text>
            </View>
          </View>
          <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
            <DrawerItemList {...props} />
          </View>
          <View
            style={{
              height: responsiveHeight(20),
              justifyContent: 'center',
              width: responsiveWidth(40),
              alignSelf: 'center',
            }}>
            <View
              onTouchEnd={() => Togglelogout()}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                width: responsiveWidth(30),
              }}>
              <Image
                source={logoutIcon}
                style={{
                  height: responsiveHeight(3),
                  width: responsiveHeight(3),
                }}
              />
              <Text className="text-black font-semibold ">Logout</Text>
            </View>
          </View>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({});
