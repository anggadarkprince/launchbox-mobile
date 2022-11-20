import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ArrowRightIcon} from 'react-native-heroicons/outline';

export const FeaturedRow = ({id, title, description}) => (
  <View>
    <View className="mt-4 flex-row items-center justify-between px-4">
      <Text className="font-bold text-lg">{title}</Text>
      <ArrowRightIcon color="#00CCBB" />
    </View>
    <Text className="text-xs">{description}</Text>
    <ScrollView
      horizontal
      contentContainerStyle={{paddingHorizontal: 15}}
      showsHorizontalScrollIndicator={false}
      className="pt-4">

    </ScrollView>
  </View>
);