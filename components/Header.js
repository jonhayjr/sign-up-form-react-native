import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, TextInput} from 'react-native';

const Header = ({title, textColor, backgroundColor}) => {
    return (
    <View style={{padding: 16}}>
        <Text style={{fontSize: 20, padding: 8, textAlign: 'center', fontWeight: 'bold', marginTop: 15, color: textColor, backgroundColor: backgroundColor, padding: 15}}>{title}</Text>
  </View>
    )
}


export default Header;