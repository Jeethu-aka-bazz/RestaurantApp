/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import HeaderTab from '../components/HeaderTab';
import CartButton from '../components/Info/CartButton';
import InfoContent from '../components/Info/InfoContent';
import InfoImg from '../components/Info/InfoImg';
import ListDrawerComp from '../components/ListDrawerComp';
import store from '../store/store';
import menuitems from '../apiresponces/menuItems';

const Info = ({navigation, route}) => {
  const [showCartDraw, setShowCartDraw] = useState(false);
  const restData = route.params.restData;
  const theme = store.getState().theme;
  const cartitems = store.getState().cartitems;

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
