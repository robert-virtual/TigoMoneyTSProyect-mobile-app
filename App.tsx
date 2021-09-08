import React, {useState} from 'react';
import {Button, PermissionsAndroid, StyleSheet, Text, View} from 'react-native';
import {sendPhoneCall} from 'react-native-send-intent';
import {Input} from './components/Input';
interface Props {}

export const App: React.FC<Props> = () => {
  const [phone, setPhone] = useState('');
  const [monto, setMonto] = useState<string>('25');
  const [identidad, setIdentidad] = useState<string>('');
  const [enviado, setEnviado] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [dniError, setDniError] = useState(false);
  const [montoError, setMontoError] = useState(false);
  const call = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CALL_PHONE,
      {
        title: 'Permiso para realizar llamadas telefonicas',
        message:
          'Se solicita permiso para interactuar con la red movil del celular',
        buttonNeutral: 'Preguntar luego',
        buttonNegative: 'No',
        buttonPositive: 'Si',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      setPhoneError(phone.length < 8);
      setDniError(identidad.length < 13);
      setMontoError(monto.length < 2);
      if (phoneError || dniError || montoError) {
        return;
      }
      sendPhoneCall(`*555*2*1*${phone}*${identidad}*${monto}#`, false);
    }
    setEnviado(true);
  };

  if (enviado) {
    return (
      <View style={styles.alert}>
        <Text style={styles.alertMsg}>Se completo la transaccion?</Text>
        <View style={styles.btns}>
          <Button onPress={() => setEnviado(false)} title="No..." />
          <Button onPress={() => setEnviado(false)} title="Si..." />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.title}>Recarga</Text>
        <Text style={styles.title}>Envio con identiad de receptor</Text>
      </View>
      <View style={styles.middle}>
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
          label="Numero de identidad"
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
      </View>
      {/* <Text>{`*555*2*1*${phone}*${identidad}*${monto}#`}</Text> */}

      <View style={styles.btns}>
        <Button onPress={() => call()} title="Realizar" />
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
  title: {fontSize: 25},
  header: {display: 'flex', alignItems: 'center'},
  middle: {
    display: 'flex',
    width: '100%',
    padding: 10,
    alignItems: 'center',
  },
  btns: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
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
});
