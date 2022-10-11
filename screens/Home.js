/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import SearchBar from '../components/SearchBar';
import HeaderTab from '../components/HeaderTab';
import RestItems from '../components/RestItems';

const restDatas1 = [
  {
    img: 'https://assets.gqindia.com/photos/62a9d4653e8cdc9b632eb2ad/master/pass/10%20restaurants%20in%20Mumbai%20that%20offer%20the%20best%20sunset%20views.jpg',
    name: 'resturant1',
    deliveryTime: '30-40 min',
    rating: '4.5',
  },
  {
    img: 'https://assets.cntraveller.in/photos/62975dd66a6d562435831f90/master/pass/new-restaurants-delhi-lead.jpg',
    name: 'resturant2',
    deliveryTime: '10-20 min',
    rating: '3.5',
  },
  {
    img: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name: 'resturant3',
    deliveryTime: '15-30 min',
    rating: '4',
  },
];

const Home = ({navigation}) => {
  const [restaurants, setRestaurants] = useState([]);

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
        .then(response => response.json())
        .then(({data}) => {
          setRestaurants(data);
        });
    })();
  }, []);
  return (
    <SafeAreaView style={{backgroundColor: '#eee', flex: 1}}>
      <View style={{backgroundColor: '#fff', padding: 15}}>
        <HeaderTab />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {restaurants.map(restData => (
          <RestItems restData={restData} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
