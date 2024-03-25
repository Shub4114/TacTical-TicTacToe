import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignupPage from './SignUp';
import LoginPage from './Login';
import AppMenu from './AppMenu';
import GameBoard from './GameBoard';
import GameResult from './GameResult';

const Stack = createStackNavigator();

export default function Navigator(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage">
        <Stack.Screen name="LoginPage" component={LoginPage} options={{ title: 'Login'}} />
        <Stack.Screen name="SignupPage" component={SignupPage} options={{ title: 'SignUp' }} />
        <Stack.Screen name="AppMenu" component={AppMenu} options={{ title: 'AppMenu' }} />
        <Stack.Screen name="GameBoard" component={GameBoard} options={{ title: 'GameBoard' }} />
        <Stack.Screen name="GameResult" component={GameResult} options={{ title: 'GameResult' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
