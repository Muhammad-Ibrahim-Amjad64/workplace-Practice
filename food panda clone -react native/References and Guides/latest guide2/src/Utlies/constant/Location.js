import {State, City} from 'country-state-city';

export const getStatesByCountry = selectedCountry => {
  const states = State.getStatesOfCountry(selectedCountry).map(i => {
    return {value: i.name, key: i.isoCode};
  });
  return states;
};

export const getCitiesByState = (countrycode, selectedState) => {
  const cities = City.getCitiesOfState(countrycode, selectedState).map(city => {
    return {value: city.name, key: city.isoCode};
  });
  return cities;
};
