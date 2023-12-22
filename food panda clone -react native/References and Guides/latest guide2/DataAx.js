import {StyleSheet, Text, View, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Logindata = async () => {
  const res = await axios.get('https://sterngym.project-demo.live/api/login');
  return res;
};

const DataAx = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    Get();
    Alert.alert(data);
  }, []);
  const Get = async () => {
    await Logindata()
      .then(res => {
        setdata(res.data);
        Alert.alert(res.data);
      })
      .catch(error => {
        error;
      });
  };

  return <View></View>;
};

export default DataAx;

const styles = StyleSheet.create({});
