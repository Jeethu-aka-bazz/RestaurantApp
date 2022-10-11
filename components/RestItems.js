/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const RestItems = ({restData}) => {
  return (
    <View
      style={{
        marginTop: 10,
        padding: 10,
        backgroundColor: '#fff',
      }}>
      <RestImage source={restData.img} />
      <RestInfo
        name={restData.name}
        deliveryTime={restData.deliveryTime}
        rating={restData.rating}
      />
    </View>
  );
};

const RestInfo = ({name, deliveryTime, rating}) => {
  return (
    <View style={Styles.infobox}>
      <View>
        <Text style={Styles.restname}>{name}</Text>
        <Text>{deliveryTime}</Text>
      </View>
      <View style={Styles.rating}>
        <Text>{rating}</Text>
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
  infobox: {
    marginTop: 13,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  restname: {
    color: '#000',
    fontSize: 18,
    fontWeight: '700',
  },
  rating: {
    backgroundColor: '#ddd',
    padding: 8,
    borderRadius: 30,
  },
});

export default RestItems;
