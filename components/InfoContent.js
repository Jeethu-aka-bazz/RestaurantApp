/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import store from '../store';

const InfoContent = ({
  restaurantname,
  ratings,
  cuisine,
  address,
  price,
  currency,
}) => {
  const theme = store.getState();
  return (
    <View style={{backgroundColor: theme.cardbackground, padding: 15}}>
      <Text style={[styles.header, {color: theme.cardheadercolor}]}>
        {restaurantname}
      </Text>
      <Text style={[styles.contenttext, {color: theme.cardsubheadercolor}]}>
        {cuisine.map(e => e.name + ', ')}
      </Text>
      <ContactText address={address} ratings={ratings} theme={theme} />
      <Price theme={theme} price={price} currency={currency} />
    </View>
  );
};

const Menu = () => {
  return <Text style={styles.header}>Menu</Text>;
};

const Price = ({price, theme}) => {
  return (
    <Text
      style={[
        styles.price,
        {color: theme.cardsubheadercolor},
      ]}>{`${price} for per Head`}</Text>
  );
};

const ContactText = ({address, ratings, theme}) => {
  return (
    <View style={styles.contactBox}>
      <Text style={[styles.contenttext, {color: theme.cardsubheadercolor}]}>
        {`\n${address?.street1}\n${address?.city}\n${address?.country}.`}
      </Text>
      <Text style={[styles.rating, {color: theme.cardsubheadercolor}]}>
        {`${ratings.slice(0, 3)} Stars`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontWeight: '700',
    fontSize: 40,
  },
  contactBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contenttext: {
    fontSize: 17,
    fontWeight: '600',
  },
  rating: {
    fontWeight: '600',
    alignSelf: 'center',
  },
  price: {
    alignSelf: 'center',
  },
});

export default InfoContent;
