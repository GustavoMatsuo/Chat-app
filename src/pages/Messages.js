import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Dimensions, FlatList, Image, TouchableOpacity as TO } from 'react-native';

import Styles from '../default';
import temporario from '../temporario';

const Messages = ({ navigation }) => {

    const handleNavigate = (id) => {
        navigation.navigate('Chat')
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Mensagens</Text>
            </View>
            <FlatList
                style={styles.list}
                data={temporario}
                keyExtractor={contact => `${contact.id}`}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <TO style={styles.contactItem} onPress={() => handleNavigate()}>
                        <Image source={item.image} style={styles.image}/>
                        <View style={styles.infoBox}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.message}>{item.message}</Text>
                        </View>
                    </TO>
                )}
            />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    contactItem: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        borderBottomWidth: 0.5,
        borderColor: "#d6d6d6",
        backgroundColor: Styles.white,
    },
    image: {
        width: 50,
        height: 50,
        resizeMode: "cover",
        borderRadius: 50,
        marginHorizontal: 10
    },
    name: {
        color: "#333",
        fontSize: 16,
        fontWeight: "bold"
    },
    message: {
        fontSize: 14,
        width: 300
    }
});

export default Messages;