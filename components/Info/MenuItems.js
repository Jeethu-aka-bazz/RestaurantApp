/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import store from '../../store/store';

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

  const addItemToCart = () => {
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

  const removeItemFromCart = () => {
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
      <TextComp content={menuitem.name} color={theme.menutextcolor} />
      <View style={styles.rowbox}>
        <TextComp content={menuitem.perprice} color={theme.menutextcolor} />
        <TouchableOpacity
          style={styles.addbtn}
          onPress={() => {
            addItemToCart(menuitem);
          }}>
          <TextComp content="A" color={theme.menutextcolor} />
        </TouchableOpacity>

        {quantity && (
          <>
            <View style={styles.addbtn}>
              <TextComp
                content={quantity?.quantity || 1}
                color={theme.menutextcolor}
              />
            </View>
            <TouchableOpacity
              style={styles.addbtn}
              onPress={() => {
                removeItemFromCart(menuitem);
              }}>
              <TextComp content={'-'} color={theme.menutextcolor} />
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

const TextComp = ({content, color}) => {
  return <Text style={styles.contenttext({color: color})}>{content}</Text>;
};

const styles = StyleSheet.create({
  rowbox: {
    flexDirection: 'row',
  },
  addbtn: {
    marginLeft: 30,
    paddingVertical: 2,
    paddingHorizontal: 6,
    fontSize: 16,
  },

  contenttext: ({color}) => ({
    fontSize: 17,
    fontWeight: '600',
    color: color,
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

export default MenuItems;
