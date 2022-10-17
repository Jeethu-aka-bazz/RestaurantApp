/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Modal,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import store from '../store/store';

const ListDrawerComp = ({showDrawer, setShowDrawer, title, items}) => {
  const theme = store.getState().theme;
  return (
    <Modal visible={showDrawer} transparent animationType="slide">
      <ScrollView
        style={[styles.cartDrawer, {backgroundColor: theme.pagebackground}]}>
        <View>
          <TouchableOpacity
            onPress={() => {
              setShowDrawer(!showDrawer);
            }}>
            <Text
              style={[styles.gobacktext, {color: theme.cardsubheadercolor}]}>
              go back
            </Text>
          </TouchableOpacity>
          {items?.length === 0 ? (
            <EmptyCart
              theme={theme}
              title={title}
              setShowDrawer={setShowDrawer}
              showDrawer={showDrawer}
            />
          ) : (
            <View style={styles.listingbox}>
              <CartItems items={items} theme={theme} />
            </View>
          )}
        </View>
      </ScrollView>
    </Modal>
  );
};

const EmptyCart = ({theme, title, showDrawer, setShowDrawer}) => {
  return (
    <View style={[styles.emptycart, {backgroundColor: theme.cardbackground}]}>
      <Text
        style={{
          color: theme.cardsubheadercolor,
          fontSize: 16,
          fontWeight: '400',
        }}>
        {title} is empty
      </Text>
      <TouchableOpacity
        onPress={() => {
          setShowDrawer(!showDrawer);
        }}>
        <Text
          style={{
            color: theme.cardsubheadercolor,
            fontSize: 16,
            fontWeight: '400',
          }}>
          Add Item to {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const CartItems = ({items, theme}) => {
  const getTotal = () => {
    let total = 0;
    items.map(item => {
      total += item?.perprice * item?.quantity;
    });
    return total;
  };
  return (
    <>
      {items?.map(listingitem => {
        return (
          <View
            style={[
              styles.rowbox,
              styles.cartlist,
              {backgroundColor: theme.menubackground},
            ]}>
            <Text
              style={[
                styles.cartitem,
                styles.cartitemname,
                {color: theme.menutextcolor},
              ]}>
              {listingitem?.name}
            </Text>
            <Text style={[styles.cartitem, {color: theme.menutextcolor}]}>
              {listingitem?.perprice + ' R'}
            </Text>
            <Text style={[styles.cartitem, {color: theme.menutextcolor}]}>
              {listingitem?.quantity}
            </Text>
            <Text style={[styles.cartitem, {color: theme.menutextcolor}]}>
              {listingitem?.perprice * listingitem?.quantity + ' R'}
            </Text>
          </View>
        );
      })}
      <View style={styles.grandtotal}>
        <Text style={[styles.gobacktext, {color: theme.cardheadercolor}]}>
          Grand Total
        </Text>
        <Text style={[styles.gobacktext, {color: theme.cardheadercolor}]}>
          {'R ' + getTotal() + '/-'}
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  cartDrawer: {
    marginTop: 112,
    padding: 20,
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  gobacktext: {
    fontSize: 18,
    fontWeight: '600',
  },
  emptycart: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    paddingVertical: 50,
    borderRadius: 30,
  },
  rowbox: {
    flexDirection: 'row',
  },
  listingbox: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  cartlist: {
    justifyContent: 'space-between',
    marginVertical: 5,
    borderRadius: 10,
  },
  grandtotal: {
    marginTop: 30,
    alignItems: 'flex-end',
  },
  cartitem: {
    paddingHorizontal: 15,
    paddingVertical: 13,
    fontSize: 17,
    fontWeight: '500',
  },
  cartitemname: {
    fontSize: 20,
  },
});

export default ListDrawerComp;
