import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity as TO, Image, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {withNavigation} from 'react-navigation';

import Styles from '../default';
import logo from '../assets/NEXUS.png';
import ilustration from '../assets/clip-sign-in.png';

const Login = ({navigation}) => {

    const [register, setRegister] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [confirm, setConfirm] = useState('');

    return(
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>   
            <View style={styles.header}>
                <Image source={ilustration} style={styles.ilus} />
                <Image source={logo} style={styles.logo}/>
            </View>
            <View style={styles.inputArea}>
                {register? 
                    <View style={styles.input}>
                        <View style={styles.icon}>
                            <Icon name='account' size={25} color={Styles.blue} />
                        </View>
                        <TextInput
                            style={styles.textInput}
                            maxLength={40}
                            placeholder='Nome de usuario...'
                            value={username}
                            onChangeText={username => setUsername(username)}
                        />
                    </View>
                    :
                    null           
                }
                <View style={styles.input}>
                    <View style={styles.icon}>
                        <Icon name='at' size={25} color={Styles.blue} />
                    </View>
                    <TextInput
                        style={styles.textInput}
                        maxLength={40}
                        placeholder='Email...'
                        value={email}
                        onChangeText={email => setEmail(email)}
                    />
                </View>
                <View style={styles.input}>
                    <View style={styles.icon}>
                        <Icon name='lock' size={25} color={Styles.blue} />
                    </View>
                    <TextInput
                        style={styles.textInput}
                        maxLength={12}
                        placeholder='Senha...'
                        value={password}
                        onChangeText={password => setPassword(password)}
                    />
                </View>
                {register? 
                    <View style={styles.input}>
                        <View style={styles.icon}>
                            <Icon name='lock' size={25} color={Styles.blue} />
                        </View>
                        <TextInput
                            style={styles.textInput}
                            maxLength={40}
                            placeholder='Confirmar senha...'
                            value={confirm}
                            onChangeText={confirm => setConfirm(confirm)}
                        />
                    </View>
                    :
                    null           
                }
                <TO style={styles.buttomSign} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.textButtom1}>{register? 'Cadastrar' : 'Entrar'}</Text>
                </TO>
                <TO style={styles.buttomReg} onPress={() => setRegister(!register)}>
                    <Text style={styles.textButtom2}>{register? 'Entrar' : 'Não tem conta? Registre'}</Text>
                </TO>
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Styles.white,
    },
    header:{
        flexDirection: "row",
        marginBottom: 20
    },
    ilus:{
        //borderWidth: 1,
        //borderColor: "#ff0000",
        resizeMode: "contain" ,
        width: 200,
        height: 260,
        zIndex: 1
    },
    logo:{
        //borderWidth: 1,
        //borderColor: "#ff0000",
        resizeMode: "contain",
        width: 300,
        zIndex: 2,
        position: "relative",
        top: 155,
        right: 120,
    },
    inputArea:{
        marginHorizontal: 20,
        alignItems: "center"
    },
    input: {
        elevation: 10,
        backgroundColor: "#fff",
        width: "100%",
        borderRadius: 10,
        paddingHorizontal: 3,
        marginVertical: 7,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        margin: 5
    },
    TextInput:{
        width: "100%"
    },
    buttomSign: {
        backgroundColor: Styles.blue,
        alignItems: 'center',
        justifyContent: "center",
        borderRadius: 10,
        paddingVertical: 11,
        marginTop: 20,
        width: "100%"
    },
    textButtom1: {
        fontSize: 18,
        color: Styles.white,
        fontWeight: "bold"
    },
    buttomReg: {
        padding: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    textButtom2: {
        fontSize: 16,
        color: Styles.gray
    },
});

export default withNavigation(Login);