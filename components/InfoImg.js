/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import store from '../store';

const InfoImg = ({photosource, navigation}) => {
  const theme = store.getState();
  return (
    <View style={styles.imgbox}>
      <TouchableOpacity
        style={styles.gobackstyle}
        onPress={() => {
          navigation.goBack();
        }}>
        <Text style={{fontSize: 16, color: theme.cardsubheadercolor}}>
          goBack
        </Text>
      </TouchableOpacity>
      <Image
        source={{
          uri: photosource,
        }}
        style={styles.imgstyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imgbox: {
    marginTop: 10,
  },
  imgstyle: {
    width: '100%',
    height: 180,
    position: 'relative',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  gobackstyle: {
    width: 70,
    paddingLeft: 15,
    marginBottom: 5,
  },
});

export default InfoImg;
