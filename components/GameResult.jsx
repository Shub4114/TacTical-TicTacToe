import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const GameResult = ({ navigation, route }) => { 

  const { winner, resetBoard } = route.params;

    const onRestart = () => {
      resetBoard();
      navigation.navigate('GameBoard');
    };
    

  return (
    <View>
      <Text style={{ fontSize: 24, textAlign: 'center', marginTop: 50  , color:'black'}}>
        {winner === 'X' || winner ==='O' ? `Player's ${winner} Wins ` : 'It\'s a tie!' }
      </Text>
      <TouchableOpacity style={{ backgroundColor: '#008CBA', padding: 10, borderRadius: 5, marginTop: 30, alignSelf: 'center' }} onPress={onRestart}>
        <Text style={{ color: 'white', fontSize: 18 }}>Play Again</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ backgroundColor: '#008CBA', padding: 10, borderRadius: 5, marginTop: 10, alignSelf: 'center' }} onPress={() => navigation.navigate('AppMenu')}>
        <Text style={{ color: 'white', fontSize: 18 }}>Back to Menu</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GameResult;