import React from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {Text, View, TouchableOpacity} from 'react-native';

export const BasketIcon = () => {
  const navigation = useNavigation();
  const items = useSelector(state => state.basket.items);
  const basketTotal = useSelector(state => {
    return state.basket.items.reduce((total, item) => {
      return total + item?.price || 0;
    }, 0);
  });

  if (items.length === 0) {
    return null;
  }

  return (
    <View className="absolute bottom-7 w-full z-50">
      <TouchableOpacity
        className="mx-5 bg-[#00CCBB] p-4 rounded-lg flex-row items-center space-x-1"
        onPress={() => navigation.navigate('Basket')}>
        <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2 w-10 text-center rounded mr-3">
          {items.length}
        </Text>
        <Text className="flex-1 text-white font-bold text-lg">View Basket</Text>
        <Text className="text-lg text-white font-extrabold">
          IDR {basketTotal}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
