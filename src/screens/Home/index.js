import {Image, ScrollView, Text, TextInput, View} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
} from 'react-native-heroicons/solid';
import {MagnifyingGlassIcon, UserIcon} from 'react-native-heroicons/outline';
import {Categories} from '../../components/Categories';
import {FeaturedRow} from '../../components/Featured';

export const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <SafeAreaView className="bg-white pt-5">
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{uri: 'https://links.papareact.com/wru'}}
          className={'h-7 w-7 bg-gray-300 p-4 rounded-full'}
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Delivery Now!</Text>
          <View className="flex-row items-center">
            <Text className="font-bold text-xl">Current Location </Text>
            <ChevronDownIcon size={20} color="#00CCBB" />
          </View>
        </View>
        <UserIcon size={30} color="#00CCBB" />
      </View>
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row space-x-2 flex-1 items-center bg-gray-200 px-3">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon size={25} color="#00CCBB" />
      </View>
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{paddingBottom: 100}}>
        <Categories />

        <FeaturedRow
          id={1}
          title="Featured"
          description="Paid placements from our partner"
        />
        <FeaturedRow
          id={2}
          title="Tasty Discount"
          description="Grab the discount right now"
        />
        <FeaturedRow
          id={3}
          title="Offers near you!"
          description="Find the foods around you"
        />
      </ScrollView>
    </SafeAreaView>
  );
};
