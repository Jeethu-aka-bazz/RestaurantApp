import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

const ScreenContainer = ({children, theme}) => {
  return (
    <SafeAreaView style={styles.background(theme)}>{children}</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: theme => ({backgroundColor: theme.pagebackground, flex: 1}),
});

export default ScreenContainer;
