import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView} from 'react-native';

//Import Components
import Input from './components/Input';
import Header from './components/Header';
import Button from './components/Button';

const App = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');
const [petName, setPetName] = useState('');
const [petDOB, setPetDOB] = useState('');
const [petBreed, setPetBreed] = useState('');
const [petFavoriteToy, setPetFavoriteToy] = useState('');

const onSubmit = (e) => {
  e.preventDefault();
  //If passwords don't match, trigger alert
   if (confirmPassword !== password && password !== '' && confirmPassword !== '') {
    alert('Password must match');
  } 

  if (email !== '' && password !== '' && confirmPassword !== '' && petName !== '' && petDOB !== '' && petBreed !== '' && petFavoriteToy !== '') {
    alert('Form Submitted!');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setPetName('');
    setPetDOB('');
    setPetBreed('');
    setPetFavoriteToy('');
  } else {
    alert('Please check to ensure that all fields are populated!');
  }
}

return (
  <View style={{ flex: 1, justifyContent: 'center',  backgroundColor: '#ecf0f1'}}>
  <ScrollView>
    <Header title='Pet Sign Up Form' textColor='white' backgroundColor='black'/>
    <Input label="Email" 
    placeholder="Email" 
    value={email}
    onChangeText={text => setEmail(text)}/>
    <Input label="Password" 
    placeholder="Password" 
    value={password}
    secureTextEntry={true}
    onChangeText={text => setPassword(text)}/>
    <Input label="Confirm Password" 
    placeholder="Confirm Password" 
    value={confirmPassword}
    secureTextEntry={true}
    onChangeText={text => setConfirmPassword(text)}/>
    <Input label="Pet Name" 
    placeholder="Pet Name" 
    value={petName}
    onChangeText={text => setPetName(text)}/>
    <Input label="Pet Date of Birth" 
    placeholder="Pet Date of Birth" 
    value={petDOB}
    onChangeText={text => setPetDOB(text)}/>
    <Input label="Pet Breed" 
    placeholder="Pet Breed" 
    value={petBreed}
    onChangeText={text => setPetBreed(text)}/>
     <Input label="Pet Favorite Toy" 
    placeholder="Pet Favorite Toy" 
    value={petFavoriteToy}
    onChangeText={text => setPetFavoriteToy(text)}/>
    <Button onSubmit={onSubmit} textColor='white' backgroundColor='black' buttonText='Submit'/>
    </ScrollView>
  </View>

  );
}

export default App;
