import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from'react-navigation-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Login from './pages/Login';
import Home from './pages/Home';
import Messages from './pages/Messages';
import Contacts from './pages/Contact';
import Settings from './pages/Settings';
import Chat from './pages/Chat';

const hometRouter = createSwitchNavigator({
    Login:{
        screen: Login,
        navigationOptions: {
            title: 'Login',
        }
    },
    Home:{
        screen: Home,
        navigationOptions: {
            title: 'Home',
        }
    },
});

hometRouter.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true
    if (navigation.state.index <= 0) {
        tabBarVisible = false
    }
    return {
        tabBarVisible,
    }
};

const chatRouter = createSwitchNavigator({
    Messages:{
        screen: Messages,
        navigationOptions: {
            title: 'Messages',
            tabBarVisible: true
        }
    },
    Chat:{
        screen: Chat,
        navigationOptions: {
            title: 'Chat',
            tabBarVisible: false
        }
    },
});

chatRouter.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true
    if (navigation.state.index > 0) {
        tabBarVisible = false
    }
    return {
        tabBarVisible,
    }
};


const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: hometRouter,
        navigationOptions:{
            title: 'Home',
            tabBarIcon: ({ tintColor }) => <Icon name="home-outline" size={25} color={tintColor} />
        }
    },
    Messages: {
        screen: chatRouter,
        navigationOptions:{
            title: 'Messages',
            tabBarIcon: ({ tintColor }) => <Icon name="message-outline" size={25} color={tintColor} />
        }
    },
    Contacts: {
        screen: Contacts,
        navigationOptions:{
            title: 'Contacts',
            tabBarIcon: ({ tintColor }) => <Icon name="account-multiple-outline" size={25} color={tintColor} />
        }
    },
    Settings: {
        screen: Settings,
        navigationOptions:{
            title: 'Settings',
            tabBarIcon: ({ tintColor }) => <Icon name="settings-outline" size={25} color={tintColor} />
        }
    },
},{
    tabBarOptions: {
        showLabel: false,
        style: {
            backgroundColor: "#fff"
        }
    },
    initialRouteName: 'Home'
});
  
export default createAppContainer(TabNavigator);





















/*
import Icon from 'react-native-vector-icons/Feather'
import { commonStyle } from './common'

import Contacts from './screens/Contacts'
import Messages from './screens/Messages'
import Chat from './screens/Chat'
import Home from './screens/Profile'
import SignIn from './screens/SignIn'
import Settings from './screens/Settings'

// STACK :

//CHAT OR MESSAGES
const MenuStackConfigChat = {
    initialRouteName: 'Messages',
}

const chatRouter = createStackNavigator({
    Chat: {
        screen: Chat,
        navigationOptions: {
            title: 'Chat',
            header: null,
        }
    },
    Messages: {
        screen: Messages,
        navigationOptions: {
            title: 'Messages',
            header: null
        }
    }
}, MenuStackConfigChat)

chatRouter.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true
    if (navigation.state.index > 0) {
        tabBarVisible = false
    }
    return {
        tabBarVisible,
    }
}

//SIGN IN OR PROFILE
const MenuStackConfigLogin = {
    initialRouteName: 'SignIn',
}

const loginRouter = createStackNavigator({
    SignIn: {
        screen: SignIn,
        navigationOptions: {
            title: 'SignIn',
            header: null,
        }
    },
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Home',
            header: null
        }
    }
}, MenuStackConfigLogin)

loginRouter.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true
    if (navigation.state.index == 0) {
        tabBarVisible = false
    }
    return {
        tabBarVisible,
    }
}

// TAB 
const MyRoutes = {
    Home: {
        name: 'Home',
        screen: loginRouter,
        navigationOptions: {
            title: 'Home',
            tabBarIcon: ({ tintColor }) => <Icon name='home' size={25} color={tintColor} />
        }
    },
    Messages: {
        name: 'Messages',
        screen: chatRouter,
        navigationOptions: {
            title: 'Messages',
            tabBarIcon: ({ tintColor }) => <Icon name='message-circle' size={25} color={tintColor} />
        }
    },
    Contacts: {
        name: 'Contacts',
        screen: Contacts,
        navigationOptions: {
            title: 'Contact',
            tabBarIcon: ({ tintColor }) => <Icon name='users' size={25} color={tintColor} />
        }
    },
    Settings: {
        name: 'Settings',
        screen: Settings,
        navigationOptions: {
            title: 'Config',
            tabBarIcon: ({ tintColor }) => <Icon name='more-horizontal' size={25} color={tintColor} />
        }
    }
}

const MenuBarConfig = {
    initialRouteName: 'Home',
    tabBarOptions: {
        showLabel: false,
        style: {
            backgroundColor: commonStyle.white,
        }
    }
}

const MenuNavigator = createBottomTabNavigator(MyRoutes, MenuBarConfig)

const AppContainer = createAppContainer(MenuNavigator)

export default AppContainer
*/ 