import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import store from '../../store/store';

const HeaderTab = ({theme, setTheme, setShowCartDraw, cartCount}) => {
  const [active, setActive] = useState('Dark');
  return (
    <View style={[styles.rowStyle, styles.HeaderTab]}>
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
        <Text style={styles.carttext(theme)}>cart</Text>
        {cartCount > 0 && (
          <Text style={styles.carttext(theme)}>{cartCount}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const ChangeThemeButton = ({title, active, setActive, theme, setTheme}) => {
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
    <TouchableOpacity onPress={changeTheme}>
      <View style={styles.Headerbutton(active === title)}>
        <Text
          style={[
            {...styles.HeadButtonText},
            active === title
              ? styles.activeButtonStyle
              : styles.inActiveButtonStyles,
          ]}>
          {title}
        </Text>
      </View>
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
  HeaderTab: {
    marginTop: 10,
    marginLeft: 70,
    justifyContent: 'space-evenly',
  },
  activeButtonStyle: {
    color: '#fff',
  },
  inActiveButtonStyles: {
    color: '#000',
  },
  carttext: theme => ({
    color: theme.searchbartextcolor,
  }),
  Headerbutton: isActive => ({
    borderRadius: 30,
    backgroundColor: isActive ? '#000' : '#fff',
  }),
});

export default HeaderTab;
