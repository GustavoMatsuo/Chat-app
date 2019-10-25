import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity as TO, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Style from '../default';
import temporario from '../temporario';

const Settings = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Configuração</Text>
            </View>
            <View style={styles.perfilArea}>
                <TO style={styles.imageArea}>
                    <Image source={temporario[0].image} style={styles.image}/>
                </TO>
                <View style={styles.nameArea}>
                    <Text style={styles.name}>{temporario[0].name}</Text>
                    <TO>
                        <Icon name="square-edit-outline" size={28} color="#d6d6d6" />
                    </TO>
                </View>
            </View>
            <View style={{justifyContent:"flex-start", alignItems: "center"}}>
                <TO onPress={() => navigation.navigate('Login')} style={styles.infoArea}>
                    <Text style={styles.sair}>Sair</Text>
                </TO>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    header: {
        backgroundColor: "#fff",
        height: Dimensions.get('window').height / 12,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5
    },
    headerText: {
        color: "#333",
        fontSize: 22,
    },
    perfilArea:{
        height: "50%",
        justifyContent: "center",
        alignItems: "center",
    },
    imageArea:{
        justifyContent: "center",
        alignItems: "center",
        width: 200,
        height: 200,
        borderRadius: 180,
        marginBottom: 20,
    },
    image:{
        width: 200,
        height: 200,
        borderRadius: 180,
        resizeMode: "contain",   
    },
    nameArea:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    name: {
        fontSize: 22,
        color: "#000",
        marginRight: 10
    },
    infoArea: {
        backgroundColor: '#D02322',
        height: 50,
        width: 250,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sair: {
        fontSize: 20,
        color: Style.white
    },
})

export default Settings;