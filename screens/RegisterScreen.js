import { StatusBar } from 'expo-status-bar';
import React, { useState, useLayoutEffect } from 'react';
import { StyleSheet, KeyboardAvoidingView, View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: 'Voltar ao login',
    });
  }, [navigation]);
  const register = () => {};
  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <StatusBar style='light' />
      <Text h3 style={{ marginBottom: 50 }}>
        Crie uma conta signal
      </Text>
      <View style={styles.inputContainer}>
        <Input placeholder='Nome Completo' autoFocus value={name} onChangeText={(text) => setName(text)} type='text' />
        <Input placeholder='Email' value={email} onChangeText={(email) => setEmail(email)} type='email' />
        <Input placeholder='Senha' value={password} onChangeText={(password) => setPassword(password)} type='text' />
        <Input
          placeholder='URL de imagem (opcional)'
          value={imageUrl}
          onChangeText={(imageUrl) => setImageUrl(imageUrl)}
          type='text'
          onSubmitEditing={register}
        />
      </View>
      <Button containerStyle={styles.button} raised onPress={register} title='Cadastrar'></Button>
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'white',
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
});
