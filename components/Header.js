import React from 'react';
import { View, Platform, StyleSheet } from 'react-native';

import colors from '../constants/colors';
import TitleText from './TitleText';

const Header = props => {
  return (
    <View style={{ ...styles.headerBase, ...Platform.select({ ios: styles.headerIOS, android: styles.headerAndroid }) }}>
      <TitleText style={styles.title}>{props.title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: Platform.OS === 'ios' ? colors.primaryColor : 'white',
  },
  headerBase: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerIOS: {
    backgroundColor: 'white',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  headerAndroid: {
    backgroundColor: colors.primaryColor,
    borderBottomColor: 'transparent',
    borderBottomWidth: 0,
  },
});

export default Header;
