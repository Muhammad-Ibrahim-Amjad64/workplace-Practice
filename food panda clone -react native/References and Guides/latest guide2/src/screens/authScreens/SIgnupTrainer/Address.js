import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Fields from '../../../Common/Fields/Fields';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {
  getCitiesByState,
  getStatesByCountry,
} from '../../../Utlies/constant/Location';

const Address = ({control, errors}) => {
  const [states, setStates] = useState([]);
  const [selectedStates, setSelectedStates] = useState();
  const [city, setcity] = useState([]);
  const [cities, setcities] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      const state = getStatesByCountry('US');
      setStates(state);
    }, 3000);
  }, [selectedStates]);
  useEffect(() => {
    const cities = getCitiesByState('US', selectedStates);
    setcity(cities);
  }, [selectedStates]);
  return (
    <>
      <View>
        <View style={styles.Addressboxes}>
          <View>
            <Fields
              control={control}
              name={'address'}
              placeholder={'Address'}
              inputWidht={responsiveWidth(80)}
              alignSelf
              style={{
                marginTop: responsiveHeight(2),
                height: responsiveHeight(6.5),
              }}
              rules={{
                required: {
                  value: true,
                  message: 'Please enter Address...',
                },
              }}
              error={errors}
              errorstyle={{left: responsiveWidth(1)}}
              errorcolor={'red'}
            />
          </View>
        </View>
        <View style={styles.Addressboxes}>
          <View style={{zIndex: 9999}}>
            <Fields
              type={'selectionlist'}
              name={'state'}
              control={control}
              // error={errors}
              inputWidht={responsiveWidth(80)}
              rules={{
                required: {value: true},
              }}
              data={states}
              placeholder={'state'}
              errorstyle={{left: responsiveWidth(1)}}
              setSelected={setSelectedStates}
              // errorcolor={'red'}
            />
          </View>
        </View>

        <View style={styles.G$AGe}>
          <Fields
            type={'selectionlist'}
            name={'city'}
            control={control}
            error={errors}
            inputWidht={responsiveWidth(38)}
            rules={{
              required: {value: true},
            }}
            height={responsiveHeight(6.9)}
            data={city}
            placeholder={'city'}
            errorstyle={{left: responsiveWidth(1)}}
            errorcolor={'red'}
            setSelected={setcities}
          />
          <Fields
            keyboardnumber
            name={'zipcode'}
            error={errors}
            inputWidht={responsiveWidth(38)}
            style={{height: responsiveHeight(6.9)}}
            control={control}
            labelColor={'grey'}
            bordercolor={'grey'}
            placeholder={'Zip'}
            rules={{
              required: {value: true},
            }}
            errorstyle={{left: responsiveWidth(1)}}
            errorcolor={'red'}
          />
        </View>
      </View>
    </>
  );
};

export default Address;

const styles = StyleSheet.create({
  Addressboxes: {
    marginTop: responsiveHeight(2),
    alignItems: 'center',
    zIndex: 999,
  },
  G$AGe: {
    marginTop: responsiveHeight(1),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: responsiveWidth(5),
    // zIndex: 999,
  },
});
