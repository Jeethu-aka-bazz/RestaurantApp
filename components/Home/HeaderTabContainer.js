import React from 'react';
import {StyleSheet, View} from 'react-native';

const HeaderTabContainer = ({children, theme}) => {
  return <View style={styles.header(theme)}>{children}</View>;
};

const styles = StyleSheet.create({
  header: theme => ({backgroundColor: theme.topbackground, padding: 15}),
});

export default HeaderTabContainer;
