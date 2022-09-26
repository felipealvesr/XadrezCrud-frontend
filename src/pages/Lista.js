import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { api } from "../services/api";

export default function Lista() {

    const [dados, setDados] = useState([])

    async function loadData() {
        await api.get('/jogador')
            .then(res => {
                console.log(res.data)
                setDados(res.data)
            })
            .catch(err => console.log('erro: ', err))
    }

    async function updateItem(item) {
        await api.patch(`/jogador/${item._id}`, {
            nome: item.nome,
            nascimento: item.nascimento,
            email: item.email,
            cep: item.cep,
            logradouro: item.logradouro,
            bairro: item.bairro,
            cidade: item.cidade,
            estado: item.estado,
            data: new Date()
        })
            .then(res => {
                console.log(res.data)
                loadData();
            })
            .catch(err => console.log('erro: ', err))
    }

    useEffect(() => {
        loadData();
    }, [])

    return (
        <ScrollView>
            {dados.map((item, index) => (
                <View style={styles.container} key={index}>
                    <TouchableOpacity onPress={() => updateItem(item)} style={styles.button}>
                        <Text style={styles.textDate}>
                            {item.data}
                        </Text>
                        <Text style={styles.textName}>
                            {item.nome}
                        </Text>
                        <Text style={styles.text}>
                            {item.email}
                        </Text>
                        <Text style={styles.subText}>
                            {item.nascimento}
                        </Text>
                        <Text style={styles.subText}>
                            {item.cep}
                        </Text>
                        <Text style={styles.subText}>
                            {item.logradouro}
                        </Text>
                        <Text style={styles.subText}>
                            {item.bairro}
                        </Text>
                        <Text style={styles.subText}>
                            {item.cidade}
                        </Text>
                        <Text style={styles.subText}>
                            {item.estado}
                        </Text>
                    </TouchableOpacity>
                </View>
            ))}
        </ScrollView>
    );
};
const styles = StyleSheet.create({

    container: {
        backgroundColor: '#fff'
    },

    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'
    },

    button: {
        backgroundColor: '#2C3E50',
        padding: 20,
        marginTop: 10,
        marginHorizontal: 20,
        borderRadius: 10,
    },
    textName: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold',
    },
    subText: {
        fontSize: 16,
        color: '#fff',
    },
    textDate:{
    fontSize: 12,
    color: '#fff',
    }
});



