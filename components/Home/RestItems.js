import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const RestItems = ({navigation, restaurants, theme}) => {
  return (
    <>
      {restaurants.map(restData => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Info', {restData});
          }}
          style={styles.restaurantcontainer(theme)}>
          <RestImage
            source={restData?.photo?.images?.original?.url}
            theme={theme}
          />
          <RestInfo
            name={restData?.name}
            location={`${restData?.address_obj?.street1}, ${restData?.address_obj?.city}`}
            rating={restData?.raw_ranking.slice(0, 3)}
            theme={theme}
          />
        </TouchableOpacity>
      ))}
    </>
  );
};

const RestInfo = ({name, location, rating, theme}) => {
  return (
    <View style={[styles.rowbox, styles.infobox]}>
      <View>
        <Text style={[styles.headertext(theme), styles.restname]}>{name}</Text>
        <Text style={styles.subheadertext(theme)}>{location}</Text>
      </View>
      <View style={[styles.rowbox, styles.rating, styles.rowbox]}>
        <Text style={[styles.subheadertext(theme), styles.ratingtext]}>
          {rating}
        </Text>
        <Ionicons
          name="star-sharp"
          size={20}
          color={theme.cardsubheadercolor}
        />
      </View>
    </View>
  );
};

const RestImage = ({source, theme}) => {
  return (
    <View>
      <Image
        source={{
          uri: source,
        }}
        style={styles.restaurantimage}
      />
      <TouchableOpacity style={styles.favicon}>
        <Ionicons
          name="heart-outline"
          size={30}
          color={theme.cardsubheadercolor}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  rowbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infobox: {
    marginTop: 13,
    justifyContent: 'space-between',
  },
  restname: {
    fontSize: 18,
    fontWeight: '700',
  },
  rating: {
    padding: 3,
    borderRadius: 30,
  },
  restaurantimage: {
    width: '100%',
    height: 180,
    position: 'relative',
  },
  favicon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  ratingtext: {
    marginRight: 4,
  },
  restaurantcontainer: theme => ({
    marginTop: 10,
    padding: 10,
    backgroundColor: theme.cardbackground,
  }),
  headertext: theme => ({
    color: theme.cardheadercolor,
  }),
  subheadertext: theme => ({
    color: theme.cardsubheadercolor,
  }),
});

export default RestItems;
