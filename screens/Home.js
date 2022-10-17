/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import SearchBar from '../components/Home/SearchBar';
import HeaderTab from '../components/HeaderTab';
import RestItems from '../components/Home/RestItems';
import store from '../store/store';
import * as API from '../Api';
import {restaurantsList} from '../apiresponces/restaurantsApiRes';
import {citysList} from '../apiresponces/citylistApiRes';
import ListDrawerComp from '../components/ListDrawerComp';

const Home = ({navigation}) => {
  const [restaurants, setRestaurants] = useState(restaurantsList);
  const [theme, setTheme] = useState(store.getState().theme);
  const [cityname, setCityname] = useState('');
  const [selectedCity, setSelectedCity] = useState({});
  const [searchFocused, setSearchFocused] = useState(false);
  const [cityList, setCityList] = useState(citysList);
  const [showCartDraw, setShowCartDraw] = useState(false);

  const [cartCount, setCartCount] = useState(store.getState().cartitems.length);
  const cartitems = store.getState().cartitems;

  useEffect(() => {
    navigation.addListener('focus', () => {
      setCartCount(store.getState().cartitems.length);
    });
  }, [navigation]);

  useEffect(() => {
    (async () => {
      const options = {
        method: 'POST',
        headers: {
          'X-RapidAPI-Key': API.API_KEY,
          'X-RapidAPI-Host': API.HOST_NAME,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          q: cityname,
          language: 'en_US',
        }),
      };
      //  setCityList(await API.callCitySearchApi(options).data);
    })();
  }, [cityname]);

  const restaurantApiCall = async () => {
    const options = {
      method: 'POST',
      headers: {
        'X-RapidAPI-Key': API.API_KEY,
        'X-RapidAPI-Host': API.HOST_NAME,
      },
      body: JSON.stringify({
        language: 'en_US',
        limit: '10',
        currency: 'INR',
        location_id: selectedCity.location_id,
      }),
    };
    // setRestaurants(await API.callRestaurantApi(options).data);
  };

  return (
    <SafeAreaView style={{backgroundColor: theme.pagebackground, flex: 1}}>
      <View style={{backgroundColor: theme.topbackground, padding: 15}}>
        <HeaderTab
          theme={theme}
          setTheme={setTheme}
          navigation={navigation}
          setShowCartDraw={setShowCartDraw}
          cartCount={cartCount}
        />
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
      <ListDrawerComp
        showDrawer={showCartDraw}
        setShowDrawer={setShowCartDraw}
        title="Cart"
        items={cartitems}
      />
    </SafeAreaView>
  );
};

export default Home;
