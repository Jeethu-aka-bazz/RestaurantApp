/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {darktheme, lighttheme} from '../themes';
import store from '../store';

const HeaderTab = ({theme, setTheme}) => {
  const [active, setActive] = useState('Dark');
  return (
    <View style={[styles.rowStyle, {marginTop: 10, alignSelf: 'center'}]}>
      <HeadButton
        title="Dark"
        active={active}
        setActive={setActive}
        theme={theme}
        setTheme={setTheme}
      />
      <HeadButton
        title="Light"
        active={active}
        setActive={setActive}
        theme={theme}
        setTheme={setTheme}
      />
    </View>
  );
};

const HeadButton = ({title, active, setActive, theme, setTheme}) => {
  const inActiveButtonStyles = {
    color: theme.cardsubheadercolor,
  };

  const changeDark = () => {
    store.dispatch({type: 'changeDarkTheme'});
    setTheme(store.getState());
  };

  const changeLight = () => {
    store.dispatch({type: 'changeLightTheme'});
    setTheme(store.getState());
  };

  const changeTheme = () => {
    setActive(title);
    title === 'Dark' ? changeDark() : changeLight();
  };

  return (
    <TouchableOpacity onPress={changeTheme} style={{borderRadius: 30}}>
      <Text
        style={[
          active === title ? styles.activeStyle : inActiveButtonStyles,
          styles.HeadButtonText,
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
    borderRadius: 30,
  },
  rowStyle: {
    flexDirection: 'row',
  },
  activeStyle: {
    backgroundColor: '#000',
    color: '#fff',
    borderRadius: 50,
  },
});

export default HeaderTab;
