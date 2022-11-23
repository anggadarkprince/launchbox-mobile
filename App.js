import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './src/screens/Home';
import {RestaurantScreen} from './src/screens/Restaurant';
import {Provider} from 'react-redux';
import {store} from './store';
import {BasketScreen} from './src/screens/Basket';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restaurant" component={RestaurantScreen} />
          <Stack.Screen name="Basket" component={BasketScreen} options={{presentation: 'transparentModal', headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
