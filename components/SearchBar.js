/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  SafeAreaView,
} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';

// https://the-fork-the-spoon.p.rapidapi.com/restaurants/v2/auto-complete?
// headers: {
//     'X-RapidAPI-Key': '6f31118797msh5440041c30c0701p1e6a11jsn2e608fb72102',
//     'X-RapidAPI-Host': 'the-fork-the-spoon.p.rapidapi.com'
//   }

// https://the-fork-the-spoon.p.rapidapi.com/restaurants/v2/list

const SearchBar = () => {
  return (
    <View style={{marginTop: 15, flexDirection: 'row'}}>
      <GooglePlacesAutocomplete
        placeholder="search"
        styles={{
          textInput: {
            backgroundColor: '#eee',
            borderRadius: 50,
            marginTop: 3,
          },
          textInputContainer: {
            backgroundColor: '#eee',
            borderRadius: 50,
            alignItems: 'center',
          },
        }}
        renderLeftButton={() => (
          <View style={{marginLeft: 15}}>
            <Ionicons name="location-sharp" size={25} />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              marginRight: 10,
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#fff',
              paddingHorizontal: 9,
              borderRadius: 30,
            }}>
            <Fontisto name="atom" size={20} />
            <Text style={{color: '#000', marginLeft: 6, fontWeight: '400'}}>
              Search
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default SearchBar;
