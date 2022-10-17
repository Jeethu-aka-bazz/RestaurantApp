/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import store from '../store/store';

const HeaderTab = ({theme, setTheme, setShowCartDraw, cartCount}) => {
  const [active, setActive] = useState('Dark');
  return (
    <View
      style={[
        styles.rowStyle,
        {marginTop: 10, marginLeft: 70, justifyContent: 'space-evenly'},
      ]}>
      <View style={[styles.rowStyle]}>
        <ChangeThemeButton
          title="Dark"
          active={active}
          setActive={setActive}
          theme={theme}
          setTheme={setTheme}
        />
        <ChangeThemeButton
          title="Light"
          active={active}
          setActive={setActive}
          theme={theme}
          setTheme={setTheme}
        />
      </View>
      <TouchableOpacity
        style={[styles.gotocartstyle, styles.rowStyle]}
        onPress={() => {
          setShowCartDraw(true);
        }}>
        <Text style={{color: theme.searchbartextcolor}}>cart</Text>
        {cartCount > 0 && (
          <Text style={{color: theme.searchbartextcolor}}>{cartCount}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const ChangeThemeButton = ({title, active, setActive, theme, setTheme}) => {
  const inActiveButtonStyles = {
    color: theme.cardsubheadercolor,
  };
  const activeStyle = {
    backgroundColor: '#000',
    color: '#fff',
  };

  const changeDark = () => {
    store.dispatch({type: 'changeDarkTheme'});
    setTheme(store.getState().theme);
  };

  const changeLight = () => {
    store.dispatch({type: 'changeLightTheme'});
    setTheme(store.getState().theme);
  };

  const changeTheme = () => {
    setActive(title);
    title === 'Dark' ? changeDark() : changeLight();
  };

  return (
    <TouchableOpacity onPress={changeTheme} style={{borderRadius: 30}}>
      <Text
        style={[
          {...styles.HeadButtonText},
          active === title ? activeStyle : inActiveButtonStyles,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  HeadButtonText: {
    fontSize: 15,
    marginHorizontal: 2,
    fontWeight: '700',
    paddingHorizontal: 20,
    paddingVertical: 3,
  },
  rowStyle: {
    flexDirection: 'row',
  },

  gotocartstyle: {
    alignSelf: 'center',
    borderRadius: 30,
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
});

export default HeaderTab;
