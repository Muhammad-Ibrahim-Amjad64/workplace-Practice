import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SelectList} from 'react-native-dropdown-select-list';
import CoustomButton from '../CoustomButton.js/CoustomButton';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {sterngymAuthAPIS} from '../../store/Auth';
// const data = [
//   {key: '1', value: 'Mobiles'},
//   {key: '2', value: 'Appliances'},
//   {key: '3', value: 'Cameras'},
//   {key: '4', value: 'Computers'},
//   {key: '5', value: 'Vegetables'},
//   {key: '6', value: 'Diary Products'},
//   {key: '7', value: 'Drinks'},
// ];

const CoustomSelected = ({
  style,
  width,
  value,
  onChange,
  placeholder,
  data,
  height,
  setSelected,
}) => {
  const handleChange = val => {
    onChange(val);
    setSelected(val);
  };
  return (
    <View style={style}>
      <SelectList
        // dropdownShown={true}
        disabledItemStyles={{backgroundColor: '#fff'}}
        setSelected={handleChange}
        data={data}
        save="key"
        dropdownStyles={{
          position: 'absolute',
          backgroundColor: '#F8F8F8',
          width: width,
          top: responsiveHeight(5),
          zIndex: -9999,
        }}
        boxStyles={{
          width: width,
          backgroundColor: '#F8F8F8',
          borderColor: '#F8F8F8',
          height: height,
          alignItems: 'center',
        }}
        label="Categories"
        placeholder={placeholder}
      />
    </View>
  );
};

export default CoustomSelected;

const styles = StyleSheet.create({});
