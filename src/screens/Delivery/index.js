import React from 'react';
import {View, Text, TouchableOpacity, Image, StatusBar} from 'react-native';
import {useSelector} from 'react-redux';
import {SafeAreaView} from 'react-native-safe-area-context';
import {XMarkIcon} from 'react-native-heroicons/outline';
import * as Progress from 'react-native-progress';
import MapView, {Marker, Callout} from 'react-native-maps';

export const DeliveryScreen = ({navigation}) => {
  const restaurant = useSelector(state => state.restaurant.activeRestaurant);

  return (
    <View className="bg-[#00CCBB] flex-1">
      <StatusBar barStyle={'dark-content'} backgroundColor={'#00CCBB'} />
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center px-5 py-4">
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate('Home')}>
            <XMarkIcon color="white" size={25} />
          </TouchableOpacity>
          <Text className="text-white text-lg">Order Help</Text>
        </View>

        <View className="bg-white mx-5 rounded-md p-6 z-50 shadow-md">
          <View className="flex-row justify-between mb-2">
            <View>
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-2xl font-bold text-gray-800">
                44-45 Minutes
              </Text>
            </View>
            <Image
              source={{uri: 'https://links.papareact.com/fls'}}
              className="h-18 w-20"
            />
          </View>
          <Progress.Bar size={30} indeterminate color="#00CCBB" />

          <Text className="mt-3 text-gray-500">
            Your order at {restaurant.title} is being prepared
          </Text>
        </View>
      </SafeAreaView>

      <MapView
        style={{width: '100%', height: '100%'}}
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        className="flex-1 -mt-10 z-0"
        mapType="standard">
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.lng,
          }}
          identifier="origin"
          pinColor="#00CCBB">
          <Callout>
            <View className="w-64 flex-row items-center">
              <Text style={{height: 80, position: 'relative', bottom: 10}}>
                <Image
                  resizeMode="cover"
                  source={{uri: restaurant.image_url}}
                  className="h-16 w-16 bg-gray-300 mr-2 rounded-lg"
                />
              </Text>
              <View className="ml-2">
                <Text className="font-bold">{restaurant.name}</Text>
                <Text>{restaurant.description}</Text>
              </View>
            </View>
          </Callout>
        </Marker>
      </MapView>

      <View className="bg-white flex-row items-center space-x-5 h-28">
        <Image
          resizeMode="cover"
          source={{uri: 'https://links.papareact.com/wru'}}
          className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"
        />
        <View className="flex-1">
          <Text className="text-lg text-gray-800">Angga Ari Wijaya</Text>
          <Text className="text-gray-400">Your Rider</Text>
        </View>
        <Text className="text-[#00CCBB] text-lg mr-5">Call</Text>
      </View>
    </View>
  );
};
