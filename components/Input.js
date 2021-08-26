import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, TextInput} from 'react-native';

const Input = ({label, value, placeholder, onChangeText, secureTextEntry}) => {
    return (
    <View style={{padding: 16}}>
        <Text style={{padding: 8, fontSize: 18}}>{label}</Text>
        <TextInput style={{padding: 8, fontSize: 18}}
        value={value} 
        placeholder={placeholder}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry || false}
        />
  </View>
    )
}


export default Input;