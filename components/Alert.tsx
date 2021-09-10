import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

interface Props {
  setOption: (opt: boolean) => void;
}

export const Alert: React.FC<Props> = ({setOption}) => {
  return (
    <View style={styles.alert}>
      <Text style={styles.alertMsg}>Se completo la transaccion?</Text>
      <View style={styles.btns}>
        <Button onPress={() => setOption(false)} title="No..." />
        <Button onPress={() => setOption(true)} title="Si..." />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  alert: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertMsg: {
    marginBottom: 20,
  },
  btns: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});
