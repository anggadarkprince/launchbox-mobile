import React, {useState, useMemo} from 'react';
import {View, ScrollView, Text, Image, TouchableOpacity} from 'react-native';
import {XCircleIcon} from 'react-native-heroicons/solid';
import {useDispatch, useSelector} from 'react-redux';
import {removeFromBasket} from '../../features/basket/baseketSlice';

export const BasketScreen = ({route, navigation}) => {
  const restaurant = useSelector(state => state.restaurant.activeRestaurant);
  const items = useSelector(state => state.basket.items);
  const basketTotal = useSelector(state => {
    return state.basket.items.reduce((total, item) => {
      return total + item?.price || 0;
    }, 0);
  });
  const dispatch = useDispatch();
  const [groupedItems, setGroupedItems] = useState({});

  useMemo(() => {
    const grouped = items.reduce((results, item) => {
      if (!results.hasOwnProperty(item.id)) {
        results[item.id] = [];
      }
      results[item.id].push(item);
      return results;
    }, {});
    setGroupedItems(grouped);
  }, [items]);

  return (
    <View className="pt-14 flex-1" style={{backgroundColor: '#00000077'}}>
      <View className="flex-1 bg-gray-100 rounded-t-xl">
        <View className="p-5 border-b border-[#00CCBB] rounded-t-xl bg-white shadow-sm">
          <View>
            <Text className="text-xl font-bold text-center text-gray-800">
              Basket
            </Text>
            <Text className="text-center text-gray-400">{restaurant.name}</Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.goBack()}
            className="rounded-full bg-gray-100 absolute top-4 right-5">
            <XCircleIcon color="#00CCBB" height={50} width={50} />
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
            source={{uri: 'https://links.papareact.com/wru'}}
          />
          <Text className="flex-1">Deliver in 50 - 75 min</Text>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.goBack()}>
            <Text className="text-[#00CCBB]">Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView className="divide-y divide-gray-100">
          {Object.entries(groupedItems).map(([key, groupItem]) => (
            <View
              key={key}
              className="flex-row items-center space-x-2 bg-white py-2 px-5">
              <Text className="text-gray-800">{groupItem.length} x</Text>
              <Image
                className="h-12 w-12 bg-gray-200 rounded-full"
                source={{uri: groupItem[0]?.image_url}}
              />
              <Text className="flex-1 text-gray-800">{groupItem[0]?.name}</Text>
              <Text className="text-gray-600 font-bold">
                IDR {groupItem[0]?.price}
              </Text>

              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => dispatch(removeFromBasket(groupItem[0]))}>
                <XCircleIcon size={20} color="red" opacity={0.5} />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View className="p-5 bg-white space-y-4 rounded-t-xl">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <Text className="text-gray-800 font-bold">IDR {basketTotal}</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Delivery Fee</Text>
            <Text className="text-gray-800 font-bold">IDR 10.000</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Order Total</Text>
            <Text className="text-gray-800 font-bold">
              IDR {basketTotal + 10000}
            </Text>
          </View>

          <TouchableOpacity
            activeOpacity={0.5}
            className="rounded-lg bg-[#00CCBB] px-4 py-3">
            <Text className="text-center text-white text-lg font-bold">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
