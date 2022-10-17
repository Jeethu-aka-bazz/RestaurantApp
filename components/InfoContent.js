/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import store from '../store/store';

const InfoContent = ({
  restaurantname,
  ratings,
  cuisine,
  address,
  price,
  currency,
  menuitems,
}) => {
  const theme = store.getState().theme;
  return (
    <View style={{backgroundColor: theme.cardbackground, padding: 15}}>
      <Text style={[styles.header, {color: theme.cardheadercolor}]}>
        {restaurantname}
      </Text>
      <Text style={[styles.contenttext, {color: theme.cardsubheadercolor}]}>
        {cuisine?.map(e => e.name + ', ')}
      </Text>
      <ContactText address={address} ratings={ratings} theme={theme} />
      <Price theme={theme} price={price} currency={currency} />
      <Menu theme={theme} menuitems={menuitems} />
    </View>
  );
};

const MenuItems = ({menuitems, theme}) => {
  const addItemToCart = menuitem => {
    store.dispatch({type: 'addItem', payload: {...menuitem, quantity: 1}});
  };

  return (
    <View style={styles.menuBox}>
      {menuitems?.map(menuitem => (
        <View
          style={[
            styles.rowbox,
            styles.menuitem,
            {backgroundColor: theme.menubackground},
          ]}>
          <Text style={[styles.contenttext, {color: theme.menutextcolor}]}>
            {menuitem.name}
          </Text>
          <View style={styles.rowbox}>
            <Text style={[styles.contenttext, {color: theme.menutextcolor}]}>
              {menuitem.perprice}
            </Text>
            <TouchableOpacity
              style={styles.addbtn}
              onPress={() => {
                addItemToCart(menuitem);
              }}>
              <Text style={[styles.contenttext, {color: theme.menutextcolor}]}>
                A
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
};

const Menu = ({menuitems, theme}) => {
  return (
    <View>
      <Text style={[styles.header, {color: theme.cardheadercolor}]}>Menu</Text>
      {menuitems?.length === 0 || menuitems === undefined ? (
        <Text style={[{color: theme.cardsubheadercolor}]}>
          no menu for this resturant
        </Text>
      ) : (
        <MenuItems theme={theme} menuitems={menuitems} />
      )}
    </View>
  );
};

const Price = ({price, theme}) => {
  return (
    <Text
      style={[
        styles.price,
        {color: theme.cardsubheadercolor},
      ]}>{`${price} for two`}</Text>
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
    fontSize: 14,
    alignSelf: 'center',
  },
  price: {
    alignSelf: 'center',
  },
  rowbox: {
    flexDirection: 'row',
  },
  menuBox: {
    // padding: 10,
  },
  menuitem: {
    justifyContent: 'space-between',
    marginVertical: 5,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
  },
  addbtn: {
    marginLeft: 30,
    paddingVertical: 2,
    paddingHorizontal: 6,
    fontSize: 16,
  },
});

export default InfoContent;
