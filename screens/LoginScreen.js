import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Button, Input, Image } from 'react-native-elements';
const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const logar = () => {};
  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <StatusBar style='light' />
      <Image
        source={{ uri: 'https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png' }}
        style={{ width: 200, height: 200 }}
      />
      <View style={styles.inputContainer}>
        <Input placeholder='Email' autoFocus type='email' value={email} onChangeText={(text) => setEmail(text)} />
        <Input
          placeholder='Senha'
          type='password'
          value={email}
          onChangeText={(password) => setEmail(password)}
          secureTextEntry
        />
      </View>
      <Button containerStyle={styles.button} onPress={logar} title='Login' />
      <Button
        onPress={() => navigation.navigate('Cadastrar')}
        containerStyle={styles.button}
        type='outline'
        title='Cadastrar'
      />
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
});
