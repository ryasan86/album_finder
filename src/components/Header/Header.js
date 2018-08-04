import React from 'react';
import { View, Text } from 'react-native';

const Header = props => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  headerContainer: {
    position: 'relative',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    height: 60,
    paddingTop: 15,
    elevation: 3
  },
  headerText: {
    fontSize: 20
  }
};

export default Header;
