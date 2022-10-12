/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {darktheme, lighttheme} from '../themes';

const HeadButton = ({title, active, setActive, theme, setTheme}) => {
  const inActiveButtonStyles = {
    color: theme.cardsubheadercolor,
  };

  return (
    <TouchableOpacity
      onPress={() => {
        setActive(title);
        title === 'Dark' ? setTheme(darktheme) : setTheme(lighttheme);
      }}>
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
  },
});

export default HeaderTab;
