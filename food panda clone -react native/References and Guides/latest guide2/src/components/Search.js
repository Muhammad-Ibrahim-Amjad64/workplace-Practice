import {Image, StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const Search = ({search, setSearch = () => {}, placeholder}) => {
  return (
    <View className="bg-[#FFFFFF21] flex-row px-4 py-1 rounded-xl shadow-[0px 1.93766px 14px rgba(0, 0, 0, 0.07)] gap-x-2">
      <Icon name="search" size={26} color="#C6C6C6" alignSelf="center" />

      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#FFF"
        value={search}
        onChangeText={text => setSearch(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export default React.memo(Search);
