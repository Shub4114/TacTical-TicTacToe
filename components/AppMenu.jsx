import React from 'react';
import { View } from 'react-native';
import { List, Item, Accordion } from 'react-native-paper';

export default function AppMenu ({ navigation }) {
  return (
    <View>
      <List.Section title="Options">
        <List.Item title="New Game" onPress={() => navigation.navigate('GameBoard')} />
        <List.Item title="Game History" onPress={() => navigation.navigate('GameHistory')} />
        <List.Item title="Settings" onPress={() => navigation.navigate('Settings')} />
      </List.Section>
    </View>
  );
};

