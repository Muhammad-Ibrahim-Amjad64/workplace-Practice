import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {useGetEquipmentQuery} from '../../../store/Trainer';

const Equimentsitems = ({navigation, route}) => {
  const {items} = route.params;
  console.log(items);
  const {data, status, isError, isLoading} = useGetEquipmentQuery();
  console.log('===>>>>equipment data ', data, status, isError, isLoading);
  console.log(data);
  return (
    <View>
      <FlatList
        data={data.equipments}
        renderItem={({items, index}) => {
          return <View></View>;
        }}
      />
    </View>
  );
};

export default Equimentsitems;

const styles = StyleSheet.create({});
