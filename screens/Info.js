/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import InfoContent from '../components/InfoContent';
import InfoImg from '../components/InfoImg';

const Info = ({navigation, route}) => {
  const restData = route.params.restData;
  return (
    <SafeAreaView style={{backgroundColor: '#ddd', flex: 1}}>
      <InfoImg photosource={restData.mainPhotoSrc} navigation={navigation} />
      <ScrollView>
        <InfoContent
          restaurantname={restData.name}
          ratings={restData.aggregateRatings}
          cuisine={restData.servesCuisine}
          address={restData.address}
          price={restData.priceRange}
          currency={restData.currenciesAccepted}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Info;
