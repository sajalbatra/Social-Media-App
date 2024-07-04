import { Text, TouchableOpacity, View, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';

export const SignupScreen =({navigation})=> {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSignup = () => {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          Alert.alert("Success", "User registered successfully!");
        })
        .catch((error) => {
          Alert.alert("Error", error.message);
        });
    };    
    return (
      <View className="items-center justify-center p-4 mt-10">
        <View className="w-full max-w-xs">
          <Text className="mb-4 text-2xl font-bold">User Signup</Text>
          <Text className="mb-2">Enter the email</Text>
          <TextInput className="p-2 mb-4 border border-gray-300 rounded" placeholder="Enter the Email" value={email} onChangeText={setEmail}/>
          <Text className="mb-2">Enter the Password</Text>
          <TextInput className="p-2 mb-4 border border-gray-300 rounded" placeholder="Enter the Password" secureTextEntry value={password} onChangeText={setPassword} />
          <TouchableOpacity
            className="flex-row items-center justify-center py-3 space-x-2 bg-purple-400 rounded-full"
            onPress={handleSignup}
            >
            <Text className="text-lg text-white">Submit</Text>
            <AntDesign name="rightcircleo" size={24} color="white" />
          </TouchableOpacity>
          <Text className="mt-4 text-xl text-center"    onPress={() => navigation.navigate('Login')}>
            Already have an account?</Text>
        </View>
      </View>
    );
}

export default SignupScreen;
