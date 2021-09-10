import {PermissionsAndroid} from 'react-native';
import {Transaccion} from '../Routes/types';

export const phonePemimssion = async () => {
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

  return granted === PermissionsAndroid.RESULTS.GRANTED;
};

export const saveTrans = (trans: Transaccion) => {};
