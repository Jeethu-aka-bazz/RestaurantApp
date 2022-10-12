/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const InfoContent = ({
  restaurantname,
  ratings,
  cuisine,
  address,
  price,
  currency,
}) => {
  return (
    <View style={{backgroundColor: '#fff', padding: 15}}>
      <Text style={styles.header}>{restaurantname}</Text>
      <Text style={styles.contenttext}>{cuisine}</Text>
      <ContactText address={address} ratings={ratings} />
      <Price price={price} currency={currency} />
      {/* <Menu /> */}
    </View>
  );
};

const Menu = () => {
  return <Text style={styles.header}>Menu</Text>;
};

const Price = ({price, currency}) => {
  return (
    <Text style={styles.price}>{`${currency} ${price} for per Head`}</Text>
  );
};

const ContactText = ({address, ratings}) => {
  return (
    <View style={styles.contactBox}>
      <Text style={styles.contenttext}>
        {`\n${address.street}\n${address.locality}\n${address.country}.`}
      </Text>
      <Text style={styles.rating}>
        {`${ratings.thefork.ratingValue} Stars\n${ratings.thefork.reviewCount} Ratings`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontWeight: '700',
    fontSize: 40,
    color: '#000',
  },
  contactBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contenttext: {
    fontSize: 17,
    fontWeight: '600',
    color: '#777',
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
