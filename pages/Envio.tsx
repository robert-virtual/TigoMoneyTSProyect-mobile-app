import React, {useState} from 'react';
import {Box} from '../components/Box';
import {Input} from '../components/Input';
import {Middle} from '../components/Middle';

interface Props {}

export const Envio: React.FC<Props> = () => {
  const [phone, setPhone] = useState('');
  return (
    <Box>
      <Middle>
        <Input
          label="Receptor"
          value={phone}
          keyboardType="numeric"
          onChangeText={setPhone}
        />
        <Input
          label="Emisor"
          value={phone}
          keyboardType="numeric"
          onChangeText={setPhone}
        />
        <Input
          label="Cantidad a enviar"
          value={phone}
          keyboardType="numeric"
          onChangeText={setPhone}
        />
      </Middle>
    </Box>
  );
};
