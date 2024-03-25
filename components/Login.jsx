import React from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet } from 'react-native';

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = async () => {
    try {
      // Retrieve user data from AsyncStorage
      const storedEmail = await AsyncStorage.getItem('email');
      const storedPassword = await AsyncStorage.getItem('password');

      // Validate user input
      if (email !== storedEmail || password !== storedPassword) {
        alert('Invalid email or password.');
        return;
      }

      // Navigate to the next screen upon successful login (you can replace 'AppMenu' with your desired screen)
      navigation.navigate('AppMenu');
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <View style={styles.container}> 
      <Text h4>Login Page</Text>
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
      <Button title="Log In" onPress={handleLogin} />
      <Button title="Don't have an account? Sign up" onPress={() => navigation.navigate('SignUp')} type="clear" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#001848',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  }});
export default LoginPage;
