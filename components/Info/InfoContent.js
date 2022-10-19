import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import store from '../../store/store';
import MenuItems from './MenuItems';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
    <View style={styles.infocard(theme)}>
      <Text style={styles.header(theme)}>{restaurantname}</Text>
      <Text style={styles.contenttext({color: theme.cardsubheadercolor})}>
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

const Menu = ({menuitems, theme, addedItems, setAddedItems}) => {
  return (
    <View>
      <Text style={[styles.header(theme)]}>Menu</Text>
      {menuitems?.length === 0 || menuitems === undefined ? (
        <Text style={[{color: theme.cardsubheadercolor}]}>
          no menu for this resturant
        </Text>
      ) : (
        <View>
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
  return <Text style={styles.price(theme)}>{`${price} for two`}</Text>;
};

const ContactText = ({address, ratings, theme}) => {
  return (
    <View style={styles.contactBox}>
      <Text style={styles.contenttext({color: theme.cardsubheadercolor})}>
        {`\n${address?.street1}\n${address?.city}\n${address?.country}.`}
      </Text>
      <View style={styles.rowbox}>
        <Text style={styles.rating(theme)}>{`${ratings.slice(0, 3)}`}</Text>
        <Ionicons
          name="star-sharp"
          size={20}
          color={theme.cardsubheadercolor}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rowbox: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  contactBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  infocard: theme => ({
    backgroundColor: theme.cardbackground,
    padding: 15,
    borderRadius: 15,
  }),
  header: theme => ({
    fontWeight: '700',
    fontSize: 40,
    color: theme.cardheadercolor,
  }),
  contenttext: ({color}) => ({
    fontSize: 17,
    fontWeight: '600',
    color: color,
  }),
  rating: theme => ({
    fontWeight: '600',
    fontSize: 14,
    alignSelf: 'center',
    color: theme.cardsubheadercolor,
    marginRight: 5,
  }),
  price: theme => ({
    alignSelf: 'center',
    color: theme.cardsubheadercolor,
  }),
});

export default InfoContent;
