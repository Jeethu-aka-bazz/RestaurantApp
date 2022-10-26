import React from 'react';
import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import store from '../../store/store';
import MenuItems from './MenuItems';

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
  const {width: windowWidth} = useWindowDimensions();
  return (
    <View
      style={
        windowWidth >= 550 ? styles.infocarddesktop : styles.infocard(theme)
      }>
      <Text style={styles.header(theme)}>{restaurantname}</Text>
      <Text style={styles.contenttext({color: theme.cardsubheadercolor})}>
        {cuisine?.map(e => e.name + ', ')}
      </Text>
      <ContactText address={address} ratings={ratings} theme={theme} />
      <Price theme={theme} price={price} currency={currency} />
      <Line theme={theme} />
      <Menu
        windowWidth={windowWidth}
        theme={theme}
        menuitems={menuitems}
        addedItems={addedItems}
        setAddedItems={setAddedItems}
      />
    </View>
  );
};

const Line = ({theme}) => {
  return (
    <View style={[styles.line, {backgroundColor: theme.buttonsbackground}]} />
  );
};

const Menu = ({menuitems, theme, addedItems, setAddedItems, windowWidth}) => {
  return (
    <View>
      <Text style={[styles.header(theme), styles.menuHeader]}>Menu</Text>
      {menuitems?.length === 0 || menuitems === undefined ? (
        <Text style={[{color: theme.cardsubheadercolor}]}>
          no menu for this resturant
        </Text>
      ) : (
        <View
          style={[
            windowWidth >= 670
              ? styles.menuitemcontdesktop
              : styles.menuitemcontmobile,
            styles.menuitemcont,
          ]}>
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
        <Text style={styles.rating(theme)}>{`${ratings.slice(0, 3)} R`}</Text>
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
    padding: 20,
    borderRadius: 15,
  }),
  infocarddesktop: {
    paddingHorizontal: 90,
    paddingVertical: 80,
  },
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
  menuitemcontmobile: {
    flexDirection: 'column',
  },
  menuitemcontdesktop: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  menuitemcont: {
    justifyContent: 'center',
  },
  menuHeader: {
    alignSelf: 'center',
    marginTop: 5,
    marginBottom: 25,
  },
  line: {
    width: '50%',
    height: 4,
    alignSelf: 'center',
    margin: 30,
  },
});

export default InfoContent;
