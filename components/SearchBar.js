/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';

const SearchBar = ({theme}) => {
  return (
    <View style={{marginTop: 15, flexDirection: 'row'}}>
      <GooglePlacesAutocomplete
        placeholder="search"
        styles={{
          textInput: {
            backgroundColor: theme.searchbarbackground,
            borderRadius: 50,
            marginTop: 3,
          },
          textInputContainer: {
            backgroundColor: theme.searchbarbackground,
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
            style={[
              styles.rightbuttonstyles,
              {
                backgroundColor: theme.cardbackground,
              },
            ]}>
            <Fontisto name="atom" size={20} />
            <Text
              style={[
                styles.rightbuttontextstyles,
                {
                  color: theme.cardheadercolor,
                },
              ]}>
              Search
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rightbuttonstyles: {
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 9,
    borderRadius: 30,
  },
  rightbuttontextstyles: {
    marginLeft: 6,
    fontWeight: '600',
    fontSize: 13,
  },
});

export default SearchBar;
