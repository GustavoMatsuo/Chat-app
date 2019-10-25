import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity as TO, FlatList, TextInput, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { withNavigation } from 'react-navigation';

import Styles from '../default';
import temporario from '../temporario';

const Chat = ({ navigation }) => {

    const [reply, setReply] = useState('');

    const nameUser = "Gustavo";

    const handleNavigate = (id) => {
        navigation.navigate('Messages')
    }
    
    const space = (
        <View style={{height: 40}} />
    )

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TO style={styles.icon} onPress={() => handleNavigate()}>
                    <Icon name="arrow-left" size={25} color={Styles.gray} />
                </TO>
                <View style={styles.title}>
                    <Text style={styles.name} >Gustavo Matsuo Fuji</Text>
                </View>
            </View>
            <FlatList
                inverted
                style={styles.chat}
                data={temporario}
                keyExtractor={contact => `${contact.id}`}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={space}
                ListFooterComponent={space}
                renderItem={({ item }) => (
                    <View style={[nameUser == item.name? styles.userBaloon : styles.contactBaloon, styles.baloon]} >                
                        <Text style={nameUser == item.name? styles.userReply : styles.contactReply}>{item.message}</Text>               
                    </View>
                )}
            />
            <View style={styles.writeArea}>
                <TextInput
                    placeholder='    Write your message...'
                    style={styles.input}
                    value={reply}
                    onChangeText={setReply}
                />
                <TO style={styles.send}>
                    <Icon name='send' size={26} color={Styles.white} />
                </TO>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    header:{
        flexDirection: "row",
        alignItems: "center",
        height: Dimensions.get('window').height / 12,
        backgroundColor: "#fff",
    },
    icon:{
        paddingHorizontal: 10
    },
    title:{
        width: "80%",
        alignItems: "center"
    },
    name:{
        fontSize: 20, 
        color: Styles.gray, 
        fontWeight: "bold"
    },
    chat:{
        paddingHorizontal: 15,
        paddingTop: 10,
        backgroundColor: "#f0f0f0"
    },
    baloon:{
        padding: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginBottom: 24,
        maxWidth: "80%",
    },
    contactBaloon:{       
        backgroundColor: "#4444ff",
        borderBottomRightRadius: 10, 
        alignSelf: "flex-start"
    },
    contactReply:{
        color: "#fff",
        fontSize: 16
    },
    userBaloon:{
        backgroundColor: "#d6d6d6",
        borderBottomLeftRadius: 10,
        alignSelf: "flex-end"
        
    },
    userReply:{
        color: "#333",
        fontSize: 16
    },
    writeArea:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 7,
        backgroundColor: "transparent",
        position: "absolute",
        bottom: 10,
    },
    input:{
        width: "90%",
        height: 47,
        paddingLeft: 20,
        borderRadius: 50,
        backgroundColor: Styles.white,
        borderWidth: 0.1,
        elevation: 10,
    },
    send:{
        width: 45,
        height: 45,
        paddingLeft: 4,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        backgroundColor: "#0000ff",
        elevation: 10,
    }
})

export default withNavigation(Chat);