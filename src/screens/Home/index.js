import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useLayoutEffect, useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
} from 'react-native-heroicons/solid';
import {
  MagnifyingGlassIcon,
  UserCircleIcon,
} from 'react-native-heroicons/outline';
import {Categories} from '../../components/Categories';
import {FeaturedRow} from '../../components/Featured';
import Axios from '../../libraries/Axios';

export const HomeScreen = () => {
  const [featured, setFeatured] = useState(null);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  useEffect(() => {
    Axios.get('featured').then(response => setFeatured(response.data));
  }, []);

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
            <Text className="font-bold text-xl text-gray-800">
              Current Location{' '}
            </Text>
            <ChevronDownIcon size={20} color="#00CCBB" />
          </View>
        </View>
        <UserCircleIcon size={30} color="#00CCBB" />
      </View>
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row space-x-2 flex-1 items-center bg-gray-200 rounded px-3">
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
        contentContainerStyle={styles.container}>
        <Categories />
        {featured?.map(item => (
          <FeaturedRow
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            restaurants={item.restaurants}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 130,
  },
});
