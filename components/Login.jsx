import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Input, Button } from 'react-native-elements';

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    // Handle login logic here
  };

  return (
    <View>
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
      <Button title="Log In" onPress={() => navigation.navigate('AppMenu')} type="clear" />
      <Button title="Don't have an account? Sign up" onPress={() => navigation.navigate('AppMenu')} type="clear" />
    </View>
  );
};

export default LoginPage;