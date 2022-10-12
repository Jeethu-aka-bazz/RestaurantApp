/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const RestItems = ({navigation, restaurants, theme}) => {
  return (
    <>
      {restaurants.map(restData => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Info', {restData});
          }}
          style={{
            marginTop: 10,
            padding: 10,
            backgroundColor: theme.cardbackground,
          }}>
          <RestImage source={restData.mainPhotoSrc} />
          <RestInfo
            name={restData.name}
            location={`${restData?.address?.street}, ${restData?.address?.locality}, ${restData?.address?.country}`}
            rating={restData?.aggregateRatings?.tripadvisor?.ratingValue}
            theme={theme}
          />
        </TouchableOpacity>
      ))}
    </>
  );
};

const RestInfo = ({name, location, rating, theme}) => {
  return (
    <View style={[Styles.rowbox, Styles.infobox]}>
      <View>
        <Text style={[{color: theme.cardheadercolor}, Styles.restname]}>
          {name}
        </Text>
        <Text style={{color: theme.cardsubheadercolor}}>{location}</Text>
      </View>
      <View style={[Styles.rowbox, Styles.rating, {flexDirection: 'row'}]}>
        <Text style={{marginRight: 4, color: theme.cardsubheadercolor}}>
          {rating}
        </Text>
        <Ionicons name="star-sharp" size={20} />
      </View>
    </View>
  );
};

const RestImage = ({source}) => {
  return (
    <View>
      <Image
        source={{
          uri: source,
        }}
        style={{width: '100%', height: 180, position: 'relative'}}
      />
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: 10,
          right: 10,
        }}>
        <Ionicons name="heart-outline" size={30} />
      </TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
  rowbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  infobox: {
    marginTop: 13,
    justifyContent: 'space-between',
  },
  restname: {
    fontSize: 18,
    fontWeight: '700',
  },
  rating: {
    padding: 3,
    borderRadius: 30,
  },
});

export default RestItems;
