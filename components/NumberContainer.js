import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import colors from '../constants/colors';

const NumberContainer = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: colors.primaryColor,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 55,
    height: 55,
  },
  number: {
    color: colors.primaryColor,
    fontSize: 22,
  },
});

export default NumberContainer;