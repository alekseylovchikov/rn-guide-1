import React from 'react';
import { Text, StyleSheet, View, TouchableNativeFeedback, TouchableOpacity, Platform } from 'react-native';

import colors from '../constants/colors';

const MainButton = props => {
  let ButtonComponent = TouchableOpacity;

  if (Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }

  return (
    <View style={styles.buttonContainer}>
      <ButtonComponent activeOpacity={0.8} onPress={props.onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>
            {props.children}
          </Text>
        </View>
      </ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    overflow: 'hidden',
    borderRadius: 6,
  },
  button: {
    backgroundColor: colors.successColor,
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 6,
  },
  buttonText: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
    color: 'white',
  },
});

export default MainButton;