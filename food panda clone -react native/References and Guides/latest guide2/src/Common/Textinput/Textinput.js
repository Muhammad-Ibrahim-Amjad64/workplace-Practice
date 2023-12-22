import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {
  DiscriptionText,
  LargeText,
  MediumText,
  NormalText,
  XLargeText,
  XXLargeText,
} from './../../Common/Coustomtext/Index';
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';

const CoustomTextinput = ({
  fontFamily,
  labelStyle,
  labelColor,
  labelbold,
  label,
  inputWidht,
  secureTextEntry,
  passwordEye,
  inputIcon,
  keyboardnumber,
  placeholder,
  errorcolor,
  errorstyle,
  Error,
  value,
  onchangetext,
  style,
  alignSelf,
  maxLength,
  inputstyle,
  placeholdercolor,
  numberOfLines,
  widthinput,
  multiline,
}) => {
  const [hide, Sethide] = useState(true);

  console.log(placeholdercolor);
  return (
    <View style={{}}>
      {label && (
        <NormalText
          children={label}
          bold={labelbold}
          color={labelColor}
          fontFamily={fontFamily}
          textStyle={labelStyle}
        />
      )}

      <View
        style={[
          {
            height: responsiveHeight(5.5),
            backgroundColor: '#F8F8F8',
            borderRadius: responsiveWidth(2),
            width: inputWidht ? inputWidht : responsiveWidth(80),

            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
            zIndex: -999,
          },
          alignSelf && {alignSelf: 'center'},
          style,
        ]}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            left: responsiveWidth(1),
          }}>
          {inputIcon && (
            <Image
              resizeMode="contain"
              style={{
                height: responsiveHeight(3.5),
                width: responsiveHeight(3.5),
                tintColor: 'grey',
              }}
              source={inputIcon}
            />
          )}

          <TextInput
            numberOfLines={numberOfLines}
            multiline={multiline}
            style={[
              {
                height: responsiveHeight(5.5),
                left: responsiveWidth(1),
                width: widthinput ? widthinput : responsiveWidth(55),
                color: placeholdercolor ? placeholdercolor : 'black',
                textAlignVertical: 'top',
              },
              inputstyle,
            ]}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry && hide}
            keyboardType={keyboardnumber ? 'numeric' : 'twitter'}
            showSoftInputOnFocus
            value={value}
            onChangeText={onchangetext}
            placeholderTextColor={'grey'}
            maxLength={maxLength}
          />
        </View>
        {passwordEye && (
          <TouchableOpacity
            onPress={() => {
              Sethide(!hide);
            }}>
            <Image
              resizeMode="contain"
              source={
                secureTextEntry == hide
                  ? require('../Assets/View.png')
                  : require('../Assets/Hide.png')
              }
              style={{
                height: responsiveHeight(3),
                width: responsiveHeight(3),
                right: responsiveWidth(1.5),
                tintColor: 'grey',
              }}
            />
          </TouchableOpacity>
        )}
      </View>
      {Error && (
        <DiscriptionText
          children={Error}
          color={errorcolor}
          textStyle={errorstyle}
        />
      )}
    </View>
  );
};

export default CoustomTextinput;

const styles = StyleSheet.create({});
