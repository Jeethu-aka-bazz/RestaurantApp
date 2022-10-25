import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import SearchBar from '../components/Home/SearchBar';
import HeaderTab from '../components/Home/HeaderTab';
import RestItems from '../components/Home/RestItems';
import store from '../store/store';
import * as API from '../../Api';
import {restaurantsList} from '../../apiresponces/restaurantsApiRes';
import {citysList} from '../../apiresponces/citylistApiRes';
import ListDrawerComp from '../components/ListDrawerComp';
import ScreenContainer from '../components/ScreenContainer';
import HeaderTabContainer from '../components/Home/HeaderTabContainer';

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
    <ScreenContainer theme={theme}>
      <HeaderTabContainer theme={theme}>
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
      </HeaderTabContainer>
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
    </ScreenContainer>
  );
};

export default Home;
