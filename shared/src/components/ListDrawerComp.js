import React from 'react';
import {
  View,
  Modal,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import store from '../store/store';

const ListDrawerComp = ({showDrawer, setShowDrawer, title, items}) => {
  const theme = store.getState().theme;
  const {width: windowWidth} = useWindowDimensions();
  return (
    <Modal
      visible={showDrawer}
      transparent
      animationType="slide"
      onRequestClose={() => {
        setShowDrawer(!showDrawer);
      }}>
      <ScrollView
        style={[
          styles.cartDrawer(theme),
          windowWidth >= 550 && styles.cardDrawerdesktop,
        ]}>
        <View>
          <TouchableOpacity
            onPress={() => {
              setShowDrawer(!showDrawer);
            }}>
            <Text style={[styles.gobacktext(theme.cardsubheadercolor)]}>
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
    <View style={styles.emptycart(theme)}>
      <Text style={styles.emptycarttext(theme)}>{title} is empty</Text>
      <TouchableOpacity
        onPress={() => {
          setShowDrawer(!showDrawer);
        }}>
        <Text style={styles.emptycarttext(theme)}>Add Item to {title}</Text>
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
          <View style={[styles.rowbox, styles.cartlist(theme)]}>
            <Text style={[styles.cartitem(theme), styles.cartitemname]}>
              {listingitem?.name}
            </Text>
            <Text style={styles.cartitem(theme)}>
              {'??? ' + listingitem?.perprice}
            </Text>
            <Text style={styles.cartitem(theme)}>{listingitem?.quantity}</Text>
            <Text style={styles.cartitem(theme)}>
              {'???' + listingitem?.perprice * listingitem?.quantity}
            </Text>
          </View>
        );
      })}
      <View style={styles.grandtotal}>
        <Text style={styles.gobacktext(theme.cardheadercolor)}>
          Grand Total
        </Text>
        <Text style={styles.gobacktext(theme.cardheadercolor)}>
          {'??? ' + getTotal() + '/-'}
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  rowbox: {
    flexDirection: 'row',
  },
  grandtotal: {
    marginTop: 30,
    alignItems: 'flex-end',
  },
  cartitemname: {
    fontSize: 20,
  },
  listingbox: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  cartlist: theme => ({
    justifyContent: 'space-between',
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: theme.menubackground,
  }),
  cartitem: theme => ({
    paddingHorizontal: 15,
    paddingVertical: 13,
    fontSize: 17,
    fontWeight: '500',
    color: theme.menutextcolor,
  }),

  cartDrawer: theme => ({
    marginTop: 112,
    padding: 20,
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: theme.cartbackgroundcolor,
  }),
  cardDrawerdesktop: {
    width: 550,
    alignSelf: 'flex-end',
  },
  gobacktext: color => ({
    fontSize: 18,
    fontWeight: '600',
    color: color,
  }),
  emptycart: theme => ({
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    paddingVertical: 50,
    borderRadius: 30,
    backgroundColor: theme.cardbackground,
  }),
  emptycarttext: theme => ({
    color: theme.cardsubheadercolor,
    fontSize: 16,
    fontWeight: '400',
  }),
});

export default ListDrawerComp;
