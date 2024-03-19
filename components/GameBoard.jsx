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
       <View style={styles.rectangleGroup}>
            <View style={styles.rectangleView} />
            <Text style={styles.o1}>O</Text>
            <Text style={styles.player1}>PLAYER 1</Text>
        </View>
          <View style={styles.frame6}>
            <View style={styles.backToMenuWrapper}>
              <Text style={styles.backToMenu}>BACK TO MENU</Text>
            </View>
          </View>
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
    backgroundColor: '#001848',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  rectangleView: {
    position: "absolute",
    marginTop : 10,
    marginLeft: 10,
    borderRadius: 15,
    backgroundColor: "#0086f4",
    width: 100,
    height: 100,
  },
  o1: {
    
    fontSize: 70,
    lineHeight: 84,
    fontStyle: "italic",
    fontWeight: "800",
    fontFamily: "Inter-ExtraBold",
    color: "#e94141",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 70,
    marginLeft: 15,
    marginTop: 12,
  },
  player1: {
    
    fontSize: 20,
    lineHeight: 24,
    fontStyle: "italic",
    fontWeight: "800",
    fontFamily: "Inter-ExtraBold",
    color: "#000",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    width: 125,
    height: 33,
  },
  rectangleGroup: {
    borderRadius: 15,
    padding: 5,
    backgroundColor: "#d9d9d9",
    width: 120,
    height: 150,
    alignSelf: "flex-start",
    marginLeft: 20,
  },

  backToMenu: {
    fontSize: 15,
    lineHeight: 8,
    fontWeight: "700",
    fontFamily: "Jura-Bold",
    color: "#003190",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 137,
    height: 27,
  },
  backToMenuWrapper: {
    marginTop: 10,
    borderRadius: 50,
    backgroundColor: "#f7b731",
    width: 195,
    height: 41,
  },

  frame6: {
    position: "absolute",
    top: 18,
    left: 18,
    width: 389,
    height: 41,
    overflow: "hidden",
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  cell: {
    flex: 1,
    margin: 6,
    aspectRatio: 1.1,
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