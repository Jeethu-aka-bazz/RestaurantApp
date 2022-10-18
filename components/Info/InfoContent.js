/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-shadow */
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import store from '../../store/store';

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

const MenuItems = ({menuitem, theme, addedItems, setAddedItems}) => {
  const [quantity, setQuantity] = useState(
    addedItems?.filter(Items => Items.name === menuitem.name)[0],
  );

  useEffect(() => {
    const [updatedQuantity] = addedItems?.filter(
      Items => Items.name === menuitem.name,
    );
    setQuantity(updatedQuantity);
  }, [addedItems]);

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
    updateQuantity();
  };

  const updateQuantity = () => {
    const [updatedQuantity] = addedItems?.filter(
      Items => Items.name === menuitem.name,
    );
    setQuantity(updatedQuantity);
  };

  const removeItemFromCart = menuitem => {
    const indexOfRepeateditem = addedItems?.findIndex(
      addeditem => addeditem.name === menuitem.name,
    );
    const itemtoberemoved = addedItems[indexOfRepeateditem];

    const removeItem = () => {
      store.dispatch({
        type: 'removeItem',
        indexOfRepeateditem: indexOfRepeateditem,
      });
    };

    const reduceQuantityOfItem = () => {
      store.dispatch({
        type: 'reduceItem',
        indexOfRepeateditem: indexOfRepeateditem,
      });
    };

    itemtoberemoved?.quantity && itemtoberemoved?.quantity === 1
      ? removeItem()
      : reduceQuantityOfItem();
    updateQuantity();
  };

  return (
    <View style={[styles.rowbox, styles.menuitem(theme)]}>
      <Text style={styles.contenttext({color: theme.menutextcolor})}>
        {menuitem.name}
      </Text>
      <View style={styles.rowbox}>
        <Text style={styles.contenttext({color: theme.menutextcolor})}>
          {menuitem.perprice}
        </Text>
        <TouchableOpacity
          style={styles.addbtn}
          onPress={() => {
            addItemToCart(menuitem);
          }}>
          <Text style={styles.contenttext({color: theme.menutextcolor})}>
            A
          </Text>
        </TouchableOpacity>

        {quantity && (
          <>
            <View style={styles.addbtn}>
              <Text style={styles.contenttext({color: theme.menutextcolor})}>
                {quantity?.quantity || 1}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.addbtn}
              onPress={() => {
                removeItemFromCart(menuitem);
              }}>
              <Text style={styles.contenttext({color: theme.menutextcolor})}>
                -
              </Text>
            </TouchableOpacity>
          </>
        )}
      </View>
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
      <Text style={[styles.contenttext({color: theme.cardsubheadercolor})]}>
        {`\n${address?.street1}\n${address?.city}\n${address?.country}.`}
      </Text>
      <Text style={styles.rating(theme)}>{`${ratings.slice(0, 3)} Stars`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rowbox: {
    flexDirection: 'row',
  },
  contactBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addbtn: {
    marginLeft: 30,
    paddingVertical: 2,
    paddingHorizontal: 6,
    fontSize: 16,
  },
  infocard: theme => ({
    backgroundColor: theme.cardbackground,
    padding: 15,
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
  }),
  price: theme => ({
    alignSelf: 'center',
    color: theme.cardsubheadercolor,
  }),

  menuitem: theme => ({
    justifyContent: 'space-between',
    marginVertical: 5,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: theme.menubackground,
  }),
});

export default InfoContent;
