import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import store from '../../store/store';

const HeaderTab = ({theme, setTheme, setShowCartDraw, cartCount}) => {
  const [active, setActive] = useState('Dark');
  return (
    <View style={[styles.rowStyle, styles.HeaderTab]}>
      <View>
        <Text style={[styles.carttext(theme), styles.logostyle]}>RESTAWAY</Text>
      </View>
      <View style={[styles.rowStyle]}>
        <ChangeThemeButton
          title="Dark"
          active={active}
          setActive={setActive}
          setTheme={setTheme}
        />
        <ChangeThemeButton
          title="Light"
          active={active}
          setActive={setActive}
          setTheme={setTheme}
        />
      </View>

      <TouchableOpacity
        style={[styles.gotocartstyle, styles.rowStyle]}
        onPress={() => {
          setShowCartDraw(true);
        }}>
        <Text style={styles.carttext(theme)}>Cart</Text>
        {cartCount > 0 && (
          <View style={styles.cartcount(theme)}>
            <Text style={[styles.carttext(theme)]}>{cartCount}</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const ChangeThemeButton = ({title, active, setActive, setTheme}) => {
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
    justifyContent: 'space-evenly',
  },
  activeButtonStyle: {
    color: '#fff',
  },
  inActiveButtonStyles: {
    color: '#000',
  },
  logostyle: {
    alignSelf: 'center',
    fontWeight: '900',
    fontSize: 18,
  },
  cartcount: theme => ({
    backgroundColor: '#abc6',
    paddingHorizontal: 8,
    marginLeft: 3,
    paddingVertical: 1,
    borderRadius: 30,
  }),
  carttext: theme => ({
    fontWeight: '600',
    color: theme.searchbartextcolor,
  }),
  Headerbutton: isActive => ({
    borderRadius: 30,
    backgroundColor: isActive ? '#000' : '#fff',
  }),
});

export default HeaderTab;
