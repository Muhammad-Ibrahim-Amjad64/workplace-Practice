import {ScrollView, StyleSheet, Text, View, Picker} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SelectList} from 'react-native-dropdown-select-list';
// import CoustomButton from '../CoustomButton.js/CoustomButton';
import SelectDropdown from 'react-native-select-dropdown';
import {Country} from 'country-state-city';
import DropDownPicker from 'react-native-dropdown-picker';
const countries = [
  'Egypt',
  'Canada',
  'Australia',
  'Ireland',
  'Egypt',
  'Canada',
  'Australia',
  'Ireland',
];
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {
  getCitiesByState,
  getStatesByCountry,
} from '../Utlies/constant/Location';
import CoustomButton from './CoustomButton.js/CoustomButton';
const data = [
  {key: '1', value: 'Mobiles'},
  {key: '2', value: 'Appliances'},
  {key: '3', value: 'Cameras'},
  {key: '4', value: 'Computers'},
  {key: '5', value: 'Vegetables'},
  {key: '6', value: 'Diary Products'},
  {key: '7', value: 'Drinks'},
];

const LocationDropdown = (
  {
    //   style,
    //   width,
    //   value,
    //   onChange,
    //   placeholder,
    //   data,
  },
) => {
  const [selectedState, setSelectedState] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedcountries, setSelectedcountries] = useState('');

  const [countries, setcountries] = useState([]);

  useEffect(() => {
    const countr = Country.getAllCountries();
    console.log('counter', countr);

    const country = countr.map(i => {
      return {value: i.name, key: i.isoCode};
    });
    setcountries(country);
    console.log('country', country);
  }, []);
  useEffect(() => {
    const _states = getStatesByCountry(selectedcountries);
    const filterStates = _states.map(state => {
      return {value: state.name, key: state.isoCode};
    });
    setStates(filterStates);
    console.log('state', _states);
  }, [selectedcountries]);

  useEffect(() => {
    const _cities = getCitiesByState(selectedcountries, selectedState);

    setCities(_cities);
  }, [selectedState]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);
  console.log(selectedcountries);
  const [selectedItem, setSelectedItem] = useState('Item 1');
  return (
    <View style={{}}>
      {/* <SelectDropdown
        data={countries}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          // text represented after item is selected
          // if data array is an array of objects then return selectedItem.property to render after item is selected
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          // text represented for each item in dropdown
          // if data array is an array of objects then return item.property to represent item in dropdown
          return item;
        }}
      /> */}

      <View></View>
      <SelectList
        setSelected={val => setSelectedcountries(val)}
        data={countries}
        save="key"
        dropdownStyles={{
          //   position: 'absolute',
          backgroundColor: '#F8F8F8',

          //   width: 200,

          //   top: responsiveHeight(5),
          //   zIndex: 999,
        }}
        boxStyles={{
          width: 200,
          backgroundColor: '#F8F8F8',
          borderColor: '#F8F8F8',
        }}
        label="Categories"
        placeholder={'selected items'}
      />
      <SelectList
        setSelected={val => setSelectedState(val)}
        data={states}
        save="key"
        dropdownStyles={{
          //   position: 'absolute',
          backgroundColor: '#F8F8F8',

          //   width: 200,

          //   top: responsiveHeight(5),
        }}
        boxStyles={{
          width: 200,
          backgroundColor: '#F8F8F8',
          borderColor: '#F8F8F8',
        }}
        label="Categories"
        placeholder={'selected items'}
      />
      <SelectList
        setSelected={val => val}
        data={cities}
        save="key"
        dropdownStyles={{
          position: 'absolute',
          backgroundColor: '#F8F8F8',

          //   width: 200,

          top: responsiveHeight(5),
        }}
        boxStyles={{
          width: 200,
          backgroundColor: '#F8F8F8',
          borderColor: '#F8F8F8',
        }}
        label="Categories"
        placeholder={'selected items'}
      />
      <CoustomButton bgcolor={'red'} />
    </View>
  );
};

export default LocationDropdown;

const styles = StyleSheet.create({});
