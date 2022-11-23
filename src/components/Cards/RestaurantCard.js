import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {MapPinIcon} from 'react-native-heroicons/outline';
import {StarIcon} from 'react-native-heroicons/solid';
import {useNavigation} from '@react-navigation/native';

export const RestaurantCard = ({restaurant}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Restaurant', {id: restaurant.id})}
      activeOpacity={0.5}
      className="bg-white mr-3 shadow rounded-sm">
      <Image
        source={{uri: restaurant.image_url}}
        className="h-48 w-48 rounded-lg"
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2 text-gray-800">
          {restaurant.name}
        </Text>
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
    </TouchableOpacity>
  );
};
