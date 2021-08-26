import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, TextInput, TouchableOpacity} from 'react-native';

const Button = ({ onSubmit, buttonText, backgroundColor, textColor}) => {
    const buttonStyle = {
        backgroundColor: backgroundColor,
        borderRadius: 10,
        padding: 15,
      }
      
    return (
    <View>
        <TouchableOpacity style={buttonStyle} onPress={onSubmit}>
            <Text style={{color: textColor, textAlign: 'center'}}>{buttonText}</Text>
        </TouchableOpacity>
  </View>
    )
}


export default Button;