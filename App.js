import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./src/pages/Home/index.js";
import Cadastro from "./src/pages/Cadastro.tsx";
import Lista from "./src/pages/Lista.js";

const Stack = createStackNavigator();

function MyStack() {
  return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions = {screenOptions}>
        <Stack.Screen name="Tela Inicial" component={Home} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Lista" component={Lista} />
      </Stack.Navigator>
  );
}

const screenOptions = {
  headerStyle: {
    backgroundColor: '#2C3E50'
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold'
  }
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

