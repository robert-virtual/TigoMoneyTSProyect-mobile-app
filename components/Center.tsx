import React from 'react';
import {StyleSheet, View} from 'react-native';

interface Props {}

export const Center: React.FC<Props> = ({children}) => {
  return <View style={styles.box}>{children}</View>;
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
