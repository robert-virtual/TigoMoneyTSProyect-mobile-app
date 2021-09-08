import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Input} from '../components/Input';

interface Props {}

export const Envio: React.FC<Props> = () => {
  const [phone, setPhone] = useState('');
  return (
    <View style={styles.main}>
      <View style={styles.middle}>
        <Input
          label="Receptor"
          value={phone}
          keyboardType="numeric"
          onChangeText={setPhone}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  middle: {
    display: 'flex',
    width: '100%',
    padding: 10,
    alignItems: 'center',
  },
});
