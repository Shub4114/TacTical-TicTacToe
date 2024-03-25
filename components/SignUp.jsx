import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Input, Button } from 'react-native-elements';

const SignupPage = ({ navigation }) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSignup = () => {
    // Handle signup logic here
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