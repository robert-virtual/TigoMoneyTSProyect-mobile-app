import React, {useState} from 'react';
import {Button, StyleSheet, Text} from 'react-native';
import {sendPhoneCall} from 'react-native-send-intent';
import {Box} from '../components/Box';
import {Input} from '../components/Input';
import {Middle} from '../components/Middle';
import {phonePemimssion} from './Functions';

interface Props {}

export const Retiro: React.FC<Props> = () => {
  const [tel, setTel] = useState('');
  const [monto, setMonto] = useState('');
  const [telError, setTelError] = useState<boolean>(true);
  const [montoError, setMontoError] = useState<boolean>(true);

  const call = async () => {
    const granted = await phonePemimssion();
    if (granted) {
      // validaciones
      setMontoError(Number(monto) < 25);
      setTelError(tel.length < 8);

      if (montoError || telError) {
        return;
      }

      // llamada
      sendPhoneCall(`*555*5*${tel}*${monto}#`);
    }
  };

  return (
    <Box>
      <Text style={styles.title}>Retiros</Text>
      <Middle>
        <Input
          label="Telefono"
          maxLength={8}
          keyboardType="numeric"
          onChangeText={setTel}
          clearInput={() => setTel('')}
          error={telError}
          value={tel}
        />
        <Input
          label="Monto"
          clearInput={() => setMonto('')}
          maxLength={5}
          error={montoError}
          keyboardType="numeric"
          onChangeText={setMonto}
          value={monto}
        />
      </Middle>
      <Button title="realizar" onPress={() => call()} />
    </Box>
  );
};

const styles = StyleSheet.create({
  title: {fontSize: 25},
});
