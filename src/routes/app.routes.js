import React,{ useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, TouchableOpacity, StyleSheet } from 'react-native';

import { AuthContext } from '../contexts/auth'

import Icon from 'react-native-vector-icons/FontAwesome'

import Home from '../pages/Home';
import Cadastro from '../pages/Cadastro';
import Settings from '../pages/Settings';
import Alarme from '../pages/Alarme';

const AppStack = createStackNavigator();

import Tabs from './dashboard.routes';

const icons = {
    Home: {
        name: 'home'
    },
    Settings: {
        name: 'gears'
    },
    Alarme: {
        name: 'bell'
    }
}


function AppRoutes() {

    const { logoutFake, user } = useContext(AuthContext);

    function hangleLogoutFake() {
      logoutFake();
    }

    return (
        <AppStack.Navigator
        initialRouteName="Home"
        >
            <AppStack.Screen 
            name="Home" 
            component={Tabs} 
            options={{
                headerStyle: {
                    backgroundColor: 'white',
                    borderBottomWidth: 2,
                    borderBottomColor: '#c0392b',
                    height: 60,
                },
              // headerTitle: ,
                headerTintColor: 'black',
                headerTitleAlign: 'center',
                headerShown: false,
                headerRight: () => (
                    <TouchableOpacity
                    onPress={hangleLogoutFake}>
                    <Icon                  
                        name="power-off" 
                        size={30}
                        style={styles.iconLogoff}
                    />
                    </TouchableOpacity>
                ),
                headerLeft: () => (
                    <TouchableOpacity
                    onPress={ () => {} }>
                    <Icon                  
                        name="bell-o" 
                        size={25}
                        style={styles.iconStatus}
                    />
                    </TouchableOpacity>
                ), 
                      
                
            }}/>

            <AppStack.Screen 
            name="Cadastro" 
            component={Cadastro} 
            options={{
                headerStyle: {
                    backgroundColor: 'white',
                    borderBottomWidth: 2,
                    borderBottomColor: '#c0392b',
                },
                headerBackTitleVisible: false,
                headerTintColor: 'black',
                headerTitle: 'Voltar'              
                }}/>
        </AppStack.Navigator>
    );
}

export default AppRoutes;

const styles = StyleSheet.create({

    iconLogoff: {
        color: '#e74c3c',
        marginRight: 15
    },

    iconStatus: {
        alignSelf: 'center',
        color: '#FFF',
        backgroundColor: '#16a085',
        padding: 10,
        borderRadius: 30,
        marginLeft: 15,
    }

});