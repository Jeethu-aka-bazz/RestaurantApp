/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';

const SearchBar = ({
  theme,
  cityname,
  setCityname,
  cityList,
  setSelectedCity,
  searchFocused,
  setSearchFocused,
  restaurantApiCall,
}) => {
  return (
    <>
      <View style={{marginTop: 15, flexDirection: 'row'}}>
        <TextInput
          placeholder="search"
          value={cityname}
          placeholderTextColor={theme.searchbartextcolor}
          onChangeText={typedValue => {
            setCityname(typedValue);
            setSearchFocused(true);
          }}
          onFocus={() => {
            setSearchFocused(true);
          }}
          style={[
            styles.textInput,
            {
              backgroundColor: theme.searchbarbackground,
              color: theme.searchbartextcolor,
            },
          ]}
        />
        <Btn
          title="search"
          theme={theme}
          onPress={() => {
            restaurantApiCall();
          }}
        />
      </View>

      {searchFocused && cityname.length >= 3 && (
        <SearchList
          cityList={cityList}
          theme={theme}
          setSelectedCity={setSelectedCity}
          setCityname={setCityname}
          setSearchFocused={setSearchFocused}
        />
      )}
    </>
  );
};

const SearchList = ({
  cityList,
  theme,
  setSelectedCity,
  setCityname,
  setSearchFocused,
}) => {
  return (
    <View
      style={[
        styles.searchlist,
        {
          backgroundColor: theme.searchbarbackground,
        },
      ]}>
      {cityList.map(e => {
        const locationresult = e.result_object;
        return (
          <TouchableOpacity
            style={styles.searchlistcontent}
            onPress={() => {
              setSelectedCity(locationresult);
              setCityname(locationresult.name);
              setSearchFocused(false);
            }}>
            <Text
              style={{
                color: theme.searchbartextcolor,
              }}>
              {locationresult.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const Btn = ({title, theme, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.rightbuttonstyles,
        {
          backgroundColor: theme.cardbackground,
        },
      ]}>
      <Text
        style={[
          styles.rightbuttontextstyles,
          {
            color: theme.searchbartextcolor,
          },
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  rightbuttonstyles: {
    flexDirection: 'row',
    paddingHorizontal: 9,
    borderRadius: 30,
    paddingVertical: 10,
    position: 'absolute',
    top: 8,
    right: 8,
  },
  rightbuttontextstyles: {
    marginLeft: 6,
    fontWeight: '600',
    fontSize: 13,
  },
  textInput: {
    borderRadius: 50,
    padding: 15,
    marginTop: 3,
    width: '100%',
    position: 'relative',
  },
  searchlist: {
    padding: 10,
    borderRadius: 10,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  searchlistcontent: {
    marginVertical: 3,
    padding: 5,
  },
});

export default SearchBar;
