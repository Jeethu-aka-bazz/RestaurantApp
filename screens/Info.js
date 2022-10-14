/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import HeaderTab from '../components/HeaderTab';
import InfoContent from '../components/InfoContent';
import InfoImg from '../components/InfoImg';
import store from '../store';

const Info = ({navigation, route}) => {
  const restData = route.params.restData;
  const theme = store.getState();

  return (
    <SafeAreaView style={{backgroundColor: theme.pagebackground, flex: 1}}>
      {/* <HeaderTab /> */}
      <InfoImg
        photosource={restData?.photo?.images?.original?.url}
        navigation={navigation}
      />
      <ScrollView>
        <InfoContent
          restaurantname={restData?.name}
          ratings={restData?.raw_ranking}
          cuisine={restData?.cuisine}
          address={restData?.address_obj}
          price={restData?.price}
          currency={restData?.currenciesAccepted}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Info;
