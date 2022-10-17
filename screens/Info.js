/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import HeaderTab from '../components/HeaderTab';
import CartButton from '../components/Info/CartButton';
import InfoContent from '../components/Info/InfoContent';
import InfoImg from '../components/Info/InfoImg';
import ListDrawerComp from '../components/ListDrawerComp';
import store from '../store/store';

const Info = ({navigation, route}) => {
  const [showCartDraw, setShowCartDraw] = useState(false);
  const restData = route.params.restData;
  const theme = store.getState().theme;
  const cartitems = store.getState().cartitems;

  const menuitems = [
    {name: 'veg rice', perprice: 40, currency: 'INR', rating: 4.5},
    {name: 'momos', perprice: 30, currency: 'INR', rating: 4.5},
    {name: 'shrimp fry', perprice: 80, currency: 'INR', rating: 4.3},
    {name: 'shrimp', perprice: 80, currency: 'INR', rating: 4.2},
    {name: 'sh', perprice: 70, currency: 'INR', rating: 4},
    {name: 'fry', perprice: 70, currency: 'INR', rating: 4.4},
    {name: 'rimp fry', perprice: 65, currency: 'INR', rating: 3.5},
    {name: 'momos fry', perprice: 60, currency: 'INR', rating: 2},
    {name: 'veg fry', perprice: 80, currency: 'INR', rating: 4.5},
    {name: 'rice fry', perprice: 90, currency: 'INR', rating: 4.9},
    {name: 'shrimp gravy', perprice: 180, currency: 'INR', rating: 4.1},
  ];

  const [addedItems, setAddedItems] = useState(store.getState().cartitems);

  return (
    <SafeAreaView
      style={{
        backgroundColor: theme.pagebackground,
        flex: 1,
      }}>
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
          menuitems={menuitems}
          addedItems={addedItems}
          setAddedItems={setAddedItems}
        />
        <CartButton
          setShowCartDraw={setShowCartDraw}
          showCartDraw={showCartDraw}
        />
      </ScrollView>
      <ListDrawerComp
        showDrawer={showCartDraw}
        setShowDrawer={setShowCartDraw}
        title="Cart"
        items={cartitems}
      />
    </SafeAreaView>
  );
};

export default Info;
