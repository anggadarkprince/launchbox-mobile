import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";

export const DishCard = ({dish}) => {
  const navigation = useNavigation();
  const [isPressed, setIsPressed] = useState(false);

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white border-b p-4 border-gray-200 ${
          isPressed && 'border-b-0'
        }`}
        activeOpacity={0.5}>
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="font-bold text-lg mb-1 text-gray-800">
              {dish.name}
            </Text>
            <Text className="text-gray-400">{dish.description}</Text>
            <Text className="text-gray-600 mt-2 text-lg">IDR {dish.price}</Text>
          </View>
          <View>
            <Image
              style={{
                borderWidth: 1,
                borderColor: '#F3F3F4',
              }}
              source={{uri: dish.image_url}}
              className="h-20 w-20 bg-gray-300 p-4 rounded"
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className="bg-white px-4 border-b border-gray-200">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity>
              <MinusCircleIcon color="#00CCBB" size={40} />
            </TouchableOpacity>
            <Text className="px-2 font-bold text-lg">0</Text>
            <TouchableOpacity>
              <PlusCircleIcon color="#00CCBB" size={40} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};
