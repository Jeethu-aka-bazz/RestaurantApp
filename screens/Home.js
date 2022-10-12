/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import HeaderTab from '../components/HeaderTab';
import RestItems from '../components/RestItems';
import {darktheme} from '../themes';

const Home = ({navigation}) => {
  const [restaurants, setRestaurants] = useState([]);
  const [theme, setTheme] = useState(darktheme);

  useEffect(() => {
    (async () => {
      const apiLink =
        'https://the-fork-the-spoon.p.rapidapi.com/restaurants/v2/list';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key':
            '6f31118797msh5440041c30c0701p1e6a11jsn2e608fb72102',
          'X-RapidAPI-Host': 'the-fork-the-spoon.p.rapidapi.com',
        },
      };
      await fetch(
        apiLink + '?queryPlaceValueCityId=348156&pageSize=2&pageNumber=1',
        options,
      )
        .then(response => {
          return response.json();
        })
        .then(({data}) => {
          setRestaurants(data);
        });
    })();
  }, []);

  return (
    <SafeAreaView style={{backgroundColor: theme.pagebackground, flex: 1}}>
      <View style={{backgroundColor: theme.topbackground, padding: 15}}>
        <HeaderTab theme={theme} setTheme={setTheme} />
        <SearchBar theme={theme} />
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
