import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

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
      <View style={styles.searchboxstyle}>
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
          style={styles.textInput(theme)}
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
    <View style={styles.searchlist(theme)}>
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
            <Text style={styles.searchlisttext(theme)}>
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
    <TouchableOpacity onPress={onPress} style={styles.rightbuttonstyles(theme)}>
      <Text style={styles.rightbuttontextstyles(theme)}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  rightbuttonstyles: theme => ({
    flexDirection: 'row',
    paddingHorizontal: 9,
    borderRadius: 30,
    paddingVertical: 10,
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: theme.cardbackground,
  }),
  rightbuttontextstyles: theme => ({
    marginLeft: 6,
    fontWeight: '600',
    fontSize: 13,
    color: theme.searchbartextcolor,
  }),
  textInput: theme => ({
    borderRadius: 50,
    padding: 15,
    marginTop: 3,
    width: '100%',
    position: 'relative',
    backgroundColor: theme.searchbarbackground,
    color: theme.searchbartextcolor,
  }),
  searchlist: theme => ({
    padding: 10,
    borderRadius: 10,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    marginHorizontal: '5%',
    backgroundColor: theme.searchbarbackground,
  }),
  searchlisttext: theme => ({
    color: theme.searchbartextcolor,
  }),
  searchlistcontent: {
    marginVertical: 3,
    padding: 5,
  },
  searchboxstyle: {
    marginTop: 15,
    flexDirection: 'row',
    marginHorizontal: '5%',
  },
});

export default SearchBar;
