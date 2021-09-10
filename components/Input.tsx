import React from 'react';
import {
  GestureResponderEvent,
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
  label: string;
  placeholder?: string;
  keyboardType: KeyboardTypeOptions;
  value: any;
  error?: boolean;
  maxLength?: number;
  onChangeText: (text: string) => void;
  clearInput?: (e: GestureResponderEvent) => void;
}
export const Input: React.FC<Props> = ({
  label,
  keyboardType,
  onChangeText,
  value,
  error,
  maxLength,
  clearInput,
  placeholder,
}) => {
  return (
    <View style={styles.box}>
      <Text style={error ? styles.labelError : styles.label}>{label}</Text>
      <View style={styles.inputs}>
        <TextInput
          style={styles.input}
          maxLength={maxLength ? maxLength : 255}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          placeholder={placeholder || label}
        />
        <TouchableOpacity onPress={clearInput}>
          <Icon name="times" size={20} color="#222" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    marginVertical: 10,
    width: '100%',
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 1,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 10,
    fontSize: 20,
    borderBottomWidth: 1,
    flexGrow: 1,
    borderBottomColor: 'rgb(0, 122, 255)',
  },
  labelError: {
    color: 'red',
  },
  label: {
    color: 'black',
  },
  inputs: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
