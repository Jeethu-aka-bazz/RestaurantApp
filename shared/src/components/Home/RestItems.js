import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
  ScrollView,
} from 'react-native';

const RestItems = ({navigation, restaurants, theme}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={
          (Platform.OS === 'web' || Platform.OS === 'windows') &&
          styles.desktopcont
        }>
        {restaurants.map((restData, index) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Info', {restData});
            }}
            style={styles.restaurantcontainer(theme)}
            key={index}>
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
      </View>
    </ScrollView>
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
          {rating + ' R'}
        </Text>
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
  desktopcont: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: '2%',
    flex: 1,
  },
  restaurantcontainer: theme => ({
    marginTop: 10,
    padding: 10,
    backgroundColor: theme.cardbackground,
    width: Platform.OS === 'web' || Platform.OS === 'windows' ? 450 : '100%',
    marginHorizontal:
      Platform.OS === 'web' || Platform.OS === 'windows' ? 10 : 0,
  }),
  headertext: theme => ({
    color: theme.cardheadercolor,
  }),
  subheadertext: theme => ({
    color: theme.cardsubheadercolor,
  }),
});

export default RestItems;
