import React, {  } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import 'react-native-gesture-handler';

import Button from '../../components/Button';

export default function Home({ navigation }) {

  const cadastrar = () => {
    navigation.navigate("Cadastro")
  }

  const listar = () => {
    navigation.navigate("Lista")
  }

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/img/chesscrud.png')}
        style={styles.logo} resizeMode="contain" />
      <Button
        onPress={() => cadastrar()}
        title={'Novo jogador'} />
      <Button
        style={styles.button}
        onPress={() => listar()}
        title={'Ver todos'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A3ACB5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#2C3E50',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: "40%",
    marginBottom: 30,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 30,
  },
  logo: {
    marginBottom: 60,
    width: 250,
    height: 250
  },

});