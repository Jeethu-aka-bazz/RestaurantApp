import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import store from '../../store/store';

const InfoImg = ({photosource, navigation}) => {
  const theme = store.getState().theme;
  return (
    <View style={styles.imgbox}>
      <TouchableOpacity
        style={styles.gobackstyle}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Text style={styles.gobacktext(theme)}>goBack</Text>
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
    backgroundColor: 'transparent',
    paddingHorizontal: 5,
  },
  imgstyle: {
    width: '100%',
    height: 180,
    position: 'relative',
    borderRadius: 10,
  },
  gobackstyle: {
    width: 70,
    paddingLeft: 15,
    marginBottom: 5,
  },
  gobacktext: theme => ({
    fontSize: 16,
    color: theme.cardsubheadercolor,
  }),
});

export default InfoImg;
