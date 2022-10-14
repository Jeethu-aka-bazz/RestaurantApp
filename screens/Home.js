/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import HeaderTab from '../components/HeaderTab';
import RestItems from '../components/RestItems';
import store from '../store';

const Home = ({navigation}) => {
  const [restaurants, setRestaurants] = useState([]);
  const [theme, setTheme] = useState({});
  const [cityname, setCityname] = useState('');
  const [selectedCity, setSelectedCity] = useState({});
  const [searchFocused, setSearchFocused] = useState(false);
  const [cityList, setCityList] = useState([]);

  useEffect(() => {
    store.dispatch({
      type: 'changeDarkTheme',
    });
    setTheme(store.getState());
  }, []);

  useEffect(() => {
    (async () => {
      const apiLink = 'https://worldwide-restaurants.p.rapidapi.com/search';
      const options = {
        method: 'POST',
        header: {
          'X-RapidAPI-Key':
            '6f31118797msh5440041c30c0701p1e6a11jsn2e608fb72102',
          'X-RapidAPI-Host': 'worldwide-restaurants.p.rapidapi.com',
        },
        body: {
          q: cityname,
        },
      };
      await fetch(apiLink, options)
        .then(res => {
          return res.json();
        })
        .then(({results}) => {
          setCityList(results.data);
        });
    })();
  }, [cityname]);

  const restaurantApiCall = async () => {
    const apiLink = 'https://worldwide-restaurants.p.rapidapi.com/search';
    const options = {
      method: 'POST',
      headers: {
        'X-RapidAPI-Key': '6f31118797msh5440041c30c0701p1e6a11jsn2e608fb72102',
        'X-RapidAPI-Host': 'worldwide-restaurants.p.rapidapi.com',
      },
      body: JSON.stringify({
        language: 'en_US',
        limit: '10',
        currency: 'INR',
        location_id: selectedCity.location_id,
      }),
    };
    await fetch(apiLink, options)
      .then(res => {
        return res.json();
      })
      .then(({results}) => {
        setRestaurants(results.data);
      });
  };

  return (
    <SafeAreaView style={{backgroundColor: theme.pagebackground, flex: 1}}>
      <View style={{backgroundColor: theme.topbackground, padding: 15}}>
        <HeaderTab theme={theme} setTheme={setTheme} />
        <SearchBar
          theme={theme}
          cityname={cityname}
          setCityname={setCityname}
          cityList={cityList}
          setSelectedCity={setSelectedCity}
          searchFocused={searchFocused}
          setSearchFocused={setSearchFocused}
          restaurantApiCall={restaurantApiCall}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <RestItems
          navigation={navigation}
          restaurants={restaurants}
          theme={theme}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
