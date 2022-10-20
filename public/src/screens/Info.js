import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import CartButton from '../components/Info/CartButton';
import InfoContent from '../components/Info/InfoContent';
import InfoImg from '../components/Info/InfoImg';
import ListDrawerComp from '../components/ListDrawerComp';
import store from '../store/store';
import menuitems from '../../apiresponces/menuItems';
import ScreenContainer from '../components/ScreenContainer';

const Info = ({navigation, route}) => {
  const [showCartDraw, setShowCartDraw] = useState(false);
  const restData = route.params.restData;
  const theme = store.getState().theme;
  const cartitems = store.getState().cartitems;

  const [addedItems, setAddedItems] = useState(store.getState().cartitems);

  return (
    <ScreenContainer theme={theme}>
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
    </ScreenContainer>
  );
};

export default Info;
