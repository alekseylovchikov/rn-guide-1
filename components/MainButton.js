import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

import colors from '../constants/colors';

const MainButton = props => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>
          {props.children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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