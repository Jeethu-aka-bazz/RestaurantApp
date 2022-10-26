import React from 'react';
import Home from '../screens/Home';
import Info from '../screens/Info';
import {createStackNavigator} from '@react-navigation/stack';

const RootNavigation = () => {
  const Stack = createStackNavigator();
  const screenOptions = {
    headerShown: false,
  };
  return (
    <>
      <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
        <Stack.Screen name="Home">
          {screenProps => <Home {...screenProps} />}
        </Stack.Screen>
        <Stack.Screen name="Info">
          {screenProps => <Info {...screenProps} />}
        </Stack.Screen>
      </Stack.Navigator>
    </>
  );
};

export default RootNavigation;
