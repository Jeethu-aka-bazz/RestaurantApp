import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  SafeAreaView,
} from 'react-native';

const HeadButton = ({title, active, setActive}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        setActive(title);
      }}>
      <Text
        style={[styles.HeadButtonText, active === title && styles.activeStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const HeaderTab = () => {
  const [active, setActive] = useState('Delivery');
  return (
    <View style={[styles.rowStyle, {marginTop: 10, alignSelf: 'center'}]}>
      <HeadButton title="Delivery" active={active} setActive={setActive} />
      <HeadButton title="Pickup" active={active} setActive={setActive} />
    </View>
  );
};

const styles = StyleSheet.create({
  HeadButtonText: {
    fontSize: 15,
    marginHorizontal: 2,
    fontWeight: '700',
    paddingHorizontal: 20,
    paddingVertical: 3,
    borderRadius: 30,
  },
  rowStyle: {
    flexDirection: 'row',
  },
  activeStyle: {
    backgroundColor: '#000',
    color: '#fff',
  },
  searchBox: {
    backgroundColor: '#000',
  },
});

export default HeaderTab;
