import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Input, Button } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignupPage = ({ navigation }) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

 const handleSignup = async () => {
    try {
      // Validate input fields (you can add more validation logic here)
      if (!name || !email || !password) {
        alert('Please fill in all fields.');
        return;
      }

      // Store user data in AsyncStorage
      await AsyncStorage.setItem('name', name);
      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('password', password);

      // Navigate to the next screen (you can replace 'AppMenu' with your desired screen)
      navigation.navigate('AppMenu');
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <View>
      <Text h4>Signup Page</Text>
      <Input
        placeholder="Name"
        value={name}
        onChangeText={setName}
        leftIcon={{ type: 'font-awesome', name: 'user' }}
      />
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        leftIcon={{ type: 'font-awesome', name: 'envelope' }}
      />
      <Input
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        leftIcon={{ type: 'font-awesome', name: 'lock' }}
      />
      <Button title="Sign Up" onPress={handleSignup} />
      <Button title="Already have an account? Log in" onPress={() => navigation.navigate('LoginPage')} type="clear" />
    </View>
  );
};

export default SignupPage;