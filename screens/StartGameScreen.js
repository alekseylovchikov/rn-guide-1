import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, ScrollView, Dimensions, Alert, View, StyleSheet, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';

import colors from '../constants/colors';
import Card from '../components/Card';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';

const StartGameScreen = (props) => {
  const [number, setNumber] = useState('');
  const [isConfirm, setConfirm] = useState(false);
  const [selectedNumber, changeSelectedNumber] = useState();
  const [buttonWidth, setButtonWidth] = useState(Dimensions.get('window').width / 4);

  useEffect(() => {
    const updateLayout = () => {
      setButtonWidth(Dimensions.get('window').width / 4);
    };
  
    Dimensions.addEventListener('change', updateLayout);

    return () => {
      Dimensions.removeEventListener('change', updateLayout);
    };
  });

  const numberInputHandler = (value) => {
    setNumber(value.replace(/[^0-9]/g, ''));
  };

  const resetNumber = () => {
    setNumber('');
    setConfirm(false);
  };

  const confirmInput = () => {
    const chosenNumber = parseInt(number);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid number', 'Number has to be a number between 1 and 99.', [
        {
          text: 'OK',
          style: 'destructive',
          onPress: resetNumber
        }
      ]);
      return;
    }
    setConfirm(true);
    changeSelectedNumber(chosenNumber);
    setNumber('');
    Keyboard.dismiss();
  };

  let confirmedOutput;

  if (isConfirm) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <BodyText>You Selected</BodyText>
        <NumberContainer>{selectedNumber}</NumberContainer>
        {/* <Button title="START GAME" onPress={} /> */}
        <MainButton onPress={() => props.onStartGame(selectedNumber)}>START GAME</MainButton>
      </Card>
    );
  }

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <View style={styles.screen}>
            <TitleText style={styles.title}>Start a New Game!</TitleText>
            <Card style={styles.inputContainer}>
              <BodyText>Select a Number</BodyText>
              <Input
                value={number}
                onChangeText={numberInputHandler}
                maxLength={2}
                autoCapitalize='none'
                blurOnSubmit
                style={styles.input}
                autoCorrect={false}
                keyboardType='number-pad'
              />
              <View style={styles.buttonContainer}>
                <View style={{ width: buttonWidth }}>
                  <Button title='Reset' onPress={resetNumber} color={colors.dangerColor} />
                </View>
                <View style={{ width: buttonWidth }}>
                  <Button title='Confirm' onPress={confirmInput} color={colors.successColor} />
                </View>
              </View>
            </Card>
            {confirmedOutput}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 50,
    textAlign: 'center'
  },
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  inputContainer: {
    width: '80%',
    maxWidth: '95%',
    minWidth: 300,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: 'open-sans-bold'
  },
  // button: {
    // width: 100
    // width: Dimensions.get('window').width / 4
  // },
  summaryContainer: {
    marginTop: 20,
    padding: 10,
    alignItems: 'center'
  },
  confirmTitle: {
    textAlign: 'center'
  }
});

export default StartGameScreen;
