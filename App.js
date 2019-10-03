import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [value, onChangeText] = React.useState('E-mail');
  return (

    <View style={styles.color}>
      <View style={styles.container}>
        <View style={styles.quadradoBranco}>
          <Text style={styles.textoPrincipal}>Login</Text>
          <TextInput style={styles.inputHome}/>
          <TextInput style={styles.input}/>
          <Button title="Entrar" color="#ff2b34" style={{borber: 'none', borderRadius: 10}}></Button>
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
    height: '80%',
    marginTop: '30%',
    alignItems: 'center'
  },
  textoPrincipal: {
    fontSize: 50,
    fontWeight: "400",
    color: '#000',
    marginTop: '10%',
    marginBottom: '30%',
  },


  inputHome: {
    height: '20%',
    width: 200,
    color: '#ccc',
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: '#000',
  }, 
  input: {
    height: '20%',
    width: 200,
    color: '#ccc',
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: '#000',
  }, 

  botao: {
    borderRadius: 8,
  },
});
