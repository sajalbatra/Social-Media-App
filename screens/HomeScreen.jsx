import React from 'react'
import { View,Text } from 'react-native'
import Header from '../components/Header';
import Bar from '../components/Bar';

const HomeScreen = ({navigation}) => {
  return (
    <View className="flex-col mt-10">
        <Header/>
        <Bar/>
    </View>
  )
}

export default HomeScreen