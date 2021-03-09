

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Detail, Cart, Reciept } from './container/index'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Reciept" component={Reciept} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;