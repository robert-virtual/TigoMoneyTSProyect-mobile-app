import React from 'react';
import {StyleSheet, View} from 'react-native';

interface Props {}

export const Middle: React.FC<Props> = ({children}) => {
  return <View style={styles.middle}>{children}</View>;
};
const styles = StyleSheet.create({
  middle: {
    display: 'flex',
    width: '100%',
    padding: 10,
    alignItems: 'center',
  },
});
