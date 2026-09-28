import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  // Функція для встановлення значення з поля введення
  const handleSetCount = () => {
    const num = parseInt(inputValue, 10);
    if (!isNaN(num)) {
      setCount(num);
      setInputValue(''); // Очищення поля після встановлення
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Лічильник</Text>
      <Text style={styles.counterText}>{count}</Text>

      {/* Кнопки для зміни на +1 та -1 */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => setCount(count - 1)}>
          <Text style={styles.buttonText}>-1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)}>
          <Text style={styles.buttonText}>+1</Text>
        </TouchableOpacity>
      </View>

      {/* Поле для введення власного значення */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Введіть число"
          keyboardType="numeric"
          value={inputValue}
          onChangeText={setInputValue}
        />
        <TouchableOpacity style={styles.setButton} onPress={handleSetCount}>
          <Text style={styles.buttonText}>Записати</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  counterText: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginHorizontal: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    width: 150,
    fontSize: 16,
    marginRight: 10,
    textAlign: 'center',
  },
  setButton: {
    backgroundColor: '#34C759',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});