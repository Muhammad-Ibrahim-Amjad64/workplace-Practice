import React, {useState} from 'react';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import Toast from 'react-native-toast-message';

const useToast = () => {
  const [count, setCount] = useState(0);
  const showToast = (type, text, message, time, options) => {
    Toast.show({
      type: type,
      text1: text,
      text2: message,
      visibilityTime: time,
      autoHide: true,
      bottomOffset: responsiveHeight(10),
      ...options,
    });
  };

  const updateButton = number => {
    // let _count = count + number;
    // console.log('number', number, 'count', count, '_count', _count);
    setCount(count + number);
  };

  return {showToast, updateButton, count};
};

export default useToast;
