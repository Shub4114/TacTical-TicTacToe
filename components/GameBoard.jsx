import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import GameResult from './GameResult';
import { useNavigation } from '@react-navigation/native';
import { nativeViewGestureHandlerProps } from 'react-native-gesture-handler/lib/typescript/handlers/NativeViewGestureHandler';
import { StyleSheet } from 'react-native';

const GameBoard = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState("NO WINNER YET");
  const navigation = useNavigation();

  const resetBoard = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setWinner("NO WINNER YET");
  };

  const handleCellPress = (index) =>  {

    const newBoard = [...board];
    if (newBoard[index] === null) {
      newBoard[index] = currentPlayer;
      setBoard(newBoard);
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  
      const gameWinner = checkWinner(newBoard);
      if (gameWinner) {
        setWinner(gameWinner);
        navigation.navigate('GameResult', { winner: gameWinner , resetBoard}); // Pass the winner to GameResult
        return; // Return early after navigation
      }

      const tie = !newBoard.includes(null);
      if (tie) {
        setWinner('Tie');
        navigation.navigate('GameResult', { winner: tie , resetBoard}); // Pass 'Tie' as winner to GameResult
        return; // Return early after navigation
      }
    }

  };

    const checkWinner = (board) => {
        // Check rows
        for (let i = 0; i <= 6; i += 3) {
          if (board[i] !== null && board[i] === board[i + 1] && board[i] === board[i + 2]) {
            return board[i];
          }
        }
      
        // Check columns
        for (let i = 0; i <= 2; i++) {
          if (board[i] !== null && board[i] === board[i + 3] && board[i] === board[i + 6]) {
            return board[i];
          }
        }
      
        // Check diagonals
        if (board[0] !== null && board[0] === board[4] && board[0] === board[8]) {
          return board[0];
        }
      
        if (board[2] !== null && board[2] === board[4] && board[2] === board[6]) {
          return board[2];
        }
      
        // Check if there's a tie
        if (!board.includes(null)) {
          return 'Tie';
        }
      
        // No winner yet
        return null;
      };

  return (
    <View style={styles.container}>
  <View style={styles.row}>
    <TouchableOpacity style={[styles.cell, { backgroundColor: 'darkgray' }]} onPress={() => handleCellPress(0)}>
      <Text style={styles.text}>{board[0]}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.cell, { backgroundColor: 'darkgray' }]} onPress={() => handleCellPress(1)}>
      <Text style={styles.text}>{board[1]}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.cell, { backgroundColor: 'darkgray' }]} onPress={() => handleCellPress(2)}>
      <Text style={styles.text}>{board[2]}</Text>
    </TouchableOpacity>
  </View>
  <View style={styles.row}>
    <TouchableOpacity style={[styles.cell, { backgroundColor: 'darkgray' }]} onPress={() => handleCellPress(3)}>
      <Text style={styles.text}>{board[3]}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.cell, { backgroundColor: 'darkgray' }]} onPress={() => handleCellPress(4)}>
      <Text style={styles.text}>{board[4]}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.cell, { backgroundColor: 'darkgray' }]} onPress={() => handleCellPress(5)}>
      <Text style={styles.text}>{board[5]}</Text>
    </TouchableOpacity>
  </View>
  <View style={styles.row}>
    <TouchableOpacity style={[styles.cell, { backgroundColor: 'darkgray' }]} onPress={() => handleCellPress(6)}>
      <Text style={styles.text}>{board[6]}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.cell, { backgroundColor: 'darkgray' }]} onPress={() => handleCellPress(7)}>
      <Text style={styles.text}>{board[7]}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.cell, { backgroundColor: 'darkgray' }]} onPress={() => handleCellPress(8)}>
      <Text style={styles.text}>{board[8]}</Text>
    </TouchableOpacity>
  </View>
</View>
  );
  };



  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '50%',
    backgroundColor: '#001848',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  cell: {
    flex: 1,
    aspectRatio: 1,
    borderWidth: 1,
    backgroundColor : '#F9EFEF',
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  winnerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
  },
});

export default GameBoard;