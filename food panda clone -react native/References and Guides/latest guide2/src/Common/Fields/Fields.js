import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Controller} from 'react-hook-form';
import CoustomTextinput from '../Textinput/Textinput';
import CoustomButton from '../CoustomButton.js/CoustomButton';
import Coustomdate from '../CoustomDateinput.js/Coustomdate';
import CoustomdropDown from '../CoustomdropDown/CoustomdropDown';
import COTP from '../CoustomOTP/CoustomOTP';
import CoustomSelected from '../CoustomSelected/CoustomSelected';
const Fields = ({
  name,
  control,
  rules,
  error,
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
  style,
  alignSelf,
  type,
  bordercolor,
  item,
  defaultValue,
  maxLength,
  index,
  data,
  height,
  setSelected,
  placeholdercolor,
  inputstyle,
  numberOfLines,
  multiline,
}) => {
  const Data = `otp[${index}]`;
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue}
      render={({field: {onChange, onBlur, value}}) => {
        if (type == 'date') {
          return (
            <Coustomdate
              Error={error && error[name]?.message}
              onChange={value => onChange(value)}
              value={value}
              bordercolor={bordercolor}
              color={labelColor}
              errorcolor={errorcolor}
              widht={inputWidht}
              errorstyle={errorstyle}
              textStyle={labelStyle}
              style={style}
            />
          );
        }
        // if (type == 'otp') {
        //   return <COTP onChange={onChange} value={value} ind={index} />;
        // }
        if (type == 'DateFormate') {
          const handleDateChange = input => {
            // Check if the input length is less than or equal to 5 characters
            // Use a regular expression to add a slash after the first two characters
            return input.length === 7 && input[2] === '/'
              ? null
              : input.replace(/\D/g, '').replace(/(\d{2})(\d{0,4})/, '$1/$2');
          };

          return (
            <CoustomTextinput
              Error={error && error[name]?.message}
              errorcolor={errorcolor}
              errorstyle={errorstyle}
              fontFamily={fontFamily}
              inputIcon={inputIcon}
              inputWidht={inputWidht}
              keyboardnumber={keyboardnumber}
              label={label}
              labelColor={labelColor}
              labelStyle={labelStyle}
              passwordEye={passwordEye}
              secureTextEntry={secureTextEntry}
              placeholder={placeholder}
              onchangetext={text => {
                const formatedvalue = handleDateChange(text);
                onChange(formatedvalue);
              }}
              value={value}
              style={style}
              alignSelf={alignSelf}
              maxLength={5}
            />
          );
        }
        if (type == 'Dropdown') {
          return (
            <CoustomdropDown
              Error={error && error[name]?.message}
              bordercolor={bordercolor}
              color={labelColor}
              inputwidht={inputWidht}
              label={label}
              errorcolor={errorcolor}
              errorstyle={errorstyle}
              onChange={value => onChange(value)}
              textStyle={labelStyle}
              value={value}
              item={item}
              placeholder={placeholder}
              style={style}
              widht={inputWidht}
            />
          );
        }

        if (type === 'card') {
          const formatCardNumber = cardNumber => {
            // Remove non-numeric characters and limit to 16 digits
            cardNumber = cardNumber.replace(/\D/g, '').substring(0, 16);

            // Add a space after every four digits
            const formattedCardNumber = cardNumber.replace(
              /(\d{4})(?=\d)/g,
              '$1 ',
            );

            return formattedCardNumber;
          };
          return (
            <CoustomTextinput
              Error={error && error[name]?.message}
              errorcolor={errorcolor}
              errorstyle={errorstyle}
              fontFamily={fontFamily}
              inputIcon={inputIcon}
              inputWidht={inputWidht}
              keyboardnumber={keyboardnumber}
              label={label}
              labelColor={labelColor}
              labelStyle={labelStyle}
              passwordEye={passwordEye}
              secureTextEntry={secureTextEntry}
              placeholder={placeholder}
              onchangetext={text => {
                const formated = formatCardNumber(text);
                onChange(formated);
              }}
              value={value}
              style={style}
              alignSelf={alignSelf}
              maxLength={maxLength}
            />
          );
        }
        if (type === 'selectionlist') {
          return (
            <CoustomSelected
              onChange={onChange}
              placeholder={placeholder}
              style={style}
              value={value}
              width={inputWidht}
              data={data}
              height={height}
              setSelected={setSelected}
            />
          );
        }
        return (
          <CoustomTextinput
            Error={error && error[name]?.message}
            errorcolor={errorcolor}
            errorstyle={errorstyle}
            fontFamily={fontFamily}
            inputIcon={inputIcon}
            inputWidht={inputWidht}
            keyboardnumber={keyboardnumber}
            label={label}
            labelColor={labelColor}
            labelStyle={labelStyle}
            passwordEye={passwordEye}
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            onchangetext={value => onChange(value)}
            value={value}
            style={style}
            alignSelf={alignSelf}
            maxLength={maxLength}
            placeholdercolor={placeholdercolor}
            inputstyle={inputstyle}
            numberOfLines={numberOfLines}
            multiline={multiline}
          />
        );
      }}
    />
  );
};

export default Fields;

const styles = StyleSheet.create({});
