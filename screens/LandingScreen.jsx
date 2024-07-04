import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LandingScreenimg1 from '../assets/LandingScreen/landingscreenimage1.png';
import LandingScreenimg2 from '../assets/LandingScreen/landingscreenimage2.jpeg';
import LandingScreenimg3 from '../assets/LandingScreen/landingscreenimage3.jpeg';
import Swiper from 'react-native-swiper';

import { AntDesign } from '@expo/vector-icons';

const LandingScreen=({navigation})=> {

        return (
            <View className="flex-col items-center justify-center bg-white">
                <Animatable.View animation="fadeIn" className="mt-10">
                    <Animatable.View animation="pulse" easing="ease-out" iterationCount="infinite">
                        {/* <Image source={LandingScreenimg1} className="bg-gray-700 rounded-full w-96 h-96" /> */}
                        <View className="items-center justify-center w-96 h-96">
                        <Swiper autoplay autoplayTimeout={3}>
                        <Image source={LandingScreenimg1} className="bg-gray-700 rounded-full w-96 h-96" />
                        <Image source={LandingScreenimg2} className="bg-gray-700 rounded-full w-96 h-96" />
                        <Image source={LandingScreenimg3} className="bg-gray-700 rounded-full w-96 h-96" />
                        </Swiper>
                        </View>
                    </Animatable.View>
                </Animatable.View>
                <Animatable.View animation="fadeInUp" delay={500} className="mt-8">
                    <Text className="text-3xl font-semibold text-center text-gray-800 w-96">
                        Let’s connect in one platform
                    </Text>
                </Animatable.View>
                <Animatable.View animation="bounceIn" delay={1000} className="w-2/3 mt-8">
                <TouchableOpacity className="py-1.5 bg-purple-400 rounded-full flex-col  items-center space-x-4">
                    <Text className="text-2xl text-center" onPress={() => navigation.navigate('Signup')}
                    >Get started now!
                    </Text>
                    <AntDesign name="rightcircleo" size={24} color="black"   />
                 </TouchableOpacity>
                </Animatable.View>
            </View>
        );
}

export default LandingScreen;
