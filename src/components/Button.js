import React from "react";
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Button({ title, onPress, style, titleStyle }) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={style ? style : styles.button}>
            <Text style={titleStyle ? titleStyle : styles.title}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#2C3E50',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: "40%",
        marginBottom: 20,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 30,
    },
    title: {
        fontSize: 18, 
        fontWeight: 'bold',
        color: '#fff'
    },
})