import {Image, ScrollView, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import React from 'react';
import {ArrowRightIcon} from 'react-native-heroicons/outline';
import { RestaurantCard } from "../Cards";

export const FeaturedRow = ({id, title, description}) => (
  <View>
    <View className="mt-4 flex-row items-center justify-between px-4">
      <Text className="font-bold text-lg text-black">{title}</Text>
      <ArrowRightIcon color="#00CCBB" />
    </View>
    <Text className="text-xs px-4 text-gray-600">{description}</Text>
    <ScrollView
      horizontal
      contentContainerStyle={styles.container}
      showsHorizontalScrollIndicator={false}
      className="pt-4">
      <RestaurantCard
        id={1}
        imgUrl={'https://media.suara.com/pictures/653x366/2021/08/02/81387-ilustrasi-makanan-cepat-saji-freepik.jpg'}
        rating={4.5}
        genre="Japanese"
        address="Mainster 23"
        short_description="This is a test descriptino"
        dishes={[]}
        long={0.23}
        lat={3}
      />
      <RestaurantCard
        id={1}
        imgUrl={'https://media.suara.com/pictures/653x366/2021/08/02/81387-ilustrasi-makanan-cepat-saji-freepik.jpg'}
        rating={4.5}
        genre="Japanese"
        address="Mainster 23"
        short_description="This is a test descriptino"
        dishes={[]}
        long={0.23}
        lat={3}
      />
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: {paddingHorizontal: 15},
});