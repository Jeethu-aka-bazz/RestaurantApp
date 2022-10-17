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
            <View style={styles.emptycart}>
              <Text style>{title} is empty</Text>
              <TouchableOpacity>
                <Text>Add Item to {title}</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.listingbox}>
              <CartItems items={items} />
            </View>
          )}
        </View>
      </ScrollView>
    </Modal>
  );
};

const CartItems = ({items}) => {
  return (
    <View style={styles.listingbox}>
      {items?.map(listingitem => (
        <View style={[styles.rowbox, styles.cartlist]}>
          <Text>{listingitem.item.name}</Text>
          <Text>{listingitem.item.perprice}</Text>
          <Text>{listingitem.item.quantity}</Text>
          <Text>{listingitem.item.perprice * listingitem.item.quantity}</Text>
        </View>
      ))}
    </View>
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  rowbox: {
    flexDirection: 'row',
  },
  listingbox: {
    marginTop: 10,
    padding: 10,
  },
  cartlist: {
    justifyContent: 'space-between',
  },
});

export default ListDrawerComp;
