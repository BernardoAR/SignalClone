import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Button, Input, Image } from 'react-native-elements';
import { auth } from '../firebase';
const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.replace('Inicio');
      }
    });
    return unsubscribe;
  }, []);

  const signIn = () => {
    auth.signInWithEmailAndPassword(email, password).catch((error) => alert(error));
  };
  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <StatusBar style='light' />
      <Image
        source={{ uri: 'https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png' }}
        style={{ width: 200, height: 200 }}
      />
      <View style={styles.inputContainer}>
        <Input placeholder='Email' autoFocus type='email' value={email} onChangeText={(email) => setEmail(email)} />
        <Input
          placeholder='Senha'
          type='password'
          value={password}
          onChangeText={(password) => setPassword(password)}
          secureTextEntry
          onSubmitEditing={signIn}
        />
      </View>
      <Button containerStyle={styles.button} title='Login' onPress={signIn} />
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
