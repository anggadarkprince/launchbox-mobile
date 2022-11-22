import {FlatList, Text, View, StyleSheet} from 'react-native';
import React from 'react';
import {ArrowRightIcon} from 'react-native-heroicons/outline';
import {RestaurantCard} from '../Cards';

export const FeaturedRow = ({title, description, restaurants}) => {
  return (
    <View className="mb-3">
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg text-gray-900">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs px-4 text-gray-600">{description}</Text>
      <FlatList
        keyExtractor={item => item.id}
        data={restaurants}
        renderItem={({item}) => {
          return <RestaurantCard restaurant={item} />;
        }}
        horizontal
        contentContainerStyle={styles.container}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
});
