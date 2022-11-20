import {Image, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export const CategoryCard = ({imgUrl, title}) => (
  <TouchableOpacity activeOpacity={0.5} className="relative mr-2">
    <Image source={{uri: imgUrl}} className="h-20 w-20 rounded" />
    <Text className="absolute bottom-1 left-1">{title}</Text>
  </TouchableOpacity>
);
