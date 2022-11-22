import {Image, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export const CategoryCard = ({category}) => (
  <TouchableOpacity activeOpacity={0.5} className="relative mr-2 bg-slate-100">
    <Image
      source={{uri: category.image_url}}
      className="h-20 w-20 rounded bg-slate-100"
    />
    <Text className="absolute bottom-1 left-1 text-gray-100 font-bold shadow-md">
      {category.category}
    </Text>
  </TouchableOpacity>
);
