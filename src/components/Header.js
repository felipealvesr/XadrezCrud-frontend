import React from "react";
import {
    View,
    StyleSheet,
    Text,
    StatusBar,
} from 'react-native'

const statusbarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header() {
    return (
        <View style={styles.header}>

        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#2C3E50',
        paddingTop: statusbarHeight,
    }
})