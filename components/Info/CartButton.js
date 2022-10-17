/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import store from '../../store/store';

const CartButton = ({setShowCartDraw, showCartDraw}) => {
  const theme = store.getState().theme;
  return (
    <View style={styles.buttonbox}>
      <View
        style={{flexDirection: 'row', justifyContent: 'center', width: '100%'}}>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: theme.buttonsbackground}]}
          onPress={() => {
            setShowCartDraw(!showCartDraw);
          }}>
          <Text
            style={{color: theme.buttonstext, fontSize: 20, fontWeight: '600'}}>
            View Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonbox: {
    flex: 1,
    alignItem: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    // position: 'absolute',
    // bottom: 130,
    // zIndex: 100,
  },
  button: {
    paddingVertical: 15,
    marginTop: 20,
    alignItems: 'center',
    width: 300,
    // position: 'relative',
    borderRadius: 30,
  },
});

export default CartButton;
