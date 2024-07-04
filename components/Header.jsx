import React, { useState,useEffect } from 'react'
import { View,Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import {auth} from "../firebaseConfig"


const Header = () => {
    const [Name, setDisplayName] = useState('');

    useEffect(() => {
      const fetchUserData = async () => {
        const user = auth.currentUser;
        if (user) {
          await user.reload();
          setDisplayName(user.email);
        }
      };
  
      fetchUserData();
    }, []);

  return (
    <View className="">
        <View className="flex flex-row justify-between mx-2">
          <Text className="text-xl">Chatter Box</Text>
          <AntDesign name="user" size={24} color="black" className="text-xl" onPress={()=>{console.log(Name)}}/>
        </View>
    </View>
  )
}

export default Header