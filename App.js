import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function App() {
  return (

    <View style={styles.color}>
      <View style={styles.container}>
        <View style={styles.quadradoBranco}>
          <Text style={styles.textoPrincipal}>Login</Text>
          <TextInput style={styles.inputHome} editable={true} underlineColorAndroid='transparent' placeholder={"E-mail"}/>
          <TextInput secureTextEntry={true} style={styles.inputHome} underlineColorAndroid='transparent' placeholder={"Senha"}/>
          <TouchableOpacity style={styles.botao} onPress={() => Alert.alert('hello')}><Text style={styles.bot}>Entrar</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  color: {
    backgroundColor: '#ff2b34',
    flex: 0,
    width: '100%',
    height: '50%',
  },
  quadradoBranco: {
    backgroundColor: '#fff',
    width: '80%',
    height: '100%',
    marginTop: '30%',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: '#000',
    borderWidth: 1,
  },
  textoPrincipal: {
    fontSize: 50,
    fontWeight: "400",
    color: '#000',
    marginTop: '10%',
    marginBottom: '30%',
  },

  inputHome: {
    height: '15%',
    width: 250,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#eee',
    color: '#000',
    paddingLeft: 6
  }, 
  botao: {
    borderRadius: 5,
    backgroundColor: "#ff2b34",
    width: '40%',
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5
  },

  bot:{
    color: '#fff',
    fontWeight: '500',
  },
});
