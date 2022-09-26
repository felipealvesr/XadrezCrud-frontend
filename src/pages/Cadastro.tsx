import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { useCallback } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from '@rneui/themed';
import { api } from '../services/api';
import { ScrollView } from 'react-native-gesture-handler';

interface IAdress {
  cep?: string,
  logradouro?: string,
  bairro?: string,
  localidade?: string,
  uf?: string,
}

export default function Cadastro() {

  const [nome, setNome] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [email, setEmail] = useState("");
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [cidade, setCidade] = useState("");
  const [bairro, setBairro] = useState("");
  const [estado, setEstado] = useState("");

  const [adress, setAdress] = useState<IAdress>({
    cep: '',
    logradouro: '',
    localidade: '',
    bairro: '',
    uf: ''
  });

  console.log(adress);

  const getAdressFromApi = useCallback(() => {
    fetch(`https://viacep.com.br/ws/${adress.cep}/json/`)
      .then(res => res.json())
      .then((data: IAdress) => setAdress({
        bairro: data.bairro,
        localidade: data.localidade,
        logradouro: data.logradouro,
        uf: data.uf
      })).catch(err => console.log('erro: ', err))
  }, [adress.cep])

  const salvar = async () => {

    await api.post('/jogador', {
      nome,
      nascimento,
      email,
      cep,
      logradouro: adress.logradouro,
      bairro: adress.bairro,
      cidade: adress.localidade,
      estado: adress.uf,
      data: new Date()
    })
      .then(res => console.log('Cadastrado com sucesso'))
      .catch(err => console.log('erro: ', err))
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
        <ScrollView style = {styles.form}>
          <Text style={styles.titlePage}>Novo Jogador:</Text>

          <TextInput
            style={styles.input}
            placeholder="Nome"
            onChangeText={e => setNome(e)}
            value={nome}
          />

          <TextInput
            style={styles.input}
            placeholder="Data de Nascimento"
            onChangeText={e => setNascimento(e)}
            value={nascimento}
          />

          <TextInput
            style={styles.input}
            placeholder="E-mail"
            onChangeText={e => setEmail(e)}
            value={email}
          />

          <TextInput
            style={styles.input}
            placeholder="Digite CEP"
            onEndEditing={() => getAdressFromApi()}
            onChangeText={(text) => (setAdress((old) => ({
              ...old,
              cep: text
            })), setCep(text))}
          />
          <TextInput
            style={styles.input}
            placeholder="Rua"
            value={adress.logradouro}
            onChangeText={(text) => (setAdress((old) => ({
              ...old,
              logradouro: text
            })), setLogradouro(text))}
          />
          <TextInput
            style={styles.input}
            placeholder="Bairro"
            value={adress.bairro}
            onChangeText={(text) => (setAdress((old) => ({
              ...old,
              bairro: text
            })), setBairro(text))}
          />
          <TextInput
            style={styles.input}
            placeholder="Cidade"
            value={adress.localidade}
            onChangeText={(text) => (setAdress((old) => ({
              ...old,
              localidade: text
            })), setCidade(text))}
          />
          <TextInput
            style={styles.input}
            placeholder="UF"
            value={adress.uf}
            onChangeText={(text) => (setAdress((old) => ({
              ...old,
              uf: text
            })), setEstado(text))}
          />
          <Button
            title="Salvar"
            buttonStyle={styles.button}
            onPress={() => salvar()}
          />
        </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24
  },
  titlePage: {
    fontSize: 30,
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'left',
    marginBottom: 10,
    marginTop: 5
  },
  form: {
    width: '100%',
    height: '100%'
  },
  input: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 12,
    fontSize: 18,
    marginBottom: 10,
    backgroundColor: '#CCCCCC',
    fontWeight: 'bold'
  },
  button: {
    marginTop: 7,
    alignItems: 'flex-end',
    backgroundColor: '#2C3E50',
    width: 150,
    borderWidth: 2,
    borderColor: '#2C3E50',
    borderRadius: 30
  }
});