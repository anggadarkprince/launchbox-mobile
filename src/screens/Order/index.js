import React, {useEffect} from 'react';
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import {SafeAreaView} from 'react-native-safe-area-context';
import { StatusBar, View } from "react-native";

export const PreparingOrderScreen = ({navigation}) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigation.replace('Delivery');
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  });

  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1 justify-center items-center">
      <StatusBar barStyle={'dark-content'} backgroundColor={'#00CCBB'} />
      <Animatable.Image
        source={require('../../../assets/images/food-order.png')}
        animation="slideInUp"
        iterationCount={1}
        className="h-72 w-72 opacity-95"
      />
      <Animatable.Text
        animation="slideInUp"
        delay={100}
        iterationCount={1}
        className="text-lg my-10 mx-10 text-white font-bold text-center">
        Waiting for Restaurant to accept your order!
      </Animatable.Text>
      <Animatable.View animation="fadeIn" delay={100} iterationCount={1}>
        <Progress.CircleSnail
          indeterminate
          size={60}
          thickness={4}
          color="white"
        />
      </Animatable.View>
    </SafeAreaView>
  );
};
