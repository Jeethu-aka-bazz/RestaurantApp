/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
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
  addedItems,
  setAddedItems,
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
      <Menu
        theme={theme}
        menuitems={menuitems}
        addedItems={addedItems}
        setAddedItems={setAddedItems}
      />
    </View>
  );
};

const MenuItems = ({menuitem, theme, addedItems, setAddedItems}) => {
  const addItemToCart = menuitem => {
    const indexOfRepeateditem = addedItems.findIndex(
      addeditem => addeditem.name === menuitem.name,
    );

    const updateItem = () => {
      store.dispatch({
        type: 'updateItem',
        indexOfRepeateditem: indexOfRepeateditem,
      });
    };

    const addItem = () => {
      store.dispatch({
        type: 'addItem',
        payload: {...menuitem, quantity: 1},
      });
    };

    indexOfRepeateditem > -1 ? updateItem() : addItem();

    setAddedItems(store.getState().cartitems);
    console.log('menuitem', addedItems, indexOfRepeateditem);
  };

  return (
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
  );
};

const Menu = ({menuitems, theme, addedItems, setAddedItems}) => {
  return (
    <View>
      <Text style={[styles.header, {color: theme.cardheadercolor}]}>Menu</Text>
      {menuitems?.length === 0 || menuitems === undefined ? (
        <Text style={[{color: theme.cardsubheadercolor}]}>
          no menu for this resturant
        </Text>
      ) : (
        <View style={styles.menuBox}>
          {menuitems?.map(menuitem => (
            <MenuItems
              theme={theme}
              menuitem={menuitem}
              addedItems={addedItems}
              setAddedItems={setAddedItems}
            />
          ))}
        </View>
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
