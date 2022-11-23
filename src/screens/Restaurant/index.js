import React, {useState, useLayoutEffect, useEffect} from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Axios from '../../libraries/Axios';
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  StarIcon,
} from 'react-native-heroicons/solid';
import {
  MapPinIcon,
  QuestionMarkCircleIcon,
} from 'react-native-heroicons/outline';
import {DishCard} from '../../components/Cards';
import {BasketIcon} from '../../components/Basket';
import {useDispatch} from 'react-redux';
import {setRestaurant as setActiveRestaurant} from '../../features/restaurant/restaurantSlice';

export const RestaurantScreen = ({route, navigation}) => {
  const [restaurant, setRestaurant] = useState(null);
  const dispatch = useDispatch();
  const {id} = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  useEffect(() => {
    Axios.get(`restaurants/${id}`).then(setRestaurant);
  }, [id]);

  useEffect(() => {
    if (restaurant) {
      dispatch(setActiveRestaurant(restaurant));
    }
  }, [dispatch, restaurant]);

  if (!restaurant) {
    return null;
  }

  return (
    <>
      <BasketIcon />
      <ScrollView>
        <StatusBar
          barStyle={'light-content'}
          backgroundColor={'#00000022'}
          translucent
        />
        <View className="relative">
          <Image
            source={{uri: restaurant.image_url}}
            className="w-full h-56 bg-gray-300 p-4"
          />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={0.7}
            className="absolute top-10 left-5 p-2 bg-gray-100 rounded-full">
            <ArrowLeftIcon size={20} color="#00CCBB" />
          </TouchableOpacity>
        </View>
        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold text-gray-800">
              {restaurant?.name}
            </Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <StarIcon color="green" opacity={0.5} size={22} />
                <Text className="text-xs text-gray-500">
                  <Text className="text-green-500">{restaurant.rating}</Text> •{' '}
                  {restaurant.category}
                </Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <MapPinIcon color="gray" opacity={0.5} size={22} />
                <Text className="text-xs text-gray-500">
                  Nearby • {restaurant.address}
                </Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2 pb-4">
              {restaurant.description}
            </Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
            <QuestionMarkCircleIcon color="gray" opacity={0.7} size={20} />
            <Text className="pl-2 flex-1 text-md food-bold">
              Have a food allergy?
            </Text>
            <ChevronRightIcon size={20} color="#00CCBB" />
          </TouchableOpacity>
        </View>

        <View className="pb-32">
          <Text className="px-4 pt-6 mb-3 font-bold text-xl text-gray-800">
            Restaurant's Menu
          </Text>
          {restaurant.dish.map(item => (
            <DishCard key={item.id} dish={item} />
          ))}
        </View>
      </ScrollView>
    </>
  );
};
