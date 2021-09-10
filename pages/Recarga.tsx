import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {sendPhoneCall} from 'react-native-send-intent';
import {Alert} from '../components/Alert';
import {Box} from '../components/Box';
import {Input} from '../components/Input';
import {Middle} from '../components/Middle';
import {Transaccion} from '../Routes/types';
import {phonePemimssion, saveTrans} from './Functions';
interface Props {}

export const Recarga: React.FC<Props> = () => {
  // transaccion props
  const [phone, setPhone] = useState('');
  const [monto, setMonto] = useState<string>('25');
  const [identidad, setIdentidad] = useState<string>('');
  // transaccion props

  const [showAlert, setShowAlert] = useState(false);
  const [done, setDone] = useState<boolean>(true);
  // errores
  const [phoneError, setPhoneError] = useState(true);
  const [dniError, setDniError] = useState(true);
  const [montoError, setMontoError] = useState(true);
  //
  const call = async () => {
    const granted = await phonePemimssion();
    if (granted) {
      setPhoneError(phone.length < 8);
      setDniError(identidad.length < 13);
      setMontoError(monto.length < 2);
      if (phoneError || dniError || montoError) {
        return;
      }
      sendPhoneCall(`*555*2*1*${phone}*${identidad}*${monto}#`, false);
    }
    setShowAlert(true);
  };

  if (showAlert) {
    return (
      <Alert
        setOption={opt => {
          setDone(opt);
          setShowAlert(false);
          saveTrans(
            new Transaccion({
              type: 'Recarga',
              receptor: {Tel: phone, DNI: identidad},
            }),
          );
        }}
      />
    );
  }

  return (
    <Box>
      <View style={styles.header}>
        <Text style={styles.title}>Envio con identiad de receptor</Text>
        {!done && (
          <Text style={styles.msg}>La ultima transaccion no se completo</Text>
        )}
      </View>
      <Middle>
        <Input
          onChangeText={setPhone}
          value={phone}
          maxLength={8}
          clearInput={() => setPhone('')}
          error={phoneError}
          keyboardType="numeric"
          label="Numero receptor"
        />
        <Input
          onChangeText={setIdentidad}
          value={identidad}
          clearInput={() => setIdentidad('')}
          error={dniError}
          maxLength={13}
          keyboardType="numeric"
          placeholder="Numero de identidad"
          label="Identidad Receptor (DNI)"
        />
        <Input
          onChangeText={setMonto}
          clearInput={() => setMonto('')}
          value={monto}
          maxLength={5}
          error={montoError}
          keyboardType="numeric"
          label="Monto"
        />
      </Middle>
      {/* <Text>{`*555*2*1*${phone}*${identidad}*${monto}#`}</Text> */}

      <View style={styles.btns}>
        <Button onPress={() => call()} title="Realizar" />
      </View>
    </Box>
  );
};

const styles = StyleSheet.create({
  title: {fontSize: 25},
  header: {display: 'flex', alignItems: 'center'},
  btns: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  msg: {
    fontSize: 20,
    color: 'red',
    textAlign: 'center',
  },
});
