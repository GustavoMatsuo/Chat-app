import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Styles from '../default';

const Home = () => {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Olá Gustavo</Text>
                <Text style={styles.today}>Hoje é</Text>
                <Text style={styles.date}>8 de Outubro</Text>
            </View>
            <View style={styles.favorite}>
                <Text style={styles.favoriteLabel}>Favoritos</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Styles.blue,
    },
    header: {
        flex: 1,
        paddingLeft: 30,
        paddingTop: 20,
        justifyContent: "center"
    },
    title: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 30,
        paddingBottom: 30,
    },
    today: {
        color: "#fff",
        fontSize: 18
    },
    date: {
        color: "#fff",
        fontSize: 22
    },
    favorite: {
        flex: 2,
        backgroundColor: "#fff",
        borderTopRightRadius: 50,
        paddingTop: 30,
        paddingLeft: 30
    },
    favoriteLabel: {
        color: "#333",
        fontSize: 22,
        fontWeight: "600"
    }
})

export default Home;