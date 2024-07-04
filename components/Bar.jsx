import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';

const Bar = () => {
    return (
        <View className="p-4 bg-white shadow-md ">
            <View className="flex-row items-end justify-between mx-4">
                <TouchableOpacity>
                    <Ionicons name="chatbubble-ellipses-outline" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <AntDesign name="pluscircleo" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <AntDesign name="search1" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <AntDesign name="profile" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <AntDesign name="setting" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Bar;
